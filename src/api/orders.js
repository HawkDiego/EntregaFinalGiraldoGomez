import { db } from './config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { redirect } from 'react-router-dom'

const ordersRef = collection(db, 'orders')

export const addOrder = async (order) => {
  const orderDoc = await addDoc(ordersRef, order)
  console.log({ orderDoc })
  redirect('/')
  return orderDoc.id
}

export const getOrders = async () => {
  const ordersRef = collection(db, 'orders')
  const orders = []

  const querySnapshot = await getDocs(ordersRef)
  querySnapshot.forEach((doc) => {
    orders.push({ ...doc.data(), id: doc.id })
  })
  return orders
}
