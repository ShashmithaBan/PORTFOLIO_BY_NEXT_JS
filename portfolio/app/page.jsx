
import { About } from "./about/page";
import { Contact } from "./contact/page";
import { HomePage } from "./home/page";
import { Projects } from "./project/page";
import { Repositories } from "./repositories/page";


export default function Home() {
  return (
   <main>
    <HomePage/>
    <Projects/>
    <Repositories/>
    <About/>
    <Contact/>
   </main>
  );
}
