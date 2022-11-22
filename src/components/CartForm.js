import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  Button,
  ModalBody,
  ModalFooter,
  Box,
} from '@chakra-ui/react'
import { useCartForm } from '../hooks/useCartForm'

export const CartForm = ({ onClose, total, allOrders }) => {
  const { handlerSubmit, handlerChange, handlerClick } = useCartForm(
    total,
    allOrders
  )

  return (
    <>
      <Grid as='form' onSubmit={(e) => handlerSubmit(e)}>
        <ModalBody>
          <FormControl
            display='flex'
            flexDir={'column'}
            alignItems='center'
            gap={3}
          >
            <FormLabel fontWeight='bold'>Nombre</FormLabel>
            <Input type='text' id='name' onChange={(e) => handlerChange(e)} />

            <FormLabel fontWeight='bold'>Correo</FormLabel>
            <Input type='email' id='email' onChange={(e) => handlerChange(e)} />

            <FormLabel fontWeight='bold'>Telefono</FormLabel>
            <Input
              type='number'
              id='phone'
              onChange={(e) => handlerChange(e)}
            />

            <Box alignSelf='flex-end' fontWeight='bold' fontSize='20px'>
              Total: {total}$
            </Box>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='red' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' type='submit' onClick={handlerClick}>
            Comprar
          </Button>
        </ModalFooter>
      </Grid>
    </>
  )
}
