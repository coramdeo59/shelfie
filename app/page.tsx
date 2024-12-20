import React from 'react';
import '../styles/globals.css'


 const Hero = () => {
  return (
    <section className="bg-gray-50 font-sans py-8 min-h-[90vh]">
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 pt-10">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
            Find Your Next Book
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl">
            Our most popular and trending <span className="text-black font-bold">SHELF.ie</span> perfect not sure what to read now next reading mood perfect
          </p>
          <a 
            href="bookSection" // Link to BookSection
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Get started
            <svg 
              className="w-5 h-5 ml-2 -mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>