import Image from "next/image";
import Footer from "../Footer";

import heroPic from "@/public/images/hero.jpg";

export default function AboutPage() {
  return (
    <main>
      <header className='h-screen w-full flex justify-start items-end'>
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
        <div className='flex flex-col ml-5'>
          <h1 className='text-6xl text-yellow-500 mb-5'>About</h1>
          <h2 className='text-6xl text-slate-300 mb-5'>Nikki Diamanté</h2>
        </div>
      </header>
      <section className='border-t-2 border-slate-300 h-auto w-full  bg-gray-800 flex flex-col p-10 lg:pb-20 opacity-70'>
        <div className='lg:px-20 mb-5'>
          <p className='text-lg lg:text-3xl text-slate-300 pb-4 '>
            Nikki Diamanté is one of New York City’s newest, zesty, rousing and
            guileless voices on talk shows and podcasts today. In 2019 after
            attempting to start her own podcast, she joined the 8 At The Table
            crew where their main discussions are about love, sex and
            relationships.
          </p>
          <p className='text-lg lg:text-3xl text-slate-300 pb-4 '>
            Nikki’s animated and uncensored personality helped build her
            fan-base on the show and presented her with opportunities to feature
            as a guest on other podcasts. She has recently appeared on DJ Epps
            And Friends, Don’t Shoot The Messenger Podcast and The Nameless
            Program.
          </p>
        </div>
        <div className='lg:px-20'>
          <h2 className='text-4xl lg:text-6xl text-yellow-500 mb-5'>
            Nikki's Goals
          </h2>
          <p className='text-lg lg:text-3xl text-slate-300 pb-4 '>
            One of Nikki’s goals is to use her voice as a beacon for people that
            are afraid to express their repressed thoughts and feelings. Her raw
            charisma is guaranteed to keep the audience engaged and the
            conversations going even after the show is over.
          </p>
          <p className='text-lg lg:text-3xl text-slate-300 pb-4 '>
            You can watch Nikki’s discussions on 8 At The Table weekly on
            Youtube and social media platforms such as Instagram and Tik Tok.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
