"use client"
import React from 'react'

const LandingText = () => {
  return (
    <div  data-scroll data-scroll-speed="-0.5"  className=' relative h-[100vh] md:h-[90vh] w-full bg-[#F1F1F1] flex flex-col  gap-[50px] md:gap-[0px] md:flex-row md:items-end justify-evenly '>


        {/* <img className='   h-[50px] w-[50px] md:h-[110Px] md:w-[110px] top-[10%] left-[5%]   lg:h-[200px] lg-[200px]  absolute lg:top-[30%] xl:top-[20%]  md:top-[31%] md:left-[40%]' src='visakhalogo2.png'></img> */}
        

       <h1 className='text-[#212121] text-[60px] tracking-tighter leading-[100%] px-[30px] md:py-[50%]  md:text-[110px] md:font-bold md:leading-[100%] md:tracking-tight md:pb-[100px] md:px-[30px] text-center md:text-left '>VISAKHA CONSUMER PRODUCTS</h1> 
       <img className=' h-[150px] w-[100px] ml-[40%] md:ml-0  md:h-[200px] md:w-[200px] md:mb-[15%] ' src='visakhalogo2.png'></img>

        <img className=' h-[250px] w-[250px]  ml-[19%]     md:h-[500px] md:w-[500px] rounded-[20px] md:pr-[30px] md:py-[30px] hover:rotate-3 duration-700 ease-in-out ' src='/visakhadetergent.jpg'/> 

    </div>
  )
}

export default LandingText
