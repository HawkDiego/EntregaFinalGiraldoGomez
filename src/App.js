import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import NavBarStore from './containers/NavBarStoreContainer'
import ItemContainer from './containers/ItemContainer'
import ProductDetailContainer from './containers/ProductDetailContainer'
import { ProductsCategoryContainer } from './containers/ProductsCategoryContainer'
import { PageNotFoundContainer } from './containers/PageNotFoundContainer'
import { CartContainer } from './containers/CartContainer'
import theme from './context/themeContext'
import { CartProvider } from './context/cartContext'

function App() {
  return (
    <div className='app'>
      <ChakraProvider theme={theme}>
        <CartProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
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
                <Route path={'cart'} element={<CartContainer/>}/>
                <Route path={'checkout'} />
              </Route>
              <Route path='*' element={<PageNotFoundContainer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ChakraProvider>
    </div>
  )
}

export default App
