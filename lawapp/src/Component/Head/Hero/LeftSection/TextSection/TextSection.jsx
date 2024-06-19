import * as React from 'react';
import MailIcon from '../../../../../assets/mail.png';
import styles from './TextSection.module.css';



export default function TextSection() {
  return (
       
    <div className={styles.wrapper}>
        <div className={styles.textBox}>
            <img src={MailIcon} alt="mail" className={styles.img}/>
            <input type="text" placeholder='Enter your eamil address'/>
        </div>
        
        <button className={styles.btn}>Let's Talk</button>

    </div>
  );
}
