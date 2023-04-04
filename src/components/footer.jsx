import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {SiIndeed} from 'react-icons/si'

const Footer = () =>{
   return (
      <div className='w-[100%] h-[18rem] bg-black text-white'>
         <div className=" flex flex-col md:flex-row md:items-center md:justify-center md:flex-row-reverse md:justify-between">  

            <div className='m-4 md:m-10'>
               <h2 className='text-2xl font-semibold uppercase'>Socials</h2>
               <div className='flex space-x-3 pt-2'>
                  <AiFillGithub size={30}/>
                  <AiFillLinkedin size={30}/>
                  <SiIndeed size={30}/>
               </div>
            </div>

            <div className='m-4 md:m-10'>
               <h2 className='text-2xl font-semibold uppercase'>Kelsy-Anne Ohlsson</h2>
               <p className='text-xs pt-2 w-full leading-relaxed'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>

            </div>

         </div>

            <div className='text-center p-2 mt-[1rem] md:mt-[4rem] md:mb-[2rem]'>   
               <hr className='bg-white w-[90%] m-auto ' />
               <h3 className='text-xs mt-3 mb-3'>© Copyright 2023. Made by <span className='font-bold line'>KELSY-ANNE OHLSSON</span></h3>
            </div>
      </div>
   )
}

export default Footer