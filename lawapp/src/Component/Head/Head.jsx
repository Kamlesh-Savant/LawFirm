import React from 'react';
import Navbar from './Navbar/Navbar';
import styles from './Head.module.css'
import Hero from './Hero/Hero';

function Head() {
  return (
    <div className={styles.wrapper}>
        <Navbar />
        <Hero />
        
    </div>
  )
}

export default Head;