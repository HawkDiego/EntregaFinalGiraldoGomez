import React, { useEffect, useState } from 'react'
import { Box, Center, Spinner, useColorModeValue } from '@chakra-ui/react'
import { Item } from '../components/Item'
import { getProducts } from '../api/products'

const ItemContainer = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

  const colorValue = useColorModeValue('#525151', 'whitesmoke')
  return (
    <>
      <Center fontSize='40px' mt={10} fontWeight='bold' color={colorValue}>
        Todos los productos
      </Center>
      <Box
        as='section'
        justifyContent='center'
        alignItems='center'
        direction={['column', 'column', 'column', 'row']}
        gap={[20, 20, 20, 15]}
        flexWrap='wrap'
        mt='30px'
        display={['flex', 'flex', 'flex', 'grid']}
        gridTemplateColumns={['', '', '', 'repeat(3, auto)']}
      >
        {products ? (
          products?.map((product) => (
            <Item product={product} key={product.id} />
          ))
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  )
}

export default ItemContainer
