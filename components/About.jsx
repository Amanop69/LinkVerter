import React from 'react'
import Image from 'next/dist/client/image'

const About = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium font-poppins title-font mb-2 text-gray-900">LinkVerter Converts All Links You Desire</h1>
          <div className="h-1 w-20 bg-red-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-poppins">It Doesn't Matter What Type of Links You Want To Convert Be it Facebook, Instagram, Youtube Links it Must Be Streamable the Rest Will Be Done By LinkVerter. </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
          <Image src="/fbb.png" width="400px" height="370px" alt='logo'/>
            
            <h2 className="text-lg text-gray-900 font-semibold font-poppins title-font mb-4">Facebook Links</h2>
            <p className="leading-relaxed text-base font-poppins">Convert Facebook Links to Download Links</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
          <Image src="/yo.png" width="400px" height="370px" alt='logo'/>

            <h2 className="text-lg text-gray-900 font-semibold font-poppins title-font mb-4">Youtube Links</h2>
            <p className="leading-relaxed text-base font-poppins">Convert Youtube Links to Download Links</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
          <Image src="/inst.png" width="400px" height="370px" alt='logo'/>
     
            <h2 className="text-lg text-gray-900 font-semibold font-poppins title-font mb-4">Instagram Links</h2>
            <p className="leading-relaxed text-base font-poppins">Convert Instagram Links to Download Links</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
          <Image src="/jw.png" width="400px" height="370px" alt='logo'/>
            <h2 className="text-lg text-gray-900 font-semibold font-poppins title-font mb-4">JW Links</h2>
            <p className="leading-relaxed text-base font-poppins">Convert JW Links to Download Links</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
    </div>
  )
}

export default About