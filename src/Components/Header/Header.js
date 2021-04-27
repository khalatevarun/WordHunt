import React from 'react';
import './Header.css';
import { createMuiTheme, TextField, ThemeProvider } from '@material-ui/core';

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
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
