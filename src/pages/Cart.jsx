import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removefromCart, updateCart, cartTotal } = useCart();
  
  // Logic: Free shipping if total is > $100
  const shippingCost = cartTotal > 100 ? 0 : 9.99;
  const finalTotal = cartTotal + shippingCost;

  // --- EMPTY STATE ---
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
           <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-slate-400"/>
           </div>
           <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
           <p className="text-gray-500 mb-8">Looks like you haven't added any jerseys to your collection yet.</p>
           <Link 
             to="/" 
             className="inline-flex items-center justify-center w-full py-3 px-6 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all"
           >
             Start Shopping
           </Link>
        </div>
      </div>
    );
  }

  // --- FILLED CART STATE ---
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
          Your Cart <span className="text-lg font-medium text-gray-500">({cartItems.length} items)</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* LEFT COLUMN: Cart Items List */}
           <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                 <div key={item.id} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-center">
                    
                    {/* Product Image */}
                    <div className="w-full sm:w-28 h-28 bg-gray-50 rounded-lg flex items-center justify-center p-2 relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-contain mix-blend-multiply" 
                      />
                    </div>

                    {/* Product Text */}
                    <div className="flex-1 w-full text-center sm:text-left">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">{item.team}</div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{item.name}</h3>
                      <div className="text-slate-900 font-bold text-xl">${item.price}</div>
                    </div>

                    {/* Controls (Quantity & Delete) */}
                    <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateCart(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 text-slate-600 transition-colors bg-white"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-bold text-slate-900 bg-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateCart(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 text-slate-600 transition-colors bg-white"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removefromCart(item.id)}
                        className="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                      >
                        <Trash2 size={18} />
                        <span className="sm:hidden">Remove</span>
                      </button>

                    </div>
                 </div>
              ))}
              <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium mt-6 group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
                Continue Shopping
              </Link>
           </div>
           <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-slate-900">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-bold text-slate-900">
                      {shippingCost === 0 ? <span className="text-green-600">Free</span> : `$${shippingCost}`}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-extrabold text-slate-900">${finalTotal.toFixed(2)}</span>
                </div>
                <Link to="/checkout" className="block w-full">
                  <button className="w-full bg-gradient-to-r from-slate-900 via-blue-950 to-red-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                    Proceed to Checkout
                  </button>
                </Link>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                  <ShieldCheck size={14} />
                  <span>Secure SSL Encryption</span>
                </div>

              </div>
           </div>

        </div>
      </div>
    </div>
  );
}