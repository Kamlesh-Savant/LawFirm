import React from 'react'
import styles from './Card.module.css';
import CardImg from '../../../assets/CardImg.png';

function Card({name, img,percent, colorName, content,btn, designation}) {

    return (
    <div className={`${styles.wrapper} ${colorName === "black" ? styles.black : styles.gray}`}>
        <div>

        {img ? <img src={img} alt="img" /> : <img src={CardImg} alt="img" />}
        </div>
        {percent && <h2>{percent}% Success Rate</h2>}
        {name && <h2>{name}</h2>}
        {designation && <p style={{marginTop: '-25px'}}>{designation}</p>}
        <p className={styles.content}>{content}</p>
        { btn && <button className={styles.btn}>Read More</button>}
    </div>
  )
}

export default Card