import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { TiHome } from 'react-icons/ti'
import { FaHeartBroken } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'
export const CartError = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
      b='whitesmoke'
      color={colorMode === 'dark' ? 'whitesmoke' : '#525151'}
      mt='20px'
    >
      <Box
        fontSize={['25px', '30px', '40px', '55px']}
        fontWeight='600'
        display='flex'
        gap={5}
        alignItems='center'
      >
        Tu carrito se encuentra vacio <FaHeartBroken />
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
