import { Grid, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import { FlexNavMobile } from '../components/NavFlexMobile'
import { NavFlexDesk } from '../components/NavFlexDesk'
import { BiBorderRadius } from 'react-icons/bi'

const NavBarStore = () => {
  const data = ['Home', 'Shop', 'About', 'Contact']
  return (
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

      <Flex display={['none', 'none', 'flex', 'flex']} justify='flex-end'>
        {data.map((dato, i) => (
          <NavFlexDesk key={i} dato={dato} />
        ))}
      </Flex>

      <FlexNavMobile />
    </Grid>
  )
}

export default NavBarStore
