// import React from 'react'
import heroImage from '../assets/Header2TransparentSml.png'
import "../index.css"
import React, { useState, useEffect } from 'react';
import BookMenu from './BookMenu';



const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center pb-0">
        <img src={heroImage} alt="Hero Image" className="object-scale-down absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" />
        <div className="relative inset-12 flex items-center justify-center">
          {/* <div className="absolute inset-y-o left-0 w-16">
            </div> */}
        <div className="text-center mb-5 z-10 items-center justify-center">
          <span className="text-4xl text-white mb-4">Find the book. </span>  
          <span className="text-4xl text-[#ffb22e] mb-4">See the book. </span>
          <span className="text-4xl text-white mb-4">Buy the book. </span>
        <div className="mt-8">
        <BookMenu />
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default HeroSection


