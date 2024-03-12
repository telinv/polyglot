import React from 'react';
import CardBox from './CardBox.jsx';
import styles from "./CardContainer.module.css";
// import "../scripts/wordsApi.js"

function CardContainer() {
    return (
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
    );
}

export default CardContainer;