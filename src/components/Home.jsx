import Carousel from './Carousel/CarouselSection'
import Navbar2 from './Navbar/Navbar2'
import OptionsCards from './ProductOptions/OptionsCards'
import ProductOptions from './ProductOptions/productOptions'
import Products from './Products/Products'
import { Routes,Route } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* <Navbar2/>       */}
      <Carousel/>
      <ProductOptions/>
      <Routes>
        <Route path='/*' element={<Products/>}/>
        <Route path='/category/men' element={<OptionsCards category={`men's clothing`}/>}/>
        <Route path='/category/women' element={<OptionsCards category={`women's clothing`}/>}/>
        <Route path='/category/jewelery' element={<OptionsCards category={`jewelery`}/>}/>
        <Route path='/category/electronics' element={<OptionsCards category={`electronics`}/>}/>
      
      </Routes>
      {/* <Products/> */}

    </>
  )
}

export default Home