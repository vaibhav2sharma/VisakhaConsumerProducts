import React from 'react'
import Productcard from './Productcard'

const ProductComponentShowAgro = () => {
  return (
    <div className=' '>
        <h1 className="text-center  mt-[120px] md:mt-[40px] text-[40px]   md:text-[50px]  font-thin uppercase opacity-75 hover:font-normal duration-700 text-zinc-900   ">Agro Products</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-14
    px-5 md:px-0'>
        <Productcard image={'/vamrap.jpg'} name={'Visakha amra pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"340"} discountedprice={"240"} />
          <Productcard image={'/vap.jpg'} name={'Visakha amla pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"900"} />
          <Productcard image={'/vgarlic.jpg'} name={"Visakha garlic pickle"} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"800"} />
          <Productcard image={'/vgp.jpg'} name={'Visakha ginger pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"949"} discountedprice={"600"} />
         <Productcard image={'/vkp.jpg'} name={'Visakha kathal pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"850"} />
         <Productcard image={'/vlp.jpg'} name={'Visakha lemon pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"850"} />
         <Productcard image={'/vmp.jpg'} name={'Visakha mango pickle'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"1249"} discountedprice={"850"} />
      
    </div>
    </div>
  )
}

export default ProductComponentShowAgro
