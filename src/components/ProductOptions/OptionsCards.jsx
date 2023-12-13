import React from 'react'
import useCategory from '../../customHooks/useCategory'
import ProductCard from '../ProductCard/ProductCard'

function OptionsCards({category}) {
    const [product]=useCategory(`${category}`)
  return (
    <>
    
        <div className='mx-auto ml-16 my-36'>
        <div className='md:grid md:grid-cols-3 md:gap-4 md:justify-center mx-8'>
        {product && product?.map((item,id)=>(
            <ProductCard  title={item.title} price={item.price} key={item.id} image={item.image}/>
        )
        )}
        </div>
        </div>
    </>
  )
}

export default OptionsCards