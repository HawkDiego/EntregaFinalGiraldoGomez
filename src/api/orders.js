import { db } from './config'
import { addDoc, collection } from 'firebase/firestore'
import { redirect } from 'react-router-dom'

const ordersRef = collection(db, 'orders')

export const addOrder = async (order) => {
  const orderDoc = await addDoc(ordersRef, order)
  console.log({ orderDoc })
  redirect('/')
  return orderDoc.id
}
