"use client";

import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "projects",
    path: "#projects",
  },
  {
    name: "repositories",
    path: "#repositories",
  },
  {
    name: "about",
    path: "#about",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

export const MobileNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7, // Adjust as needed
      }
    );

    // Observe each section
    links.forEach((link) => {
      const section = document.querySelector(link.path);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="bg-white flex flex-col p-2 px-5">
        <div className="">Port<span className="font-semibold">FOLIO</span></div>
        
        <div className="flex flex-col h-screen space-y-20 my-auto">
        <div className="text-center">
          <p>I,m</p>
          <p className="font-extrabold text-xl">Shashmitha Bandara</p>
        </div>
        <nav className="flex flex-col space-y-10 justify-center items-center ">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`capitalize font-medium hover:text-accent transition-all ${
                activeLink === link.path ? "text-accent border-b-2 border-accent" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
