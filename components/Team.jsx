import React from 'react'
import Image from 'next/dist/client/image'

const Team = () => {
  return (
    <div>
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
          <Image src="/fr.png" width="60px" height="60px" alt='logo'/>
            <p class="leading-relaxed font-poppins font-medium">Service To Humanity is What Aspires Us To Build LinkVerter. No Need To Surf Different Sites For Different Links LinkVerter is All You Need.</p>
            <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-semibold font-poppins title-font tracking-wider text-sm">FEAR</h2>
            <p class="text-gray-500 font-poppins font-medium">Senior Product Designer</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
          <Image src="/dd.png" width="60px" height="60px" alt='logo'/>
            <p class="leading-relaxed font-poppins font-medium">Getting Links is Easy Keeping Them is a Task. Now You can Keep The Links To The Heaven Along With You.</p>
            <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-semibold font-poppins title-font tracking-wider text-sm">DESHVIDESHI</h2>
            <p class="text-gray-500 font-poppins font-medium">Backend Developer</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 p-4">
          <div class="h-full text-center">
          <Image src="/pr.png" width="60px" height="60px" alt='logo'/>
            <p class="leading-relaxed font-poppins font-medium">Legends Say "Good Things Will Eventually Came To End" Well That Just a Proverb I am Here To Make LinkVerter Work Till The Day of Judgement</p>
            <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-semibold font-poppins title-font tracking-wider text-sm">PRINCE</h2>
            <p class="text-gray-500 font-poppins font-medium">Senior Manager</p>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
    </div>
  )
}

export default Team