import React from 'react'
import Slide from 'react-reveal/Slide';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
      <footer className='antialiased transition-all duration-500 bg-white text-[#1C1E21] dark:bg-[#0F172A]  select-none pt-56'>
        <div className='container pt-16 md:pl-60'>
          <div className='flex flex-wrap'>
            <Slide left>
            <div className="w-full mb-12 dark:text-slate-300 font-medium md:w-1/3 px-8">
              <h2 className='font-bold text-4xl dark:text-white mb-5'>JDev</h2>
              <h3 className='font-bold text-2xl mb-2'>Contact Me</h3>
              <p>egagofurtriwahana@gmail.com</p>
              <p>JL. Sakura No. 65164</p>
              <p>Malang</p>
            </div>
            <div className='w-full px-4 mb-12 md:w-1/3 '>
              <h3 className='font-semibold text-xl dark:text-white mb-5 px-4 '>Writing Category</h3>
              <ul className='dark:text-slate-300'>
                <li>
                  <a href="https://id.quora.com/Apa-apa-saja-fakta-tentang-seorang-programmer" className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>Programming</a>
                </li>
                <li>
                  <a href="https://www.quora.com/What-is-the-latest-technology-1" className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>Technology</a>
                </li>
                <li>
                  <a href="https://www.quora.com/What-would-your-dream-lifestyle-look-like" className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>Lifestyle</a>
                </li>
              </ul>
            </div>
            <div className='w-full px-4 mb-12 md:w-1/3'>
              <h3 className='font-semibold text-xl px-4 dark:text-white mb-5 '>Link</h3>
              <ul className='dark:text-slate-300'>
                <li>
                  <Link to='home' smooth={true} duration={500} className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>Home</Link>
                </li>
                <li>
                  <Link to='about' smooth={true} duration={500} className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>About</Link>
                </li>
                <li>
                  <Link to='skills' smooth={true} duration={500} className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>Skills</Link>
                </li>
                <li>
                  <Link to='work' smooth={true} duration={500} className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>Work</Link>
                </li>
                <li>
                  <Link to='experience' smooth={true} duration={500} className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>Experience</Link>
                </li>
                <li>
                  <Link to='contact' smooth={true} duration={500} className='inline-block text-base hover:text-[#a2a2f6] dark:hover:text-white mb-3'>Contact</Link>
                </li>
              </ul>
            </div>
            </Slide>
          </div>
        </div>
        

        <div className="w-full h-full pt-10 border-t border-slate-700 bg-[#0F172A] pb-12">
          <div className="flex items-center justify-center pb-5">
            <p className='font-medium text-xs text-slate-500 text-center'>Built with <span className='text-pink-500'>❤️</span> by <a href="https://egagofur-socialprofile.web.app/" className='font-bold text-[#00df9a] hover:text-white'>JDev</a>, using <a href="https://tailwindcss.com/" className='font-bold text-sky-500 hover:text-white'>Tailwind CSS</a></p>
          </div>
        </div>
      </footer>
  )
}

export default Footer