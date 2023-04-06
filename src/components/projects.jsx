import React from 'react'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"

const projects = [
   {
      name:'Hulu HomePage Clone',
      description:'This Hulu clone was created with Next.js,Tailwind css, Firebase and the TMDB Api. It allows you to filter movies via the catagories. ',
      image:'/assets/images/hulu.png',
      github:"https://github.com/KELOHL21/hulu_clone",
      link:"https://hulu-clone2-zeta.vercel.app"

   },
   {
      name:'Starbucks Homepage Clone',
      description:'This Starbucks Homepage clone was created with Next.js and Tailwind css. I made this project to improve my Frontend skills, cloning this homepage was fun and provided growth.',
      image:'/assets/images/starbucks_homepage_clone.png',
      github:"https://github.com/KELOHL21/starbucks_homepage_clone",
      link:'https://starbucks-clone-pi.vercel.app'

   },
   {
      name:'Tic-Tac-Toe Game',
      description:' This app was made with HTML, CSS and Vanilla Javascript.The reason I made this game was to improve my Javascript skills and to learn more about Game Development with Javascript',
      image:'/assets/images/tic-tac-toe.png',
      github:"https://github.com/KELOHL21/Tic-Tac-Toe",
      link:'https://kelohl21.github.io/Tic-Tac-Toe/'

   }
]

const Projects = () => {
   return (
      <section id="projects" className='mb-[5rem]'>

        <h1 className="uppercase mt-5 text-4xl md:text-5xl tracking-tight m-auto text-center text-[rgb(96,9,240)] md:mt-[2rem] lg:mt-[5rem] pb-10 md:pb-[4rem]">
          Projects       
        </h1>

        <p className='p-16 mt-[-5rem] m-auto leading-relaxed text-center text-gray-600 text-base md:text-xl md:w-[75%] sm:text-lg'>Here you will find some of my personal projects that I created the github is available as well as a demo.</p>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div offset="-300px 0px -300px 0px">
                  <div className="flex flex-col px-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70 "
                        />
                      </Link>
                    </div>
                    <div className="mt-8 text-center md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 ">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4 m-auto">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer "
                          />
                        </Link>
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer "
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>
      </section>
    )
}

export default Projects

