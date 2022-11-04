import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([
    { zapato: 'fdg' },
    { zapato: 'fdg' },
    { zapato: 'fdg' },
  ])

  const value = {
    cartProducts,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
