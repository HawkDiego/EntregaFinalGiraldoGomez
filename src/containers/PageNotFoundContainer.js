import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { TiHome } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'
export const PageNotFoundContainer = () => {
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
        404 | Page Not Found
      </Box>
      <Box fontSize={['18px', '20px', '20px', '25px']}>
        Justo en una ruta que no existe... triste 🥲
      </Box>

      <Link to='/'>
        <Button
          leftIcon={<TiHome />}
          mt={10}
          fontSize={['20px', '20px', '20px', '25px']}
          h='50px'
          p='15px'
        >
          Volver al inicio
        </Button>
      </Link>
    </Flex>
  )
}
