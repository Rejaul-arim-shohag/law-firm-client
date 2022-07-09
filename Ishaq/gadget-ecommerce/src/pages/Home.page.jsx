import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <HeroSection />
    </div>
  )
}
