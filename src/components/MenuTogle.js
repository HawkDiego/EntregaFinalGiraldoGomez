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
  useColorMode,
} from '@chakra-ui/react'

import { MdMenu, MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const MenuTogle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [menu, setMenu] = useState(true)

  const btnRef = React.useRef()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          onOpen()
          setMenu(false)
        }}
        variant='ghost'
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
            color={colorMode === 'dark' ? 'whitesmoke' : '#525151'}
            fontWeight='bold'
            gap={5}
            display='flex'
            flexDirection='column'
            fontSize='22px'
          >
            <Link
              to='/category/hombre'
              onClick={() => {
                setMenu(true)
                onClose()
              }}
            >
              <Box>Hombre</Box>
            </Link>
            <Link
              to='/category/mujer'
              onClick={() => {
                setMenu(true)
                onClose()
              }}
            >
              <Box>Mujer</Box>
            </Link>
            <Link
              to='/category/infantil'
              onClick={() => {
                setMenu(true)
                onClose()
              }}
            >
              <Box>Infantil</Box>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
