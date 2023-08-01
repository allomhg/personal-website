import React from 'react';
//import logo from './logo.svg';
import { ChakraProvider, Box } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
        <Box bg='blue.100' h='20'>

        </Box>
    </ChakraProvider>
  );
}

export default App;
