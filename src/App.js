import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import NavBarStore from './containers/NavBarStoreContainer'
import ItemContainer from './containers/ItemContainer'
import ProductDetailContainer from './containers/ProductDetailContainer'
import { ProductsCategoryContainer } from './containers/ProductsCategoryContainer'
import { PageNotFoundContainer } from './containers/PageNotFoundContainer'

function App() {
  return (
    <div className='app'>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBarStore />}>
              <Route index element={<ItemContainer />} />
              <Route
                path={'product/:productId'}
                element={<ProductDetailContainer />}
              />
              <Route
                path={'category/:categoryId'}
                element={<ProductsCategoryContainer />}
              />
              <Route path={'cart'} />
              <Route path={'checkout'} />
            </Route>
            <Route path='*' element={<PageNotFoundContainer />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App
