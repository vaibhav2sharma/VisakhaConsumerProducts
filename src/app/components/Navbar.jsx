"use client"
import Link from 'next/link'
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='flex justify-between  bg-[#FFFFFF]   text-lg md:text-black  items-center sticky w-full h-[50px] md:h-[80px]   z-20 top-0 transition-transform duration-300   '>
      
        <Link href='/'>
        <img src="/visakhalogo2.png" alt=""  className='w-[35px]  md:w-[40px] md:h-[60px] ml-2'/>
        </Link>



        <div className=' flex flex-row gap-4 '>
            <Link href='/about'>
           <h2 className=' md:text-[25px] sm:text-sm h-[2px] hover:underline transition-all duration-1000  '>About</h2>

           
           </Link>
           <Link href='/contact'>
           <h2 className=' md:text-[25px]  sm:text-sm  hover:underline transition-all duration-1000  ' >Contact</h2>
           </Link>
           <Link href='/product'>
           <h2 className=' md:text-[25px]  sm:text-sm  hover:underline transition-all duration-1000  ' >Products</h2>
           </Link>
           
        </div>



        <div>
            
            <div className=' rounded-full mr-7 flex gap-1  duration-500'>
           
            <Link href='/'>
            <CiShoppingCart className=' text-[19px] md:text-[34px] '/>
            <h2 className='text-black text-[20px] hover:underline transition-all duration-1000 ' >Cart</h2>
            </Link>
            </div>

            
            
        </div>







    </div>
  )
}

export default Navbar
