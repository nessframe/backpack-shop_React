import { useState } from 'react'
import './App.scss'
import Catalog from './components/catalog/Catalog.jsx'
import Filter from './components/filter/Filter.jsx'
import Header from './components/header/Header.jsx'
import Intro from './components/intro/Intro.jsx'

function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Joly Bag', body: 'description about this product', cost: 980, currency: '$', img: 'joly-black-plus.webp'},
    {id: 2, title: 'Urban Plus', body: 'description about this product', cost: 830, currency: '$', img: 'joly-black-plus.webp'},
    {id: 3, title: 'Joly black plus', body: 'description about this product', cost: 890, currency: '$', img: 'joly-black-plus.webp'},
    {id: 4, title: 'Joly black plus', body: 'description about this product', cost: 890, currency: '$', img: 'joly-black-plus.webp'},
    {id: 6, title: 'Joly Bag', body: 'description about this product', cost: 980, currency: '$', img: 'joly-black-plus.webp'},
    {id: 8, title: 'Urban Plus', body: 'description about this product', cost: 830, currency: '$', img: 'joly-black-plus.webp'},
    {id: 9, title: 'Joly Bag', body: 'description about this product', cost: 980, currency: '$', img: 'joly-black-plus.webp'},
    {id: 10, title: 'Urban Plus', body: 'description about this product', cost: 830, currency: '$', img: 'joly-black-plus.webp'},
  ])

    return (
      <main className='App'>
            <Header />
            <Intro />
            <Filter />
            <Catalog 
              products={products}
            />
      </main>
    )
  }
  
export default App