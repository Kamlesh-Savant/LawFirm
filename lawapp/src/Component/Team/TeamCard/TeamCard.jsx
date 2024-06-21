import React from 'react';
import styles from './TeamCard.module.css';

function TeamCard({data}) {

  const {clientName,cases,imgSource,isSelected} = data;
  return (
    <div className={`${styles.wrapper} ${ isSelected ? styles.selected : ''}`}>
      <img src={imgSource} alt={clientName} className={styles.img}/>
      <div className={styles.content}>
        <h3 className={styles.title}>{clientName}</h3>
        <p className={styles.cases}>{cases} Cases</p>
      </div>
    </div>
  )
}

export default TeamCard;