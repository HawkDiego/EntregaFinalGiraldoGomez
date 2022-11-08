import React from 'react'
import { MenuTogle } from './MenuTogle'
import { Flex, Box } from '@chakra-ui/react'
import { ToggleColorMode } from './ToggleColorMode'
import { CartNav } from './CartNav'

export const FlexNavMobile = () => {
  return (
    <Flex display={['flex', 'flex', 'none']} justify='flex- end' align='center'>
      <Box variant='ghost' aria-label='Contact' my={5} w='100%' fontSize={25}>
        <CartNav />
      </Box>
      <ToggleColorMode />
      <MenuTogle />
    </Flex>
  )
}
