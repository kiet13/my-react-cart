import React, {useState, useReducer} from 'react'
import styles from './CartBuilder.module.scss'
import CartList from '../components/Cart/CartList/CartList'
import Modal from '../components/Modal/Modal'
import Button from '../components/Button/Button'

function init(initialState) {
  return [...initialState];
}

function reducer(prevState, action) {
  let array;
  switch (action.type) {
    case 'increase':
      array =  prevState.reduce((prevArr, currItem) => {
        if (currItem.id === action.id) {
          prevArr.push({...currItem, amount: currItem.amount + 1});
        } else {
          prevArr.push({...currItem});
        }
        return prevArr;
      }, []);
      return array;

    case 'decrease':
      array =  prevState.reduce((prevArr, currItem) => {
        if (currItem.id === action.id) {
          prevArr.push({...currItem, amount: currItem.amount - 1});
        } else {
          prevArr.push({...currItem});
        }
        return prevArr;
      }, []);
      return array;

    case 'remove':
      array = [...prevState];
      return array.filter(item => item.id !== action.id);

    case 'total':
      array = [...prevState];
      const total = array.reduce((prev, curr) => {
        return prev + curr.price * curr.amount;
      });
      return total.toFixed(2);

    case 'clear':
      return init([]);

    default:
      throw new Error();
  }
}

function CartBuilder(props) {
  const [itemList, dispatch] = useReducer(reducer, props.initialState, init);
  const [alert, setAlert] = useState(false);
  const [toRemoveId, setToRemoveId] = useState(null);

  // console.log(itemList);

  const increaseItem = (id) => {
    dispatch({type: 'increase', id: id});
  }

  const decreaseItem = (id) => {
    dispatch({type: 'decrease', id: id});
  }

  const removeItem = (id) => {
    if (id !== null) {
      dispatch({type: 'remove', id: id});
    }
  }

  const toRemoveHandler = (id) => {
    setAlert(true);
    setToRemoveId(id);
  }

  const confirmRemoveHandler = (id) => {
    removeItem(id);
    setAlert(false);
  } 


  return (
    <div className={styles.CartBuilder}>
      <Modal show={alert} modalClosed={() => setAlert(false)}>
        <div className={styles.Alert}>
          <p className={styles.AlertQuestion}>Do you want to remove this item?</p>
          <div className={styles.ButtonList}>
            <Button clicked={() => setAlert(false)}>No</Button>
            <Button type="danger" clicked={() => confirmRemoveHandler(toRemoveId)}>Yes</Button>
          </div>
        </div>
      </Modal>

      <h1 className={styles.CartBuilderHeading}>your bag</h1>
      <CartList
        items={itemList}
        itemIncreased={increaseItem}
        itemDecreased={decreaseItem}
        itemRemoved={toRemoveHandler}
      />
      <Button type="danger">clear cart</Button>
    </div>
  )
}

export default CartBuilder;
