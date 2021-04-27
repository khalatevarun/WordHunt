import React from 'react';
import './Header.css';
import {
  createMuiTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core';

const Header = () => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffff',
      },
      type: 'dark',
    },
  });
  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" />
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            helperText="Please select your currency"
          >
            <MenuItem>English</MenuItem>
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
