import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [navBg, setNavBg] = useState('white');

  let links = [
    {name:'Home', link:'/'},
    {name:'About', link:'#about'},
    {name:'Projects', link:'#projects'},
    {name:'Contact', link:'#contact'},
 ];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
        <Link href='/' className='flex items-center px-2'>
            <Image
              src='/assets/images/logo.png'
              alt='/'
              width='50'
              height='50'
              className='cursor-pointer'
            />
            <h1 className='px-2 text-xl font-light uppercase hover:text-[rgb(96,9,240)]'>Kelsy</h1>
        </Link>
            <div >
              <ul className='hidden mr-5 md:flex'>
                  {
                        links.map((link) => (

                        <li key={link.name} className="text-lg font-light duration-500 md:ml-8 my-7 "><Link href={link.link} className="text-gray-900 ease-in duration-300 space-x-5 uppercase hover:font-normal hover:text-[rgb(96,9,240)]">{link.name}</Link></li>
                        ))

                     } 

                  </ul> 
            </div>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden mx-5'
          >
            <AiOutlineMenu size={35} />
          </div>
        </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : 'invisible'
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex items-center justify-between w-full'>
              <Link href='/' className='flex items-center px-2'>
              <Image
                src='/assets/images/logo.png'
                alt='/'
                width='50'
                height='50'
                className='cursor-pointer'
              />
              <h1 className='px-2 text-lg font-light uppercase hover:text-[rgb(96,9,240)]'>Kelsy</h1>
        </Link>
              <div
                onClick={handleNav}
                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
              >
                <AiOutlineClose size={35}/>
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Solve the problem then write the code.
              </p>
            </div>
          </div>
          <div className='flex flex-col py-4'>
              <ul className=''>
                  {
                        links.map((link) => (

                        <li key={link.name} className="text-xl md:ml-8 my-7 "><Link href={link.link} className="links duration-500  text-gray-900 hover:text-[rgb(96,9,240)] hover:ease-in-out uppercase">{link.name}</Link></li>
                        ))

                     } 

                  </ul> 
            </div>
            <div className='pt-20'>
              <p className='uppercase tracking-widest text-[rgb(96,9,240)]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaLinkedinIn />
                  </div>
                </a>
                
                <a
                  href='href="https://github.com/KELOHL21"'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;

