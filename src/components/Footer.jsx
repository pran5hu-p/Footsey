import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-950 to-red-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-extrabold tracking-tighter italic mb-4">
              Footsey<span className="text-yellow-500">.</span>
            </h2>
            <p className="text-slate-400 text-sm">
              The ultimate destination for premium football kits. Wear your passion.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Football Jersey</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Our Story</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Centers</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">FAQs</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Terms and Service</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Returns</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all">
                  <Youtube size={20} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Newsletter</h3>
              <p className="text-xs text-slate-400 mb-2">Subscribe to our news and email</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded-l-md text-slate-900 focus:outline-none"
                />
                <button className="bg-slate-900 border border-slate-900 text-white px-4 py-2 rounded-r-md hover:bg-yellow-500 hover:text-slate-900 hover:border-yellow-500 transition-colors font-bold">
                  →
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-slate-400 text-sm">
          <p>© 2026 Footsey Store. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}