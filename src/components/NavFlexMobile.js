import React from 'react'
import { MenuTogle } from './MenuTogle'
import { BiCart } from 'react-icons/bi'
import { Flex, Button } from '@chakra-ui/react'

export const FlexNavMobile = () => {
  return (
    <Flex display={['flex', 'flex', 'none']} justify='flex- end'>
      <Button
        as='a'
        variant='ghost'
        aria-label='Contact'
        my={5}
        w='100%'
        fontSize={25}
        color='grayDark'
      >
        <BiCart />
      </Button>

      <MenuTogle />
    </Flex>
  )
}
