import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookMenu from './components/BookMenu'
import BookDetails from './components/BookDetails'
import Favourites from './components/Favourites'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'

function App() {
  return (
     <div> 
      <Navbar />
      <HeroSection />
       <Routes>
         <Route path='/' element={<BookMenu />} />
         <Route path='/book/:id' element={<BookDetails />} />
         <Route path='/Favourites' element={<Favourites />} />
         <Route path='/Contact' element={<Contact />} />
       </Routes>
       <Footer />
     </div>
  );
 }
 
 export default App;
