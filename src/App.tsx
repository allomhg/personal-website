import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Navbar } from './components/Navbar';
import { Greeting } from './components/Greeting';
import { FooterBar } from './components/FooterBar';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Greeting />
      <FooterBar />
    </>
  )
}

export default App;
