import React from 'react'
import styles from './CartList.module.scss'
import CartItem from '../CartItem/CartItem'

export default function CartList(props) {
  const itemList = props.items.map(item => 
      <CartItem 
        key={item.id}
        img={item.img}
        title={item.title}
        price={item.price}
        amount={item.amount}
      />
  )
  return (
    <div className={styles.CartList}>
      {itemList}      
    </div>
  )
}
