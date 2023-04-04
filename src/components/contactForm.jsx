import {useState } from 'react'

const ContactForm = () => {

  const [_form, setForm] = useState(' ')

  const handleForm = () => {
    setForm(' ')
  }

  return (
   <div id='contact' className='w-full lg:h-screen'>
   <div className='max-w-[1240px] m-auto px-2 py-4 w-full'>
     <p className='uppercase pt-5 text-4xl md:text-5xl tracking-tight m-auto text-center text-[rgb(96,9,240)] md:pt-[2rem] '>
       Contact Me
     </p>
     <h2 className='uppercase pt-5 text-xl tracking-tight m-auto text-center text-gray-800 p-[1rem]'>Get In Touch</h2>

       <div className='m-auto w-[75%] h-[75%] shadow-xl shadow-gray-400 rounded-2xl lg:p-4 border-t bg-white'>
         <div className='p-4 mb-10 md:'>
           <form
             action='https://getform.io/f/d0e4c264-83de-4d46-8103-673885334901'
             method='POST'
             encType='multipart/form-data'
           >
             <div className='w-full py-2'>
               <div className='flex flex-col'>
                 <label className='uppercase text-sm py-2'>Name</label>
                 <input
                   className='border-2 rounded-lg p-3 bg-gray-100 flex border-gray-300 '
                   type='text'
                   name='name'
                 />
               </div>
             </div>
             <div className='flex flex-col py-2'>
               <label className='uppercase text-sm py-2'>Email</label>
               <input
                 className='border-2 bg-gray-100 rounded-lg p-3 flex border-gray-300'
                 type='email'
                 name='email'
               />
             </div>
             <div className='flex flex-col py-2'>
               <label className='uppercase text-sm py-2'>Subject</label>
               <input
                 className='border-2 rounded-lg bg-gray-100 p-3 flex border-gray-300'
                 type='text'
                 name='subject'
               />
             </div>
             <div className='flex flex-col py-2'>
               <label className='uppercase text-sm py-2'>Message</label>
               <textarea
                 className='border-2 rounded-lg p-3 bg-gray-100 border-gray-300'
                 rows='5'
                 name='message'
               ></textarea>
             </div>
             {/* <button class="custom-btn btn-1">Send Message</button> */}
             <button onClick={handleForm}> Send Message </button>
           </form>
         </div>
       </div>  
   </div>
 </div>
  )
}

export default ContactForm