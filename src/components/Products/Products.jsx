import React from 'react'
import useCategory from '../../customHooks/useCategory'
import ProductCard from '../ProductCard/ProductCard'
import useFetch from '../../customHooks/useFetch'

function Products() {
    const [product]=useCategory('jewelery')
    const [data]=useFetch()

  return (
    <>
        {/* {product && product?.map((item,id)=>(
            <ProductCard title={item.title} price={item.price} key={item.id}/>
        ))} */}
        <div className='mt-36'>
        <div className='mx-auto ml-16 my-10'>
        <div className='md:grid md:grid-cols-3 md:gap-4 md:justify-center mx-8'>
        {data && data?.map((item,id)=>(
          // console.log(item)
            <ProductCard title={item.title} price={item.price} key={item.id} id={item.id} item={item} image={item.image}/>
        )
        )}
        </div>
        </div>
        </div>
    </>
  )
}

export default Products