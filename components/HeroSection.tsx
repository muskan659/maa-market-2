import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#1a1d29] pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            Built for<br />
            <span className="text-white">Serious Trading</span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Trade Forex and indices with a Low Latency Broker with consistent order execution, No Re-quotes! And Instant Withdrawals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3.5 bg-[#c9a87c] text-white rounded-full hover:bg-[#b5976f] transition font-medium text-lg">
              Get Started Now
            </button>
            <button className="px-8 py-3.5 bg-transparent border-2 border-gray-600 text-white rounded-full hover:border-[#c9a87c] transition font-medium text-lg">
              Try Free Demo
            </button>
          </div>

          {/* Chart Placeholder */}
          <div className="relative mx-auto max-w-5xl mb-12">
            <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-600 text-sm">Trading Chart Visualization</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">300+</div>
            <div className="text-gray-400 text-sm lg:text-base">Instruments</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">0.0</div>
            <div className="text-gray-400 text-sm lg:text-base">pips</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500:1</div>
            <div className="text-gray-400 text-sm lg:text-base">Leverage</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">$0</div>
            <div className="text-gray-400 text-sm lg:text-base">Commission</div>
          </div>
        </div>

        {/* Platform Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 opacity-50">
          <div className="text-gray-500 text-sm font-semibold">METATRADER</div>
          <div className="text-gray-500 text-sm font-semibold">cTRADER</div>
          <div className="text-gray-500 text-sm font-semibold">TRADINGVIEW</div>
        </div>
      </div>
    </section>
  );
}
