import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Navbar } from './components/Navbar';
import { Greeting } from './components/Greeting';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Greeting />
    </>
  )
}

export default App;
