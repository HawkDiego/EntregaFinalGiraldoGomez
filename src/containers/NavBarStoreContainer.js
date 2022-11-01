import { Grid, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import { FlexNavMobile } from '../components/NavFlexMobile'
import { NavFlexDesk } from '../components/NavFlexDesk'
import { CartNav } from '../components/CartNav'
import { Link, Outlet } from 'react-router-dom'

const NavBarStore = () => {
  const data = ['Hombre', 'Mujer', 'Infantil']
  return (
    <>
      <Grid
        bg='whitesmoke'
        templateColumns={'60% 1fr'}
        color='#525151'
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

        <Flex display={['none', 'none', 'flex']} justify='center' gap={5}>
          <Grid templateColumns='repeat(3, 1fr)' gap={5}>
            {data.map((dato, i) => (
              <NavFlexDesk key={i} dato={dato} />
            ))}
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
