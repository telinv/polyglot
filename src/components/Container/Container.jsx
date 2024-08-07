import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../Header/Header.jsx";
import styles from '../Container/Container.module.css';
import Main from '../Main/Main.jsx';
import Table from '../Table/Table.jsx';
import Missing from '../Missing/Missing.jsx';

function Container() {
  let cards = [];
  return (
    <div className={styles.structure}>
  <Header/>
  <Routes>
    <Route path='/all' element={<Container/>}></Route>
    <Route path='/cards' element={<Main/>}></Route>
    <Route path='/vocabulary' element={<Table cards={cards}/>}>
    </Route >
    <Route path='*' element={<Missing/>}></Route>
  </Routes>

  </div>
  )
}

export default Container