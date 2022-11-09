import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { TiHome } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'
export const CartError = () => {
  const {colorMode} = useColorMode()
  return (
    <Flex
      h='30vh'
      justify='center'
      align='center'
      direction='column'
      b='whitesmoke'
      color={colorMode === 'dark' ? 'whitesmoke' : '#525151'}
    >
      <Box fontSize={['38px', '40px', '40px', '55px']} fontWeight='600'>
        Tu carrito se encuentra vacio 💔
      </Box>
      <Box fontSize={['18px', '20px', '20px', '25px']}>
        Volvamos a buscar algo que te guste...
      </Box>

      <Link to='/'>
        <Button
          leftIcon={<TiHome />}
          mt={10}
          fontSize={['20px', '20px', '20px', '25px']}
          h='50px'
          p='15px'
        >
          Vamos a llenarlo
        </Button>
      </Link>
    </Flex>
  )
}
