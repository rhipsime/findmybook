import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favourites from './components/Favourites'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import BookMenu from './components/BookMenu'

function App() {
  return (
     <div className="bg-[#35a6be]">  
      <Navbar />
      <HeroSection />
       <Routes>
         <Route path="/" element={<BookMenu />} />
         <Route path="/Favourites" element={<Favourites />} />
         <Route path="/Contact" element={<Contact />} />
       </Routes>
       <Footer />
     </div>
  );
 }
 
 export default App;