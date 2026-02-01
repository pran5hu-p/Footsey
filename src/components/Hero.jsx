import React from 'react'
import footseyhero from '../assets/footseyhero.jpg'

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 via-blue-950 to-red-900'>
        <img src={footseyhero} alt="Footsey Hero" className="px-100 w-full h-full object-cover" />
    </div>
  )
}

export default Hero