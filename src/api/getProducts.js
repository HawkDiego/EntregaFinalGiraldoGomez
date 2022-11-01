const products = [
  {
    name: 'Buso gris',
    category: 'hombre',
    id: '1',
    price: '10 $',
    img: '/hombre/buso-gris.jpeg',
  },
  {
    name: 'Dino buso',
    category: 'mujer',
    id: '2',
    price: '10 $',
    img: '/mujer/buso-dino.jpeg',
  },
  {
    name: 'Buso de oso',
    category: 'mujer',
    id: '3',
    price: '10 $',
    img: '/mujer/buso-oso.jpg',
  },
  {
    name: 'Buso militar',
    category: 'hombre',
    id: '4',
    price: '10 $',
    img: '/hombre/buso-militar.jpeg',
  },
  {
    name: 'Buso blanco',
    category: 'infantil',
    id: '5',
    price: '10 $',
    img: '/infantil/buso-blanco.webp',
  },
  {
    name: 'Buso negro',
    category: 'infantil',
    id: '6',
    price: '10 $',
    img: '/infantil/buso-negro.webp',
  },
  {
    name: 'Camibuso',
    category: 'hombre',
    id: '7',
    price: '10 $',
    img: '/hombre/Camibuso.jpeg',
  },
  {
    name: 'Buso de gato',
    category: 'mujer',
    id: '8',
    price: '10 $',
    img: '/mujer/buso-gato.jpeg',
  },
  {
    name: 'Conjunto infantil',
    category: 'infantil',
    id: '9',
    price: '10 $',
    img: '/infantil/conjunto-infantil.webp',
  }
]

const getProductsById = (id)=>{
  let data = products.find(product => product.id === id)
  return data
}

const getProductsByCategory = (category) => {
  let data = products.filter(product => product.category === category)
  return data

}

export {
  getProductsByCategory,
  getProductsById,
  products
}