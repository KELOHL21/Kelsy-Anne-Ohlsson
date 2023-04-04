import Image from 'next/image';
import Link from 'next/link';

const About = () => {

   const skills = [
      { skill: "HTML" },
      { skill: "CSS" },
      { skill: "JavaScript" },
      { skill: "Material UI" },
      { skill: "SASS" },
      { skill: "React" },
      { skill: "Next.js" },
      { skill: "Tailwind CSS" },
      { skill: "Git" },
      { skill: "GitHub" },
    ]

  return (
   <div id='about' className='bg-gray-100 h-screen'>      
      <h1 className='uppercase pt-10 text-4xl md:text-5xl tracking-tight m-auto text-center text-[rgb(96,9,240)] md:pt-[2rem] lg:pt-[5rem]'>About Me</h1>

      <p className='p-5 py-5 m-auto leading-relaxed text-center text-gray-600 text-base md:text-xl md:w-[75%] sm:text-lg'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>

         <div className="flex flex-col p-5 pt-[1rem] space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left lg:pt-[5rem]">
         <div className="md:w-1/2 ">
         <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
         Who I Am
         </h1>
         <p className="text-base lg:text-lg py-1 lg:py-2">
               I specialize in building mobile responsive front-end UI applications
               that connect with API`s and other backend technologies. I`m
               passionate about learning new technologies and understand there is
               more than one way to accomplish a task.
         </p>
         <p className="text-base lg:text-lg py-1 lg:py-2">
               I am most proficient
               in building front-end applications using <span className='font-semibold text-gray-600'>HTML</span>, <span className='font-semibold text-gray-600'>CSS</span>, <span className='font-semibold text-gray-600'>Javascript</span>, and
               <span className='font-semibold text-gray-600'> React/Next.js</span>, I am <span className='font-semibold text-[rgb(96,9,240)]'>adept</span> and <span className='font-semibold text-[rgb(96,9,240)]'>capable</span> of picking up new tech stacks as
               required. <span className='font-semibold text-[rgb(96,9,240)]'>I believe that being a great developer is not using one
               specific language, but choosing the best tool for the job as well having a passion for what you do</span>.
         </p>
         <p className="text-base lg:text-lg py-1 lg:py-2">
               I started <span className='font-semibold text-gray-600'>Software developement</span> in 2021, blessed with a schlorship to study at Codespace Academy, and immediately fell inlove with <span className='font-semibold text-gray-600'>Frontend Development</span>.A few soft skills that I come along with is that I have experience working directly with clients and I`m always professional within the workplace, etc. In my spare I tend to continue my self-learning improving my front-end technologies and growing as a developer.
         </p>

         </div>
         <div className="mb-4 text-center md:p-2 md:w-1/2 md:text-left">
                  <h1 className="text-xl font-bold mb-2">My Skills</h1>
                  <div className="flex flex-wrap flex-row justify-center z-5 md:justify-start">
                  {skills.map((item, idx) => {
                     return (
                        <p
                        key={idx}
                        className="bg-gray-200 text-sm px-2 md:px-5 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold "
                        >
                        {item.skill}
                        </p>
                     )
                  })}
                  </div>

               </div>

            </div>
           
   </div>
  );
};

export default About;


