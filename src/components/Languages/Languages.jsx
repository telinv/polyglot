import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Languages() {
  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={language}
        label="Язык"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem>Английский</MenuItem>
        <MenuItem>Немецкий</MenuItem>
        <MenuItem>Французский</MenuItem>
        <MenuItem>Испанский</MenuItem>
        <MenuItem>Итальянский</MenuItem>
        <MenuItem>Японский</MenuItem>
      </Select>
    </FormControl>
  );
}

// 'Английский',
//   'Немецкий',
//   'Французский',
//   'Испанский',
//   'Итальянский',
//   'Арабский',
//   'Китайский',
//   'Корейский',
//   'Японский',
//   'Хинди',