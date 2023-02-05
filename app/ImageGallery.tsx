import React from "react";
import Image from "next/image";

import galleryImgL1 from "@/public/images/gallery/l1.jpg";
import galleryImgL2 from "@/public/images/gallery/l2.jpg";
import galleryImgL3 from "@/public/images/gallery/l3.jpg";
import galleryImgR1 from "@/public/images/gallery/r1.jpg";
import galleryImgR2 from "@/public/images/gallery/r2.jpg";
import galleryImgR3 from "@/public/images/gallery/r3.jpg";

const ImageGallery = () => {
  return (
    <section
      id='ImageGallery'
      className='h-auto lg:h-screen w-full     p-3 bg-gray-800 flex flex-col justify-center items-center lg:p-0'
    >
      {/* Container for Boxes */}
      <div className=' w-full justify-center items-center flex flex-col flex-wrap  lg:flex-row lg:h-screen lg:p-0'>
        {/* Box1 */}
        <div className='flex flex-wrap w-full  lg:w-1/2 lg:h-full '>
          {/* Row1 */}
          <div className='w-1/2 p-1 md:p-2  lg:h-1/2'>
            <Image
              alt='gallery'
              className='block object-cover object-center w-full h-full rounded-lg'
              src={galleryImgL1}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2  lg:h-1/2'>
            <Image
              alt='gallery'
              className='block object-cover object-center w-full h-full rounded-lg'
              src={galleryImgL2}
            />
          </div>

          {/* Row2 */}
          <div className='w-full p-1 md:p-2  lg:h-1/2'>
            <Image
              alt='gallery'
              className='block object-cover object-center w-full h-full rounded-lg'
              src={galleryImgL3}
            />
          </div>
        </div>

        {/* Box2 */}
        <div className='flex flex-wrap w-full  lg:w-1/2 lg:h-full  '>
          {/* Col1 */}
          <div className='w-1/2 p-1  lg:h-full'>
            <Image
              alt='gallery'
              className='block object-cover object-center w-full h-full rounded-lg'
              src={galleryImgR1}
            />
          </div>

          {/* Col2 */}
          <div className='w-1/2 lg:h-full'>
            <div className='w-full p-1   lg:h-1/2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={galleryImgR2}
              />
            </div>
            <div className='w-full p-1  lg:h-1/2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={galleryImgR3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
