import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (  
    <div className="text-gray-600 body-font bg-green-100">
  <div className="container mx-auto flex flex-wrap p-5 px-8 flex-col md:flex-row items-center">
    <Link  to ="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   
      <img src="https://res.cloudinary.com/dhtobgfyw/image/upload/v1625649334/download_brk2p6.png" alt="logo" className="w-10 h-10 text-white p-0.5 bg-green-500 rounded-full"/>
      <span className="ml-3 text-xl">Morntea</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to ="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link to ="/news"  className="mr-5 hover:text-gray-900">News</Link>
      <Link  to ="/about"  className="mr-5 hover:text-gray-900">About Us</Link>
      <Link  to ="/contact"  className="mr-5 hover:text-gray-900">Contact Us</Link>
      <Link  to ="/writeforus"  className="mr-5 hover:text-gray-900">Write For Us</Link>

    </nav>
    <div className="md:flex flex-wrap">
    <Link to="/login" className="inline-flex text-white bg-green-500 border-0 ml-3 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-lg text-base mt-4 md:mt-0">Login
      </Link>
    <Link to="/register" className="inline-flex text-white bg-green-500 border-0 ml-3 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-lg text-base mt-4 md:mt-0">Register
    </Link>
  </div>
</div>
</div>

)
}


