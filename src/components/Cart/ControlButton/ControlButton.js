import React from 'react'
import styles from './ControlButton.module.scss'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

export default function ControlButton(props) {

  return (
    <div className={styles.ControlButton}>
      <div className={styles.Up}>
        <FiChevronUp />
      </div>
      <span className={styles.Value}>{props.value}</span>
      <div className={styles.Down}>
        <FiChevronDown /> 
      </div>
    </div>
  )
}
