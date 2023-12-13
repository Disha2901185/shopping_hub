import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../utils/productSlice'
import useFetch from '../../customHooks/useFetch'
import { add } from '../../utils/cartSlice'
import { NavLink } from 'react-router-dom'

function ProductCard({title,price,image,id,item}) {
    const [data]=useFetch()
    const dispatch=useDispatch()

    const addToCartBtn=(product)=>{
        dispatch(addToCart(product))
        dispatch(add())
    }

  return (
    <div>
        
        <NavLink to=''>
        <div className=''>
        <div className="inline-block w-full md:max-w-[250px] max-w-[330px] mx-2 bg-white border border-gray-200 rounded-xl rounded-t-lg shadow  hover:-translate-y-4 hover:-translate-x-1 hover:shadow-xl  hover:drop-shadow-2xl dark:hover:shadow-blue-800/50 hover:shadow-slate-600/50 hover:duration-500  dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img src={image} alt="product image" className='h-48 w-full overflow-hidden rounded-lg p-8 rounded-t-lg'/>
    </a>
    <div className="px-5 pb-5 pt-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title.slice(0,23)}</h5>
        </a>
        
        <div className="flex items-center justify-between pt-5">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs.{price}</span>
            
        </div>
        <div className='py-5'>
        <button className='"text-white bg-blue-600 hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500  dark:focus:ring-blue-800' onClick={()=>addToCartBtn(item)}>Add to Cart</button>
        </div>
    </div>
</div>
        </div>
        </NavLink>

    </div>
  )
}

export default ProductCard