import Link  from "next/link"
import { Button  } from "./ui/button"
import { Nav } from "./Nav"
import { MobileNav } from "./MobileNav"

export const Header = () => {
  return (
    <header className="py-8 xl:py-7 text-black">
        <div className="container mx-auto flex justify-between ">
        <Link href={"/"}>
        <h1 className="text-3xl ">Port<span className="font-extrabold">FOLIO</span></h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
        <Nav/> 
        <Link href={"/contact"}>
            <Button >Hire Me</Button>
        </Link>
        </div>
        <div className="xl:hidden">
            <MobileNav/>
        </div>
        </div>
    </header>
  )
}
