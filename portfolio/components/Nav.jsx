// components/Nav.js
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

export const Nav = () => {
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
    <nav ref={navRef} className="flex gap-8">
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
  );
};
