import { Box, Center, Flex } from '@chakra-ui/react'
import { BiCart } from 'react-icons/bi'

import React from 'react'

export const CartNav = () => {
  return (
    <>
      <Flex
        as='a'
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
        <Box w='64px' display='flex' position='relative'>
          <BiCart />
          <Box fontSize='20px' position='absolute' left='30' bottom='2'>
           1
          </Box>
        </Box>
      </Flex>
    </>
  )
}
