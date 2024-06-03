"use client"
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Image from "next/image";


export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
      initial={{opacity:0 , scale: 0.9 }}
      animate={{
        opacity:1,
        scale:1,
        transition:{delay:0.1 , duration:0.4, ease:"easeIn"},
      }}
      >
      <motion.div
        initialnitial={{opacity:0 , scale: 0.2}}
        animate={{
          opacity:1,
          scale:1,
          transition:{delay:0.1 , duration:0.4, ease:"easeInOut"},}}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-plus-darker absolute" >
          <Image src="/Assets/Shash.png" priority quality={100} fill alt="" className="object-contain"/>
        </motion.div>
        <motion.svg 
        className="w-[285px] xl:w-[480px] h-[285px] xl:h-[480px]" 
        fill="transparent "
        viewBox='0 0 506 506'
        xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle cx='253' cy='253' r='250' stroke='#696969' 
          strokeWidth='8'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{strokeDasharray : "24 10 0 0 0"}}
          animate={{
            strokeDasharray:["15 120 25 25" , "16 25 92 72" , "4 250 22 22"],
            rotate:[120,360],
          }}
          transition={{
            duration:50,
            repeat:Infinity,
            repeatType:"reverse"
          }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}
