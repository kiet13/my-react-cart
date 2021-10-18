import React, {useState, useReducer} from 'react'
import styles from './CartBuilder.module.scss'
import Layout from '../components/Layout/Layout'
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
  const [alert, setAlert] = useState({show: false, msg: "", type: ""});
  const [toRemoveId, setToRemoveId] = useState(null);

  const numItems = itemList.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

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

  const clearAll = () => {
    dispatch({type: 'clear'});
  }

  const toRemoveHandler = (id) => {
    setAlert({show: true, msg: "Do you want to remove this item?", type: "one"});
    setToRemoveId(id);
  }

  const confirmRemoveHandler = (id) => {
    removeItem(id);
    setAlert({show: false, msg: "", type: ""});
  }

  const toClearAllHandler = () => {
    setAlert({show: true, msg: "Do you want to clear all items?", type: "all"});
  }

  const confirmClearAllHandler = () => {
    clearAll();
    setAlert({show: false, msg: "", type: ""});
  }



  return (
    <Layout numItems={numItems}>
      <div className={styles.CartBuilder}>
        <Modal show={alert.show} modalClosed={() => setAlert({show: false, msg: "", type: ""})}>
          <div className={styles.Alert}>
            <p className={styles.AlertQuestion}>{alert.msg}</p>
            <div className={styles.ButtonList}>
              <Button clicked={() => setAlert({show: false, msg: "", type: ""})}>No</Button>
              { alert.type === "one" ? 
                <Button type="danger" clicked={() => confirmRemoveHandler(toRemoveId)}>Yes</Button> :
                <Button type="danger" clicked={confirmClearAllHandler}>Yes</Button>
              }
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
        <Button type="danger" clicked={toClearAllHandler} disabled={itemList.length === 0}>clear cart</Button>
      </div>
    </Layout>
  )
}

export default CartBuilder;
