import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavTabs } from './components/NavTabs';
import { FooterBar } from './components/FooterBar';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <NavTabs />
        <main>
          <Routes>
            <Route path='/Home' element={ <Home /> } />
            <Route path='/Projects' element={ <Projects /> } />
            <Route path='/About' element={ <About /> } />
          </Routes>
        </main>
        <FooterBar />  
      </Router>
    </>
  )
}

export default App;
