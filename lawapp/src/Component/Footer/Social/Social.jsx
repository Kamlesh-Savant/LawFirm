import React from 'react';
import styles from './Social.module.css';
import instaImg from '../../../assets/insta.png'
import fbImg from '../../../assets/fb.png'
import twitImg from '../../../assets/twitter.png'
import pinImg from '../../../assets/pintrest.png'

function Social() {
  return (
    <div className={styles.iconWrapper}>
        <img src={instaImg} alt="insta" />
        <img src={fbImg} alt="fb" />
        <img src={twitImg} alt="twitter" />
        <img src={pinImg} alt="pintrest" />
    </div>
  )
}

export default Social