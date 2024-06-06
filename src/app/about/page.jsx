"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='font-[my-font]'>
      <Navbar/>

      <div>
    <div class="sm:flex items-center max-w-screen-xl">
   <div class="sm:w-1/2 p-10">
       <div class="image object-center text-center">
           <img src="heroz.jpg"/>
       </div>
   </div>
   <div class="sm:w-1/2 p-5">
       <div class="text">
           <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us:</span>
           <p class="text-gray-700 mt-5" >
           Welcome to Visakha Consumer Products, a premier destination for comprehensive house disinfectant solutions. At Visakha, we take pride in our commitment to creating a healthy and safe living environment for families. With a focus on innovation and quality, we have become a trusted name in the field of home care.
           </p>
           {/* our vision */}
           <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">Our Vision:</span>

           <p class="text-gray-700 mt-5">
           Our vision at Visakha Consumer Products is to redefine the standards of home hygiene. We aspire to be the go-to brand for discerning customers seeking reliable and effective house disinfectants. Through continuous innovation and a dedication to excellence, we aim to contribute to the well-being of households by providing products that set a new benchmark in cleanliness and safety.
           </p>

           {/* our collection */}
           <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">Our Collection:</span>

           <p class="text-gray-700 mt-5">
           Explore our diverse collection of house disinfectants at Visakha Consumer Products. Our range is thoughtfully curated to address various cleaning needs, with a special emphasis on our primary products – machine liquids and detergents. Each product is designed to deliver optimal results, ensuring a germ-free and refreshing environment in every corner of your home.
           </p>

           {/* quality assurance */}

           <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">Quality Assurance:</span>

           <p class="text-gray-700 mt-5">
           At Visakha, quality is non-negotiable. We adhere to the highest industry standards to bring you products that are not only effective but also safe for your family and the environment. Rigorous testing and quality control measures are integral parts of our process, ensuring that every product that bears the Visakha name is synonymous with reliability and excellence.


           </p>



           <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company:</span>
           </h2>
           <p class="text-gray-700 mt-5">


          <b>Our Commitment to You</b> <br></br>

          Our commitment extends beyond providing top-notch disinfectants; it is a promise to our customers. We are committed to delivering exceptional customer experiences, offering transparency in our processes, and continuously evolving to meet the evolving needs of our clientele. Your satisfaction and well-being are at the heart of everything we do at Visakha Consumer Products. Thank you for choosing us as your partner in creating a healthier home. <br /><br /><br />







 <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">Vaibhav Sharma </span> <br></br>
 <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">Developer </span> <br></br>
 <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">Visakha Consumer Products  </span> <br></br>























               
           </p>
       </div>
   </div>
</div>
   </div>




      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <Footer/>
      
    </div>
  )
}

export default About
