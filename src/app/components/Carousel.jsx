'use client'
import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

const Carousell = () => {
  return (
    <div className=' relative text-white text-[20px] w-full  h-[80vh] mx-auto p-2 overflow-hidden'>
      
      {/* carousel slider */}
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false} showThumbs={false}  showIndicators={false} showStatus={false}
      
      renderArrowPrev={(clickHandler, hasPrev)=>(
       
        <div onClick={clickHandler} 
        className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'

        
        >

        <BiArrowBack className='text-sm md:text-lg'/>    


        </div>


      )

      }


      renderArrowNext={(clickHandler, hasNext)=>(
       
        <div onClick={clickHandler}
        className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90'

        
        >

        <BiArrowBack className='rotate-180 text-sm md:text-lg'/>    


        </div>


      )

      }
      
      
      
      >
                <div>
                    <img src="/visakhadetergent.jpg" className='h-[100px] w-[100px]' />
                    
                    <div className=' px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-thin
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                    text-[15px] md:text-[30px] uppercase cursor-pointer hover:opacity-90
                    
                    
                    '>
                      <Link  href='/product'>
                      Shop Now
                      </Link>
                        
                    </div>
                
                </div>
                <div>
                    <img src="/vfc.jpg" className='aspect-[16/10] md:aspect-auto ' />
                    
                    <div className=' px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-thin
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                    text-[15px] md:text-[30px] uppercase cursor-pointer hover:opacity-90
                    
                    
                    '>
                       <Link  href='/product'>
                      Shop Now
                      </Link>
                    </div>
                
                </div>
                <div>
                    <img src="/vgc.jpg" className='aspect-[16/10]    md:aspect-auto ' />
                    
                    <div className=' px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-thin
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                    text-[15px] md:text-[30px] uppercase cursor-pointer hover:opacity-90
                    
                    
                    '>
                       <Link  href='/product'>
                      Shop Now
                      </Link>
                    </div>
                
                </div>
                
            </Carousel>
    </div>
  )
}

export default Carousell
