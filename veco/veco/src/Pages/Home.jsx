
import Hero from '../Components/Hero'
import Advantages from '../Components/Advantages'
import Catalog from '../Components/Catalog'

import Products from '../Components/Products'

import Infinite from '../Components/Infinite'
import Footer from '../Components/Footer'

import { useEffect } from 'react'
import PreLoader from './PreLoader'
function Home() {
  
  return (
    <div>

    <Hero />
    <Advantages />
    <Catalog />
    <Products />
   <Infinite />
   <Footer />
    </div>
  )
}

export default Home