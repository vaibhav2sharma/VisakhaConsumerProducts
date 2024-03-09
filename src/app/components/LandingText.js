"use client"
import React from 'react'

const LandingText = () => {
  return (
    <div data-scroll data-scroll-speed="-.6"  className='h-[100vh] md:h-[90vh] w-full bg-[#030A16] flex flex-col  gap-[50px] md:gap-[0px] md:flex-row md:items-end justify-evenly '>

       <h1 className='text-white text-[60px] tracking-tighter leading-[100%] px-[30px] md:py-[50%]  md:text-[110px] md:font-bold md:leading-[100%] md:tracking-tight md:pb-[100px] md:px-[30px] text-center md:text-left '>VISAKHA CONSUMER PRODUCTS</h1> 

        <img className=' h-[250px] w-[250px]  ml-[19%]     md:h-[400px] md:w-[400px] rounded-[20px] md:pr-[30px] md:py-[30px] hover:rotate-3 duration-700 ease-in-out ' src='/visakhadetergent.jpg'/>

    </div>
  )
}

export default LandingText
