import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export const HomePage = () => {
  return (
    <section id="home" className="h-full">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-10 justify-between items-center xl:pt-8 xl:pb-24">
              <div className="text-center xl:text-left">
                <span span="text-xl">Full Stack Developer</span>
                <h1 className="h2 mb-2">
                Hello I'm<br/><span className="h1 font-extrabold ">Shashmitha Bandara</span>
                </h1>
                <p className="max-w-[500px] text-sm">I'm a dynamic developer, fluent in both full-stack and mobile app development. I thrive on crafting sleek, user-centric solutions that elevate digital experiences across platforms.
</p>
              <div className="xl:mt-5 mt-3 flex flex-col xl:flex-row items-center gap-5 ">
                <Button variant = "outline" className="xl:flex uppercase gap-3">
                  <span className="mx-auto">Download CV</span>
                  <FiDownload/>
                </Button>
                <div className="">
                  socail
                </div>
              </div>
              </div>

              <div className="photo">
photo
              </div>
            </div>
          </div>
        </section>
  )
}
