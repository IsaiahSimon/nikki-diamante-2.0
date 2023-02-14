import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import { SiTiktok } from "react-icons/si";

import contactPic from "@/public/images/contact.jpg";

const Contact = () => {
  return (
    <section
      id='contact'
      className='h-[90vh] w-full  bg-gray-800 flex flex-col lg:flex-row border-t-2 border-slate-300'
    >
      {/* Box 1: Contact Form */}
      <div className=' h-full lg:h-full w-full p-5 lg:w-1/2 flex flex-col justify-center items-start'>
        {/* Header */}
        <div className='w-full flex flex-col justify-between items-center mb-10'>
          <h2 className='text-6xl text-slate-300 mb-5'>Say Hello.</h2>
          <div className='flex justify-evenly w-1/3  '>
            <Link
              href='https://www.instagram.com/nikki_diamante_/?hl=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GrInstagram className='text-yellow-500 text-4xl hover:text-white' />
            </Link>
            <Link
              href='https://www.tiktok.com/@nikki_diamante?_t=8Z7IF87HEYF&_r=1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiTiktok className='text-yellow-500 text-4xl hover:text-white' />
            </Link>
          </div>
        </div>

        {/* Form */}
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          action='#'
          data-netlify-honeypot='bot-field'
          className=' w-full h-full flex flex-col justify-evenly items-start'
        >
          <input type='hidden' name='form-name' value='contact' />
          {/* first name */}
          <div className=' w-full flex flex-col'>
            <input
              required
              type='text'
              name='firstName'
              id='firstName'
              placeholder='First Name'
              className='bg-transparent text-slate-200 focus:outline-none border-b-2 border-slate-300 focus:border-b-2 focus:border-yellow-500 focus:bg-gray-800 placeholder:text-yellow-500'
            />
          </div>
          {/* last name */}
          <div className='w-full flex flex-col'>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'
              className='bg-transparent text-slate-200 focus:outline-none border-b-2 border-slate-300 focus:border-b-2 focus:border-yellow-500 focus:bg-gray-800 placeholder:text-yellow-500'
            />
          </div>
          {/* email */}
          <div className='w-full flex flex-col'>
            <input
              required
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              className='bg-transparent text-slate-200 focus:outline-none border-b-2 border-slate-300 focus:border-b-2 focus:border-yellow-500 focus:bg-gray-800 placeholder:text-yellow-500'
            />
          </div>
          {/* phone number */}
          <div className='w-full flex flex-col'>
            <input
              type='number'
              name='phone'
              id='phone'
              placeholder='Phone Number'
              className='bg-transparent text-slate-200 focus:outline-none border-b-2 border-slate-300 focus:border-b-2 focus:border-yellow-500 focus:bg-gray-800 placeholder:text-yellow-500'
            />
          </div>
          {/* subject */}
          <div className='w-full flex flex-col'>
            <input
              required
              type='text'
              name='subject'
              id='subject'
              placeholder='Subject'
              className='bg-transparent text-slate-200 focus:outline-none border-b-2 border-slate-300 focus:border-b-2 focus:border-yellow-500 focus:bg-gray-800 placeholder:text-yellow-500'
            />
          </div>
          {/* message */}
          <div className='w-full flex flex-col'>
            <textarea
              required
              name='message'
              id='message'
              cols={30}
              rows={4}
              placeholder='Message'
              className='bg-transparent text-slate-200 focus:outline-none border-b-2 border-slate-300 focus:border-b-2 focus:border-yellow-500 focus:bg-gray-800 placeholder:text-yellow-500'
            ></textarea>
          </div>
          {/* Button */}
          <div className='w-full flex justify-between'>
            <button
              type='submit'
              value='Send Message'
              className='bg-yellow-500 text-gray-900 rounded-sm p-2 hover:bg-white hover:border-white'
            >
              Send Message
            </button>
            <button
              type='reset'
              value='Clear form'
              className='bg-yellow-500 text-gray-900 rounded-sm p-2 hover:bg-white hover:border-white'
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>

      {/* Box 2: Contact Image */}
      <div className='hidden lg:block lg:h-full w-full overflow-hidden lg:w-1/2'>
        <Image
          src={contactPic}
          alt=''
          priority
          className='object-cover h-full w-full object-top'
          placeholder='blur'
          quality={100}
        />
      </div>
    </section>
  );
};

export default Contact;
