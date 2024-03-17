import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './Languages.module.css';
// import Comfortaa from 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Madimi+One&family=Quicksand:wght@457&display=swap'

export default function Languages() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={styles.languagesList}>
      <Button
      defaultValue={30}
      sx={{
        marginTop: -1,

        fontSize : 18,

        // fontFamily: 'Comfortaa',

        color: '#f57f17',
      }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Язык
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Английский</MenuItem>
        <MenuItem onClick={handleClose}>Немецкий</MenuItem>
        <MenuItem onClick={handleClose}>Французский</MenuItem>
        <MenuItem onClick={handleClose}>Испанский</MenuItem>
        <MenuItem onClick={handleClose}>Итальянский</MenuItem>
        <MenuItem onClick={handleClose}>Арабский</MenuItem>
        <MenuItem onClick={handleClose}>Китайский</MenuItem>
        <MenuItem onClick={handleClose}>Корейский</MenuItem>
        <MenuItem onClick={handleClose}>Японский</MenuItem>
      </Menu>
    </div>
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