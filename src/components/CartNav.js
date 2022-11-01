import { Center } from '@chakra-ui/react'
import { BiCart } from 'react-icons/bi'

import React from 'react'

export const CartNav = () => {
  return (
    <Center
      as='a'
      variant='ghost'
      aria-label='cart'
      my={5}
      w='50%'
      fontSize='30px'
      _hover={{
        opacity: '0.8',
      }}
    >
      <BiCart />
    </Center>
  )
}
