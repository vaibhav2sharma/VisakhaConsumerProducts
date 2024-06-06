"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Productcard = ({image , name ,p ,price, discountedprice}) => {
 
  
  return (
    <Link href='/product/3'>
    
    <div  className='hover:rotate-2  border-l-4 border-lime-300  md:hover:translate-x-3 duration-700  font-[my-font] p-4 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] bg-white'>
       <Image
        width={300}
        height={100}
        src={image}
        className='md:pl-[120px]'
        
        
      
      
      />
      {/* product card */}
      <div className='p-4 text-black/[0.9]'>
        {/* product name and disc */}
        <h2  className='uppercase text-gray-500  lg:text-[30px] text-center overflow-hidden font-bold'>
          {name}
        </h2>

        <p className='text-gray-500 text-center  text-sm  md:text-sm'>
         {p}
        </p>

        {/* product price */}
        {
          
        }

        <div className=' flex items-center text-black/[0.5]'>
          {/* original pricee */}
            <p className='mr-2 text-lg font-semibold'>Price:₹{discountedprice}</p>
            {/* discounted price */}
            
            {/* show discount only when we have an original price */}

           
              <>
              <p className=' text-base font-medium line-through decoration-green-700'>
              ₹{price}

              </p>

              {/* percentage  */}

             

              
              </>


            


            

        </div>





      </div>
    </div>
    </Link>
  )
}

export default Productcard
