import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';

import Contact from './views/Contact';
// import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './views/Footer';
import Home from './views/Home';
import IndieFlower from './lib/assets/fonts/IndieFlower-Regular.ttf';
// import LibreBaskerville from './lib/assets/fonts/LibreBaskerville-Regular.ttf';
import LibreBaskervilleItalic from './lib/assets/fonts/LibreBaskerville-Italic.ttf';
import Navbar from './views/Navbar';
import Portfolio from './views/Portfolio';
import RalewayWoff2 from './lib/assets/fonts/Raleway-Regular.ttf';
import React from 'react';
import { ThemeProvider } from 'styled-components';

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
  minWidth: {
    atto: '321px',
    femto: '404px',
    pico: '481px',
    nano: '641px',
    micro: '768px',
    milli: '796px',
    kilo: '961px',
    mega: '992px',
    giga: '1025px',
    tera: '1281px',
  },
});

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <>
            <Navbar />

            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>

            <Footer />
          </>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

export default App;
