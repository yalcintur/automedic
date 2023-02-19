import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#2196f3',
    },
    third: {
      main: '#000000',
    }
  },
});

export default Theme;
