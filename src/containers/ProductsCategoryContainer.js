import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../api/getProducts'
import { Item } from '../components/Item'
import { Box, Center, Spinner, useColorMode } from '@chakra-ui/react'

export const ProductsCategoryContainer = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState(null)
  useEffect(() => {
    getProductsByCategory(categoryId.toLowerCase()).then((data) =>
      setProducts(data)
    )
  }, [categoryId])
  const { colorMode } = useColorMode()
  return (
    <>
      <Center
        fontSize='40px'
        mt={10}
        fontWeight='bold'
        color={colorMode === 'dark' ? 'whitesmoke' : '#525151'}
      >
        {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
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
        {products && products[0].category === categoryId ? (
          products.map((product) => <Item product={product} key={product.id} />)
        ) : (
          <Spinner
            color='#525151'
            size='xl'
            thickness='4px'
            speed='0.65s'
            emptyColor='#e2e8f0'
          />
        )}
      </Box>
    </>
  )
}
