import React from 'react';
import emblem from "./emblem.png";
import './Header.css';
// import Languages from './Languages/Languages';





function Header() {
  return (
    <div >
        <nav className='navContainer'>
        <img src={emblem} alt="emblem" />
          <ul>
            <li>Язык</li>
            {/* <li><Languages/></li> */}
            <li>Блиц опрос</li>
            <li>Самообучение</li>
          </ul>
        </nav>
        </div>
    
  )
}

export default Header