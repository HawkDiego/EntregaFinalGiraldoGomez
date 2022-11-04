import { Grid, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import { FlexNavMobile } from '../components/NavFlexMobile'
import { NavFlexDesk } from '../components/NavFlexDesk'
import { CartNav } from '../components/CartNav'
import { Link, Outlet } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'

const NavBarStore = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Grid
        bg={colorMode === 'dark' ? 'gray.700' : 'whitesmoke'}
        templateColumns={'2fr  1fr'}
        color={colorMode === 'dark' ? 'whitesmoke' : '#525151'}
        alignItems='center'
        as='nav'
      >
        <Flex align='center' m='10px 0px 10px 25px'>
          <Link to='/'>
            <Image
              src='/icon.jpg'
              objectFit='cover'
              boxSize={['70px', '70px', '80px']}
              borderRadius='20'
            />
          </Link>
        </Flex>

        <Flex display={['none', 'none', 'flex']} justify='center' gap={5} align='center'>
          <Grid templateColumns='repeat(4, 1fr)' gap={5}>
            <NavFlexDesk />
          </Grid>
          <CartNav />
        </Flex>

        <FlexNavMobile />
        
      </Grid>

      <Outlet />
    </>
  )
}

export default NavBarStore
