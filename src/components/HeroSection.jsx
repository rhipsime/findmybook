import React from 'react'
import heroImage from '../assets/header.png'

const HeroSection = () => {
  return (
    <div>
    <img src={heroImage} alt='hero image' className='h-1/2 w-full flex justify-center'></img>
    </div>
  )
}

export default HeroSection