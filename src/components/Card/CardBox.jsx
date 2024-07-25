import React, {useState} from 'react'
import styles from "./CardBox.module.css"
import Table from '../Table/Table';

// class CardBox extends React.Component {
//     render() {
// 				const {word, transcription, translation} = this.props;
//         return (
//             <div className={styles.card}>
//                 <div className={styles.cardBody}>
//                     <h4 className={styles.cardWord}>{word}</h4>
//                     <p className={styles.cardTranscription}>{transcription}</p>
//                     <p className={styles.cardTranslation}>{translation}</p>
//                 </div>
//             </div>
//         );
//     }
// }
// export default CardBox




// class CardBox extends React.Component {
//     render() {
// 				const cards = [id, word, transcription, translation];
//         return (
//             <div className={styles.card}>
//                 <div className={styles.cardBody}>
//                     <h4 className={styles.cardWord}>{word}</h4>
//                     <p className={styles.cardTranscription}>{transcription}</p>
//                     <p className={styles.cardTranslation}>{translation}</p>
//                 </div>
//             </div>
//         );

//         return <Table cards={cards} />;
//     }
// }
// export default CardBox









export const CardBox = ({ word, transcription, translation }) => {
 
    const [isSelected, setIsSelected] = useState(false);
  
    const [value, setValue] = useState(word);
  
    function getValue(event) {
      const newValue = event.target.value;
      setValue(newValue);
    };

    const cards = [{ id: 1, word, transcription, translation }];
  
  
    return (
      <div >
        {isSelected ? (
          <input
            type='text'
            onChange={getValue}
            value={value}
            onBlur={() => setIsSelected(false)}
          />
        ) : (
          <div className='word' onClick={() => setIsSelected(true)}>
            {word}
          </div>
        )}
        <div className='transcription'>{transcription}</div>
        <div className='translation'>{translation}</div>
        <Table cards={cards} />
      </div>
    );
  };
  