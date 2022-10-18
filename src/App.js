import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBarStore from './containers/NavBarStoreContainer'
import { ItemListContainer } from './containers/ItemContainer'
import theme from './theme'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBarStore />
      <ItemListContainer />
    </ChakraProvider>
  )
}

export default App
