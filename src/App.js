import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import NavBarStore from './containers/NavBarStore'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBarStore />
    </ChakraProvider>
  );
}

export default App;
