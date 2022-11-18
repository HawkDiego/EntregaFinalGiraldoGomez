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
import { useState } from 'react'

export const CartForm = ({ onClose, total }) => {
  const [form, setForm] = useState({ name: '', email: '', adress: '' })

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
    console.log(form)
  }
  return (
    <>
      <Grid as='form'>
        <ModalBody as='form'>
          <FormControl
            display='flex'
            flexDir={'column'}
            alignItems='center'
            gap={3}
          >
            <FormLabel fontWeight='bold'>Nombre</FormLabel>
            <Input type='text' id='name' onChange={(e) => handlerChange(e)} />

            <FormLabel fontWeight='bold'>Correo</FormLabel>
            <Input type='email' id='email' />

            <FormLabel fontWeight='bold'>Direccion</FormLabel>
            <Input type='text' id='adress' />

            <Box alignSelf='flex-end' fontWeight='bold' fontSize='20px'>
              Total: {total}$
            </Box>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='red' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' type='submit'>
            Comprar
          </Button>
        </ModalFooter>
      </Grid>
    </>
  )
}
