import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore'
import { db } from './config'

export const getProducts = async () => {
  const productsRef = collection(db, 'items')
  const products = []

  const querySnapshot = await getDocs(productsRef)
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id })
  })
  return products
}

export const getProductsById = async (id) => {
  const document = doc(db, 'items', id)
  const docSnap = await getDoc(document)
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  }
  return null
}

export const getProductsByCategory = async (category) => {
  const docSnap = query(
    collection(db, 'items'),
    where('category', '==', category)
  )
  const productList = []
  const querySnapshot = await getDocs(docSnap)
  querySnapshot.forEach((doc) => {
    productList.push({ ...doc.data(), id: doc.id })
  })
  return productList
}
