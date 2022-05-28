import { createTheme } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontFamily: ['Roboto Mono', 'monospace'].join(','),
    fontSize: 13,
    h1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: 100,
    },
    h2: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: 50,
    },
    h3: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: 30,
    },
    subtitle1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: 20,
    },
    body1: {
      wordSpacing: -1,
    },
    body2: {
      wordSpacing: -2,
    },
    body3: {
      wordSpacing: -2,
      fontFamily: ['Roboto Mono', 'monospace'].join(','),
      fontSize: 10,
    },
  },
  palette: {
    primary: {
      light: '#B100FF',
      main: '#c133ff',
      dark: '#8e00cc',
    },
    secondary: {
      main: '#fff',
    },
    text: {
      light: 'hsl(0, 0%, 90%)',
      main: 'hsl(0, 0%, 50%)',
      dark: 'hsl(0, 0%, 8%)',
    },
  },
});

export default customTheme;
