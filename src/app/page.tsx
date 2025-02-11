"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SkillData, Projects, Socials } from "@/constants";

const Home = () => {
  return (
    <main className="w-screen h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section id="home" className="h-screen w-screen relative snap-start">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/port2.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50 "></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 lg:px-40">
          <h1 className="text-[42px] md:text-[50px] text-white font-bold leading-tight">
            Hello,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              I'm Krinesh Maharjan
            </span>
          </h1>
          <p className="text-gray-300 mt-3 max-w-[650px] hidden md:block">
            A passionate Web Developer eager to build innovative and
            user-friendly websites. I specialize in React, PHP, and Tailwind CSS
            and am always excited to explore new technologies.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#skills"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-lg text-white transition duration-300 shadow-lg"
            >
              Learn More
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-white text-lg text-white transition duration-300 hover:bg-white hover:text-black shadow-lg"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white text-lg text-white transition duration-300  hover:bg-white hover:text-black shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center snap-start"
        style={{ backgroundImage: "url(/port2.jpg)" }}
      >
        <h1 className="font-semibold text-white text-[50px]">
          Skills
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            &{" "}
          </span>
          Technologies
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-[80%] mt-6">
          {SkillData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <p className="text-white text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen w-screen flex items-center justify-center bg-center bg-cover snap-start"
        style={{ backgroundImage: "url(/port2.jpg)" }}
      >
        <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
          <>
            <div className="bg-white border">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="EMS.png" alt="EMS" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Employee Management System
                  </div>
                  <p className="text-gray-700 text-base">
                    The Employee Management System (EMS) is a web-based
                    application designed to manage employee records and
                    streamline organizational processes. It offers features like
                    attendance tracking, payroll management, leave management,
                    and task assignments.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #html
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #css
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #php
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #javascript
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #mysql
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #mysql
                  </span>
                </div>
                <Link
                  href={"https://github.com/KrineshMaharjan07/EMS"}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-lg text-white transition duration-300 shadow-lg flex items-center gap-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </>
          <>
            <div className="bg-white ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="CMS.png" alt="CMS" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Canteen Management System
                  </div>
                  <p className="text-gray-700 text-base">
                    The Canteen Management System (CMS) is a web application
                    designed to streamline canteen operations. It facilitates
                    efficient order management, user account handling, and
                    payment integration, making it ideal for small to
                    medium-sized canteens.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #html
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #css
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #php
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #javascript
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #mysql
                  </span>
                </div>
                <Link
                  href={"https://github.com/KrineshMaharjan07/CMS"}
                  className="px-6 py-3  bg-gray-800 hover:bg-gray-700 text-lg text-white transition duration-300 shadow-lg flex items-center gap-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen w-screen flex items-center justify-center bg-cover bg-center snap-start"
        style={{ backgroundImage: "url(/port2.jpg)" }}
      >
        <div className="h-[65%] w-[85%] md:w-[60%] lg:w-[50%] relative bg-cover bg-center rounded-2xl border border-white shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-2xl"></div>
          <div className="relative z-10 p-8 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
            <p className="text-md text-gray-300">
              Feel free to reach out anytime!
            </p>
            <h2 className="text-lg font-semibold mt-6">Email:</h2>
            <p className="text-md text-gray-300">krineshmaharjan@gmail.com</p>
            <nav className="flex items-center gap-6 mt-6">
              {Socials.map((social) => (
                <Link key={social.name} href={social.link} target="_blank">
                  <Image
                    src={social.src}
                    alt={`Follow on ${social.name}`}
                    width={35}
                    height={35}
                    className="hover:scale-125 transition-transform"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-md">
        <div className="flex justify-between items-center px-6 md:px-12 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Krinesh Logo"
              width={50}
              height={50}
              className="rounded-full border border-white/20 shadow-md"
            />
            <h1 className="text-white text-2xl font-bold">
              Krinesh Maharjan{" "}
              <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white text-lg font-semibold">
            <a href="#home" className="hover:text-purple-400 transition">
              Home
            </a>
            <a href="#skills" className="hover:text-purple-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Home;
