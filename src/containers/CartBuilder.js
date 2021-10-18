import React, {useReducer} from 'react'
import styles from './CartBuilder.module.scss'
import CartList from '../components/Cart/CartList/CartList'

function init(initialState) {
  return [...initialState];
}

function reducer(prevState, action) {
  let array;
  let index;
  switch (action.type) {
    case 'increase':
      array = [...prevState];
      index = array.findIndex(item => item.id === action.id);
      array[index].ammount += 1;
      return array;

    case 'decrease':
      array = [...prevState];
      index = array.findIndex(item => item.id === action.id);
      array[index].ammount -= 1;
      return array;

    case 'remove':
      array = [...prevState];
      return array.filter(item => item.id !== action.id);

    case 'clear':
      return init([]);
    default:
      break;
  }
}

export default function CartBuilder(props) {
  const [itemList, dispatch] = useReducer(reducer, props.initialState, init);

  const increaseItem = (id) => {
    dispatch({type: 'increase', id: id});
  }

  const decreaseItem = (id) => {
    dispatch({type: 'decrease', id: id});
  }

  const removeItem = (id) => {
    dispatch({type: 'remove', id: id});
  }
  return (
    <div className={styles.CartBuilder}>
      <h1 className={styles.CartBuilderHeading}>your bag</h1>
      <CartList
        items={itemList}
        itemIncreased={increaseItem}
        itemDecrease={decreaseItem}
        itemRemoved={removeItem}
      />
      <button styles={styles.ClearCart}>clear cart</button>
    </div>
  )
}
