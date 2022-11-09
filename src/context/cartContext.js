import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const addProduct = (product, quantity) => {
    const productToAdd = cartProducts?.find((item) => item.id === product.id)
    if (productToAdd) {
      const newCartProducts = cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity += quantity) }
        }
        return item
      })
      setCartProducts(newCartProducts)
    } else {
      setCartProducts([...cartProducts, { ...product, quantity }])
    }
  }
  const value = {
    cartProducts,
    addProduct,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
