import React from 'react'
import styles from './Backdrop.module.scss'

export default function Backdrop(props) {
  const classes = [styles.Backdrop];

  if (props.show) {
    classes.push(styles.Show);
  }

  return (
    <div className={classes.join(' ')} onClick={props.closed}>
          {props.children}
    </div>
  );
}
