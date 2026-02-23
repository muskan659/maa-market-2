"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const platformData = [
    {
        id: 'desktop',
        title: "Desktop",
        subtitle: "Trader",
        description: "Trade directly from your browser with our powerful web-based platform. No downloads or installations required.",
        buttonText: "TRADE NOW",
        image: "/trade1.png",
    },
    {
        id: 'mobile',
        title: "Mobile",
        subtitle: "Trader",
        description: "Experience professional trading on the go with our mobile-optimized app. Stay connected to the markets anywhere, anytime.",
        buttonText: "DOWNLOAD APP",
        image: "/mobile.png",
    },
    {
        id: 'web',
        title: "Web",
        subtitle: "Trader",
        description: "Access the full power of MetaTrader 5 through any web browser. Professional tools, technical analysis, and instant execution.",
        buttonText: "OPEN WEBTRADER",
        image: "/trade3.png",
    }
];

const TraderTabs = () => {
    const [activeTab, setActiveTab] = useState('desktop');

    const activeData = platformData.find(tab => tab.id === activeTab) || platformData[0];
    const isDesktopTab = activeTab === 'desktop';

    return (
        <>
            <style jsx>{`
                .tt-image-container {
                    transform-style: preserve-3d;
                    perspective: 1600px;
                }

                .tt-image-container:has(img[src="/trade1.png"]) {
                    transform: perspective(1600px) rotateY(-16deg) rotateX(6deg) rotateZ(-2deg) translateX(7rem) translateY(-0.5rem) !important;
                    filter: drop-shadow(0 35px 60px rgba(0, 0, 0, 0.25)) 
                            drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15));
                }

                .tt-image-container:has(img[src="/trade1.png"])::before {
                    content: '';
                    position: absolute;
                    bottom: -40px;
                    left: 5%;
                    right: 10%;
                    height: 120px;
                    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.22) 0%, transparent 65%);
                    filter: blur(25px);
                    z-index: -1;
                    transform: translateZ(-1px);
                }

                .tt-image-container:has(img[src="/trade1.png"])::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%, rgba(0, 0, 0, 0.03) 100%);
                    pointer-events: none;
                    border-radius: 8px;
                    mix-blend-mode: soft-light;
                }
            `}</style>
            <section className="bg-white relative overflow-hidden">
                {/* Tab Navigation (Blue Dots) */}
                {/* <div className="mx-auto px-6 mb-12 flex justify-center gap-16 relative z-20">
                    {platformData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className="group flex flex-col items-center gap-4 transition-all"
                        >
                            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${activeTab === tab.id
                                ? "bg-[#3B82F6] border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                : "border-gray-200 hover:border-[#3B82F6]/50"
                                }`}>
                                <span className={`text-[18px] font-bold ${activeTab === tab.id ? "text-white" : "text-gray-400"}`}>
                                    {tab.id === 'desktop' ? '1' : tab.id === 'mobile' ? '2' : '3'}
                                </span>
                            </div>
                            <span className={`text-sm font-bold uppercase tracking-widest ${activeTab === tab.id ? "text-[#1D242E]" : "text-gray-400 group-hover:text-gray-600"
                                }`}>
                                {tab.id}
                            </span>
                        </button>
                    ))}
                </div> */}

                <div className="max-w-6xl mx-auto px-6 relative" style={{ margin: "auto" }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="relative min-h-[500px] flex items-center"
                        >
                            {/* Background Element SVG */}
                            <div 
                                className="absolute inset-0 pointer-events-none z-0"
                                style={{
                                    backgroundImage: 'url(/Element.svg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    top:"-80%"
                                }}
                            />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

                                {/* Left Side: Text Content */}
                                <div className="lg:col-span-5 pl-4" style={{ paddingTop: "100px" }}>
                                    <motion.h2
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="text-[56px] lg:text-[65px] font-bold text-[#1D242E] leading-[1.1] mb-8"
                                    >
                                        {activeData.title} <br />
                                        <span className="text-[#1D242E]/90">{activeData.subtitle}</span>
                                    </motion.h2>
                                    <br></br>
                                    <motion.p
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}

                                        className="text-[#87919C] text-[16px] lg:text-[18px] leading-relaxed mb-12 max-w-sm"
                                    >
                                        {activeData.description}
                                    </motion.p>
                                    <br></br>
                                    <br></br>
                                    <motion.button
                                        whileHover={{ scale: 1.05, backgroundColor: "#B29881" }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%);",
                                            padding: '10px 60px'
                                        }}
                                        className="bg-[#A88B70] text-white py-5 rounded-full text-[14px] font-bold tracking-[0.2em] shadow-xl transition-all"
                                    >
                                        {activeData.buttonText}
                                    </motion.button>
                                </div>

                                {/* Right Side: Laptop Image */}
                                <div className="lg:col-span-7 flex justify-end overflow-hidden h-[300px] sm:h-[340px] lg:h-[380px]">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, x: 100 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                        className={`relative tt-image-container ${isDesktopTab
                                            ? "w-[150%] h-[640px] translate-x-28 translate-y-16"
                                            : "w-full aspect-[4/3] lg:scale-125 translate-x-10"
                                            }`}
                                    >
                                        <Image
                                            src={activeData.image}
                                            alt={activeData.title}
                                            fill
                                            className="object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
                                            style={{ top: "-55px" }}
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
};

export default TraderTabs;
