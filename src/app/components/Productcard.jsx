import React from 'react'

const Productcard = () => {
  
  
  return (
    <section className='h-[290vh] md:h-[110vh] w-full relative'>

      <h1 className=' text-center mt-[10px] text-[50px]  font-thin uppercase hover:opacity-75 hover:font-normal duration-700 text-purple-600   '>Our products</h1>


      <div className='flex h-[90%] md:h-[100%] lg:h-[60%] items-center justify-center w-full flex-col md:flex-row absolute lg:top-[20%] gap-10 md:gap-4 md:justify-around '>

      <div className="   h-[80%] w-[60%]  md:h-[750px] md:w-[25%]  hover:rotate-2  md:hover:rotate-6 duration-700 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-4">
        <img src='/visakhadetergent.jpg ' className=' h-[60%] w-full'/>
        <h2 className='uppercase text-gray-500  lg:text-[30px] text-center overflow-hidden font-bold'>Visakha Detergent</h2>
        <div  className='flex flex-col md:gap-5 gap-1  justify-center items-center'>
          <p className='text-gray-500 text-center  text-sm  md:text-sm '>
          Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. 
          </p>
          <div className='flex flex-row gap-2'>
          <h3 className='  text-[15px] lg:text-[30px] font-semibold text-gray-600'>Price:<span className='line-through decoration-green-600 '>₹340</span></h3>
          <h3 className=' text-[15px] lg:text-[30px] font-semibold text-gray-600'>₹240</h3>
          </div>
          

          

        </div>


      </div>
     

      <div className="   h-[80%] w-[60%]  md:h-[750px] md:w-[25%] hover:rotate-2  md:hover:rotate-6 duration-700 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-4">
        <img src='/visakhadetergent.jpg ' className=' h-[60%] w-full'/>
        <h2 className='uppercase text-gray-500  lg:text-[30px] text-center overflow-hidden font-bold'>Visakha Detergent</h2>
        <div  className='flex flex-col md:gap-5 gap-1  justify-center items-center'>
          <p className='text-gray-500 text-center  text-sm  md:text-sm'>
          Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. 
          </p>
          <div className='flex flex-row gap-2'>
          <h3 className='  text-[15px] lg:text-[30px]  font-semibold text-gray-600'>Price:<span className='line-through decoration-green-600 '>₹340</span></h3>
          <h3 className=' text-[15px] lg:text-[30px] font-semibold text-gray-600'>₹240</h3>
          </div>
          

          

        </div>


      </div>



      <div className=" h-[80%] w-[60%]  md:h-[750px]   md:w-[25%] hover:rotate-2 md:hover:rotate-6 duration-700 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-4">
        <img src='/visakhadetergent.jpg' className=' h-[60%] w-full'/>
        <h2 className='uppercase text-gray-500  lg:text-[30px] text-center overflow-hidden font-bold'>Visakha Detergent</h2>
        <div  className='flex flex-col md:gap-5 gap-1  justify-center items-center'>
          <p className='text-gray-500 text-center  text-sm  md:text-sm'>
          Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. 
          </p>
          <div className='flex flex-row gap-2'>
          <h3 className='  text-[15px] lg:text-[30px] font-semibold text-gray-600'>Price:<span className='line-through decoration-green-600 '>₹340</span></h3>
          <h3 className=' text-[15px] lg:text-[30px] font-semibold text-gray-600'>₹240</h3>
          </div>
          

          

        </div>


      </div>
      

     




      


      </div>


      






    </section>
  )
}

export default Productcard
