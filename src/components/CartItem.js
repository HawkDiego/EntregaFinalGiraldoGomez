import { Box, Button, Grid, GridItem, Image } from '@chakra-ui/react'
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
      templateColumns={['repeat(3, auto)','1fr 1fr auto']}
      mt='20'
      border='solid 2px'
      fontSize={['15px', '20px']}
      
    >
      <Link to={`/product/${product.id}`}>
        <Image
          src={product.img}
          alt='ropa'
          w={['160px', '250px']}
          h={['170px', '250px']}
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
          <Box
            alignSelf='flex-start'
            fontWeight='bold'
            fontSize={['20px', '30px']}
            mt='5px'
          >
            {product.name}
          </Box>
        </Link>
        <Box>
          <Box>Cantidad: {product.quantity}</Box>
          <Box>Precio unitario: {product.price} $</Box>
          <Box>subtotal unitario: {product.price * product.quantity} $</Box>
        </Box>
        <GridItem crowSpan={4}>
          <CartQuantityController product={product} />
        </GridItem>
      </Grid>
      <Button m='5px' variant='ghost' onClick={handlerDelete} size='xs'>
        <VscChromeClose />
      </Button>
    </Grid>
  )
}
