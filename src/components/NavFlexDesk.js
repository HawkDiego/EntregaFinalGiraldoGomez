import React from 'react'
import { Center } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
export const NavFlexDesk = () => {
  const { categoryId } = useParams()

  return (
    <>
      <Link to={`/category/hombre`}>
        <Center
          my={5}
          fontSize='20px'
          fontWeight='bold'
          _hover={{
            opacity: '0.8',
          }}
          opacity={categoryId === 'hombre' ? '0.8' : '1'}
          textDecoration={categoryId ==='hombre' ? 'underline' : ''}
        >
          Hombre
        </Center>
      </Link>
      <Link to={`/category/mujer`}>
        <Center
          my={5}
          fontSize='20px'
          fontWeight='bold'
          _hover={{
            opacity: '0.8',
          }}
          opacity={categoryId === 'mujer' ? '0.8' : '1'}
          textDecoration={categoryId ==='mujer' ? 'underline' : ''}
        >
          Mujer
        </Center>
      </Link>
      <Link to={`/category/infantil`}>
        <Center
          my={5}
          fontSize='20px'
          fontWeight='bold'
          _hover={{
            opacity: '0.8',
          }}
          opacity={categoryId==='infantil' ? '0.8' : '1'}
          textDecoration={categoryId ==='infantil' ? 'underline' : ''}
        >
          Infantil
        </Center>
      </Link>
    </>
  )
}
