"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Herobanner from "./components/Herobanner";
import LandingText from "./components/LandingText";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Eyesffile from "./components/Eyesffile";
import ProductComponentShow from "./components/ProductComponentShow";
import ProductComponentShowAgro from "./components/ProductComponentShowAgro";

const { default: Link } = require("next/link");

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
