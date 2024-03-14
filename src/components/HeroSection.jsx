import React from 'react'
import heroImage from '../assets/heroImage.png'

const HeroSection = () => {
  return (
    <div>
    <img src={heroImage} alt='hero image' className='h-full w-full flex justify-center'></img>
    </div>
  )
}

export default HeroSection