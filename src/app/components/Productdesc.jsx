'use client'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import ProductImageSlider from './ProductImageSlider';

const Productdesc = () => {
  
  
  const images= ['/visakhadetergent.jpg','/vlp.jpg']
  
  
  return (
    <section className=' md:h-[205vh]  py-[10px] md:py-0 xl:h-[100vh]  flex  flex-col md:flex-row  w-full '>


      
      
      
    <div className=' bg-gradient-to-b from-emerald-300 to-indigo-600 w-full  md:w-[40%] rounded-[10px]  rounded-r-none shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>

      {/* logo and name */}
      <div className='md:px-[50px] md:py-[60px] md:h-[100vh] overflow-hidden'>
        


        <ProductImageSlider images={images}/>





      </div>






    </div>




    <div className='  bg-white  md:w-[60%] w-full  rounded-[10px]  rounded-l-none shadow-[5px_5px_0px_0px_rgba(109,40,217)]'>

      {/* producct intro */}
      <div className=' flex-col pl-[50px] pt-[50px]'>
        <div className=' flex flex-row  gap-[25px]'>
          <h1 className='  text-[20px] md:text-[40px] uppercase font-medium'>Visakha Detergent</h1>
           <h3 className=' text-[20px] md:text-[15px]  px-[10px] md:py-[18px] md:px-[10px] rounded-[10px] bg-orange-500 text-white'>New</h3>
        </div>
        <div className=' text-[16px] md:text-[25px] text-gray-400 uppercase pl-[8px]'>Detergent</div>
        <div className=' flex pl-[8px] '> <FaStar className='text-orange-600'/>
        <FaStar className='text-orange-600'/>
        <FaStar className='text-orange-600'/>
        <FaStar className='text-orange-600'/>
        <FaStar className='text-orange-600'/>
        </div>
      </div>


      {/* product desc */}
      <div className=' mt-[40px] pl-[50px]  flex flex-col gap-[20px]'>
        <div className=' flex flex-row gap-[30px] text-[20px] text-blue-700 font-semibold  pl-[8px]  '>
           <button className='hover:underline-offset-[10px] hover:underline decoration-blue-700 '>Description</button>
           <button className='hover:underline-offset-[10px] hover:underline decoration-blue-700'>Details</button>
           <button className='hover:underline-offset-[10px] hover:underline decoration-blue-700'>Reviews</button>
        </div>

        {/* paragraph */}
        <div className=' px-[30px] py-[20px]  md:px-[8px] md:py-[7px] md:w-[90%] w-full  md:text-center '>
          <p className='  md:tracking-tight '>

Welcome to Visakha Detergent Powder, where quality meets trust. At Visakha, we believe that every wash should be a promise of cleanliness and care. That’s why we proudly say, “Visakha hai to Vishwas hai”.

Our premium detergent powder is specially formulated to deliver exceptional cleaning power while being gentle on your clothes. With Visakha Detergent Powder, you can expect:

Deep Cleaning Action: Effectively removes tough stains and dirt, leaving your clothes looking as good as new.
Fresh Fragrance: Keeps your laundry smelling fresh and pleasant all day long.
Gentle on Fabrics: Our detergent is tough on stains but gentle on your clothes, maintaining their softness and color.
Eco-Friendly Formula: We care for the environment as much as you do. Our detergent is made with biodegradable ingredients, ensuring a safer choice for your family and the planet.
Join countless satisfied customers who trust Visakha Detergent Powder for their laundry needs. Experience the difference and add a touch of trust to every wash.

          </p>

        </div>




      </div>

      {/* quantity button */}
      <div className=' pl-[50px] mt-[40px]'>

          


          <div class="quantity-tag pl-[20px] md:pl-0 ">

          <label for="quantity" class="bg-blue-500 text-white px-3 py-1 rounded-full ">Quantity</label>
          <select id="quantity" name="quantity" class="quantity-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            
          </select>
          </div>

          

      </div>

      


      {/* for cart add */}
      <div className=' pl-[70px] pt-[70px] md:pt-0  md:pl-[50px] md:mt-[40px] flex flex-row md:gap-[50px] gap-[60px]'>

        
        <button className='  md:ml-[8px] bg-orange-500 md:px-[25px] px-[50px] -ml-[40px]  py-[5px] md:py-[10px] text-white rounded-[10px] md:text-[16px] text-[12px] uppercase mb-9 md:mb-0 '>Add to Cart </button>
        <button  className='  bg-gray-400 md:px-[25px] md:py-[10px] px-[30px]  text-white rounded-[10px] md:text-[16px] uppercase mb-9 md:mb-0  mr-[10px]'>Add to Wishlist </button>
        



      </div>





    </div>
    


    











    </section>
  )
}

export default Productdesc
