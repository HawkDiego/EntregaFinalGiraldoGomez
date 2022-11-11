import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyAOfEHtTotQbu1VJLnMjmMn9QPIGkxXAAQ',
  authDomain: 'codershop-ba079.firebaseapp.com',
  projectId: 'codershop-ba079',
  storageBucket: 'codershop-ba079.appspot.com',
  messagingSenderId: '804491362583',
  appId: '1:804491362583:web:f86c1a0c2688c56f017752',
}
// Initialize firebase
const app = initializeApp(firebaseConfig)
//Conexion con la base de datos
export const db = getFirestore(app)
