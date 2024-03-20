import heroImage from '../assets/Header2TransparentSml.png'
import "../index.css"
import React, { useState } from 'react';
import BookMenu from './BookMenu';
import ContactForm from './Contactform';



const HeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
 
  const handleContactClick = () => {
     setShowContactForm(true);
  };
 
  return (
     <>
       <div className="md:w-1/2 lg:w-1/3">
         <img src={heroImage} alt="Hero Image" className="object-scale-down w-3/4 h-3/4" />
       </div>
       <div className="text-center mb-5 z-10 items-center justify-center md:ml-8">
         <span className="text-4xl text-white mb-4">Find the book. </span>  
         <span className="text-4xl text-[#ffb22e] mb-4">See the book. </span>
         <span className="text-4xl text-white mb-4">Buy the book. </span>
         {/* <div className="mt-8">
           <BookMenu />
         </div> */}
       </div>
       {showContactForm && (
         <div className="md:w-1/2 lg:w-1/3">
           <ContactForm />
         </div>
       )}
     </>
  );
 }
export default HeroSection


