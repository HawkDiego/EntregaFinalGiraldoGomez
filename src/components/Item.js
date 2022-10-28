import React from 'react'
import { Grid, Flex, Image, Box, Button } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'

export const Item = () => {
  return (
    <Flex direction='column' align='center' _hover={{
      opacity:'0.8'
    }}>
      <Grid templateRows='1fr auto'>
        <Image
          src='/product.jpeg'
          alt='ropa'
          w='300px'
          h='350px'
          borderRadius='4px'
        />
        <Flex direction='column' m='0 5px' fontSize='20px' fontWeight='bold'>
          <Flex justify='space-between' mt='10px' mb='0'>
            <Box>Nombre</Box>
            <Button fontSize='30px' variant='ghost'>
              <BsPlus />
            </Button>
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
