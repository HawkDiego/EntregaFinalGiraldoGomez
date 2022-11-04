import React from 'react'
import { MenuTogle } from './MenuTogle'
import { BiCart } from 'react-icons/bi'
import { Flex, Button, Box } from '@chakra-ui/react'
import { ToggleColorMode } from './ToggleColorMode'

export const FlexNavMobile = () => {
  return (
    <Flex display={['flex', 'flex', 'none']} justify='flex- end' align='center'>
      <Box
        variant='ghost'
        aria-label='Contact'
        my={5}
        w='100%'
        fontSize={25}
      >
        <BiCart />
      </Box>
      <ToggleColorMode />
      <MenuTogle />
    </Flex>
  )
}
