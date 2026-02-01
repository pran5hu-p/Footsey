import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addtoCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
      <div className="w-full h-48 flex items-center justify-center mb-4 bg-white rounded-lg overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-bold text-slate-900 text-sm leading-tight mb-1 truncate">
          {product.name}
        </h3>
        <span className="font-bold text-slate-900 text-base">
          ${product.price}
        </span>
      </div>

      <button 
        onClick={() => addtoCart(product)}
        className="w-full bg-slate-900 text-white font-medium py-2 rounded-lg hover:bg-slate-800 active:scale-95 transition-all duration-200"
      >
        Add to Cart
      </button>

    </div>
  );
}