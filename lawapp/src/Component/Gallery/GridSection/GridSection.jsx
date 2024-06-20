import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.png';
import img6 from '../../../assets/img6.png';
import styles from './GridSection.module.css';


export default function GridSection() {
  return (
    <div className={styles.wrapper}>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <img src={img1} alt="img1" className={styles.imgGrid}/>
        </Grid>
        <Grid item xs={4}>
        <img src={img2} alt="img2" className={styles.imgGrid}/>
        </Grid>
        <Grid item xs={4}>
        <img src={img3} alt="img3" className={styles.imgGrid}/>
        </Grid>
        <Grid item xs={8}>
        <img src={img4} alt="img4" className={styles.imgGrid}/>
        </Grid>
      <Grid item xs={8}>
            <img src={img5} alt="img5" className={styles.imgGrid}/>
        </Grid>
        <Grid item xs={4}>
        <img src={img6} alt="img6" className={styles.imgGrid}/>
        </Grid>
      </Grid>
        
    </Box>
    </div>
  );
}
