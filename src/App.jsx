import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
import Products from './components/Products/Products'
import Navbar2 from './components/Navbar/Navbar2'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
     <Navbar2/>
     <Routes>
      <Route path='/*' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
