import React from 'react'
import { List } from '@chakra-ui/react'
import { Item } from '../components/Item'

export const ItemListContainer = () => {
  return (
    <List mt={3}>
      <Item />
    </List>
  )
}
