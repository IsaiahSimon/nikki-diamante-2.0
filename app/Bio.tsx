import React from "react";
import Link from "next/link";

import ImageSlider from "./ImageSlider";

const Bio = () => {
  return (
    <section
      id='bio'
      className='border-t-2 border-slate-300 h-screen w-full  bg-gray-800 flex flex-col lg:flex-row'
    >
      <div className='h-auto w-screen overflow-hidden'>
        <ImageSlider />
      </div>
      <div className='h-auto w-screen p-10 lg:self-center'>
        <h3 className='text-3xl text-yellow-500'>Fashion Revolution</h3>
        <h2 className='text-6xl text-slate-300 mb-5'>Nikki's Bio</h2>
        <p className='text-base text-slate-300 pb-4'>
          Nikki Diamanté is one of New York City’s newest, zesty, rousing and
          guileless voices on talk shows and podcasts today. In 2019 after
          attempting to start her own podcast, she joined the 8 At The Table
          crew where their main discussions are about love, sex and
          relationships.
        </p>
        <Link
          href='/about'
          className='text-yellow-500 border-2 border-yellow-500 p-1 rounded text-1xl uppercase'
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default Bio;
