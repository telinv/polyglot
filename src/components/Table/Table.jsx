import React, { useEffect, useState } from 'react';
import styles from './Table.module.css';

const Table = ({ initialCards = [] }) => {
  const [cards, setCards] = useState(initialCards);
  const [newWord, setNewWord] = useState({
    id: null,
    word: '',
    transcription: '',
    translation: ''
  });

  const handleSaveAdd = () => {
    const newId = cards.reduce((max, card) => Math.max(max, card.id), 0) + 1;
    const newCard = { ...newWord, id: newId };
    setCards([...cards, newCard]);
    setNewWord({
      id: null,
      word: '',
      transcription: '',
      translation: ''
    });
  };

  const handleChangeAdd = (event) => {
    const { name, value } = event.target;
    setNewWord((prevNewWord) => ({
      ...prevNewWord,
      [name]: value
    }));
  };

  const deleteWord = (id) => {
    const updatedArray = cards.filter((card) => card.id !== id);
    setCards(updatedArray);
  };

  useEffect(() => {
    console.log('новый массив:', cards);
  }, [cards]);

  return (
    <div className={styles.vocabularyTable}>
      <caption>VOCABULARY</caption>
      <table>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Редактировать</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <TableRow rowData={card} key={card.id} deleteWord={deleteWord} />
          ))}
          <tr className={styles.tableInput}>
            <th>
              <input
                type="text"
                name="word"
                value={newWord.word}
                onChange={handleChangeAdd}
                placeholder="Слово"
              />
            </th>
            <th>
              <input
                type="text"
                name="transcription"
                value={newWord.transcription}
                onChange={handleChangeAdd}
                placeholder="Транскрипция"
              />
            </th>
            <th>
              <input
                type="text"
                name="translation"
                value={newWord.translation}
                onChange={handleChangeAdd}
                placeholder="Перевод"
              />
            </th>
            <th>
              <button onClick={handleSaveAdd}>Add</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ rowData, deleteWord }) => {
  return (
    <tr>
      <td>{rowData.word}</td>
      <td>{rowData.transcription}</td>
      <td>{rowData.translation}</td>
      <td>
        <button>Edit</button>
        <button onClick={() => deleteWord(rowData.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Table;

// const TableRow = ({rowData, cards}) =>{
//   const {id, word , transcription , translation} = rowData;
//   const [isSelected, setIsSelected] = useState(false);
//   const [value , setValue] = useState ({
//     id, 
//     word, 
//     transcription, 
//     translation
//   });


// function handleClose(){
//   setIsSelected(!isSelected);
//   setValue({...rowData});
// }

// function handleSave () {
//   setValue({...value});
//   setIsSelected(!isSelected);
//   console.log(value);
//   cards.push(value);
//   console.log(cards);
// }

// function handleChange(event){
//   setValue((prevValue)=>{
//     return {...prevValue, [event.target.name]: event.target.value};
//   })
// }

// function handleEdit(){
//   setIsSelected(!isSelected);
// }

// return isSelected ? (
//   <tr>
//   <th>
//     <input type="text" 
//   value={value.word}
//   name={'word'}
//   onChange={handleChange}/>
//   </th>
//   <td>
//     <input type="text" 
//   value={value.transcription}
//   name={'transcription'}
//   onChange={handleChange}/>
//   </td>
//   <td>
//     <input type="text" 
//   value={value.translation}
//   name={'translation'}
//   onChange={handleChange}/>
//   </td>
//   <button onClick={handleSave}>Save</button>
//   <button onClick={handleClose}>Edit</button>
//   </tr>
// ): (
//   <tr>
//     <th>{value.word}</th>
//     <td>{value.transcription}</td>
//     <td>{value.translation}</td>
//     <td>
//       <button onClick={handleEdit}>Edit</button>
//       <button>Delite</button>
//     </td>
//   </tr>
// );
// };


