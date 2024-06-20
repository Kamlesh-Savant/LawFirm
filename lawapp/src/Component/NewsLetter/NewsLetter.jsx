import React from "react";
import styles from './NewsLetter.module.css';
function NewsLetter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainWrapper}>
        <h1>Subscribe Our Newsletter</h1>
        <div className={styles.formWrapper}>
          <input type="text" placeholder="Name :" style={{borderTopLeftRadius:'8px', borderBottomLeftRadius:'8px'}}/>
          <input type="text" placeholder="Enter your Email"/>
          <button className={styles.btn}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
