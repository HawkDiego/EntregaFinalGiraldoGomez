import React from 'react'
import { Grid, Flex, Image, Box } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'

export const Item = () => {
  return (
    <Flex direction='column' align='center'>
      <Grid templateRows='1fr auto'>
        <Image
          src='/buso.webp'
          alt='ropa'
          w='300px'
          h='350px'
          borderRadius='4px'
        />
        <Flex direction='column' m='0 5px' fontSize='20px' fontWeight='bold'>
          <Flex justify='space-between' mt='10px' mb='0'>
            <Box>Nombre</Box>
            <Box fontSize='30px'>
              <BsPlus />
            </Box>
          </Flex>
          <Box fontSize='20px' mb='8px' color='#525151' fontWeight='normal'>
            tipo
          </Box>
          <Box>precio</Box>
        </Flex>
      </Grid>
    </Flex>
  )
}
