import React, { useState } from 'react';

const ProductImageSlider = ({ images }) => {
  console.log(images)
  images?.map((img) => console.log(img.id));
  images?.map((img) => console.log(img.url));

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="relative px-[60px] py-[50px] md:py-0 md:px-[40px] rounded-[30px]">
      <div className="overflow-hidden w-200 h-200">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images?.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={`Slide ${index + 1}`}
              className="w-200 h-200 rounded-[30px]"
            />
          ))}
        </div>
      </div>
      <div className="absolute top-[40px] left-0 flex items-center justify-center w-full">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-l-full opacity-50 hover:opacity-100"
          onClick={prevSlide}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-r-full opacity-50 hover:opacity-100"
          onClick={nextSlide}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4">
        <div className="flex space-x-2">
          {images?.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-gray-500 opacity-50 hover:opacity-100 cursor-pointer ${
                index === currentSlide ? 'opacity-100' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;
