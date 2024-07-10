import React , {useState} from 'react';
import styles from './Table.module.css'

const Table = ({cards}) => {
  return (
    <div className={styles.vocabularyTable}>
      <caption>VOCABULARY</caption>
        <table>
            <thead>
                <tr className={styles.tableHeader}>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                </tr>
            </thead>

                {cards.map((card)=>{
                  return <TableRow rowData= {card} key={card.id} />;
                })}
            {/* <tr>
      <th>facilitate</th>
      <td>fə'siliteit </td>
      <td>способствовать</td>
    </tr>
    <tr>
      <th>	remuneration</th>
      <td>ri,mju:nə'reiʃən</td>
      <td>вознаграждение</td>
    </tr>
    <tr>
      <th>ethnicity</th>
      <td>eðnisitɪ</td>
      <td>этническая </td>
    </tr>
    <tr>
      <th>hereditary</th>
      <td>hi'reditəri</td>
      <td>наследственный</td>
      </tr> */}
        </table>
    </div>
  );
};
  

export default Table;


const TableRow = ({rowData}) =>{
  const {id, word , transcription , translation} = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value , setValue] = useState ({
    id, 
    word, 
    transcription, 
    translation
  });


function handleClose(){
  setIsSelected(!isSelected);
  setValue({...rowData});
}

function handleSave () {
  setValue({...value});
  setIsSelected(!isSelected);
}

function handleChange(event){
  setValue((prevValue)=>{
    return {...prevValue, [event.target.name]: event.target.value};
  })
}

function handleEdit(){
  setIsSelected(!isSelected);
}

return isSelected ? (
  <tr>
  <th>
    <input type="text" 
  value={value.word}
  name={'word'}
  onChange={handleChange}/>
  </th>
  <td>
    <input type="text" 
  value={value.transcription}
  name={'transcription'}
  onChange={handleChange}/>
  </td>
  <td>
    <input type="text" 
  value={value.translation}
  name={'translation'}
  onChange={handleChange}/>
  </td>
  <button onClick={handleSave}>Save</button>
  <button onClick={handleClose}>Edit</button>
  </tr>
): (
  <tr>
    <th>{value.word}</th>
    <td>{value.transcription}</td>
    <td>{value.translation}</td>
    <td>
      <button onClick={handleEdit}>Edit</button>
      <button>Delite</button>
    </td>
  </tr>
);
};
