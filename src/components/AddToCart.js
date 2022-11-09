import React from 'react'
import { Button, useToast, Box, useColorMode } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
import { useCartContext } from '../context/cartContext'

export const AddToCart = ({ product }) => {
  const toast = useToast()
  const { colorMode } = useColorMode()
  const { addProduct } = useCartContext()

  const handlerClick = (e) => {
    e.preventDefault()
    addProduct(product, 1)
    toast({
      title:'Producto agregado con exito',
      status: 'success',
      isClosable: true,
      duration: 5000,
      position: 'top',
    })
  }
  return (
    <Button fontSize='30px' variant='ghost' onClick={handlerClick}>
      <BsPlus />
    </Button>
  )
}
