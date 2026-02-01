import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Team = () => {
  const { teamId } = useParams();
  const normalize = (str) => str.toLowerCase().replace(/[\s-]/g, '');
  const teamConfig = {
    barcelona: {
      name: 'FC Barcelona',
      gradient: 'from-blue-900 via-red-900 to-blue-900', 
      banner: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=1920&auto=format&fit=crop'
    },
    realmadrid: {
      name: 'Real Madrid',
      gradient: 'from-slate-900 via-yellow-600 to-slate-900',
      banner: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1920&auto=format&fit=crop'
    },
    liverpool: {
      name: 'Liverpool FC',
      gradient: 'from-red-900 via-red-700 to-red-900',
      // NEW LINK: Red stadium atmosphere (Anfield vibe)
      banner: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=1920&auto=format&fit=crop'
    },
    parissaintgermain: {
      name: 'Paris Saint-Germain',
      gradient: 'from-blue-900 via-red-600 to-blue-900',
      // NEW LINK: Blue stadium/Pitch at night (Parc des Princes vibe)
      banner: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1920&auto=format&fit=crop'
    },
    bayern: {
      name: 'FC Bayern',
      gradient: 'from-red-800 via-red-600 to-red-900',
      banner: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1920&auto=format&fit=crop'
    }
  };
  const currentTeam = teamConfig[normalize(teamId)] || {
    name: teamId, 
    gradient: 'from-gray-900 to-gray-800', 
    banner: 'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=1920&auto=format&fit=crop'
  };

  const teamProducts = products.filter((product) => 
    normalize(product.team) === normalize(teamId)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-87.5 md:h-112.5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={currentTeam.banner} 
            alt="Stadium" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-r ${currentTeam.gradient} opacity-80 mix-blend-multiply`}></div>
        <div className="relative z-10 text-center px-4 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-2xl mb-4">
            {currentTeam.name}
          </h1>
          <p className="text-gray-100 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto drop-shadow-md">
            Official Match Kits • 2025/26 Season Collection
          </p>
        </div>

      </div>
      <div className='container mx-auto px-4 md:px-10 py-12'>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-2 bg-slate-900 rounded-full"></div>
            <h2 className='text-3xl font-bold text-slate-900'>Featured Products</h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {teamProducts.length > 0 ? (
                  teamProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))
              ) : (
                  <div className="col-span-full py-20 text-center bg-white rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-xl text-gray-500 font-medium">No products found for {currentTeam.name}.</p>
                    <p className="text-sm text-gray-400 mt-2">Check back later for new arrivals.</p>
                  </div>
              )}
          </div>

      </div>
    </div>
  )
}

export default Team;