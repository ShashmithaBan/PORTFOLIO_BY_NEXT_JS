"use client"
import { Divider } from "@mui/material";
import CountUp from "react-countup";

const formatNumber = (value) => {
    return value < 10 ? `00${value}` : `${value}`;
  };
export const Stats = () => {
  return (
    <section>
        <div className="container mx-auto flex xl:flex-row flex-col justify-center items-center xl:pt-0 pt-7 gap-6">
            <div className="flex xl:flex-row flex-col xl:gap-7 items-center">
                <h1 className="h3 text-accent order-2 xl:order-none ">Projects Completed</h1>
                <CountUp end={7}  duration={5}  delay={2} className="text-4xl xl:text-6xl order-1 xl:order-none" formattingFn={formatNumber}/>
                
            </div>
            <Divider orientation="vertical" flexItem sx={{border: '2px solid black'}} className="hidden xl:block"/>
            <div className="flex xl:flex-row flex-col xl:gap-7 justify-center items-center">
                
                <CountUp end={500}  duration={5}  delay={2} className="text-4xl xl:text-6xl order-1 xl:order-none" formattingFn={formatNumber}/>
                <h1 className="h3 text-accent order-2 xl:order-none">Total Commits</h1>
            </div>
            
        </div>
    </section>
  )
}
