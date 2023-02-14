import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id='Footer'
      className='py-2 bg-gray-900 h-[10vh] lg:flex justify-center items-center'
    >
      <p className='text-center text-slate-300'>
        {"Copyright © "}
        <Link
          href='/'
          className='no-underline text-yellow-500 hover:text-white'
        >
          Nikki Diamanté
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </p>
      <p className='text-center text-slate-300 lg:pl-2'>
        Website crafted with care by{" "}
        <Link
          href='https://isaiahsimon.dev/'
          className='no-underline text-yellow-500 hover:text-white'
        >
          Isaiah Simon
        </Link>{" "}
      </p>
    </footer>
  );
};

export default Footer;
