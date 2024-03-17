// import React , {useState} from 'react';
import styles from './Table.module.css'

function Table() {
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
            <tr>
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
      </tr>
        </table>
    </div>
  )
}
  

export default Table;