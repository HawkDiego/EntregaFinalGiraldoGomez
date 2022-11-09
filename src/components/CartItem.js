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
      templateColumns='auto auto auto'
      mt='20'
      border='solid 2px'
      fontSize='20px'
    >
      <Link to={`/product/${product.id}`}>
        <Box w={['120px','100%']} >
          <Image
            src={product.img}
            alt='ropa'
            w='250px'
            h={['170px', '250px']}
            borderRadius='4px'
          />
        </Box>
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
          <Box>{product.category}</Box>
          <Box>{product.price}</Box>
        </Box>
        <GridItem crowSpan={4}>
          <CartQuantityController product={product} />
        </GridItem>
      </Grid>
      <GridItem>
        <Button m='5px' variant='ghost' onClick={handlerDelete}>
          <VscChromeClose />
        </Button>
      </GridItem>
    </Grid>
  )
}
