import Bounce from 'react-reveal/Bounce';

import React from 'react';
import Work1 from '../assets/work1.png';
import Work2 from '../assets/work2.png';
import Work3 from '../assets/work3.png';
import Work4 from '../assets/work4.png';
import Work5 from '../assets/work5.png'
import Work6 from '../assets/work6.png'
import Zoom from 'react-reveal/Zoom';
import Work7 from '../assets/work7.png'
import Work8 from '../assets/work8.png'

const Work = () => {
  return (
    <div name='work' className=' antialiased transition-all duration-500 pt-96 pb-52 w-full h-full md:h-screen text-[#1C1E21] dark:text-gray-300 bg-white dark:bg-[#0F172A] select-none'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <Bounce left>
        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Work
          </p>
        </div>
        </Bounce>
        <Zoom right>
        <div className='pb-8'>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        </Zoom>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-2 aspect-square'>

            {/* Grid Item */}
            <Bounce top>
          <div
            style={{ backgroundImage: `url(${Work8})` }}
            className='shadow-lg p-8 rounded-2xl shadow-[#040c16/20] dark:shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transition duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Kanesa Code
              </span>
              <div className='pt-8 text-center'>
                <a href='https://kanesacode.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 text-white border-2 border-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/egagofur/tugas-dicoding'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Bounce>
            {/* Grid Item */}
            <Bounce top>
          <div
            style={{ backgroundImage: `url(${Work7})` }}
            className='shadow-lg p-8 rounded-2xl shadow-[#040c16/20] dark:shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transition duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Portfolio React
              </span>
              <div className='pt-8 text-center'>
                <a href='https://egagofur.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 text-white border-2 border-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/egagofur/portfolio-react'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Bounce>
            {/* Grid Item */}
            <Bounce top>
          <div
            style={{ backgroundImage: `url(${Work5})` }}
            className='shadow-lg p-8 rounded-2xl shadow-[#040c16/20] dark:shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transition duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                CRUD with React
              </span>
              <div className='pt-8 text-center'>
                <a href='https://first-crud.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 text-white border-2 border-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/egagofur/CRUD-ReactJs'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Bounce>
          <Bounce top>
          <div
            style={{ backgroundImage: `url(${Work4})` }}
            className='shadow-lg p-8 rounded-2xl shadow-[#040c16/20] dark:shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transition duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Social Profile React
              </span>
              <div className='pt-8 text-center'>
                <a href='https://egagofur-socialprofile.web.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 text-white border-2 border-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/egagofur/SocialProfile-ReactJs'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Bounce>
            {/* Grid Item */}
            <Bounce top>
          <div
            style={{ backgroundImage: `url(${Work3})` }}
            className='shadow-lg p-8 rounded-2xl shadow-[#040c16/20] dark:shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transition duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Calculator React
              </span>
              <div className='pt-8 text-center'>
                <a href='https://egagofur-calculator.web.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 text-white border-2 border-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/egagofur/Calculator-ReactJs'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Bounce>
            {/* Grid Item */}
            <Bounce top>
          <div
            style={{ backgroundImage: `url(${Work6})` }}
            className='shadow-lg p-8 rounded-2xl shadow-[#040c16/20] dark:shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transition duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Portofolio Bootstrap
              </span>
              <div className='pt-8 text-center'>
                <a href='https://portofolio-egagofur.vercel.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 text-white border-2 border-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/egagofur/Portofolio-Bootstrap'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Bounce>
            {/* Grid Item */}
            <Bounce top>
          <div
            style={{ backgroundImage: `url(${Work2})` }}
            className='shadow-lg p-8 rounded-2xl shadow-[#040c16/20] dark:shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transition duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Blog with Bootstrap
              </span>
              <div className='pt-8 text-center'>
                <a href='https://myblog-egagofur.vercel.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 text-white border-2 border-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/egagofur/Myblog-Bootstrap'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Bounce>
            {/* Grid Item */}
            <Bounce top>
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className='shadow-lg p-8 rounded-2xl shadow-[#040c16/20] dark:shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transition duration-1000'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Store with Bootstrap
              </span>
              <div className='pt-8 text-center'>
                <a href='https://json-store-bootstrap.vercel.app/'>
                 <button className='text-center rounded-lg px-4 py-3 m-2 text-white border-2 border-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/egagofur/Json-Store-Bootstrap'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default Work;