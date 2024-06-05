
import { About } from "./about/page";
import { Contact } from "./contact/page";
import { HomePage } from "./home/page";
import { Projects } from "./project/page";



export default function Home() {
  return (
   <main>
    <HomePage/>
     <Projects/>
    <About/>
    <Contact/>
   </main>
  );
}
