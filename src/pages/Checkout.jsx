import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function Checkout() {
  return (
    <div className=" py-6 min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 max-w-lg w-full text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-900 via-blue-950 to-red-900"></div>
        <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
           <Truck size={40} />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
          Delivery Unavailable
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          We are currently unable to deliver to your location. Please check back later or try a different region.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 flex items-start gap-3 text-left">
           <AlertTriangle size={20} className="text-yellow-600 shrink-0 mt-0.5" />
           <div className="text-sm text-gray-600">
              <span className="font-bold text-slate-900 block mb-1">System Notice:</span>
              Checkout services are temporarily disabled for maintenance. No payment has been charged.
           </div>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center justify-center w-full py-4 px-6 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 hover:scale-[1.02] transition-all duration-200 gap-2"
        >
          <ArrowLeft size={20} />
          Return to Store
        </Link>
      </div>
    </div>
  );
}