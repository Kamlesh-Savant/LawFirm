import React from 'react';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.wrapper}>
        <LeftSection />
        <RightSection />
    </div>
  )
}

export default Hero