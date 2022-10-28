import React from 'react'
import { Box } from '@chakra-ui/react'
import { Item } from '../components/Item'
import { products } from '../api/getProducts'

const ItemContainer = () => {
  return (
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
  )
}

export default ItemContainer
