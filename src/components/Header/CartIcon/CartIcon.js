import React from 'react'
import styles from './CartIcon.module.scss'
import { FaShoppingCart } from 'react-icons/fa'

export default function CartIcon() {
  return (
    <div className={styles.CartIcon}>
      <div className={styles.NumItem}>0</div>
      <FaShoppingCart />
    </div>
  )
}
