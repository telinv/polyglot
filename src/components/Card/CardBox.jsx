import React from 'react'
import styles from "./CardBox.module.css"

class CardBox extends React.Component {
    render() {
				const {word, transcription, translation} = this.props;
        return (
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <h4 className={styles.cardWord}>{word}</h4>
                    <p className={styles.cardTranscription}>{transcription}</p>
                    <p className={styles.cardTranslation}>{translation}</p>
                </div>
            </div>
        );
    }
}
export default CardBox