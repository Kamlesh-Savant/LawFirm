import React from 'react';
import styles from './MidSection.module.css'

function MidSection() {
  return (
    <div className={styles.wrapper}>
        <a href="#">Home</a>
        <a href="#">Attorneys</a>
        <a href="#">Practice Areas</a>
        <a href="#">About Us</a>
    </div>
  )
}

export default MidSection