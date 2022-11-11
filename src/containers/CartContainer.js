import { Flex, Center, Button, ButtonGroup, Icon } from '@chakra-ui/react'
import React from 'react'
import { CartError } from '../components/CartError'
import { CartItem } from '../components/CartItem'
import { useCartContext } from '../context/cartContext'
import { MdDelete } from 'react-icons/md'

export const CartContainer = () => {
  const { cartProducts, deleteProduct, getTotal, cleanCart } = useCartContext()

  return (
    <>
      {cartProducts.length > 0 ? (
        <>
          <Flex direction='column' justify='flex-end' align='center'>
            {cartProducts.map((product) => (
              <CartItem
                product={product}
                deleteProduct={deleteProduct}
                key={product.id}
              />
            ))}
          </Flex>
          <Center mt='20' fontSize='30px' fontWeight='bold'>
            Total: {getTotal()} $
          </Center>
          <Center gap={2}>
            <Button w='100px'>Checkout</Button>
            <Button w='100px' onClick={cleanCart}>
              <Icon as={MdDelete} />
            </Button>
          </Center>
        </>
      ) : (
        <CartError />
      )}
    </>
  )
}
