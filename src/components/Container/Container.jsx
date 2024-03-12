import React from 'react';
import Header from "../Header/Header.jsx";
import styles from '../Container/Container.module.css';
import Main from '../Main/Main.jsx';
import picture from './yellow.png';
import Table from '../Table/Table.jsx';

function Container() {
  return (
    <div className={styles.structure}>
  <Header/>
  <Main/>
  <img src={picture} alt="students" className={styles.bottomImg}/>
  <Table/>
  </div>
  )
}

export default Container