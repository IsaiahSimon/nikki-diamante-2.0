"use client";

import { useState } from "react";

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO: make titles dynamic by fetching data
  // const slides = [
  //   { source: vidSlide1, title: "Valentines" },
  //   { source: vidSlide2, title: "8 at the Table" },
  //   { source: vidSlide3, title: "The Icarus Instinct" },
  // ];

  // TODO: remove hard code when importing videos from api as array of objects
  const slides = [0, 1, 2];
  const titles = ["Valentines", "8 at the Table", "The Icarus Instinct"];

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
      <video
        playsInline
        controls
        autoPlay
        muted
        loop
        src={`/videos/slides/vidSlide${currentIndex + 1}.mp4`}
        className='object-cover h-full w-full object-top'
      >
        Your browser does not support the video tag.
      </video>

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

      {/* Top Gradient + Content overlay */}
      <div className='absolute top-0 left-0 h-1/6 w-full flex justify-start items-center pl-3 bg-gradient-to-b from-gray-800 to-transparent'>
        <h1 className='text-6xl text-white '>{titles[currentIndex]}</h1>
      </div>
    </>
  );
};

export default VideoSlider;
