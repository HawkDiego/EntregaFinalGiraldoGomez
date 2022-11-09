import { Box, Button, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { CartQuantityController } from './CartQuantityController'

export const CartItem = ({ product, deleteProduct }) => {
  const handlerDelete = () => {
    deleteProduct(product)
  }
  return (
    <Grid
      templateColumns='auto 1fr auto'
      mt='20'
      border='solid 1px'
      fontSize='20px'
    >
      <Link to={`/product/${product.id}`}>
        <Image
          src={product.img}
          alt='ropa'
          w='250px'
          h='250px'
          borderRadius='4px'
        />
      </Link>
      <Grid
        templateRows='auto 1fr 1fr'
        alignItems='flex-end'
        justifyContent='center'
        ml='30px'
      >
        <Link to={`/product/${product.id}`}>
          <Box alignSelf='flex-start' fontWeight='bold' fontSize='30px'>
            {product.name}
          </Box>
        </Link>
        <Box>
          <Box>{product.category}</Box>
          <Box>{product.price}</Box>
        </Box>
        <CartQuantityController product={product} />
      </Grid>
      <Button m='5px' variant='ghost' onClick={handlerDelete}>
        <VscChromeClose />
      </Button>
    </Grid>
  )
}
