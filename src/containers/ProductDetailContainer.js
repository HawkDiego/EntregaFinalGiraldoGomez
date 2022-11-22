import { Box, Grid, Flex, Image, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../api/products'
import { AddToCart } from '../components/AddToCart'
import { Counter } from '../components/Counter'

const ProductDetailContainer = () => {
  const [counter, setCounter] = useState(1)
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductsById(productId).then((data) => {
      setProduct(data)
    })
  }, [productId])

  return (
    <>
      {product ? (
        <Flex direction='column' align='center' justify='center' h='90vh'>
          <Grid templateRows='1fr'>
            <Image
              src={product.img}
              alt='ropa'
              w={['300px', '300px', '300px', '400px']}
              h={['350px', '350px', '350px', '450px']}
              borderRadius='4px'
            />

            <Flex
              direction='column'
              m='0 5px'
              fontSize='20px'
              fontWeight='bold'
            >
              <Flex justify='space-between' mt='10px' mb='0'>
                <Box>{product.name}</Box>
                <Box>{product.price} $</Box>
              </Flex>
              <Box fontSize='20px' mb='8px' fontWeight='normal'>
                {product.category}
              </Box>
              <Counter counter={counter} setCounter={setCounter} />

              <Flex justify='center' margin={5}>
                <AddToCart product={product} quantity={counter} />
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      ) : (
        <Flex direction='column' align='center' justify='center' h='90vh'>
          <Spinner
            color='#525151'
            size='xl'
            thickness='4px'
            speed='0.8s'
            emptyColor='#e2e8f0'
          />
        </Flex>
      )}
    </>
  )
}

export default ProductDetailContainer
