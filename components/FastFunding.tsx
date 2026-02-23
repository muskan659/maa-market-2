import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FastFunding() {
  return (
    <section className="py-12 lg:py-24 bg-white px-6 md:px-12" style={{}}>
      <div className="container max-w-6xl mx-auto" style={{ margin: "auto" }}>

        {/* Title */}
        <h2 className="text-3xl md:text-[40px] lg:text-[46px] font-[800] text-[#1a202c] text-center mb-[40px] tracking-tight leading-tight">
          Fast & Simple Funding
        </h2>
        <br></br>
        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full mb-12">

          {/* Card 1: Zero Fees */}
          <div className="bg-[#f3f4f7] rounded-[24px] p-8 flex flex-col hover:shadow-md transition-shadow" style={{ padding: "50px" }}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-[800] text-gray-900 leading-snug">
                Zero<br />Fees
              </h3>
              <div className="ml-4 flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M42 10 L24 40 L18 26 L4 20 L42 10 Z" stroke="#B2977D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M18 26 L42 10" stroke="#B2977D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <p className="text-[#a0aec0] text-[15px] leading-relaxed pr-4">
              Set stop/limit orders, price<br />alerts, and use built-in<br />position sizing.
            </p>
          </div>

          {/* Card 2: Fast Withdrawals */}
          <div className="bg-[#f3f4f7] rounded-[24px] p-8 flex flex-col hover:shadow-md transition-shadow" style={{ padding: "50px" }}  >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-[800] text-gray-900 leading-snug">
                Fast<br />Withdrawals
              </h3>
              <div className="ml-4 flex-shrink-0">
                <svg width="60" height="48" viewBox="0 0 60 48" fill="none">
                  <rect x="22" y="10" width="28" height="20" rx="4" stroke="#B2977D" strokeWidth="2.5" fill="none" />
                  <path d="M44 20 H50" stroke="#B2977D" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="20" cy="28" r="12" fill="#8a94a6" />
                  <text x="16" y="32" fill="#ffffff" fontSize="14" fontWeight="bold">$</text>
                </svg>
              </div>
            </div>
            <p className="text-[#a0aec0] text-[15px] leading-relaxed pr-4">
              Set stop/limit orders, price<br />alerts, and use built-in<br />position sizing.
            </p>
          </div>

          {/* Card 3: Instant Deposits */}
          <div className="bg-[#f3f4f7] rounded-[24px] p-8 flex flex-col hover:shadow-md transition-shadow" style={{ padding: "50px" }}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-[800] text-gray-900 leading-snug">
                Instant<br />Deposits
              </h3>
              <div className="ml-4 flex-shrink-0 mt-[-8px]">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  {/* Back coin */}
                  <circle cx="34" cy="34" r="12" fill="#8a94a6" />
                  {/* Front coin */}
                  <circle cx="24" cy="24" r="14" stroke="#B2977D" strokeWidth="2.5" fill="#f3f4f7" />
                  <circle cx="24" cy="24" r="10" stroke="#B2977D" strokeWidth="1" strokeDasharray="2 3" fill="none" />
                  <text x="20" y="29" fill="#B2977D" fontSize="16" fontWeight="bold">$</text>
                  {/* Dots */}
                  <circle cx="10" cy="14" r="2" fill="#B2977D" />
                  <circle cx="44" cy="20" r="2" fill="#B2977D" />
                  <circle cx="14" cy="40" r="2" fill="#B2977D" />
                </svg>
              </div>
            </div>
            <p className="text-[#a0aec0] text-[15px] leading-relaxed pr-4">
              Set stop/limit orders, price<br />alerts, and use built-in<br />position sizing.
            </p>
          </div>

        </div>
        <br></br>
        <br></br>
        {/* Payment Methods - Force aligned edges */}
        <div className="w-full flex justify-between items-center mb-16 opacity-90 overflow-x-auto pb-4 gap-4 sm:gap-0">
          <img src="/visa.png" alt="Visa" className="h-[28px] object-contain flex-shrink-0" />
          <img src="/mastercard.png" alt="Mastercard" className="h-[36px] object-contain flex-shrink-0" />
          <img src="/paypal.png" alt="PayPal" className="h-[28px] object-contain flex-shrink-0" />
          <img src="/skrill.png" alt="Skrill" className="h-[28px] object-contain flex-shrink-0" />
          <img src="/nettler.png" alt="Neteller" className="h-[24px] object-contain flex-shrink-0" />
          <img src="/vector.png" alt="Apple Pay" className="h-[28px] object-contain flex-shrink-0" />
          <img src="/wire.png" alt="Wire Transfer" className="h-[32px] object-contain flex-shrink-0" />
        </div>
        <br></br>
        <br></br>
        {/* Bottom Call to Action area */}
        <div className="text-center">
          <h3 className="text-gray-900 font-[800] text-[22px] mb-3">
            Ready to make a deposit?
          </h3>
          <br></br>

          <p className="text-[#a0aec0] text-[15px] mb-6 leading-relaxed">
            We accept deposits and withdrawals in multiple currencies<br />
            including USD, AED and EUR.
          </p>
          <br></br>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-[700] text-[16px] transition-colors mb-10"
          >
            Explore Our Funding Options
            <ArrowRight size={20} className="stroke-[2.5px]" />
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <button
              className="rounded-full font-[700] text-white transition-all hover:shadow-lg uppercase tracking-wide"
              style={{
                background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%);",
                padding: '10px 50px',
                fontSize: '15px'
              }}
            >
              REGISTER NOW
            </button>
          </div>
        </div>

      </div>
    </section >
  );
}
