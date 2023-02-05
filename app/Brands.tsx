import React from "react";
import Image from "next/image";

import brandPic1 from "@/public/images/brands/brand1.jpg";
import brandPic2 from "@/public/images/brands/brand2.jpg";
import brandPic3 from "@/public/images/brands/brand3.jpg";
import brandPic4 from "@/public/images/brands/brand4.jpg";
import brandPic5 from "@/public/images/brands/brand5.jpg";

const Brands = () => {
  return (
    <section
      id='Brands'
      className='h-[25vh] w-full  bg-slate-600 flex justify-evenly items-center'
    >
      <div className='border-2 w-44 h-20'>
        <Image
          src={brandPic1}
          alt='brand1-img'
          className='block object-cover object-center w-full h-full'
        />
      </div>
      <div className='border-2 w-44 h-20'>
        <Image
          src={brandPic2}
          alt='brand2-img'
          className='block object-cover object-center w-full h-full'
        />
      </div>
      <div className='border-2 w-44 h-20'>
        <Image
          src={brandPic3}
          alt='brand3-img'
          className='block object-cover object-center w-full h-full'
        />
      </div>
      <div className='border-2 w-44 h-20'>
        <Image
          src={brandPic4}
          alt='brand4-img'
          className='block object-cover object-center w-full h-full'
        />
      </div>
      <div className='border-2 w-44 h-20'>
        <Image
          src={brandPic5}
          alt='brand5-img'
          className='block object-cover object-center w-full h-full'
        />
      </div>
    </section>
  );
};

export default Brands;
