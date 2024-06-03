"use client";

import { animate, motion } from "framer-motion";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

 import {BsArrowUpRight , BsGithub} from 'react-icons/bs'
 import { Tooltip , TooltipContent ,TooltipProvider , TooltipTrigger } from "@radix-ui/react-tooltip";

 import Link from "next/link";
 import Image from "next/image";
import { WorkSliderBtn } from "./WorkSliderBtn";

 const projects = [
  {
    num:"01",
    Category : "full stack",
    title :"project 01",
    description:"Enjoy hassle-free food delivery with our platform, offering secure authentication, streamlined admin controls, and a user-friendly interface. Order your favorite meals effortlessly and indulge in a seamless dining experience. ",
    stacks:[{name:"React JS"} , {name:"Tailwind CSS"},{name:"SpringBoot"}],
    image:"/Assets/Project_01.png",
    github:"https://github.com/ShashmithaBan/Online-Food-Delivery-Website",
  },
  {
    num:"02",
    Category : "Front End",
    title :"project 02",
    description:"In September 2023, I crafted my personal portfolio website from scratch using HTML and CSS. With a clean and modern design, this platform showcases my skills, projects, and achievements to the world. From elegant layouts to smooth navigation, my portfolio reflects my dedication to creating polished and professional web experiences. ",
    stacks:[ {name:"HTML"},{name:"CSS"}],
    image:"/Assets/Project_02.png",
    github:"https://github.com/ShashmithaBan/My-Portfolio-By-HTML-and-CSS-in-2023",
  },
  {
    num:"03",
    Category : "Full Stack",
    title :"project 03",
    description:"Built a full-stack liquor store website with PHP, HTML, and CSS. Collaborated on features like user authentication and product management, showcasing skills in web development and teamwork.",
    stacks:[{name:"Php"} , {name:"HTML"},{name:"CSS"}],
    image:"/Assets/Project_03.png",
    github:"https://github.com/ShashmithaBan/Ek-Bar",
  },
  
 ]

export const Projects = () => {
  const handleSlideChange = (swiper) =>{
    //get current slide index
    const currentIndex= swiper.activeIndex
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }
  const [project ,setProject] = useState(projects[0]);
  return <motion.section id="projects" initial={{opacity:0}}  animate={{opacity:1 , transition:{delay:2.4 , duration:0.4 , ease:'easeIn'}}} className="min-h-[80vh] flex flex-col justify-center items-center h-screen">
    <div className="container mx-auto px-2 xl:px-0">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col xl:gap-[15px] gap-[5px] h-[50%]">
            <div className=" text-8xl xl:text-9xl  leading-none font-extrabold ">{project.num}</div>
            <h2 className="text-[33px] font-bold capitalize group-hover:text-accent transition-all duration-500">{project.Category} project</h2>
          <p className="text-accent text-sm">{project.description}</p>
          <ul className="flex flex-row gap-5 text-green-700">
            {
              project.stacks.map((item,index)=>{
                return <li key={index} className="text-md">{item.name}
                 {index !== project.stacks.length -1 && ","}{/* to remove the last comma */}
                </li>
              } 
              )
            }
          </ul>
          <div className="border border-accent"></div>
            <div className="mt-3">
              <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-accent flex justify-center items-center group">
                    <BsGithub className=" text-primary text-3xl group-hover:text-gray-800"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="hidden">Github Repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div>
          
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <h1 className="xl:hidden text-center text-2xl font-semibold mb-6 underline">Projects</h1>
          <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
          >
                {
                  projects.map((project,index)=>
                  {return <SwiperSlide key={index} className="w-full" >
                    <div className="xl:h-[350px] h-[250px] relative group flex justify-center items-center bg-accent shadow-lg">
                    <div className="absolute top-0 bottom-0 w-full  h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                      src={project.image}
                      fill
                      className="object-cover"
                      alt=""/>
                    </div>
                    </div>
                  </SwiperSlide>}
                  )
                }
                <WorkSliderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-24 
                z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent:hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                />
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
    
}
