import React from 'react';
import {Link} from "react-router-dom";
import emblem from "./emblem.png";
import styles from'./Header.module.css';
import Languages from '../Languages/Languages';



function Header() {
  return (
    <div >
        <nav  className={styles.navContainer}>
        <Link to="/all"><img src={emblem} alt="emblem" /></Link>
          <ul>
            <li><Languages/></li>
            <li>
            <Link to = "/survey">Блиц опрос</Link>
            </li>
            <li><Link to = "/vocabulary">Словарь</Link></li>
            <li>
            <Link to = "/cards">Мои карточки</Link>
            </li>
          </ul>
        </nav>
        </div>
    
  )
}

export default Header