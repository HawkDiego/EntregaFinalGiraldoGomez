import { Box, Flex } from '@chakra-ui/react'
import { BiCart } from 'react-icons/bi'

import React from 'react'
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

export const CartNav = () => {
  const { cartProducts } = useCartContext()

  return (
    <>
      <Flex
        variant='ghost'
        aria-label='cart'
        my={5}
        w='50%'
        fontSize='30px'
        _hover={{
          opacity: '0.8',
        }}
        mr={['', '', '25px', '']}
        justifyContent='center'
      >
        <Link to='/cart'>
          <Box w='64px' display='flex' position='relative'>
            <BiCart />
            <Box fontSize='20px' position='absolute' left='30' bottom='2'>
              {cartProducts.length > 0 ? cartProducts.length : null}
            </Box>
          </Box>
        </Link>
      </Flex>
    </>
  )
}
