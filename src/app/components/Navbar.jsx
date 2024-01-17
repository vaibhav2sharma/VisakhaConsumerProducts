import Link from 'next/link'
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='flex justify-between  bg-blue-500 bg-opacity-75   text-lg md:text-black  items-center sticky w-full h-[50px] md:h-[80px]   z-20 top-0 transition-transform duration-300 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] '>
      
        <Link href='/'>
        <img src="/visakhalogo2.png" alt=""  className='w-[35px]  md:w-[40px] md:h-[60px] ml-2'/>
        </Link>



        <div className=' flex flex-row gap-4 '>
            <Link href='/about'>
           <h2 className=' hover:text-white md:text-[25px] duration-500 sm:text-sm '>About</h2>
           </Link>
           <Link href='/contact'>
           <h2 className=' hover:text-white md:text-[25px] duration-500 sm:text-sm  ' >Contact</h2>
           </Link>
           <Link href='/product'>
           <h2 className=' hover:text-white md:text-[25px] duration-500 sm:text-sm  ' >Products</h2>
           </Link>
           
        </div>



        <div>
            
            <div className=' rounded-full mr-7 flex gap-1 hover:text-white duration-500'>
           
            <Link href='/'>
            <CiShoppingCart className=' text-[19px] md:text-[34px] '/>
            <h2 className='text-black text-[20px]' >Cart</h2>
            </Link>
            </div>

            
            
        </div>







    </div>
  )
}

export default Navbar
