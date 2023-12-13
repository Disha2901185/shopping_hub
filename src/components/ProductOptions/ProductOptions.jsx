import React from 'react'
import { NavLink } from 'react-router-dom'



function ProductOptions() {
    
  return (
    <div>
        <ul className='mt-28 flex justify-center dark:text-white md:text-2xl font-bold font-sans'>
            <li className='curson-pointer md:mx-5 mx-2 hover:text-blue-700 '>
                <NavLink className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            } to='/*'>All Products</NavLink>
            </li>
            <li className='curson-pointer md:mx-5 mx-2 hover:text-blue-700 '>
                <NavLink className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            } to='/category/men'>Men's Clothes</NavLink>
            </li>
        
            <li className='curson-pointer md:mx-5 mx-2 hover:text-blue-700 '>
                <NavLink className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            } to='/category/women'>Women's Clothes</NavLink>
            </li>
        
            <li className='curson-pointer md:mx-5 mx-2 hover:text-blue-700 '>
                <NavLink className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            } to='/category/jewelery'>Jewelery</NavLink>
            </li>
      
            <li className='curson-pointer md:mx-5 mx-2 hover:text-blue-700 '>
                <NavLink className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            } to='/category/electronics'>Electronics</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default ProductOptions