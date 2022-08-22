import React from 'react'

const Features = () => {
  return (
    <div>
    <section className="text-gray-600 body-font bg-gray-100">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-semibold font-poppins title-font text-gray-900 mb-4">Features</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s font-poppins font-medium">Why Use LinkVerter? Find Out Below</p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-semibold mb-3 font-poppins">24/7 Working</h2>
            <p className="leading-relaxed text-base font-poppins font-medium">LinkVerter Works 24/7 Without Any Issues Whenever You Need LinkVerter is Always Here</p>
            <a className="mt-3 text-red-500 inline-flex items-center font-semibold font-poppins">Try Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font mb-3 font-semibold font-poppins">High Quality Converts</h2>
            <p className="leading-relaxed text-base font-poppins font-medium">With Our H.264 Encoding Get The Zero Loss Quality With Minimum Size Video</p>
            <a className="mt-3 text-red-500 inline-flex items-center font-semibold font-poppins">Try Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-semibold font-poppins mb-3">All Time Support</h2>
            <p className="leading-relaxed text-base font-poppins font-medium">Facing Any Issues While Using Our Service Fell Free To Contact Us We Are Here To Help You Out</p>
            <a className="mt-3 text-red-500 inline-flex items-center font-semibold font-poppins">Try Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
    </div>
  )
}

export default Features