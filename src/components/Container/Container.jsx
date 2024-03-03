import React from 'react'
import Header from "../Header/Header.jsx"
import '../Container/Container.css'
import "../Main/Main.jsx"
import Main from '../Main/Main.jsx'
import picture from './yellow.png'

function Container() {
  return (
    <div className='structure'>
  <Header/>
  <Main/>
  <img src={picture} alt="students" />
  </div>
  )
}

export default Container