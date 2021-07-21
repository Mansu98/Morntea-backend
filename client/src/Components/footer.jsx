import React from 'react'
import { Link } from "react-router-dom";


export default function footer() {
    return (
        <div>
        <footer className="text-gray-600 body-font bg-green-100">
  <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="https://res.cloudinary.com/dhtobgfyw/image/upload/v1625649334/download_brk2p6.png"  
        className="w-10 h-10 text-white p-0.5 bg-green-500 rounded-full" alt="logo"/>
        <span className="ml-3 text-xl">Morntea</span>
      </Link>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">News</h2>
        <nav className="list-none mb-10">
          <li>
            <Link className="text-gray-600 hover:text-gray-800">IPO/FPO News</Link>
            </li>
            <li>
            <Link className="text-gray-600 hover:text-gray-800">Exclusive</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Company Analysis</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Share Listing</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Dividend, Right & Bonus</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Info</h2>
        <nav className="list-none mb-10">
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Write For Us</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Share Registrar (RTS)</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">C-ASBA BFIs</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Existing Issues</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">DP Members</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Ongoing Auctions</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Market</h2>
        <nav className="list-none mb-10">
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Today's Share Price
             </Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Floorsheet</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Indices/Sub-indices</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Top Transactions</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Top Turnovers</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800"> Top Traded Shares</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Analysis</h2>
        <nav className="list-none mb-10">
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Top Companies in Nepal
          </Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Moving Average</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">180 Days Avg Prices</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Pivot Analysis</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800">Weekly Market Analysis</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-green-500">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-black-500 text-sm text-center sm:text-left">© 2021 Morntea —
        <Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link className="text-black-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link className="ml-3 text-black-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link className="ml-3 text-black-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link className="ml-3 text-black-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
            
        </div>
    )
}
