import React from 'react';
import styles from './LeftSection.module.css';
import TextSection from './TextSection/TextSection';
function LeftSection() {
  return (
    <div className={styles.wrapper}>
        <div >
            <p className={styles.firstText}>You don’t have to</p>
            <p className={styles.secondText}>Fight them Alone.</p>
        </div>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
        <TextSection />
    </div>
  )
}

export default LeftSection