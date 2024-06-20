import React from 'react';
import GridSection from './GridSection/GridSection';
import styles from './Gallery.module.css'

function Gallery() {
  return (
    <div className={styles.wrapper}>
        <h1>Area of Practices</h1>
        <GridSection />
    </div>
  )
}

export default Gallery