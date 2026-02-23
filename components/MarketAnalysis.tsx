import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function MarketAnalysis() {
  return (
    <section className="py-12 lg:py-24 relative overflow-hidden px-6 lg:px-12" style={{
      background: "conic-gradient(from 75.77deg at 39.29% 71.08%, #BB9B80 0deg, #1F2834 360deg);",
    }}>
      <div className="container mx-auto max-w-6xl" style={{margin: "auto"}}>
        <div className="text-center mb-10 mt-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Market Analysis & Tools
          </h2>
          <p className="text-white/90 text-lg mb-2">
            Trade with Context, Not Emotion.
          </p>
          <p className="text-white/80 text-base md:text-[18px]">
            Markets move on data, policy and liquidity — not headlines alone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl py-12 lg:py-24" style={{ margin: "auto" }}>
          {/* Economic Calendar - Large Left Card */}
          <div className="lg:row-span-2 bg-black rounded-3xl p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden" style={{ padding: '20px' }}>
            {/* Background illustration placeholder */}
            <div className="absolute bottom-0 ">
              <img src="/economic.png" alt="" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Economic<br />Calendar
              </h3>
              <br></br>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" size={20} />
                  <p className="text-white/90">
                    Real-time updates on key <br></br>economic events
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" size={20} />
                  <p className="text-white/90">
                    Customizable alerts for important <br></br> releases
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="flex items-center gap-2 text-white hover:text-white/80 font-medium transition-colors relative z-10"
            >
              View Full Calendar
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Daily Market Updates - Top Right */}
          <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[280px]" style={{ padding: '20px' }}>
            {/* Background Element SVG */}
            <div
              className="absolute inset-0  z-0"
              style={{
                backgroundImage: 'Element.svg',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* Light blue gradient - right half only */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100 to-transparent opacity-50 z-0" />

            {/* Phone mockup illustration */}
            <div className="absolute right-4 bottom-0 w-48 h-auto opacity-95 z-10">
              <img src="/dailymarket.png" alt="Daily Updates" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Daily Market<br />Updates
              </h3>
            </div>

            <a
              href="#"
              className="relative z-10 flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
            >
              Get the Updates
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Technical Analysis Tools - Bottom Right */}
          <div className="bg-black rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[280px]" style={{ padding: '20px' }}>
            {/* Gauge illustration placeholder */}
            <div className="absolute inset-0">
              <img src="/technical.png" alt="" className="w-full h-full object-contain" style={{ transform: 'rotate(15deg)', position: 'relative', left: '60px', top: '30px' }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Technical Analysis<br />Tools
              </h3>
            </div>

            <a
              href="#"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors relative z-10"
            >
              Get the Tools
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
