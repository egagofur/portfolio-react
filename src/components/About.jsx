import React from 'react';
import Bounce from 'react-reveal/Bounce';

const About = () => {
  return (
    <div name='about' className=' antialiased transition-all duration-500 w-full h-screen pb-80 pt-48 bg-white dark:bg-[#0F172A] text-[#1C1E21] dark:text-gray-300 select-none'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
        <Bounce left>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </Bounce>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <Bounce top cascade>
            <div className='sm:text-right text-4xl font-bold text-[#5f57e6] '>
              <p>Hi. I'm Ega, nice to meet you. Please take a look around.</p>
            </div>
          </Bounce>
          <Bounce bottom cascade>
            <div>
              <p>
                I am a grade 10 RPL 2. I study at Vocational High School 1 Kepanjen. I started self-taught about Front End Web Developer since late December 2021. My goal is to become a Full Stack Web Developer. Hello World, yes, that is the first Code that I wrote for the first time, precisely on December 2021.
              </p>
            </div>
          </Bounce>
          </div>
      </div>
    </div>
  );
};

export default About;