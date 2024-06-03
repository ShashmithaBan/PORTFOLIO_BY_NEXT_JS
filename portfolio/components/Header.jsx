import Link from "next/link";
import { Button } from "./ui/button";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="xl:fixed top-0 left-0 right-0 z-[10] py-8 xl:py-7 text-black bg-[#e7e7e74d]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl">
            Port<span className="font-extrabold">FOLIO</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden flex items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
