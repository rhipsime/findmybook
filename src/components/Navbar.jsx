import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header className='py-3 absolute z-10 w-full bg-transparent h-17'>
      <nav className='flex justify-between items-center p-4 m-4 '>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
            width={80}
            height={80}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 font-bold font-montserrat'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Favourites'>Favourites</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
        <div className='max-lg:block'  onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: 'black' }} />) :
            (<FaBars size={30} style={{ color: 'black' }} />)
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar