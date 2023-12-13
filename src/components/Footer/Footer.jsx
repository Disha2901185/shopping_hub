import React from 'react'

function Footer() {
  return (
    <div>

    <footer className="dark:bg-gray-800 bg-slate-100 text-black sticky bottom-0 inset-x-0 dark:text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-2">Our Story</p>
          <p className="mb-2">Careers</p>
          <p className="mb-2">Contact Us</p>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Customer Service</h2>
          <p className="mb-2">FAQs</p>
          <p className="mb-2">Shipping & Returns</p>
          <p className="mb-2">Privacy Policy</p>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <p className="mb-2">Clothing</p>
          <p className="mb-2">Shoes</p>
          <p className="mb-2">Accessories</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2023 Your Shopping Website. All rights reserved.</p>
      </div>
    </footer>




    </div>
  )
}

export default Footer