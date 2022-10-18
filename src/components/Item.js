import React from 'react'
import { ListItem, Flex, Image, Box } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'

export const Item = () => {
  return (
    <Flex direction='column' align='center' mt='45px' gap='25px'>
      <ListItem display='grid' gridTemplateRows='1fr auto'>
        <Image src='/buso.webp' alt='ropa' w='300px' h='400px' />
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
      </ListItem>
    </Flex>
  )
}
