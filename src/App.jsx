/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Home from './views/Home';

import { ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core/styles';

// import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';

import RalewayWoff2 from './lib/assets/fonts/Raleway-Regular.ttf';
// import LibreBaskerville from './lib/assets/fonts/LibreBaskerville-Regular.ttf';
import LibreBaskervilleItalic from './lib/assets/fonts/LibreBaskerville-Italic.ttf';
import IndieFlower from './lib/assets/fonts/IndieFlower-Regular.ttf';

const raleway = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

// const libreBaskerville = {
//   fontFamily: 'Libre Baskerville',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//   local('LibreBaskerville'),
//   local('LibreBaskerville-Regular'),
//   url(${LibreBaskerville}) format('woff2')
//   `,
// };

const libreBaskervilleItalic = {
  fontFamily: 'Libre Baskerville Italic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
  local('libreBaskervilleItalic'),
  local('LibreBaskerville-Italic'),
  url(${LibreBaskervilleItalic}) format('woff2')
  `,
};

const indieFlower = {
  fontFamily: 'Indie Flower',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('IndieFlower'),
    local('IndieFlower-Regular'),
    url(${IndieFlower}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffeae0',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 16,
    // h6: {
    //   fontSize: '5rem',
    //   fontFamily: 'Indie Flower',
    // },
    // h6: {
    //   fontSize: '5rem',
    //   fontFamily: 'Libre Baskerville Italic',
    // },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          raleway,
          indieFlower,
          // libreBaskerville,
          libreBaskervilleItalic,
        ],
      },
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
