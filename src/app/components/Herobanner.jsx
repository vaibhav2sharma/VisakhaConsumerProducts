
import React from 'react'
import ReactPlayer from 'react-player'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Herobanner = () => {
  return (
   <>
    <section className=' w-full h-[100vh] flex  relative flex-col  sm:flex-row '>

        <div className='bg-white w-full md:w-[50%]     text-center justify-center items-center flex flex-col h-[100%]   ' >

          <h1 className='text-black   text-[24px] md:text-[55px]  font-medium font-sans hover:text-sky-400 duration-500  z-10'>Visakha Consumer Products </h1>
          <h2 className='   text-[14px]  md:text-[40px] text-black/10 mt-10 font-extrabold hover:text-red-600 hover:underline duration-500' >15.01.2024</h2>  

          <div className="flex gap-4 justify-center md:justify-start mt-10  z-10">
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaFacebookF size={30} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaTwitter size={30} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={30} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={30} />
                    </div>
                </div>


                
                <img src='heroimg1.png' className='  h-[250px] w-[250px]  top-[20%] left-0 md:h-[400px] md:w-[400px] absolute md:left-[40%] md:bottom-0 z-1 border-none  ' alt='herobannerimg'/>

          
          
        </div>
        <div className='bg-gray-950  w-full md:w-[50%]  h-[100%]   flex flex-col gap-2 items-center justify-center'>
          
        <h1 className='text-red-500  text-[30px] lg:text-[60px] font-extrabold  text-center hover:text-white duration-500  z-10  ' >Elevate Your Home Hygiene with Precision</h1>
        <p className='text-white text-center text-[12px]  lg:text-xl  leading-8 z-10 font-serif  hover:leading-9 duration-700  hover:bg-red-500/25 '>
        At Visakha, we specialize in providing high-quality house disinfectants and washing machine liquids that ensure a clean and hygienic living environment for you and your family. Our commitment to excellence is reflected in every product we offer, as we prioritize your well-being and the cleanliness of your home. With a focus on innovation and effectiveness, Visakha Consumer Products brings you a range of carefully crafted solutions to meet all your household cleaning needs. Explore our products and discover the assurance of a healthy, sanitized, and refreshing home with Visakha Consumer Products.
        </p>

          
        </div> 

       
        



    </section>
   </>
  )
}

export default Herobanner
