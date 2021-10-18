import React from 'react'
import styles from './CartIcon.module.scss'
import { FaShoppingCart } from 'react-icons/fa'

export default function CartIcon(props) {
  return (
    <div className={styles.CartIcon}>
      <div className={styles.NumItem}>{props.numItems}</div>
      <FaShoppingCart />
    </div>
  )
}
