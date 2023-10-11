import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavTabs } from './components/NavTabs';
import { NavTabsNew } from './components/NavTabsNew';
import { Footer } from './components/Footer';

import { HomeNew } from './pages/HomeNew';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <NavTabs />
        {/* <NavTabsNew /> */}
          <Routes>
            {/* <Route path="/" index element={ <Home /> } />
            <Route path='/Home' element={ <Home /> } /> */}
            <Route path="/" index element={ <HomeNew /> } />
            <Route path='/Home' element={ <HomeNew /> } />
            <Route path='/Projects' element={ <Projects /> } />
            <Route path='/About' element={ <About /> } />
          </Routes>
        <Footer />  
      </Router>
    </>
  )
}

export default App;
