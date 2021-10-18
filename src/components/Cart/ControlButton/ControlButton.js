import React from 'react'
import styles from './ControlButton.module.scss'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

export default function ControlButton(props) {
  return (
    <div className={styles.ControlButton}>
      <button className={styles.Up} onClick={props.up}>
        <FiChevronUp />
      </button>
      <span className={styles.Value}>{props.value}</span>
      <button className={styles.Down} onClick={props.down}>
        <FiChevronDown /> 
      </button>
    </div>
  )
}
