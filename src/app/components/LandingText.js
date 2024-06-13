"use client";
import React from "react";

const LandingText = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.6"
      className=" h-[100vh] md:h-[90vh] w-full bg-[#F1F1F1]       "
    >
      {/* <img className='   h-[50px] w-[50px] md:h-[110Px] md:w-[110px] top-[10%] left-[5%]   lg:h-[200px] lg-[200px]  absolute lg:top-[30%] xl:top-[20%]  md:top-[31%] md:left-[40%]' src='visakhalogo2.png'></img> */}

      <div className="flex flex-col justify-center items-center text-gray-700  pt-[30vh]  md:pt-[20vh] px-6  lg:px-0">
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
      </div>
    </div>
  );
};

export default LandingText;
