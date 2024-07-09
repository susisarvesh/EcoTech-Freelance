

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Advantages from './Components/Advantages'
import Catalog from './Components/Catalog'
import Full from './Components/Full'
import Products from './Components/Products'
import About from './Components/About'
import Infinite from './Components/Infinite'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductUsage from './Pages/ProductUsage'
import Contact from './Pages/Contact'
function App() {
 

  return (

    <>
    <Routes>
      <Route path='/' element={<Navbar />}>
      <Route index element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
       <Route path='products' element={<ProductUsage/>}></Route>
       <Route path='contact' element={<Contact/>}></Route>

      
      </Route>
    </Routes>
    
    </>
  )
}

export default App
