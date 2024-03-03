import React from 'react'
import "./CardBox.css"

class CardBox extends React.Component {
    render() {
				const {word, transcription, translation} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-word">{word}</h4>
                    <p className="card-transcription">{transcription}</p>
                    <p className="card-translation">{translation}</p>
                </div>
            </div>
        );
    }
}
export default CardBox