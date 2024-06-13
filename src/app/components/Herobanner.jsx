
"use client"
import React from 'react'


const Herobanner = () => {
  return (
   
    <section data-scroll data-scroll-speed='-.1' className=' w-full h-[140vh] md:h-[185vh] overflow-hidden   '>

        
        <div className='bg-[#F1F1F1]  w-full md:w-[100%]   md:h-[100%] rounded-t-[30px]  md:rounded-[40px]  flex flex-col md:flex-row'>
          

          <div className='h-[100%] w-full   flex flex-col items-center justify-center '>


          <h1 className=' text-[30px] md:text-[80px] md:leading-[0] md:tracking-tighter  text-[#374151] drop-shadow-lg"'>Visakha Detergent</h1>

          <p className=' text-[#374151] text-center w-[70%] md:w-[45%] pt-[50px]'>
          Discover the power of pure clean with Visakha Detergent! Our innovative formula tackles tough stains effortlessly, leaving your clothes brilliantly clean and vibrant after every wash. Gentle on fabrics and kind to the planet, Visakha Detergent ensures a fresh, radiant finish that you can see and feel. Elevate your laundry routine with Visakha where every wash is a promise of sparkling cleanliness and unmatched freshness. Try it today and experience the magic of true cleanliness!
          </p>

          <img
          className='pt-[40px]'
          src='/happyclothes.png'
          />








          </div>
          <div className=' h-[100%] w-full bg-gray-800 flex flex-col  justify-center items-center'>

            <h3> </h3>
            
            <img
            className='px-2 '
            
            src='/washingpng.png'
            
            />

            <h3> </h3>

            
           
           
            
            
.
          </div>





          
        </div> 

       
        



    </section>
   
  )
}

export default Herobanner
