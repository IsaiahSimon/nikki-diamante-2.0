import React from "react";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { SiTiktok } from "react-icons/si";

const FollowMe = () => {
  return (
    <section id='follow-me' className='h-screen w-full '>
      <div className='border-t-2 border-slate-300 h-screen w-full p-10 flex flex-col justify-between'>
        <div>
          <h3 className='text-3xl text-yellow-500'>Social Media</h3>
          <h2 className='text-6xl text-slate-300 mb-5'>Follow Me</h2>
        </div>

        <Link
          href='https://www.instagram.com/nikki_diamante_/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GrInstagram className='text-yellow-500 text-7xl hover:text-white' />
        </Link>
        <Link
          href='https://www.tiktok.com/@nikki_diamante?_t=8Z7IF87HEYF&_r=1'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiTiktok className='text-yellow-500 text-7xl hover:text-white' />
        </Link>

        <p className='text-2xl text-slate-300 pb-4 lg:w-1/3 '>
          <span className='text-2xl text-slate-300 pb-4 hidden lg:block'>
            I love to share my passions and experiences with my followers.
          </span>
          <span className='text-2xl text-slate-300 pb-4 hidden lg:block'>
            I am constantly working on new projects, and I can't wait for you to
            join me on my journey.
          </span>
          Follow me on{" "}
          <Link
            href='https://www.instagram.com/nikki_diamante_/?hl=en'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-500 hover:text-white'
          >
            Instagram
          </Link>{" "}
          and{" "}
          <Link
            href='https://www.tiktok.com/@nikki_diamante?_t=8Z7IF87HEYF&_r=1'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-500 hover:text-white'
          >
            TikTok
          </Link>{" "}
          to see my latest photos and updates!
        </p>
      </div>
    </section>
  );
};

export default FollowMe;
