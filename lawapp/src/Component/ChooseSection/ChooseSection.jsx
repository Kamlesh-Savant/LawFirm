import React from 'react';
import Card from '../ChooseSection/Card/Card';
import styles from './ChooseSection.module.css';

function ChooseSection() {

    const content = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.";


  return (
    <div className={styles.wrapper}>
        <h1>Why Choose us?</h1>
        <div className={styles.cardWrapper}>
            <Card percent='98' colorName="black" content={content}/>
            <Card percent='98' colorName="gray" content={content}/>
            <Card percent='98' colorName="black" content={content}/>
        </div>
    </div>
  )
}

export default ChooseSection