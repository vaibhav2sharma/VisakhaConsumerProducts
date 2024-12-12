import React from "react";
import Navbar from "./components/Navbar";
import LandingText from "./components/LandingText";
import Marquee from "react-fast-marquee";
import Herobanner from "./components/Herobanner";
import Eyesffile from "./components/Eyesffile";
import ProductComponentShow from "./components/productcomponentshow";
import ProductComponentShowAgro from "./components/productcomponentshowagro";
import Footer from "./components/Footer";

const HOME = () => {
  return (
    <div>
      <div className="bg-[#F1F1F1] font-[my-font]">
        <Navbar />
        <LandingText />
        <Marquee />
        <Herobanner />
        <div className="bg-gradient-to-b from-[#f1f1f1] to-[#81CFF5]">
          <Eyesffile />
          <ProductComponentShow />
          <ProductComponentShowAgro />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HOME;
