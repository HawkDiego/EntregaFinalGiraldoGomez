import React from 'react'
import { Button, useToast } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
import { useCartContext } from '../context/cartContext'
import { useParams } from 'react-router-dom'

export const AddToCart = ({ product, quantity }) => {
  const toast = useToast()
  const params = useParams()
  const { addProduct, cartProducts } = useCartContext()

  const handlerClick = (e) => {
    e.preventDefault()
    addProduct(product, quantity)
    toast({
      title: 'Producto agregado con exito',
      status: 'success',
      isClosable: true,
      duration: 5000,
      position: 'top',
    })
  }
  console.log(cartProducts)
  return (
    <>
      {params.productId ? (
        <Button w='80%' textAlign='center' onClick={handlerClick}>
          Añadir al carrito
        </Button>
      ) : (
        <Button fontSize='30px' variant='ghost' onClick={handlerClick}>
          <BsPlus />
        </Button>
      )}
    </>
  )
}
