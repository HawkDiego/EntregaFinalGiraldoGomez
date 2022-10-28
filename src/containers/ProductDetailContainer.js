import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../api/getProducts'

const ProductDetailContainer = () => {
  const productId = useParams().productId
  const [product, setProduct] = useState(null)
  useEffect(() => {
    setProduct(getProductsById(productId))
  }, [productId])
  return <>{product ? <Box m='auto'>soy el detalle</Box> : <Box>...</Box>}</>
}

export default ProductDetailContainer
