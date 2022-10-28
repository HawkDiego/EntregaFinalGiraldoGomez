import React from 'react'
import { Wrap } from '@chakra-ui/react'
import { Item } from '../components/Item'
import { products } from '../api/getProducts'


 const ItemContainer = () => {
  console.log(products)
  return (
    <Wrap
      as='section'
      justify='center'
      align='center'
      direction={['column', 'column', 'column', 'row']}
      spacingX='15px'
      mt='30px'
    >
      {products.map(product => (<Item props={product} key={product.id} />))}
  
    </Wrap>
  )
}


export default ItemContainer