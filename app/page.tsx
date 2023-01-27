import Image from "next/image";
import Link from "next/link";
import heroPic from "@/public/images/hero.jpg";
import contactPic from "@/public/images/contact.jpg";
import { GrInstagram } from "react-icons/gr";
import { SiTiktok } from "react-icons/si";
import brandPic1 from "@/public/images/brands/brand1.jpg";
import brandPic2 from "@/public/images/brands/brand2.jpg";
import brandPic3 from "@/public/images/brands/brand3.jpg";
import brandPic4 from "@/public/images/brands/brand4.jpg";
import brandPic5 from "@/public/images/brands/brand5.jpg";
import galleryImgL1 from "@/public/images/gallery/l1.jpg";
import galleryImgL2 from "@/public/images/gallery/l2.jpg";
import galleryImgL3 from "@/public/images/gallery/l3.jpg";
import galleryImgR1 from "@/public/images/gallery/r1.jpg";
import galleryImgR2 from "@/public/images/gallery/r2.jpg";
import galleryImgR3 from "@/public/images/gallery/r3.jpg";
import ImageSlider from "./ImageSlider";
import VideoSlider from "./VideoSlider";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <header
        id='Hero'
        className='h-screen w-full flex justify-start items-end'
      >
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
          <Link
            href='#'
            className='mr-3 text-yellow-500 border-2 border-yellow-500 p-1 rounded text-2xl uppercase'
          >
            Discover
          </Link>
          <Link
            href='#'
            className='text-yellow-500 border-2 border-yellow-500 p-1 rounded text-2xl uppercase'
          >
            Bookings
          </Link>
        </div>
      </header>

      {/* BIO */}
      <section
        id='Bio'
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

      {/* IMAGE GALLERY */}
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

      {/* VIDEO GALLERY */}
      <section
        id='VideoGallery'
        className='border-4 border-purple-600 h-screen w-full  bg-gray-800    flex justify-center items-center'
      >
        {/* <VideoSlider /> */}
      </section>

      {/* FOLLOW ME */}
      <section id='FollowMe' className='h-screen w-full '>
        <div className='border-t-2 border-slate-300 h-screen w-full p-10 flex flex-col justify-between'>
          <div>
            <h3 className='text-3xl text-yellow-500'>Social Media</h3>
            <h2 className='text-6xl text-slate-300 mb-5'>Follow Me</h2>
          </div>

          <Link href='/about'>
            <GrInstagram className='text-yellow-500 text-7xl' />
          </Link>
          <Link href='/about'>
            <SiTiktok className='text-yellow-500 text-7xl' />
          </Link>

          <p className='text-2xl text-slate-300 pb-4 lg:w-1/3 '>
            <span className='text-2xl text-slate-300 pb-4 hidden lg:block'>
              I love to share my passions and experiences with my followers.
            </span>
            <span className='text-2xl text-slate-300 pb-4 hidden lg:block'>
              I am constantly working on new projects, and I can't wait for you
              to join me on my journey.
            </span>
            Follow me on{" "}
            <Link href='#' className='text-yellow-500'>
              Instagram
            </Link>{" "}
            and{" "}
            <Link href='#' className='text-yellow-500'>
              TikTok
            </Link>{" "}
            to see my latest photos and updates!
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section
        id='Brands'
        className='h-[25vh] w-full  bg-slate-300 flex justify-evenly items-center'
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

      {/* CONTACT */}
      <section
        id='Contact'
        className='h-[90vh] w-full  bg-gray-800 flex flex-col lg:flex-row'
      >
        {/* Box 1: Contact Form */}
        <div className=' h-full lg:h-full w-full p-5 lg:w-1/2 flex flex-col justify-center items-start'>
          {/* Header */}
          <div className='w-full flex flex-col justify-between items-center mb-10'>
            <h2 className='text-6xl text-slate-300 mb-5'>Say Hello.</h2>
            <div className='flex justify-evenly w-1/3  '>
              <Link href='/about'>
                <GrInstagram className='text-yellow-500 text-4xl' />
              </Link>
              <Link href='/about'>
                <SiTiktok className='text-yellow-500 text-4xl' />
              </Link>
            </div>
          </div>

          {/* Form */}
          <form
            action='/api/form'
            method='post'
            id='contact-form'
            className=' w-full h-full flex flex-col justify-evenly items-start'
          >
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
                className='bg-yellow-500 text-gray-900 rounded-sm p-2'
              >
                Send Message
              </button>
              <button
                type='reset'
                value='Clear form'
                className='bg-yellow-500 text-gray-900 rounded-sm p-2'
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

      {/* FOOTER */}
      <footer
        id='Footer'
        className='py-2 bg-gray-900 h-[10vh] lg:flex justify-center items-center'
      >
        <p className='text-center text-slate-300'>
          {"Copyright © "}
          <Link
            href='/'
            className='no-underline text-yellow-500 hover:text-yellow-600'
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
            className='no-underline text-yellow-500 hover:text-yellow-600'
          >
            Isaiah Simon
          </Link>{" "}
        </p>
      </footer>
    </main>
  );
}

/*
<main className={styles.main}>
      <div className={styles.description}>
        <h1 className='text-5xl text-yellow-500'>TailwindCSS</h1>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{" "}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src='/thirteen.svg' alt='13' width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href='https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
*/
