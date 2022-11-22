import React, { useEffect, useState } from 'react'
import { Flex, Center, Button, Icon, useDisclosure } from '@chakra-ui/react'
import { CartError } from '../components/CartError'
import { CartItem } from '../components/CartItem'
import { useCartContext } from '../context/cartContext'
import { MdDelete } from 'react-icons/md'
import { CartCheckOutModal } from '../components/CartCheckOutModal'
import { getOrders } from '../api/orders'

export const CartContainer = () => {
  const { cartProducts, deleteProduct, getTotal, cleanCart } = useCartContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [allOrders, setAllOrders] = useState(null)
  useEffect(() => {
    getOrders().then((data) => setAllOrders(data))
  }, [])
  console.log(allOrders)
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
            <Button w='100px' onClick={onOpen}>
              Checkout
            </Button>

            <Button w='100px' onClick={cleanCart} colorScheme='red'>
              <Icon as={MdDelete} />
            </Button>
          </Center>
        </>
      ) : (
        <CartError />
      )}
      <CartCheckOutModal
        isOpen={isOpen}
        onClose={onClose}
        total={getTotal()}
        allOrders={allOrders}
      />
    </>
  )
}
