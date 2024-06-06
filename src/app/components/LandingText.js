"use client";
import React from "react";

const LandingText = () => {
  return (
    // <div  data-scroll data-scroll-speed="-0.6"  className=' relative h-[100vh] md:h-[90vh] w-full bg-[#F1F1F1] flex flex-col  gap-[50px] md:gap-[0px] md:flex-row md:items-end justify-evenly  '>

    //     {/* <img className='   h-[50px] w-[50px] md:h-[110Px] md:w-[110px] top-[10%] left-[5%]   lg:h-[200px] lg-[200px]  absolute lg:top-[30%] xl:top-[20%]  md:top-[31%] md:left-[40%]' src='visakhalogo2.png'></img> */}

    //    <h1 className='text-[#212121] text-[60px] tracking-tighter leading-[100%] px-[30px] md:py-[50%]  md:text-[110px] md:font-bold md:leading-[100%] md:tracking-tight md:pb-[100px] md:px-[30px] text-center md:text-left font-[my-font] '>VISAKHA CONSUMER PRODUCTS</h1>
    //    <img className=' h-[150px] w-[100px] ml-[40%] md:ml-0  md:h-[200px] md:w-[200px] md:mb-[15%] ' src='visakhalogo2.png'></img>

    //     <img className=' h-[250px] w-[250px]  ml-[19%]     md:h-[500px] md:w-[500px] rounded-[20px] md:pr-[30px] md:py-[30px] hover:rotate-3 duration-700 ease-in-out ' src='/visakhadetergent.jpg'/>

    // </div>
    <div className="relative min-h-screen bg-gray-300">
      {/* Container Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Hero Image */}
        <div
          className="bg-cover  bg-left-top h-screen  hidden lg:block"
          style={{
            backgroundImage: "url('/visakhadetergent.jpg')",
          }}
        ></div>

        {/* Hero Content */}
        <div className="flex flex-col justify-center items-center text-gray-700 px-6 lg:px-0">
          <h1 className="text-6xl lg:text-8xl font-sans mb-4 relative">
            Visakha
            <span className="absolute -left-10 top-2 text-sm transform rotate-270 uppercase tracking-widest">
              Visit
            </span>
          </h1>
          <h2 className="text-4xl lg:text-6xl mb-2">Consumer Products</h2>
          <p className="text-center text-lg lg:text-xl mb-4">
            ” Visakha Hai Toh Vishwas Hai.” ~
          </p>
          <ul className="flex space-x-4 mt-4">
            <li>
              <a href="#" className="text-gray-700 text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
