import {FaHtml5 , FaCss3 ,FaPhp , FaJava , FaJs , FaReact , FaFigma , FaBootstrap } from 'react-icons/fa'
import {SiSpring , SiTailwindcss ,SiPostman} from 'react-icons/si'
import { RiNextjsFill } from "react-icons/ri";
import { Info } from 'lucide-react';

const about = {
  title : "About me",
  description :"As a dynamic developer with expertise in both full-stack and mobile app development, I thrive on creating sleek, user-centric solutions that elevate digital experiences across various platforms. My passion lies in crafting intuitive and innovative applications that meet user needs while ensuring high performance and reliability.",
  Info:[
    {
      fieldName: "Name",
    fieldValue :"Shashmitha Bandara",
  },
  {
    fieldName: "Age",
  fieldValue :"23 yrs",
},
    {
      fieldName: "Phone",
    fieldValue :"+94 77 829 4885",
  },
  {
    fieldName: "Email",
  fieldValue :"gimansabandara2001@gmail.com",
},
    {
      fieldName: "Nationality",
    fieldValue :"Sri Lankan",
  },
    {
      fieldName: "Language",
    fieldValue :"English ,  Sinhala",
  },
    
    
  ]
}

const education ={
  title: "My Education",
  description:"Currently pursuing a BSc in Software Engineering at the University of Kelaniya.",
  Info:[
    {
      institue:"University of Kelaniya",
      degree:"BSc(Hons) in Software Engineering",
      duration:"2022 - present"
    },
    {
      institue:"Wayamba Royal Collage",
      degree:"G.C.E Advanced Level | Results - AAC ",
      duration:"2017 - 2020"
    },
    {
      institue:"Lakdasa De Mel Collage",
      degree:"G.C.E Ordinary Level | Results 7A's 2B's",
      duration:"2012 - 2016"
    },
  ]
}

const skills={
  title: "My Skills",
  description:"Passionate developer specializing in full-stack and mobile app development. I excel at creating sleek, user-centric solutions to enhance digital experiences across platforms.",
   skillList:[
    {
      icon:<FaHtml5/>,
      name :"html 5"
    },
    {
      icon:<FaJava/>,
      name :"Java"
    },
    {
      icon:<FaReact/>,
      name :"React Js"
    },
    {
      icon:<RiNextjsFill/>,
      name :"Next Js"
    },
    {
      icon:<SiSpring/>,
      name :"Spring Boot"
    },
    {
      icon:<FaPhp/>,
      name :"PHP"
    },
    {
      icon:<FaJs/>,
      name :"Javascript"
    },
    {
      icon:<FaBootstrap/>,
      name :"Bootstrap"
    },
    {
      icon:<SiTailwindcss/>,
      name :"Tailwind CSS"
    },
    {
      icon:<FaCss3/>,
      name :"CSS"
    },
    {
      icon:<FaFigma/>,
      name :"Figma"
    },
    {
      icon:<SiPostman/>,
      name :"Postman"
    },
    
  ]
}

import { TabsContent ,Tabs , TabsList , TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from '@/components/ui/scroll-area';



export const About = () => {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center items-center  xl:py-2  py-24">
          <div className="container mx-auto">
          <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
            <TabsList className = 'flex flex-col w-full  xl:w-[400px] xl-mx-0 gap-6'>
              <TabsTrigger value="about" className = 'w-full rounded-lg'>
                    About Me
              </TabsTrigger >
              <TabsTrigger value="education" className = 'w-full rounded-lg'>
                    Education
              </TabsTrigger>
              <TabsTrigger value="skills" className = 'w-full rounded-lg'>
                    Skills
              </TabsTrigger>
            </TabsList>
            
              <TabsContent value="about" className="w-full">
              <div className="flex flex-col text-center xl:text-left gap-[20px]">
                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                    <p className='max-w-[600px] xl-mx-0 mx-auto xl:mx-0 text-accent'>{about.description}</p>
                  
                 
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-x-5">
                      {about.Info.map((info,index)=>{
                      return(
                        <li key={index} 
                        className='flex items-center justify-center xl:justify-start gap-4'
                        >
                          <span className='text-accent'>{info.fieldName}:</span>
                          <h3 className='text-lg'>{info.fieldValue}</h3>
                          
                        </li>
                      )}
                      )}
                    </ul>
                 
                  </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                  <div className="flex flex-col text-center xl:text-left gap-[20px]">
                    <h3 className='text-4xl font-bold'>{education.title}</h3>
                    <p className='max-w-[600px] xl-mx-0 mx-auto xl:mx-0 text-accent'>{education.description}</p>
                  
                  <ScrollArea className='h-[400px]'>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                      {education.Info.map((item,index)=>{
                      return(
                        <li key={index} 
                        className='bg-neutral-300 h-[184px] py-6 px-10 flex flex-col justify-center items-center  rounded-xl lg:items-start gap-1'
                        >
                          <span className='text-blue-600 font-semibold'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-semibold'>{item.degree}</h3>
                          <div className="flex  items-center gap-3">
                            <span className='w-[6px] h-[6px] rounded-full bg-green-600'></span>
                            <p className='text-accent text-sm'>{item.institue}</p>
                            </div>
                        </li>
                      )}
                      )}
                    </ul>
                  </ScrollArea>
                  </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col text-center xl:text-left gap-[20px]">
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className='max-w-[600px] xl-mx-0 mx-auto text-accent'>{skills.description}</p>
                  </div>
                  <ul className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 py-10'>
                  {
                    skills.skillList.map((skill,index)=>{
                      return(
                      <li key={index}>
                      <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <div className="md:w-[170px] h-[150px] w-[195px] bg-neutral-300 rounded-xl flex justify-center items-center group ">
                <div className="text-6xl group-hover:text-blue-500 transition-all duration-0 cursor-pointer">
                  {skill.icon}
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {skill.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
                      </li>
                      );
                    })
                  }
                  </ul>
                </div>
              
              </TabsContent>
            
          </Tabs>
          </div>
        </section>
  )
}
