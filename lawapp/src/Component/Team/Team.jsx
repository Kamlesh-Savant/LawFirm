import React from 'react';
import styles from './Team.module.css';
import TeamCard from './TeamCard/TeamCard';
import imgColleen from '../../assets/colleen.png';
import imgCesforila from '../../assets/Cesforila.png';
import imgDanial from '../../assets/Danial.png';
import imgHaldone from '../../assets/Haldone.png';
import imgNik from '../../assets/Nik.png';
import imgSanfole from '../../assets/Sanfole.png';


function Team() {

  const data = [{
    clientName:'Danial Def',
    cases:301,
    imgSource : imgDanial,
    isSelected : false
  },{
    clientName:'Sanfole',
    cases:850,
    imgSource : imgSanfole,
    isSelected : true
  },{
    clientName:'Cesforila',
    cases:470,
    imgSource : imgCesforila,
    isSelected : false
  },{
    clientName:'Colleen',
    cases:180,
    imgSource : imgColleen,
    isSelected : false
  },{
    clientName:'Haldone',
    cases:212,
    imgSource : imgHaldone,
    isSelected : false
  },{
    clientName:'Nik Jeo',
    cases:350,
    imgSource : imgNik,
    isSelected : false
  }];

  

  return (
    <div className={styles.wrapper}>
        <h1>Our Team</h1>
        <div className={styles.cardContainer}>

          {data.map((item,index) => ( 
            <TeamCard data={item}  key={index}/>
          ))}
        </div>
    </div>
  )
}

export default Team