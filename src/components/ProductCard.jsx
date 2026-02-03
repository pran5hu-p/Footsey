import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Minus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addtoCart, updateCart, cartItems } = useCart();
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

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

      {quantity === 0 ? (
        <button onClick={() => addtoCart(product)} className='w-full bg-slate-900 text-white font-medium py-2.5 rounded-lg hover:bg-slate-800 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2'>Add to Cart</button>
      ) : (
        <div className="w-full bg-slate-900 text-white rounded-lg flex items-center justify-between py-1 px-1 shadow-inner">
            <button 
                onClick={() => updateCart(product.id, quantity - 1)}
                className="h-8 w-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-md transition-colors"
            >
                <Minus size={16} />
            </button>

            <span className="font-bold text-sm tracking-widest min-w-[20px] text-center">
                {quantity}
            </span>
            <button 
                onClick={() => addtoCart(product)}
                className="h-8 w-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-md transition-colors"
            >
                <Plus size={16} />
            </button>
        </div>
      )}

    </div>
  );
}