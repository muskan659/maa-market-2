"use client";
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const features = [
    {
        title: "Advanced Charting & Analysis",
        desc: "Access multiple timeframes, built-in indicators and custom tools to analyse market structure with precision and clarity.",
        iconUrl: "/group1.svg"
    },
    {
        title: "Multi-Asset Capability",
        desc: "Trade forex, indices, commodities and crypto CFDs within one integrated platform and account environment.",
        iconUrl: "/group2.svg"
    },
    {
        title: "Automated Trading Support",
        desc: "Run Expert Advisors (EAs), back-test strategies and execute algorithmic trading with full control.",
        iconUrl: "/group3.svg"
    },
    {
        title: "Flexible Access Across Devices",
        desc: "Trade seamlessly on desktop, web and mobile while keeping your pricing, positions and account fully synchronised.",
        iconUrl: "/group1.svg"
    }
];

const AssetClasses = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <section className="pt-24 bg-white max-w-6xl" style={{ margin: "auto" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-6xl mx-auto px-10" style={{ padding: "0 200px" }}>
                        <h2 className="text-[42px] lg:text-[56px] font-bold text-[#0D1B2A] mb-6 leading-tight">
                            Trade Across Asset Classes Seamlessly
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed text-center">
                            MetaTrader 5 gives you access to forex, indices, commodities and cryptocurrency CFDs within
                            one structured platform. Switch between asset classes seamlessly — all from a single trading account.
                        </p>
                    </div>
                    <br></br>



                    {/* Infinite Slide Bar (Marquee) */}

                </div>

            </section>
            <div className="relative overflow-hidden py-8">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide gap-8 items-start scroll-smooth"
                    style={{
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    }}
                >
                    <div className="flex animate-scroll gap-8 items-start">
                        {[...features, ...features].map((feat, i) => (
                            <div
                                key={i}
                                style={{ background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%)" }}
                                className="rounded p-8 text-white flex flex-col justify-between items-start transition-all hover:bg-[#BB9B80] group flex-none w-64 h-64"
                            >
                                <div className="w-full flex justify-end relative text-white group-hover:scale-110 transition-all duration-500">
                                    <img src={feat.iconUrl} alt={feat.title} className="w-10 h-10 object-contain brightness-0 invert" />
                                </div>
                                <h3 className="text-[20px] font-bold mb-4 leading-tight">{feat.title}</h3>
                                <p className="text-white/80 text-[13px] leading-relaxed mb-6">{feat.desc}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section className=" bg-white max-w-6xl" style={{ margin: "auto", padding: "0px 200px" }}>
                <div className="flex pb-[24px] flex-col md:flex-row justify-between items-center gap-8 mb-20 px-6">
                    <p className="text-[#0D1B2A] font-bold text-xl order-2 md:order-1">
                        One login. One account. Full control.
                    </p>
                    <div className="flex gap-4 order-1 md:order-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0D1B2A] hover:text-[#0D1B2A] transition-all"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0D1B2A] hover:text-[#0D1B2A] transition-all"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section >

        </>
    );
};

export default AssetClasses;
