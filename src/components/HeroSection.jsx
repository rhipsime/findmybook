// import React from 'react'
import heroImage from '../assets/header.png'
import "../index.css"
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';



const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center pb-0">
        <img src={heroImage} alt="Hero Image" className="object-contain absolute inset-0 w-full" />
        <div className="relative inset-12 flex items-center justify-left">
          <div className="absolute inset-y-o left-0 w-16">
            </div>
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-bold mb-4">Find the book. See the book. Buy the book.</h1>
        <SearchBar />
        </div>
      </div>
    </div>
  );
  
}

export default HeroSection

