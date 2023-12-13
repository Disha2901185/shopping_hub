import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <div className='h-40 md:h-14  bg-slate-300 md:flex dark:bg-slate-700 justify-between items-center'>
        <div className='flex items-center'>
          <div>
            <img className="h-12 mt-2 px-3 fill-blue-600" src="https://thumbs.dreamstime.com/b/vector-shopping-bag-logo-icon-blue-letter-s-detailed-illustration-isolated-white-141489270.jpg" alt="" />
          </div>
          <div className='text-blue-400 tracking-wider font-bold font-sans md:text-2xl text-xl'> Shopping Hub</div>
        </div>
        <div>
          <ul className='md:flex md:py-3 py-2 dark:text-blue-400 text-blue-800 font-semibold text-lg dark:border-y-1'>
            <li className='md:mx-2 cursor-pointer md:dark:border-none dark:border-y text-2xl tracking-wider py-2 px-5 dark:bg-slate-600 md:dark:bg-slate-700 hover:-translate-y-1 hover:duration-200 hover:text-purple-400 hover:font-bold'><Link to='/'>Home</Link></li>
            <li className='md:mx-2 cursor-pointer md:dark:border-none dark:border-y text-2xl tracking-wider py-2 px-5 dark:bg-slate-600 md:dark:bg-slate-700 hover:-translate-y-1 hover:duration-200 hover:text-purple-400 hover:font-bold'><Link to='/'>Home</Link></li>
            <li className='md:mx-2 cursor-pointer md:dark:border-none dark:border-y text-2xl tracking-wider py-2 px-5 dark:bg-slate-600 md:dark:bg-slate-700 hover:-translate-y-1 hover:duration-200 hover:text-purple-400 hover:font-bold'><Link to='/'>Home</Link></li>
          </ul>
        </div>
        <div>
          <button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zaHn1V1-QqdwHEu1f9n7upTxPK6cB2_Iog&usqp=CAU" className='h-12' alt="" />
          </button>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar