"use client";
import React from 'react';
import Image from 'next/image';
import { Settings, BarChart3, Database, Layers, ArrowLeft, ArrowRight } from 'lucide-react';

const subFeatures = [
    {
        title: "Robots & Indicators",
        desc: "Access MQL5.com to develop trading robots and technical indicators through the specialized MetaEditor tool. All files can be found in your Meta Trader 5 and can be executed instantly.",
        icon: Settings
    },
    {
        title: "Hedging System",
        desc: "Trade multiple positions with one instrument. The hedging system allows you to open multiple trading units in different directions, providing even more flexibility in trading operations.",
        icon: Layers
    },
    {
        title: "Fundamental Analysis",
        desc: "Explore market opportunities with fundamental analysis tools in the Economic Calendar. Stay informed of the latest news events, expected market impacts and historical data.",
        icon: BarChart3
    },
    {
        title: "Indicators & Analytical Tools",
        desc: "Enhance your trading experience with 38 built-in indicators, 22 analytical objects, and much more from the trading community.",
        icon: Database
    }
];

const MetaTraderFeatures = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 340 + 24; // width + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (

        <section className="py-14 relative overflow-hidden" style={{ background: "conic-gradient(from 75.77deg at 39.29% 71.08%, #BB9B80 0deg, #1F2834 360deg)" }}>
            {/* Background Accent from screenshot */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#BB9B80]/5 -skew-x-12 transform translate-x-24 max-w-6xl mx-auto px-6" style={{ margin: "auto" }}></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10" style={{ margin: "auto" }}>
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 mb-20">
                    <div className="lg:col-span-5 w-full flex">
                        <div className="relative w-full aspect-square rounded overflow-hidden shadow-2xl border border-white/5">
                            <Image
                                src="/men.png"
                                alt="Professional Trader using MT5"
                                fill
                                className="object-cover"
                            />

                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <p className="text-[42px] lg:text-[65px] font-semibold text-white mb-8 leading-tight">
                            Why Trade with MetaTrader 5
                        </p>
                        <p className="text-[#F4F6F8] text-sm lg:text-[18px] leading-relaxed max-w-2xl font-medium opacity-80">
                            For advanced and professional traders, the algorithmic trading, backtesting and comprehensive analysis tools enhance the trading experience. With the trading signals and copy trading capability in MetaTrader 5, traders can automatically replicate successful traders' positions and monitor their trading results in real-time.
                        </p>
                    </div>
                </div>


            </div>
            <div className="relative overflow-visible py-3">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    }}
                >
                    <div className="flex animate-scroll gap-6 items-start px-6 lg:pl-[calc((100vw-1152px)/2+24px)]">
                        {[...subFeatures, ...subFeatures].map((feat, i) => (
                            <div
                                key={i}
                                className="bg-[#F4F6F8] rounded p-10 flex flex-col transition-all hover:bg-[#BB9B80] group flex-none w-[340px] h-[340px] relative overflow-hidden shadow-lg border border-gray-100"
                            >
                                {/* Icon - Top Right */}
                                <div className="relative align-right justify-end items-end flex text-[#BB9B80] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                    <div>
                                        <feat.icon size={56} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <div className="">
                                    <h3 className="text-[28px] font-bold mb-4 text-[#1F2834] group-hover:text-white leading-tight">
                                        {/* {feat.title.split(' ').map((word, idx) => (
                                        <React.Fragment key={idx}>{feat.title}</React.Fragment>
                                    ))} */}
                                        <React.Fragment>{feat.title}</React.Fragment>
                                    </h3>
                                    <p className="text-[#87919C] group-hover:text-white/80 text-[14px] leading-relaxed max-w-[240px]">
                                        {feat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="max-w-6xl mx-auto px-6 mt-12 relative z-10" style={{ margin: "auto" }}>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-all bg-white/5 backdrop-blur-sm"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-all bg-white/5 backdrop-blur-sm"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );

};

export default MetaTraderFeatures;
