import React from 'react';
import './Header.css';

import {
  createMuiTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core';

import categories from '../../data/category';

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: lightMode ? '#0000' : '#ffff',
      },
      type: lightMode ? 'light' : 'dark',
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord('');
  };

  return (
    <div className="header">
      <span className="title">{word ? word : 'Word Hunt'}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label="select"
            id="standard-select-currency"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            className="select"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
