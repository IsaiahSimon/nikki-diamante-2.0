"use client";

import { useState } from "react";

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      source: "https://www.youtube.com/embed/MPPEvFJxyFA",
      title: "The Icarus Instinct",
    },
    {
      source: "https://www.youtube.com/embed/In86rfpBuqE",
      title: "8 at the Table",
    },
    {
      source: "https://www.youtube.com/embed/sOoz8ProUIM",
      title: "Valentines",
    },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    // console.log(isFirstSlide, newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    // console.log(isLastSlide, newIndex);
  };

  return (
    <>
      {/* HTML5 <video> element cannot use YouTube page URLs */}
      <iframe
        width='560'
        height='315'
        src={slides[currentIndex].source}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        className='object-cover h-full w-full object-top'
      ></iframe>

      {/* ARROWS */}
      <div
        onClick={goToPrevious}
        className='hover:scale-125 absolute top-[50%] translate-x-0 translate-y-[-50%] left-[32px] text-[45px]  text-white z-10 cursor-pointer'
      >
        〈{" "}
      </div>
      <div
        onClick={goToNext}
        className='hover:scale-125 absolute top-[50%] translate-x-0 translate-y-[-50%] right-[32px] text-[45px]  text-white z-10 cursor-pointer '
      >
        {" "}
        〉{" "}
      </div>
    </>
  );
};

export default VideoSlider;
