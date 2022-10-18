import { Button } from '@chakra-ui/react'
import { BiCart } from 'react-icons/bi'

import React from 'react'

export const CartNav = () => {
  return (
    <Button
      as='a'
      variant='ghost'
      aria-label='cart'
      my={5}
      w='100%'
      fontSize='30px'
    >
      <BiCart/>
    </Button>
  )
}
