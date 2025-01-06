"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Machine Learning' ,'Software Engineering', 'Electronics' , 'Internet Of Things',],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Welcome <span className="font-semibold"> to my creative realm{","}</span><br className="hidden font-bold lg:block" /> Technology Stack <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Where passion meets innovation{"."} <br className="hidden lg:block" /> Learn about me, my blogs, and projects here.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">

            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Skillset Highlights</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Categorization of My Expertise</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Core Skills</h3>
                {/* <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p> */}
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Electronics</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Communication System</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Digital Signal Proccessing</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● VLSI Design</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Internet Of Things</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Network Analysis</li>
                </ul>
                {/* <Button className="mx-1" variant="outline">Choose Plan</Button> */}
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Soft Skills</h3>
                {/* <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span> */}
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Communication</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Teamwork</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Time Managemment</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Leadership</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Problem-Solving</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Creativity and Adaptability</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Public Speaking</li>
                </ul>
                {/* <Button className="mx-1" variant="outline">Choose Plan</Button> */}
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">IT Skills</h3>
                {/* <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p> */}
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Programming Language {" (C++, Pyhton, JavaScript)"}</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Web Development {" (HTML CSS, Tailwind Css, ReactJs, ExpressJs, NodeJs, NextJs)"}</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Database Managemment {" (MongoDB, mySQL)"}</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Version Control System {" (Git and GitHub)"}</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● API Testing {" (Postman, ThunderClient)"}</li>
                  <li className="text-gray-600 dark:text-gray-400 hover:underline">● Genrative Ai {" (ChatGpt, Gemini, Pieces)"}</li>
                </ul>
                {/* <Button className="mx-1" variant="outline">Choose Plan</Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Know more about myself.</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300"></p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-800 dark:text-gray-200">"Want to know about me? Explore my About page to uncover academic advantures, intrests, academic path and personal pursuits."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200"></h3>
                <Link href={"/about"}>
                <Button className="mx-1" variant="outline">About</Button>
                </Link>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-800 dark:text-gray-200">"Curious about my perspective? Head to my blog page to read my blogs."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200"></h3>
                <Link href={"/blog"}>
                <Button className="mx-1" variant="outline">Blog</Button>
                </Link>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-800 dark:text-gray-200">"Dive into my portfolio! Visit my Projects page to understand my technical capabilities and project experience."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200"></h3>
                <Link href={"/projects"}>
                <Button className="mx-1" variant="outline">Projects</Button>
                </Link>
              </div>
            </div >
            <div className="sm:flex-col sm:justify-center md:flex-col md:justify-center">
            <Link href={"/contact"}>
                <Button className="mx-1" variant="outline">Contact Me</Button>
                </Link>
            </div>
          </div>
          
        </div>
      </section>

    </main>
  );
};







