import React from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'
import barcelonaLogo from '../assets/barcelona logo.png'
import liverpoolLogo from '../assets/liverpool logo.png'
import bayernLogo from '../assets/bayern logo.png'
import psgLogo from '../assets/psg logo.png'
import realmadridLogo from '../assets/real madrid logo.png'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const {cartCount} = useCart()
  const logoBtnStyle = "transition-transform duration-200 hover:scale-110 opacity-90 hover:opacity-100";
  const logoImgStyle = "h-12 w-12 object-contain drop-shadow-md";
  return (
    <nav>
      <header className='text-white py-1.5 text-center bg-blue-950'>Footsey Football Jersey Store Landing Page</header>
      <div className='flex gap-22 px-100 py-3 items-center border-b-2 border-gray-200'>
        <div>
          <Link to="/" className="text-3xl font-extrabold tracking-tighter text-slate-900 italic">
            Footsey<span className="text-yellow-500">.</span>
          </Link>
        </div>
        <div className='flex gap-6'>
          <Link to="/team/barcelona" className={logoBtnStyle}>
            <img src={barcelonaLogo} alt="Barcelona" className={logoImgStyle} />
          </Link>
          <Link to="/team/liverpool" className={logoBtnStyle}>
            <img src={liverpoolLogo} alt="Liverpool" className={logoImgStyle} />
          </Link>
          <Link to="/team/bayern" className={logoBtnStyle}>
            <img src={bayernLogo} alt="Bayern" className={logoImgStyle} />
          </Link>
          <Link to="/team/realmadrid" className={logoBtnStyle}>
            <img src={realmadridLogo} alt="Real Madrid" className={logoImgStyle} />
          </Link>
          <Link to="/team/parissaintgermain" className={logoBtnStyle}>
            <img src={psgLogo} alt="Paris Saint-Germain" className={logoImgStyle} />
          </Link>
        </div>
        <div className='px-5'>
          <Link to="/cart" className="relative inline-block">
            <ShoppingBag size={24} className="text-slate-900 hover:text-slate-400 transition-colors duration-150" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
    
    
  )
}

export default Navbar