import React from 'react';
import CardBox from './CardBox.jsx';
import styles from "./CardContainer.module.css";
import picture from './yellow.png';
// import "../scripts/wordsApi.js"

function CardContainer() {
    return (
        <div>
        <div className={styles.mainContainer}>
        <React.Fragment>
            <CardBox
                word="orange"
                transcription="[orange]"
                translation="оранжевый"
            />
            <CardBox
                word="lesson"
                transcription="[lesson]"
                translation="урок"
            />
            <CardBox
                word="test"
                transcription="[test]"
                translation="тест"
            />
            <CardBox
                word="cat"
                transcription="[kæt]"
                translation="кошка"
            />
        </React.Fragment>

        </div>

        <img src={picture} alt="students" className={styles.bottomImg}/>
        </div>
    );
}

export default CardContainer;