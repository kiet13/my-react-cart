import React from 'react'
import styles from './Header.module.scss'
import CartIcon from './CartIcon/CartIcon'

export default function Header(props) {
  return (
    <div className={styles.Header}>
      <h1 className={styles.HeaderTitle}>Use Reducer</h1>
      <CartIcon numItems={props.numItems}/>
    </div>
  )
}
