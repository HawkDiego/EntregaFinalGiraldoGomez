import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react'
import { CartForm } from './CartForm'

export const CartCheckOutModal = ({ isOpen, onClose, total, allOrders }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={['xs', 'md']}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Checkout</ModalHeader>
        <ModalCloseButton />
        <CartForm onClose={onClose} total={total} allOrders={allOrders} />
      </ModalContent>
    </Modal>
  )
}
