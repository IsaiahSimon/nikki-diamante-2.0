"use client";

import { useState } from "react";
import Image from "next/image";
import imgSlide1 from "@/public/images/slides/imgSlide1.jpg";
import imgSlide2 from "@/public/images/slides/imgSlide2.jpg";
import imgSlide3 from "@/public/images/slides/imgSlide3.jpg";
import imgSlide4 from "@/public/images/slides/imgSlide4.jpg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [imgSlide1, imgSlide2, imgSlide3, imgSlide4];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    //console.log(currentIndex, newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    //console.log(currentIndex, newIndex);
  };

  // TODO Dots disabled: until active color solution
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  return (
    <div className='h-full w-full relative'>
      {/* ARROWS */}
      <div
        onClick={goToPrevious}
        className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-[32px] text-[45px]  text-slate-100 z-10 cursor-pointer hover:scale-125'
      >
        〈{" "}
      </div>
      <div
        onClick={goToNext}
        className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-[32px] text-[45px]  text-slate-100 z-10 cursor-pointer hover:scale-125'
      >
        {" "}
        〉{" "}
      </div>

      {/* SLIDER */}

      <Image
        src={slides[currentIndex]}
        alt=''
        priority
        className='object-cover h-full w-full object-top z-[-1]'
        placeholder='blur'
        quality={100}
      />

      {/* DOTS: disabling until solution to change active dot color */}
      {/* <div className='flex justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='-mt-10 mx-2 cursor-pointer text-sm lg:text-xl text-white'
          >
            ●
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
