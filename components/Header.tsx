'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  border-b border-gray-800" style={{background:"transparent"}}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-white text-xl lg:text-2xl font-bold">OURYX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#markets" className="text-gray-300 hover:text-white transition">MARKETS</a>
            <a href="#trading" className="text-gray-300 hover:text-white transition">TRADING</a>
            <a href="#platforms" className="text-gray-300 hover:text-white transition">PLATFORMS</a>
            <a href="#company" className="text-gray-300 hover:text-white transition">COMPANY</a>
            <a href="#research" className="text-gray-300 hover:text-white transition">RESEARCH</a>
            <a href="#partners" className="text-gray-300 hover:text-white transition">PARTNERS</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2.5 bg-[#c9a87c] text-white rounded-full hover:bg-[#b5976f] transition font-medium">
              Open An Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
              <a href="#markets" className="text-gray-300 hover:text-white transition py-2">MARKETS</a>
              <a href="#trading" className="text-gray-300 hover:text-white transition py-2">TRADING</a>
              <a href="#platforms" className="text-gray-300 hover:text-white transition py-2">PLATFORMS</a>
              <a href="#company" className="text-gray-300 hover:text-white transition py-2">COMPANY</a>
              <a href="#research" className="text-gray-300 hover:text-white transition py-2">RESEARCH</a>
              <a href="#partners" className="text-gray-300 hover:text-white transition py-2">PARTNERS</a>
              <button className="mt-4 px-6 py-2.5 bg-[#c9a87c] text-white rounded-full hover:bg-[#b5976f] transition font-medium">
                Open An Account
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
