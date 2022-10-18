import React from 'react'
import { Text } from '@chakra-ui/react'

export const ItemListContainer = ({ greeting }) => {
  return (
    <Text fontSize='4xl' align='center' mt='20px'>
      {greeting}
    </Text>
  )
}
