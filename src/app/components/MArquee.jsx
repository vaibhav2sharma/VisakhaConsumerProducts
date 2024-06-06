"use client"
import React from 'react'
import Marquee from "react-fast-marquee";

const MArquee = () => {
  return (
    <div  data-scroll data-scroll-speed="-.1"  className='w-full h-[50vh] md:h-[80vh] bg-red-600  rounded-b-[30px] flex items-center opacity-99'>

    <Marquee className='text-white text-[100px] md:text-[200px] font-bold pt-[10px] md:pt-[60px]' speed={200} loop={0} >
    <h1 className=' border-t-2 border-white border-b-2 items-center pt-9 uppercase'> Launching soon ......     </h1>
    </Marquee>
        
      
    </div>
  )
}

export default MArquee
