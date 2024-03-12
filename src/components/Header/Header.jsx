import React from 'react';
import emblem from "./emblem.png";
import styles from'./Header.module.css';
// import Languages from './Languages/Languages';





function Header() {
  return (
    <div >
        <nav  className={styles.navContainer}>
        <img src={emblem} alt="emblem" />
          <ul>
            <li>Язык</li>
            {/* <li><Languages/></li> */}
            <li>Блиц опрос</li>
            <li>Самообучение</li>
            <li>Мои карточки</li>
          </ul>
        </nav>
        </div>
    
  )
}

export default Header