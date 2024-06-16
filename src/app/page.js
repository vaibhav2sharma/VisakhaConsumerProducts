"use client";
import { useEffect } from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Herobanner from "./components/Herobanner";
import LandingText from "./components/LandingText";
import MArquee from "./components/MArquee";

import Navbar from "./components/Navbar";

import Productcard from "./components/Productcard";
import Eyes from "./components/Eyes";
import Eyesffile from "./components/Eyesffile";
import productcomponentshow from "./components/productcomponentshow";
import productcomponentshowagro from "./components/productcomponentshowagro";
import ProductComponentShow from "./components/productcomponentshow";
import ProductComponentShowAgro from "./components/productcomponentshowagro";

const { default: Link } = require("next/link");

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="bg-[#F1F1F1]  font-[my-font] ">
      <Navbar />
      {/* <Herobanner /> */}
      {/* <Carousel /> */}
      <LandingText />
      <MArquee />

      <Herobanner />

      {/* grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
        px-5 md:px-0 flex */}
      {/* <div> */}
      {/* <h1 className=' text-center mt-[10px] text-[50px]  font-thin uppercase hover:opacity-75 hover:font-normal duration-700 text-purple-600   '>Our products</h1> */}
      {/* <Productcard image={'/vfc.jpg'} name={'Visakha Detergents'} p={"Elevate your laundry experience with Visakha Consumer Products' Our formulations are designed to deliver unmatched cleaning power, leaving your clothes fresh, vibrant, and impeccably clean. "} price={"₹340"} discountedprice={"₹240"} /> */}

      {/* </div> */}
      <div className="bg-gradient-to-b from-[#f1f1f1] to-[#81CFF5]">
        <Eyesffile />
        <ProductComponentShow />
        <ProductComponentShowAgro />

        <Footer />
      </div>
    </div>
  );
}
