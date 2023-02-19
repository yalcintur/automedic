import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from '../components/ui/header.js';
import Theme from '../components/ui/theme.js';
import { ThemeProvider } from '@mui/material/styles';
import Home from '../components/home.js';

import AVS from './avs';
import Contact from './contact.js';
import About from '../components/about.js';

function App() {
  return (
  <ThemeProvider theme = {Theme}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/avs" element={<AVS/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
