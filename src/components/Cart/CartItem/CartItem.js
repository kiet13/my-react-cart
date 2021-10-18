import React from 'react'
import styles from './CartItem.module.scss'
import ControlButton from '../ControlButton/ControlButton'

export default function CartItem(props) {
  return (
    <div className={styles.CartItem}>
      <div className={styles.Item}>
        <img className={styles.ItemImage} src={props.img} alt="item" />
        <div className={styles.ItemInfo}>
          <h3 className={styles.ItemTitle}>{props.title}</h3>
          <p className={styles.ItemPrice}>&#36; {props.price}</p>
          <button className={styles.RemoveButton}>Remove</button>
        </div>
      </div>
      
      <ControlButton value={props.amount} height="100%" />
    </div>
  )
}
