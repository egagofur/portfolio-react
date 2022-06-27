import React from 'react';
import { Link } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Typical from 'react-typical';
import TextLoop from "react-text-loop";
import Bounce from 'react-reveal/Bounce';


const Home = () => {

  return (
    <div name='home' className=' antialiased w-full h-screen bg-white dark:bg-[#0F172A] transition-all duration-500 '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full select-none'>
        <Bounce bottom>
          <p className='text-gray-600 dark:text-[#f472b6]'>Hello i'm</p>
          <div>
          <TextLoop interval={2000}>
                <span><h1 className='text-4xl sm:text-7xl font-bold text-[#1C1E21] dark:text-[#e2e8f0]'>Ega Gofur</h1></span>
                <span><h1 className='text-4xl sm:text-7xl font-bold text-green-400'>JDev</h1></span>
          </TextLoop>
          </div>
          <div>
            <span>
            <Typical className='container ityped-cursor text-4xl sm:text-7xl font-bold text-[#5f57e6] pt-4'
            loop={Infinity}
            steps={[
              'MERN Stack Dev',
              1000,
              'Front-End Web Dev',
              1000,
              'UI/UX Designer',
              1000,
            ]}
            />
            </span>
          </div>
          <p className='text-gray-600 dark:text-[#94a3b8] py-4 max-w-[700px]'>I'am a frond-end developer specializing in building (and ossasinally designing) exceptional digital experiences. Currenty, I'm focused on building responsive frond-end web appliactions.</p>
          <div>
          <Link to='work' smooth={true} duration={500}>
          <button className='text-gray-600 border-gray-500 hover:text-white hover:bg-[#1C1E21] dark:text-[#4bb5ff] group border-2 dark:border-gray-500  dark:hover:text-[#374151] dark:hover:bg-[#4bb5ff] px-6 py-3 my-3 flex items-center rounded-md focus:outline-none'>View Work
          <span className='group-hover:rotate-90 duration-300'>
          < HiArrowNarrowRight className='ml-3'/>
          </span>
          </button>
          </Link>
          </div>
          </Bounce>
        </div>
    </div>
  )
}

export default Home