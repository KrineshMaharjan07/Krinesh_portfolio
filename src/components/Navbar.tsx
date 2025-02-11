"use client"
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= scrollPosition && bottom >= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 text-white p-4 flex justify-center gap-8">
      {["home", "skills", "projects", "contact"].map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          className={`px-4 py-2 ${
            activeSection === section
              ? "text-purple-400 border-b-2 border-purple-400"
              : ""
          } transition-all`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
