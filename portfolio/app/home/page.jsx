import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Social } from "./Social";
import { Photo } from "./Photo";
import { Stats } from "./Stats";

export const HomePage = () => {
  return (
    <section id="home" className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-10 justify-between items-center pt-5 xl:pt-52 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none xl:pt-0 pt-5">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h2 mb-2">
              Hello I&apos;m
              <br />
              <span className="h1 font-extrabold">Shashmitha Bandara</span>
            </h1>
            <p className="max-w-[500px] text-sm">
              I&apos;m a dynamic developer, fluent in both full-stack and mobile app development. I thrive on crafting sleek, user-centric solutions that elevate digital experiences across platforms.
            </p>
            <div className="xl:mt-5 mt-3 flex flex-col xl:flex-row items-center gap-5">
              <a href="/Assets/Shashmitha_Bandara.pdf">
                <Button variant="outline" className="xl:flex uppercase gap-3">
                  <span className="mx-auto">Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="xl:mx-6">
                <Social containerStyle="flex gap-8" iconStyle="w-9 h-9 flex justify-center items-center border rounded-full border-accent text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          <div className="photo order-1 xl:order-none">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};
