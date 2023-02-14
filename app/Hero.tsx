"use client";

import React from "react";
import Image from "next/image";
import heroPic from "@/public/images/hero.jpg";

const Hero = () => {
  return (
    <header id='Hero' className='h-screen w-full flex justify-start items-end'>
      <div className='fixed h-screen w-screen overflow-hidden z-[-1]'>
        <Image
          src={heroPic}
          alt=''
          priority
          className='object-cover h-full w-full object-top'
          placeholder='blur'
          quality={100}
        />
      </div>
      <div className='p-16'>
        <h1 className='text-6xl text-slate-300 mb-5'>Nikki Diamanté</h1>
        <a
          href='#bio'
          className='mr-3 text-yellow-500 border-2 border-yellow-500 p-1 rounded text-2xl uppercase hover:text-white hover:border-white'
        >
          Discover
        </a>
        <a
          href='#contact'
          className='text-yellow-500 border-2 border-yellow-500 p-1 rounded text-2xl uppercase hover:text-white hover:border-white'
        >
          Bookings
        </a>
      </div>
    </header>
  );
};

export default Hero;
