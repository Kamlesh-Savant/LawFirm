import React from 'react'
import Logo from '../Head/Navbar/Logo/Logo'
import MidSection from '../Head/Navbar/MidSection/MidSection'
import styles from './Footer.module.css';
import Social from './Social/Social'
function Footer() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.mainWrapper}>
            <Logo />
            <MidSection />
            <Social />
        </div>
        <div className={styles.secondSection}>
            <p className={styles.secTextContent}>© 2020 Acme. All right reserved.</p>
            <p className={styles.secTextContent}>Privacy Policy</p>
            <p className={styles.secTextContent}>Terms of Service</p>
        </div>

    </div>
  )
}

export default Footer