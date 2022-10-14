import React from 'react'
import { Button } from '@chakra-ui/react'
export const NavFlexDesk = ({dato}) => {
  return (
    <Button
      as='a'
      variant='ghost'
      aria-label={dato}
      my={5}
      w='100%'
    >
      {dato}
    </Button>
  )
}
