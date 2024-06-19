import React from 'react'
import styles from './Card.module.css';
import CardImg from '../../../assets/CardImg.png';

function Card({percent, colorName, content}) {

    return (
    <div className={`${styles.wrapper} ${colorName === "black" ? styles.black : styles.gray}`}>
        <div>

        <img src={CardImg} alt="gift" />
        </div>
        <h2>{percent}% Success Rate</h2>
        <p className={styles.content}>{content}</p>
        <button className={styles.btn}>Read More</button>
    </div>
  )
}

export default Card