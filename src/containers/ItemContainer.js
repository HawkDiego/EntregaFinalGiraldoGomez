import React from 'react'
import { Wrap } from '@chakra-ui/react'
import { Item } from '../components/Item'

export const ItemListContainer = () => {
  return (
    <Wrap
      as='section'
      justify='center'
      align='center'
      direction={['column', 'column', 'column', 'row']}
      spacingX='15px'
      mt='30px'
    >
      <Item />
      <Item />
      <Item />
    </Wrap>
  )
}
