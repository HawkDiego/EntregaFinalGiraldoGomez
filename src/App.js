import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import NavBarStore from './containers/NavBarStore'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBarStore />
      <ItemListContainer greeting={'Bienvenido a CoderShop'}/>
    </ChakraProvider>
  )
}

export default App
