import React from 'react';
import HeroImg from '../../../../assets/Hero.png';
import styles from './RightSection.module.css';

function RightSection() {
  return (
        <img src={HeroImg} alt="hero" className={styles.wrapper}/>
  )
}

export default RightSection