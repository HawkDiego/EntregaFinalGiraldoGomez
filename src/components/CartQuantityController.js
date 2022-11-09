import React from 'react'
import { Grid, Button, Center } from '@chakra-ui/react'
import { BsPlus, BsDash } from 'react-icons/bs'
import { useCartContext } from '../context/cartContext'

export const CartQuantityController = ({ product }) => {
  const { addProduct, deductProduct } = useCartContext()
  const handlerPlus = () => {
    addProduct(product, 1)
  }

  const handlerLess = () => {
    deductProduct(product, 1)
  }

  return (
    <Grid templateColumns={'1fr 1fr 1fr'}>
      <Button
        fontSize='30px'
        variant='ghost'
        onClick={handlerLess}
        isDisabled={product.quantity === 1 ? true : false}
      >
        <BsDash />
      </Button>
      <Center>{product.quantity}</Center>
      <Button fontSize='30px' variant='ghost' onClick={handlerPlus}>
        <BsPlus />
      </Button>
    </Grid>
  )
}
