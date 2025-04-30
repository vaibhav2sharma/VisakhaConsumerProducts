"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import Footer from "./components/Footer";
import Herobanner from "./components/Herobanner";
import LandingText from "./components/LandingText";

import Navbar from "./components/Navbar";
import Eyesffile from "./components/Eyesffile";

import MArquee from "./components/MArquee";
import ProductComponentShow from "./components/productcomponentshow";

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
        <MArquee />
        <Herobanner />
        <div className="bg-gradient-to-b from-[#f1f1f1] to-[#81CFF5]">
          <Eyesffile />
          <ProductComponentShow />

          {/* 💡 Stunning Product Cards Section */}
          <div className="bg-#81CFF5 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                Our Products
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Clean Beyond Compare – Discover the Power of Pure!
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img
                  src="/visakha detergent powder new.jpg"
                  alt="Detergent"
                  className="rounded-xl mb-4 h-[230px]"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Visakha Detergent Powder
                </h3>
                <p className="text-gray-600 mt-2">
                  Visakha Detergent is your everyday cleaning hero – designed to
                  tackle the toughest stains while preserving the softness and
                  color of your fabrics. Whether it’s daily dirt or deep grime,
                  this powerful yet gentle formula ensures your clothes stay
                  fresh, vibrant, and spotless after every wash.
                </p>
                <div className="mt-auto pt-4 text-lg font-bold text-indigo-600">
                  ₹ 300
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img
                  src="/visakha infinite new.jpg"
                  alt="Liquid Detergent"
                  className="rounded-xl mb-4 h-[230px]"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Visakha Infinite Detergent Powder
                </h3>
                <p className="text-gray-600 mt-2">
                  Introducing Visakha Infinite – crafted for a deep,
                  long-lasting clean that goes beyond surface stains. Engineered
                  with advanced stain-lift technology, Infinite penetrates deep
                  into fibers, removing stubborn dirt while leaving a lingering
                  fresh fragrance. Ideal for those who demand premium results
                  every time.
                </p>
                <div className="mt-auto pt-4 text-lg font-bold text-indigo-600  ">
                  ₹ 200
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col">
                <img
                  src="/visakha innovate lemon wash.jpg"
                  alt="Natural Detergent"
                  className="rounded-xl mb-4 h-[230px]"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Visakha Innovate Lemon Wash
                </h3>
                <p className="text-gray-600 mt-2">
                  Infused with natural lemon extracts, Visakha Innovate Lemon
                  Wash not only delivers exceptional cleaning performance but
                  also revitalizes your clothes with a burst of citrus
                  freshness. Say goodbye to dull laundry days – and hello to
                  refreshing, zesty cleanliness!
                </p>
                <div className="mt-auto pt-4 text-lg font-bold text-indigo-600">
                  ₹299
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </Provider>
  );
}
