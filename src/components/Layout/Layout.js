import React from 'react'
import styles from './Layout.module.scss';
import Header from '../Header/Header';

export default function Layout(props) {
  return (
    <>
      <Header numItems={props.numItems}/>
      <div className={styles.MainContent}>
        {props.children}
      </div>
    </>
  )
}
