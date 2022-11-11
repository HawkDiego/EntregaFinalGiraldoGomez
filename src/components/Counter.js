import React from 'react'
import { Grid, Button, Center } from '@chakra-ui/react'
import { BsPlus, BsDash } from 'react-icons/bs'

export const Counter = ({ counter, setCounter }) => {
  const handlerPlus = () => {
    setCounter(counter + 1)
  }

  const handlerLess = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(1)
  }

  return (
    <Grid templateColumns={'1fr 1fr 1fr'}>
      <Button fontSize='30px' variant='ghost' onClick={handlerLess}>
        <BsDash />
      </Button>
      <Center>{counter}</Center>
      <Button fontSize='30px' variant='ghost' onClick={handlerPlus}>
        <BsPlus />
      </Button>
    </Grid>
  )
}
