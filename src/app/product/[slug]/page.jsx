import Eyes from '@/app/components/Eyes'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Productdesc from '@/app/components/Productdesc';
import React from 'react'



const Products = () => {
  return (
    <div className=' w-full bg-[#E8E8E8] font-[my-font] '>
      <Navbar className='font-[my-font]'/>

      <div className='  md:px-[40px] md:py-[50px] md:rounded-[40px] '>
      <Productdesc/>
      </div>


      <Footer/>
       
    </div>
  )
}

export default Products
