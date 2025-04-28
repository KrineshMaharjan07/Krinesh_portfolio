"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Smooth scroll to section with navbar offset
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);

      const navbarHeight = 80; // Adjust if your navbar height changes
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Throttle scroll events
    const throttledScroll = () => {
      if (!scrollTimeoutRef.current) {
        scrollTimeoutRef.current = window.setTimeout(() => {
          handleScroll();
          scrollTimeoutRef.current = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 text-white p-4 flex justify-center gap-8 backdrop-blur-sm z-50">
      {["home", "skills", "projects", "contact"].map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          scroll={false}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section);
          }}
          className={`px-4 py-2 ${
            activeSection === section
              ? "text-purple-400 border-b-2 border-purple-400"
              : "hover:text-purple-300"
          } transition-all duration-300`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
