import React from 'react'
import { Box, Center, useColorMode } from '@chakra-ui/react'
import { Item } from '../components/Item'
import { products } from '../api/getProducts'

const ItemContainer = () => {
  const {colorMode} = useColorMode()
  return (
    <>
      <Center fontSize='40px' mt={10} fontWeight='bold' color={colorMode === 'dark' ? 'whitesmoke' : '#525151'}>
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
        {products.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </Box>
    </>
  )
}

export default ItemContainer
