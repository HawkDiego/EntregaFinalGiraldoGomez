import { Grid, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import { FlexNavMobile } from '../components/NavFlexMobile'
import { NavFlexDesk } from '../components/NavFlexDesk'
import { CartNav } from '../components/CartNav'
import { Outlet } from 'react-router-dom'

const NavBarStore = () => {
  const data = ['Hombre', 'Mujer', 'Niño']
  return (
    <>
      <Grid
        bg='whitesmoke'
        templateColumns={'2fr 1fr'}
        color='#525151'
        alignItems='center'
        as='nav'
      >
        <Flex align='center' m='10px 0px 10px 25px'>
          <Image
            src='/icon.jpg'
            objectFit='cover'
            boxSize={['70px', '70px', '80px']}
            borderRadius='20'
          />
        </Flex>

        <Flex display={['none', 'none', 'flex']} justify='center'>
          {data.map((dato, i) => (
            <NavFlexDesk key={i} dato={dato} />
          ))}
          <CartNav />
        </Flex>

        <FlexNavMobile />
      </Grid>
      <Outlet />
    </>
  )
}

export default NavBarStore
