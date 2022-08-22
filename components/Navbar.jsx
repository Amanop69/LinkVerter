import React from 'react'
import Image from 'next/dist/client/image'

const Navbar = () => {
  return (
    <div>
    <header className="text-gray-600 body-font bg-gray-800">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto font-poppins cursor-pointer font-semibold">
        <a className="mr-5 text-gray-300 hover:text-red-500">Home</a>
        <a className="mr-5 text-gray-200 hover:text-red-500">About</a>
        <a className="mr-5 text-gray-200 hover:text-red-500">Team</a>
        <a className="text-gray-200 hover:text-red-500">Contact</a>
      </nav>
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <Image src="/lv.png" width="486px" height="107" alt='logo'/>

      </a>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0 text-white font-poppins font-semibold">Try Now
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar