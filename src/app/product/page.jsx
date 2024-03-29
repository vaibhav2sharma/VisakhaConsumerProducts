
"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Productcard from '../components/Productcard'


const Products = () => {
  return (
    <div>
      <Navbar/>
      
      
      <h1 className=' text-center mt-[10px] text-[50px]  font-thin uppercase hover:opacity-75 hover:font-normal duration-700 text-purple-600   '>ALL products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-14
        px-5 md:px-0">

         
          
          <Productcard image={'/vgc.jpg'} name={'Visakha Glass Cleaner'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"900"} />
          <Productcard image={'/vls.jpg'} name={'Visakha Liquid Soap'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"800"} />
          <Productcard image={'/vtc.jpg'} name={'Visakha Toilet Cleaner'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"949"} discountedprice={"600"} />
         <Productcard image={'/vfc.jpg'} name={'Visakha Floor Cleaner'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"850"} />
         <Productcard image={'/visakhadetergent.jpg'} name={'Visakha Detergent Powder'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"340"} discountedprice={"240"} />
        

      </div>
      <h1 className="text-center  mt-[120px] md:mt-[40px] text-[40px]   md:text-[50px]  font-bold uppercase hover:opacity-75 hover:font-normal duration-700 text-black  ">Agro Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-14
        px-5 md:px-0">

         
          
        <Productcard image={'/vamrap.jpg'} name={'Visakha amra pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"340"} discountedprice={"240"} />
          <Productcard image={'/vap.jpg'} name={'Visakha amla pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"900"} />
          <Productcard image={'/vgarlic.jpg'} name={"Visakha garlic pickle"} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"800"} />
          <Productcard image={'/vgp.jpg'} name={'Visakha ginger pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"949"} discountedprice={"600"} />
         <Productcard image={'/vkp.jpg'} name={'Visakha kathal pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"850"} />
         <Productcard image={'/vlp.jpg'} name={'Visakha lemon pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"850"} />
         <Productcard image={'/vmp.jpg'} name={'Visakha mango pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"850"} />
        

      </div>
      <Footer/>
    </div>
  )
}

export default Products
