"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ForexHero = () => {
    return (
        <section className="relative  pb-32 bg-[#F4F6F8] w-full" style={{ padding: "80px 50px" }}>

            {/* Ultra-Premium Concentric Circles Background */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'url(/Element.svg)',
                    top: '200px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                }}
            />

            <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl" style={{ margin: "auto" }}>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[80px] lg:text-[80px] font-[600] text-[#1a202c] mb-8 leading-[1] tracking-tighter"
                >
                    Forex Trading
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[#1F2834] text-[18px] lg:text-[22px] mb-16 max-w-6xl mx-auto  leading-relaxed"
                >
                    Trade major, minor and exotic FX pairs with tight spreads and fast execution
                </motion.p>
                <br></br>
                <br></br> <br></br>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                >
                    <button
                        className="group relative px-12 py-5 rounded-full text-white font-[800] text-sm tracking-[2px] uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(158,130,106,0.4)]"
                        style={{
                            background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%);",
                            padding: '10px 40px'
                        }}
                    >
                        OPEN LIVE ACCOUNT
                    </button>


                    <button className="px-12 py-5 underline text-[#0E8BFF] font-[500] text-sm tracking-[2px] uppercase transition-all hover:bg-blue-50/50 border border-transparent hover:border-blue-100">
                        TRY DEMO
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ForexHero;
