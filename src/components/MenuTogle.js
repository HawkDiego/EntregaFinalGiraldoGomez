import React, { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
  Image,
  Box,
} from '@chakra-ui/react'

import { MdMenu, MdClose } from 'react-icons/md'

export const MenuTogle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [menu, setMenu] = useState(true)

  const btnRef = React.useRef()
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          onOpen()
          setMenu(false)
        }}
        variant='ghost'
        as='a'
        my={5}
        w='100%'
      >
        <Text fontSize={25}>{menu ? <MdMenu /> : <MdClose />}</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => {
          setMenu(true)
          onClose()
        }}
        finalFocusRef={btnRef}
        placement='left'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader m='auto'>
            <Flex>
              <Image
                src='/icon.jpg'
                objectFit='cover'
                boxSize={['60px', '80px']}
                borderRadius='20px'
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody
            color='#525151'
            fontWeight='bold'
            gap={5}
            display='flex'
            flexDirection='column'
            fontSize='22px'
          >
            <Box>Home</Box>

            <Box>Shop</Box>

            <Box>Contact</Box>

            <Box>Contact</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
