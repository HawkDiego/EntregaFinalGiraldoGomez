import React from 'react'
import { Grid, Flex, Image, Box, Button } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  console.log(props)
  const { name, id, img, category, price } = props
  return (
    <Flex
      direction='column'
      align='center'
      _hover={{
        opacity: '0.8',
      }}
    >
      <Grid templateRows='1fr auto'>
        <Link to='product/1'>
          <Image
            src={img}
            alt='ropa'
            w='300px'
            h='350px'
            borderRadius='4px'
          />
        </Link>
        <Flex direction='column' m='0 5px' fontSize='20px' fontWeight='bold'>
          <Flex justify='space-between' mt='10px' mb='0'>
            <Box>{name}</Box>
            <Button fontSize='30px' variant='ghost'>
              <BsPlus />
            </Button>
          </Flex>
          <Box fontSize='20px' mb='8px' color='#525151' fontWeight='normal'>
            {category}
          </Box>
          <Box>{price}</Box>
        </Flex>
      </Grid>
    </Flex>
  )
}
