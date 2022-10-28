import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import NavBarStore from './containers/NavBarStoreContainer'
import ItemContainer from './containers/ItemContainer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarStore/>}>
            <Route index element={<ItemContainer/>}/>
            <Route path={'/category/:id'}/>
            <Route path={'/product/:id'}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
