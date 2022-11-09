import React, { useState } from 'react'
import { Grid, Button, Center } from '@chakra-ui/react'
import { BsPlus, BsDash } from 'react-icons/bs'

export const Contador = ({contador, setConatdor}) => {
  
  const handlerPlus = () => {
    setConatdor(contador + 1)
  }

  const handlerLess = () => {
    contador > 1 ? setConatdor(contador - 1) : setConatdor(1)
  }

  return (
    <Grid templateColumns={'1fr 1fr 1fr'}>
      <Button fontSize='30px' variant='ghost' onClick={handlerLess}>
        <BsDash />
      </Button>
      <Center>{contador}</Center>
      <Button fontSize='30px' variant='ghost' onClick={handlerPlus}>
        <BsPlus />
      </Button>
    </Grid>
  )
}
