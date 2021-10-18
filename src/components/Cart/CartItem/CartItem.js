import React from 'react'
import styles from './CartItem.module.scss'
import ControlButton from '../ControlButton/ControlButton'

export default function CartItem(props) {
  return (
    <div className={styles.CartItem}>
      <div className={styles.Item}>
        <img className={styles.ItemImage} src={props.item.img} alt="item" />
        <div className={styles.ItemInfo}>
          <h3 className={styles.ItemTitle}>{props.item.title}</h3>
          <p className={styles.ItemPrice}>&#36; {props.item.price}</p>
          <button className={styles.RemoveButton} onClick={props.removed}>Remove</button>
        </div>
      </div>
      
      <ControlButton
        value={props.item.amount}
        up={props.increased}
        down={props.item.amount > 1 ? props.decreased : props.removed} />
    </div>
  )
}
