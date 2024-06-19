import React from "react";
import styles from './Introduction.module.css';

function Introduction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <h1>Let’s Introduce</h1>
        <h1>Ourself</h1>
      </div>
      <div className={styles.divider}>

      </div>
      <div className={styles.righSection}>
        <h2>Criminal Lawyer</h2>
        <p className={styles.pTag}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
