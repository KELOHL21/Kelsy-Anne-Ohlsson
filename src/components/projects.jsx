import React from 'react'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"

const projects = [
   {
      name:'Hulu HomePage Clone',
      description:'This Hulu clone was created with Next.js,Tailwind css, Firebase and the TMDB Api. It allows you to filter movies via the catagories. ',
      image:'/assets/images/hulu.png',
       // My OWN PROJECT IMAGES
      github:"https://github.com/KELOHL21/hulu_clone",
      link:"https://hulu-clone2-zeta.vercel.app"

   },
   {
      name:'Starbucks Homepage Clone',
      description:'This Starbucks Homepage clone was created with Next.js and Tailwind css. I made this project to improve my Frontend skills, cloning this homepage was fun and provided growth.',
      // Add in the database 
      image:'/assets/images/starbucks_homepage_clone.png',
       // My OWN PROJECT IMAGES
      github:"https://github.com/KELOHL21/starbucks_homepage_clone",
      link:'https://starbucks-clone-pi.vercel.app'
      // add link vercel/github

   },
   {
      name:'Tic-Tac-Toe Game',
      description:' This app was made with HTML, CSS and Vanilla Javascript.The reason I made this game was to improve my Javascript skills and to learn more about Game Development with Javascript',
      // Add in the database API
      image:'/assets/images/tic-tac-toe.png',
      // My OWN PROJECT IMAGES
      github:"https://github.com/KELOHL21/Tic-Tac-Toe",
      link:'https://kelohl21.github.io/Tic-Tac-Toe/'
      // add link vercel/github

   }
]

const Projects = () => {
   return (
      <section id="projects" className='mb-5'>
        <h1 className="uppercase pt-5 text-4xl md:text-5xl tracking-tight m-auto text-center text-[rgb(96,9,240)] md:pt-[2rem] lg:pt-[5rem] pb-10 md:pb-[4rem]">
          Projects
          {/* <hr className="w-10 h-1 mx-auto my-4 bg-gray-800 border-0 rounded"></hr> */}
        </h1>
  
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

