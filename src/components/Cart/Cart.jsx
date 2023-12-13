import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../utils/productSlice'
import {add,remove} from '../../utils/cartSlice'
import ProductCard from '../ProductCard/ProductCard'
import useFetch from '../../customHooks/useFetch'
import { useState } from 'react'

function Cart() {
  const dispatch=useDispatch()
  const products = useSelector((state) => state.product.cardCount)
  const counts = useSelector((state) => state.cart.count)
  const[anyProduct,setAnyProduct]=useState(false)
  const removeBtn=(product)=>{
    dispatch(removeFromCart(product))
    dispatch(remove())
  }
  if(counts===0){
    return <div className='mt-36 mb-[108px] text-3xl text-red-500 font-bold mx-36'>No Product available in Card!...Please add Some Products!!!</div>
  }

  else if(counts>0){
    return (
      <>
        <div className='mt-36'>
      {products?.map((item, id) => (
        
            <div key={item.id} class="w-[100%] mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden md:w-[800px] md:h-[130px]">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img class="h-48 w-32 object-cover md:object-fill md:h-28 md:w-28 my-3" src={item.image} />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-lg text-indigo-500 font-extrabold">{item.title.slice(0,20)}</div>
                  <a href="#" class="block mt-1 text-sm leading-tight font-extrabold text-red-700 hover:underline">Rs.{item.price}
                  </a>
  
                <div className="py-3"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>removeBtn(item.id)}>Remove</button></div>
                </div>
              </div>
            </div>
        ))}
        </div>
  
      </>
    )
  }
}

export default Cart