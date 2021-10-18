import React from 'react'
import styles from './Button.module.scss'

export default function Button(props) {
  const classes = [styles.Button];
  if (props.type === "danger") {
    classes.push(styles.Danger);
  } else if (props.type === "success") {
    classes.push(styles.Success);
  }

  return (
    <button className={classes.join(' ')} onClick={props.clicked}>
      {props.children}
    </button>
  )
}
