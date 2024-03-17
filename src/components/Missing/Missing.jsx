import React from 'react';
import styles from './Missing.module.css';
import picture from './notFound.png';

function Missing() {
  return (
<div className={styles.notFoundPage}>
        <h1 className={styles.notFoundheader1}>404</h1>
        <h2 className={styles.notFoundheader2}>Page Not Found</h2>
        <img src={picture} alt="notFound" className={styles.notFoundPicture}/>
    </div>
  )
}

export default Missing