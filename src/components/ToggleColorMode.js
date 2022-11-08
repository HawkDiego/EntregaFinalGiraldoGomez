import { Box, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { BsSun } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

export const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      variant='ghost'
      aria-label='cart'
      my={5}
      fontSize='25px'
      _hover={{
        opacity: '0.8',
      }}
      onClick={() => {
        toggleColorMode()
      }}
    >
      {colorMode === 'dark' ? <BsSun /> : <FaMoon />}
    </Box>
  )
}
