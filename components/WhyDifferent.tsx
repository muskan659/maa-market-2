import React from 'react';
import { Repeat, Rocket, Target, Banknote, ArrowRight } from 'lucide-react';

export default function WhyDifferent() {
  return (
    <section className="py-20 lg:py-20 bg-white px-6 md:px-12" style={{}}>
      <div className="container max-w-6xl  mx-auto  pb-12" style={{ margin: "auto" }}>
        <h3 className="text-3xl md:text-[40px] lg:text-[65px] font-[600] text-[#1a202c] font-semibold text-center mb-[40px] md:mb-[60px] tracking-tight leading-tight">
          Why We Are Different
        </h3>

        <div className="grid lg:grid-cols-12 items-start mb-16 gap-[50px] mx-auto" style={{ width: "100%", padding: "50px  0px" }}>
          {/* Left - Spreads Card */}
          <div
            className="lg:col-span-4 relative w-full overflow-hidden rounded-[14px] shadow-2xl flex flex-col justify-center items-center lg:items-start p-10 lg:p-14"
            style={{
              backgroundImage: "url('/different.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '440px',
            }}
          >
            <div className="w-full text-center lg:text-center">
              <div className="text-[30px] text-white mb-2 font-semibold tracking-wide">Spreads from</div>
              <div className="text-[100px] md:text-[130px] font-[900] text-white leading-[0.8] mb-1 tracking-tighter" style={{ textShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}>
                0.0
              </div>
              <div className="text-[32px] font-semibold tracking-wide text-center" style={{ color: '#ffffff' }}>pips</div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-45 gap-y-12" style={{ paddingLeft: "60px" }}>
            {/* Cross-Asset Trading */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="#B2977D" strokeWidth="2.5" fill="none" />
                  <text x="14" y="20" fill="#B2977D" fontSize="13" fontWeight="bold">$</text>
                  <text x="28" y="20" fill="#B2977D" fontSize="11" fontWeight="bold">B</text>
                  <path d="M12 30 L24 25 L36 32" stroke="#B2977D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 12 L28 12 M24 10 L24 16" stroke="#B2977D" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1a202c] mb-3 leading-[1.3]">
                Cross-Asset<br />Trading
              </h3>
              <p className="text-[#718096] text-[14px] leading-[1.6] text-[18px]">
                Trade forex, indices, commodities, and cryptocurrencies from a single account.
              </p>
            </div>

            {/* Ultra-Fast Execution */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="#B2977D" strokeWidth="2.5" fill="none" />
                  <path d="M24 10 L18 26 L26 26 L24 40 L34 22 L24 22 Z" stroke="#B2977D" strokeWidth="2" strokeLinejoin="round" fill="none" />
                  <path d="M36 12 L32 16 M12 12 L16 16" stroke="#B2977D" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1a202c] mb-3 leading-[1.3]">
                Ultra-Fast<br />Execution
              </h3>
              <p className="text-[#718096] text-[14px] leading-[1.6] text-[18px]">
                Experience lightning-fast order execution with our advanced trading infrastructure.
              </p>
            </div>

            {/* Advanced Risk Tools */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="#B2977D" strokeWidth="2.5" fill="none" strokeDasharray="4 6" />
                  <circle cx="24" cy="24" r="10" stroke="#B2977D" strokeWidth="2.5" fill="none" />
                  <text x="20" y="29" fill="#B2977D" fontSize="14" fontWeight="bold">$</text>
                  <path d="M24 10 V14 M24 34 V38 M10 24 H14 M34 24 H38" stroke="#B2977D" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1a202c] mb-3 leading-[1.3]">
                Advanced<br />Risk Tools
              </h3>
              <p className="text-[#718096] text-[14px] leading-[1.6] text-[18px] ">
                Set stop/limit orders, price alerts, and use built-in position sizing.
              </p>
            </div>

            {/* Fast Funding & Payouts */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="#B2977D" strokeWidth="2.5" fill="none" strokeDasharray="4 6" />
                  <rect x="14" y="18" width="20" height="14" rx="4" stroke="#B2977D" strokeWidth="2.5" fill="none" />
                  <path d="M14 24 H34" stroke="#B2977D" strokeWidth="2.5" />
                  <circle cx="28" cy="28" r="2.5" fill="#B2977D" />
                  <text x="20" y="14" fill="#B2977D" fontSize="12" fontWeight="bold">$</text>
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1a202c] mb-3 leading-[1.3]">
                Fast Funding<br />& Payouts
              </h3>
              <p className="text-[#718096] text-[14px] leading-[1.6]  text-[18px]">
                Multiple local and global methods, processed promptly on business days.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full pt-10">
          <a
            href="#"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-lg transition-colors"
          >
            Explore Our Accounts
            <ArrowRight size={20} />
          </a>

          <button
            className="px-12 py-[14px] rounded-full font-[700] text-[15px] text-white transition-all hover:shadow-lg tracking-wide uppercase"
            style={{
              background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%);",
              padding: '10px 50px'
            }}
          >
            REGISTER NOW
          </button>
        </div>

        {/* Bottom CTA Section */}

      </div>
    </section>
  );
}
