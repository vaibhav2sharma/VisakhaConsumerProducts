'use client'
import React, { useEffect, useState } from 'react';


const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
   
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
      
    };

    if (typeof window !== 'undefined'){
      window.addEventListener('mousemove', handleMouseMove);
    }

    return() =>{
      if(typeof window !== 'undefined'){
        window.removeEventListener('mousemove', handleMouseMove);
      }
    }


   

    
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div  className="w-full relative h-[30vh] md:h-[70vh] ">
    <img
      className="object-cover w-full"
      // src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
      src='/vishaka banner -1.jpg'
      alt=""
    />

    {/* <div className="bg-white h-[80px] w-[80px]  md:h-[200px]  md:w-[200px] absolute lg:top-[210px] top-[70px] left-[20%] lg:left-[68%] rounded-[50%]  ">
      <div className="bg-black h-[60px] w-[60px] md:h-[100px] md:w-[100px] rounded-[50%] absolute md:top-[50px] md:left-[50px] top-[10px] left-[10px]">
        <div style={{ transform: `rotate(${rotate}deg)` }} className="h-[20px] w-full absolute top-[39%]">
          <div className="h-[20px] w-[20px] rounded-[50%] bg-white"></div>
        </div>
      </div>
    </div> */}

    {/* <div className="bg-white h-[80px] w-[80px] md:h-[200px]  md:w-[200px] absolute lg:top-[210px] top-[70px] right-[20%] lg:right-[2%] rounded-[50%]  ">
      <div className="bg-black h-[60px] w-[60px] md:h-[100px] md:w-[100px] rounded-[50%] absolute md:top-[50px] top-[10px] right-[10px] md:left-[50px]">
        <div style={{ transform: `rotate(${rotate}deg)` }} className="h-[20px] w-full  absolute top-[39%] ">
          <div className="h-[20px] w-[20px] rounded-[50%] bg-white"></div>
        </div>
      </div>
    </div> */}
  </div>
  );
};

export default Eyes;


