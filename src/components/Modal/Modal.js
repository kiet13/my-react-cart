import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import styles from './Modal.module.scss'

export default function Modal(props) {
  const classes = [styles.Modal];
  if (props.show) {
    classes.push(styles.Show);
  }
  
  return (
    <Backdrop show={props.show} closed={props.modalClosed}>
      <div className={classes.join(' ')} onClick={(e) => (e.stopPropagation())}>
        {props.children}
      </div>
    </Backdrop>
  )
}
