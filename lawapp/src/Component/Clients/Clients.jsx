import React from "react";
import Card from "../ChooseSection/Card/Card";
import styles from './Clients.module.css';
import LeftArrow from '../../assets/LeftArrow.png';
import RightArrow from '../../assets/RightArrow.png';
import janeImg from '../../assets/Jane.png';
import devonImg from '../../assets/Devon.png';
import robertImg from '../../assets/Robert.png';

function Clients() {
  const content = "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia";
  return (
    <div className={styles.wrapper}>
      <div className={styles.topWrapper}>
        <div>
          <h1>What says our</h1>
          <h1>happy Clients</h1>
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.btn}>
            <img src={LeftArrow} alt="left"/>
          </button>
          <button className={`${styles.btn} ${styles.btnYellow}`}>
          <img src={RightArrow} alt="right"/>
          </button>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <Card name="Jane Cooper" designation="Ceo of Hunt" colorName="black" content={content} img={janeImg}/>
        <Card name="Devon Lane" designation="Ceo of Hunt" colorName="black" content={content} img={devonImg}/>
        <Card name="Robert Fox" designation="Ceo of Hunt" colorName="black" content={content} img={robertImg}/>
      </div>
    </div>
  );
}

export default Clients;
