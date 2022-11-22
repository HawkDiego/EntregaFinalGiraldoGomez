import { useState, useEffect } from 'react'
import { useCartContext } from '../context/cartContext'
import { addOrder, getOrders } from '../api/orders'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

export const useCartForm = (total, allOrders) => {
  const [form, setForm] = useState({ name: '', email: '', phone: 0 })
  const [order, setOrder] = useState({})
  const { cartProducts, cleanCart } = useCartContext()
  const navigate = useNavigate()
  const toast = useToast()

  const itemsToOrder = cartProducts.map(({ id, name, quantity, price }) => ({
    id,
    productName: name,
    quantity,
    price,
  }))

  const emailValid = () => {
    let condition = allOrders?.map((item) => {
      if (item.buyer.email === order.buyer.email) return false
      return true
    })
    return condition.includes(false)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (emailValid()) {
      addOrder(order)
      cleanCart()
      navigate('/')
      toast({
        title: 'Orden creada',
        description: 'Tu orden fue creada con exito',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Correo no valido',
        description: 'Este correo ya tiene una orden en progreso',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }
  const handlerClick = () => {
    setOrder({
      itemsToOrder,
      buyer: {
        name: form.name,
        phone: form.phone,
        email: form.email,
      },
      total,
      status: 'create',
    })
  }

  return {
    form,
    setForm,
    order,
    setOrder,
    handlerSubmit,
    handlerChange,
    handlerClick,
  }
}
