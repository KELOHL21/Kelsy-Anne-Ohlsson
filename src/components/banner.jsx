import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import {SiIndeed} from 'react-icons/si'

const Banner = () => {
   return (
      <div id='home' >
         
         <div className='flex w-full h-screen text-center'>     
            
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

               <div>
                  <p className='pt-[5rem] md:pt-0 text-sm tracking-widest text-gray-600 uppercase'>
                  LET&#39;S CREATE BEAUTIFUL WEBSITES TOGETHER
                  </p>
                  <h1 className='py-4 text-5xl text-gray-700'>
                  Hi, I&#39;m <span className='text-[rgb(96,9,240)] upper'> Kelsy </span>
                  </h1>
                  <h1 className='py-2 text-5xl text-gray-700'>A Junior Front-End Web Developer</h1>
                  <p className='py-6 leading-relaxed text-gray-600 sm:max-w-[70%] m-auto text-xl'>
                  I&#39;m focused on building responsive and beautiful frontend web and moblie applications.Turning the Web into my very own Art Gallery.
                  </p> 
                  <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                    <Link href="https://www.linkedin.com/in/kelsy-anne-ohlsson-718625212/">
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                        <FaLinkedinIn />
                      </div>
                      </Link>
          
                      <Link href="https://github.com/KELOHL21">
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                        <FaGithub />
                      </div>
                      </Link>

                      <Link href="/">
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                        <SiIndeed />
                      </div>
                      </Link>

                    <Link href='/#contact'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                        <AiOutlineMail />
                      </div>
                    </Link>

                  </div>
               </div>



            </div>
        
        </div>

      </div>
    );
}

export default Banner