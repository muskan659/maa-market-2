"use client";
import React from 'react';
import Image from 'next/image';

const WhatIsForex = () => {
    return (
        <section className="bg-white overflow-visible max-w-6xl" id="what-is-forex" style={{ margin: "auto" }}>
            <div className="max-w-6xl mx-auto px-6 relative min-h-[500px] flex items-center">

                {/* Phone Mockup Area - Absolutely positioned to the left of the text alignment line */}
                <div className="hidden lg:block absolute left-[-180px] top-[350px] -translate-y-1/2 w-[600px] pointer-events-none">
                    <div className="relative">
                        {/* Phone Mockup */}
                        <div className="relative z-10 transform rotate-[-8deg] group">
                            <Image
                                src="/mobile2.png"
                                alt="Forex Trading Platform on Phone"
                                width={600}
                                height={1200}
                                className="w-full h-auto"
                                priority
                            />
                            {/* Half-cover overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/90 to-transparent z-20 pointer-events-none" />
                            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>

                {/* Text Content Area - Aligned at 114px from container start (Matching Table Text Start) */}
                <div className="w-full lg:pl-[114px] z-20" style={{
                    justifyContent: "end",
                    display: "grid",

                }}>


                    <h2 className="text-[54px] lg:text-[65px] font-[600] text-[#0D1B2A] mb-8 leading-[1.1] tracking-tight">
                        What is Forex?
                    </h2>
                    <div className="space-y-8 max-w-[600px]">
                        <p className="text-[#64748B] text-md lg:text-md leading-relaxed">
                            Forex, short for foreign exchange, is the global marketplace for buying and selling currencies. It's the largest and most liquid financial market in the world, with an average daily trading volume exceeding $6 trillion.
                        </p>
                        <p className="text-[#64748B] text-md  lg:text-md leading-relaxed">
                            Forex trading involves speculating on the relative value of one currency against another. Traders aim to profit from fluctuations in exchange rates, which can be influenced by various factors including economic indicators, political events, and market sentiment.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WhatIsForex;
