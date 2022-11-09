import React from 'react'
import { Grid, Flex, Image, Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AddToCart } from './AddToCart'

export const Item = ({ product }) => {
  return (
    <Flex
      direction='column'
      align='center'
      _hover={{
        opacity: '0.8',
      }}
    >
      <Grid templateRows='1fr auto'>
        <Link to={`/product/${product.id}`}>
          <Image
            src={product.img}
            alt='ropa'
            w='300px'
            h='350px'
            borderRadius='4px'
          />

          <Flex direction='column' m='0 5px' fontSize='20px' fontWeight='bold'>
            <Flex justify='space-between' mt='10px' mb='0'>
              <Box>{product.name}</Box>
              <AddToCart product={product} />
            </Flex>
            <Box fontSize='20px' mb='8px' fontWeight='normal'>
              {product.category}
            </Box>
            <Box>{product.price}</Box>
          </Flex>
        </Link>
      </Grid>
    </Flex>
  )
}
