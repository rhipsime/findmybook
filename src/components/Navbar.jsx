import React, { useState } from 'react'
import logo from '../assets/findMyBookLogoBlk.png'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ onContactClick }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="flex justify-between items-center py-2 pe-8 bg-white">
      <a href="/"><img src={logo} alt='logo' className='mx-auto' height={300} width={200}/></a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2" onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: 'black' }} />) :
              (<FaBars size={30} style={{ color: 'black' }} />)
            }
          </div>

          <div className={click ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={handleClick}
            >
              <svg
                className="h-8 w-8 text-black-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/'>Home</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/Favourites">My Favourites</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Favourites'>My Favourites</Link>
          </li>
          <li>
            <Link to='/Contact' onClick={onContactClick}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Navbar;

