import React, { useState } from 'react';
import Toggle from '../components/Toggle';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { BsInstagram,BsTelegram } from "react-icons/bs";
import { Link } from 'react-scroll';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='navbar fixed bg-base/50 dark:bg-[#0F172A]/50 backdrop-filter backdrop-blur antialiased transition-all duration-300 ease-in decoration-dashed w-full h-[80px] flex justify-between items-center px-8 text-[#1C1E21] dark:text-gray-300 z-20 select-none'>
      <div className='text-4xl font-bold text-[#00df9a] flex cursor-pointer z-10'>
        {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer '>
        {!nav ? <BiMenuAltRight className='mr-4 w-8 h-8 hover:text-[#a2a2f6] dark:hover:text-[#4bb5ff] '/> : <AiOutlineClose className='mr-24 w-6 h-6 hover:text-[#a2a2f6] dark:hover:text-[#4bb5ff]'/>}
      </div>

      {/* logo */}
      <Zoom left>
        <h1>J<span className='text-4xl font-bold text-[#1C1E21] dark:text-gray-300 cursor-pointer'>D</span></h1>
      </Zoom>
      </div>
      <div className="md:hidden">
          <Toggle/>
      </div>

      {/* menu */}
      <LightSpeed right>
      <ul className='hidden md:flex items-center'>
        <li className='hover:text-[#a2a2f6] dark:hover:text-gray-400 inline dark:border-[#0F172A] dark:border-b-4 dark:hover:border-[#a2a2f6]'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <ul className="menu menu-horizontal p-0">
        <li tabindex="0" className='hover:text-[#a2a2f6] dark:hover:text-gray-200 inline '>
        <Link to='about' smooth={true} duration={500}>
        About
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-black text-gray-600 dark:bg-[#a2a2f6] dark:text-[#0F172A] ">
          <li className='hover:text-white dark:hover:bg-[#7676D3] dark:hover:text-white'><a href="https://www.instagram.com/egagofur_/" target="_blank"><BsInstagram/> Instagram</a></li>
          <li className='hover:text-white dark:hover:bg-[#7676D3] dark:hover:text-white'><a href="https://t.me/INDlalapo" target="_blank"><BsTelegram/> Telegram</a></li>
        </ul>
      </li>
        </ul>
        <li className='hover:text-[#a2a2f6] dark:hover:text-gray-400 inline dark:border-[#0F172A] dark:border-b-4 dark:hover:border-[#a2a2f6]'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-[#a2a2f6] dark:hover:text-gray-400 inline dark:border-[#0F172A] dark:border-b-4 dark:hover:border-[#a2a2f6]'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:text-[#a2a2f6] dark:hover:text-gray-400 inline dark:border-[#0F172A] dark:border-b-4 dark:hover:border-[#a2a2f6]'>
          <Link to='experience' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='btn ml-3 rounded-lg border-2 text-white bg-[#1C1E21] border-[#1C1E21] hover:text-[#1C1E21] hover:bg-white dark:border-[#0F172A] dark:bg-[#a2a2f6] dark:text-black p-3 dark:hover:bg-[#0F172A] dark:hover:text-[#a2a2f6] dark:hover:border-[#a2a2f6] focus:outline-none'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='focus:outline-none'>
          <Toggle/>
        </li>
      </ul>
      </LightSpeed>
      {/* Mobile menu */}
      <Bounce left>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'fixed top-0 left-0 w-[60%] h-screen border-r border-r-gray-200  dark:border-r-gray-800 bg-white dark:bg-[#0F172A] flex flex-col pt-24  pl-6 items-start pb-20 transition-all duration-1000  ease-in-out '
        }
      >
      
        <li className='p-4 border-b border-gray-600 hover:text-[#a2a2f6] dark:hover:text-[#a2a2f6]'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600 hover:text-[#a2a2f6] dark:hover:text-[#a2a2f6]'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600 hover:text-[#a2a2f6] dark:hover:text-[#a2a2f6]'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600 hover:text-[#a2a2f6] dark:hover:text-[#a2a2f6]'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='p-4 border-b border-gray-600 hover:text-[#a2a2f6] dark:hover:text-[#a2a2f6]'>
          {' '}
          <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='p-4  hover:text-[#a2a2f6] dark:hover:text-[#a2a2f6]'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      </Bounce>


      {/* Social icons */}
      <Bounce left>
      <div className='hidden lg:flex fixed flex-col top-[350%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ega-gofur-201710236'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/egagofur?tab=repositories'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
            <Link  to='contact' smooth={true} duration={500}
              className='flex justify-between items-center w-full text-gray-300'
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
      </Bounce>
    </div>
  );
};

export default Navbar;