import React from 'react';
import Logo from './Logo/Logo';
import Button from './Button/Button';
import MidSection from './MidSection/MidSection';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.wrapper}>
        <Logo/>
        <MidSection />
        <Button />
    </div>
  )
}

export default Navbar