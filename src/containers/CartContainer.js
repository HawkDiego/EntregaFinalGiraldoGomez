import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CartError } from '../components/CartError'
import { CartItem } from '../components/CartItem'
import { useCartContext } from '../context/cartContext'

export const CartContainer = () => {
  const { cartProducts, deleteProduct } = useCartContext()

  return (
    <>
      {cartProducts.length > 0 ? (
        <Flex direction='column' justify='flex-end' align='center'>
          {cartProducts.map((product) => (
            <CartItem product={product} deleteProduct={deleteProduct} />
          ))}{' '}
        </Flex>
      ) : (
        <CartError />
      )}
    </>
  )
}
