import React from 'react'
import { Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const NavFlexDesk = ({ dato }) => {
  return (
    <Link to={`/category/${dato}`}>
      <Center
        as='a'
        variant='ghost'
        aria-label={dato}
        my={5}
        w='100%'
        fontSize='20px'
        fontWeight='bold'
        _hover={{
          opacity: '0.8',
        }}
      >
        {dato}
      </Center>
    </Link>
  )
}
