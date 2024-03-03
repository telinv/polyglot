import React from 'react'
import CardBox from './CardBox.jsx'
import "./CardContainer.css"

function CardList() {
    return (
        <div className="main-container">
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

export default CardList;