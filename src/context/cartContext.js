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

  const deductProduct = (product, quantity) => {
    const productToAdd = cartProducts?.find((item) => item.id === product.id)
    if (productToAdd) {
      const newCartProducts = cartProducts.map((item) => {
        if (item.id === product.id && productToAdd.quantity > 1) {
          return { ...item, quantity: (item.quantity -= quantity) }
        }
        return item
      })
      setCartProducts(newCartProducts)
    }
  }

  const deleteProduct = (product) =>{
    const productToDelete = cartProducts?.find((item) => item.id === product.id)
    if(productToDelete){
      const newCartProducts = cartProducts.filter(product => product.id !== productToDelete.id)
      setCartProducts(newCartProducts)
    }
  }
  const value = {
    cartProducts,
    addProduct,
    deductProduct,
    deleteProduct
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
