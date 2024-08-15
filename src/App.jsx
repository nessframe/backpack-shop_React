import { useState } from 'react'
import './App.scss'
import Catalog from './components/catalog/Catalog.jsx'
import Filter from './components/filter/Filter.jsx'
import Header from './components/header/Header.jsx'
import Intro from './components/intro/Intro.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Jolly Bag', body: 'description about this product', cost: 980, currency: '$', img: 'joly-bag.webp'},
    {id: 2, title: 'Urban Plus', body: 'description about this product', cost: 830, currency: '$', img: 'joly-bag.webp'},
    {id: 3, title: 'Nicko Plus', body: 'description about this product', cost: 890, currency: '$', img: 'joly-bag.webp'},
    {id: 4, title: 'Sweet Bag', body: 'description about this product', cost: 890, currency: '$', img: 'joly-bag.webp'},
    {id: 5, title: 'Samurai Bag', body: 'description about this product', cost: 980, currency: '$', img: 'joly-bag.webp'},
    {id: 6, title: 'Tripman Bag', body: 'description about this product', cost: 980, currency: '$', img: 'joly-bag.webp'},
  ])

    return (
      <main className='App'>
            <Header />
            <Intro />
            <Filter />
            <Catalog 
              products={products}
            />
            <Footer />
      </main>
    )
  }
  
export default App