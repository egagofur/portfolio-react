import React from 'react'
import TextLoop from "react-text-loop";
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/react.png'
import NODE from '../assets/node.png'
import GITHUB from '../assets/github.svg'
import FIREBASE from '../assets/firebase.png'
import MONGO from '../assets/mongo.png'
import TAILWIND from '../assets/tailwind.png'
import BOOTSTRAPPED from '../assets/bootstrap-5-1.svg'
import SASS from '../assets/sass.svg'
import NEXT from '../assets/next.svg'

export const Skills = () => {
  return (
    <div name="skills" className=' antialiased transition-all duration-500 w-full h-screen bg-white pt-80 pb-72  dark:bg-[#0F172A] text-[#1C1E21] dark:text-gray-300 select-none'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <Bounce left>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>
        </Bounce>
        
            <div className='py-4'>
                <section><p>// Familiar with</p></section>
              <TextLoop interval={800} className='text-3xl font-bold'>
                <span className="text-[#E44D26] ">HTML</span>
                <span className="text-[#0277BD] ">CSS</span>
                <span className="text-[#FFD600] ">JavaScript</span>
                <span className="text-[#00D8FF] ">React JS</span>
                <span className="text-[#8CC84B] ">Node JS</span>
                <span className="text-[#EEEEEE] ">Github</span>
                <span className="text-[#FFA000] ">Firebase</span>
                <span className="text-[#4CAF50] ">MongoDB</span>
                <span className="text-[#44A8B3] ">Tailwind</span>
                <span className="text-[#7952B3] ">Bootstrap</span>
                <span className="text-[#CF649A] ">SASS</span>
                <span className="text-[#16B9FD] ">Flutter</span>
              </TextLoop>
            </div>
          
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 cursor-pointer space-y-2 aspect-square'>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="HTML">
                <img className='w-20 mx-auto' src={HTML} alt='HTML icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="CSS">
                <img className='w-20 mx-auto' src={CSS} alt='CSS icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="JavaScript">
                <img className='w-20 mx-auto' src={JS} alt='JS icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="React(Library)">
                <img className='w-20 mx-auto' src={REACT} alt='REACT icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="Node.js">
                <img className='w-20 mx-auto' src={NODE} alt='NODE icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="GitHub">
                <img className='w-20 mx-auto' src={GITHUB} alt='GITHUB icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="Firebase">
                <img className='w-20 mx-auto' src={FIREBASE} alt='FIREBASE icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="MongoDB">
                <img className='w-20 mx-auto' src={MONGO} alt='MONGO icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="Tailwind">
                <img className='w-20 mx-auto' src={TAILWIND} alt='TAILWIND icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="Bootstrap">
                <img className='w-20 mx-auto' src={BOOTSTRAPPED} alt='BOOTSTRAPPED icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="SASS">
                <img className='w-20 mx-auto' src={SASS} alt='SASS icons'/>
              </div>
            </Flip>
            <Flip right>
              <div className='shadow-md p-8 rounded-2xl shadow-[#040c16/50] dark:shadow-[#040c16] hover:scale-110 duration-500 tooltip tooltip-info flex justify-center items-center' data-tip="Next.js">
                <img className='w-20 mx-auto' src={NEXT} alt='NEXT JS icons'/>
              </div>
            </Flip>
            </div>
        </div>
    </div>
  )
}

export default Skills