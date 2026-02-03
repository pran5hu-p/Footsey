import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Import Logos
import barcelonaLogo from '../assets/barcelona logo.png';
import liverpoolLogo from '../assets/liverpool logo.png';
import bayernLogo from '../assets/bayern logo.png';
import psgLogo from '../assets/psg logo.png';
import realmadridLogo from '../assets/real madrid logo.png';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoBtnStyle = "transition-transform duration-200 hover:scale-110 opacity-90 hover:opacity-100";
  const logoImgStyle = "h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md";
  const teams = [
    { id: 'barcelona', name: 'Barcelona', img: barcelonaLogo },
    { id: 'liverpool', name: 'Liverpool', img: liverpoolLogo },
    { id: 'bayern', name: 'Bayern', img: bayernLogo },
    { id: 'realmadrid', name: 'Real Madrid', img: realmadridLogo },
    { id: 'parissaintgermain', name: 'PSG', img: psgLogo },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <header className='text-white py-1.5 text-center bg-blue-950 text-xs md:text-sm font-medium'>
        Footsey Football Jersey Store Landing Page
      </header>
      <div className='container mx-auto px-4 md:px-10 py-3 flex justify-between items-center border-b-2 border-gray-100'>
        <div className="z-20">
          <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-tighter text-slate-900 italic" onClick={() => setIsMenuOpen(false)}>
            Footsey<span className="text-yellow-500">.</span>
          </Link>
        </div>
        <div className='hidden md:flex gap-8 items-center'>
            {teams.map((team) => (
                <Link key={team.id} to={`/team/${team.id}`} className={logoBtnStyle}>
                    <img src={team.img} alt={team.name} className={logoImgStyle} title={team.name} />
                </Link>
            ))}
        </div>
        <div className='flex items-center gap-5 z-20'>
            <Link to="/cart" className="relative inline-block" onClick={() => setIsMenuOpen(false)}>
                <ShoppingBag size={24} className="text-slate-900 hover:text-slate-600 transition-colors" />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-[10px] font-bold w-5 h-5 flex items-center justify-center border-2 border-white">
                        {cartCount}
                    </span>
                )}
            </Link>
            <button 
                className="md:hidden text-slate-900 focus:outline-none" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
          <div className="flex flex-col p-6 gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Select a Team</span>
              <div className="grid grid-cols-5 gap-4 justify-items-center">
                {teams.map((team) => (
                    <Link 
                        key={team.id} 
                        to={`/team/${team.id}`} 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="p-2 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                            <img src={team.img} alt={team.name} className="h-10 w-10 object-contain" />
                        </div>
                    </Link>
                ))}
              </div>
          </div>
      </div>

    </nav>
  );
}

export default Navbar;