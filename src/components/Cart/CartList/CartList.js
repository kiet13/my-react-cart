import React from 'react'
import styles from './CartList.module.scss'
import CartItem from '../CartItem/CartItem'

export default function CartList(props) {
  
  const total = props.items.reduce((prev, curr) => {
    return prev + curr.price * curr.amount;
  }, 0);

  const itemList = props.items.map(item => 
      <CartItem 
        key={item.id}
        item={item}
        increased={() => props.itemIncreased(item.id)}
        decreased={() => props.itemDecreased(item.id)}
        removed={() => props.itemRemoved(item.id)}
      />
  )

  return (
    <>
      <div className={styles.CartList}>
        {itemList}  
      </div>
      <div className={styles.CartListFooter}>
        <span>Total</span>
        <span>&#36; {total.toFixed(2)}</span>
      </div>  
    </>
  )
}
