import { useState } from 'react'
import './App.scss'
import Catalog from './components/catalog/Catalog.jsx'
import Filter from './components/filter/Filter.jsx'
import Header from './components/header/Header.jsx'
import Intro from './components/intro/Intro.jsx'
import Footer from './components/footer/Footer.jsx'
import { useFilter } from './hooks/useFilter.js'

function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Joly Bag', body: 'description about this product', cost: 1080, currency: '$', img: 'joly-bag.webp'},
    {id: 2, title: 'Urban Plus', body: 'description about this product', cost: 2830, currency: '$', img: 'joly-bag.webp'},
    {id: 3, title: 'Nicko Plus', body: 'description about this product', cost: 1090, currency: '$', img: 'joly-bag.webp'},
    {id: 4, title: 'Sweet Bag', body: 'description about this product', cost: 690, currency: '$', img: 'joly-bag.webp'},
    {id: 5, title: 'Samurai Bag', body: 'description about this product', cost: 980, currency: '$', img: 'joly-bag.webp'},
    {id: 6, title: 'Tripman Bag', body: 'description about this product', cost: 280, currency: '$', img: 'joly-bag.webp'},

    {id: 7, title: 'AL boy', body: 'description about this product', cost: 1900, currency: '$', img: 'joly-bag.webp'},
    {id: 8, title: 'Lyux', body: 'description about this product', cost: 830, currency: '$', img: 'joly-bag.webp'},
    {id: 9, title: 'Bibi Plus', body: 'description about this product', cost: 1090, currency: '$', img: 'joly-bag.webp'},
    {id: 10, title: 'ZXC Bag', body: 'description about this product', cost: 1690, currency: '$', img: 'joly-bag.webp'},
    {id: 11, title: 'Otako Bag', body: 'description about this product', cost: 200, currency: '$', img: 'joly-bag.webp'},
    {id: 12, title: 'FUCKY Bag', body: 'description about this product', cost: 870, currency: '$', img: 'joly-bag.webp'},

    {id: 13, title: 'lili bag', body: 'description about this product', cost: 2080, currency: '$', img: 'joly-bag.webp'},
    {id: 14, title: 'cho', body: 'description about this product', cost: 230, currency: '$', img: 'joly-bag.webp'},
    {id: 15, title: 'eibi Plus', body: 'description about this product', cost: 90, currency: '$', img: 'joly-bag.webp'},
    {id: 16, title: 'L Bag', body: 'description about this product', cost: 690, currency: '$', img: 'joly-bag.webp'},
    {id: 17, title: 'Query Bag', body: 'description about this product', cost: 480, currency: '$', img: 'joly-bag.webp'},
    {id: 18, title: 'kiki Bag', body: 'description about this product', cost: 1280, currency: '$', img: 'joly-bag.webp'},
  ])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  const [query, setQuery] = useState('')
  const [price, setPrice] = useState('')
  const [sort, setSort] = useState('')
  const filteringProducts = useFilter(products, price, sort, query)

    return (
      <main className='App'>
            <Header 
              windowWidth={windowWidth}
            />
            <Intro />
            <Filter 
              setPrice={setPrice}
              setSort={setSort}
              inputQuery={query}
              setQuery={setQuery}
            />
            <Catalog 
              products={filteringProducts}
            />
            <Footer 
              windowWidth={windowWidth}
            />
      </main>
    )
  }
  
export default App