import React from 'react'
import styles from './Layout.module.scss';
import Header from '../Header/Header';

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className={styles.MainContent}>
        {props.children}
      </div>
    </>
  )
}
