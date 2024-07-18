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
            <TableRow rowData={card} key={card.id} deleteWord={deleteWord} setCards={setCards} cards={cards} />
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

const TableRow = ({ rowData, deleteWord, setCards, cards }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editWord, setEditWord] = useState(rowData);

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditWord((prevEditWord) => ({
      ...prevEditWord,
      [name]: value
    }));
  };

  const handleEditSave = () => {
    const updatedCards = cards.map((card) => 
      card.id === editWord.id ? editWord : card
    );
    setCards(updatedCards);
    setIsEditing(false);
  };

  return isEditing ? (
    <tr>
      <td>
        <input type="text" name="word" value={editWord.word} onChange={handleEditChange} />
      </td>
      <td>
        <input type="text" name="transcription" value={editWord.transcription} onChange={handleEditChange} />
      </td>
      <td>
        <input type="text" name="translation" value={editWord.translation} onChange={handleEditChange} />
      </td>
      <td>
        <button onClick={handleEditSave}>Save</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{rowData.word}</td>
      <td>{rowData.transcription}</td>
      <td>{rowData.translation}</td>
      <td>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => deleteWord(rowData.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Table;
