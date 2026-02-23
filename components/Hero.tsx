
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative flex flex-col" style={{ background: "linear-gradient(270deg, rgba(44, 53, 63, 0) 0%, #2C353F 100%)" }}>
            <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(270deg, rgba(44, 53, 63, 0) 0%, #2C353F 100%)" }}>
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
                >
                    <source src="/economic.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Background Elements */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    {/* Placeholder for chart background */}
                    <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-primary/20 to-transparent blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-900/20 to-transparent blur-[80px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-between max-w-7xl h-[700px]" style={{margin:"auto"}}>
                    {/* Text Content - Upper Section */}
                    <div className="text-center flex flex-col items-center pt-20 md:pt-32">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6"
                            style={{ lineHeight: "1" }}
                        >
                            Built for<br />Serious Trading
                        </motion.h1>
                        <br></br>
                           <br></br>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white text-base md:text-lg mb-10 max-w-3xl leading-relaxed"
                        >
                            Forex, indices, commodities and crypto CFDs. Competitive spreads.<br />
                            Fast execution. Powerful platforms.
                        </motion.p>
                           <br></br>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="#"
                                className="text-white rounded-full font-bold text-sm md:text-base uppercase transition-all hover:opacity-90 px-10 py-4"
                                style={{
                                    background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%)"
                                }}
                            >
                                OPEN LIVE ACCOUNT
                            </Link>
                            <Link
                                href="#"
                                className="text-white px-8 py-4 rounded-full font-medium text-sm md:text-base uppercase transition-all hover:opacity-80 underline"
                            >
                                TRY DEMO
                            </Link>
                        </motion.div>
                    </div>

                    {/* Stats - Lower Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mb-20 md:mb-24"
                    >
                        {[
                            { label: "Markets to trade", value: "300+" },
                            { label: "Starting spreads", value: "0.0 pips" },
                            { label: "Flexible leverage", value: "500:1" },
                            { label: "Commission (from)", value: "$0" },
                        ].map((stat, index) => (
                            <div 
                                key={index} 
                                className="rounded-xl"
                                style={{
                                    width: "280px",
                                    height: "144px",
                                    background: "rgba(178, 151, 125, 0.3)",
                                    backdropFilter: "blur(24px)",
                                    border: "1px solid rgba(178, 151, 125, 0.5)",
                                    borderRadius: "16px",
                                    display: "flex",
                                    flexDirection: "column",
                                  
                                    justifyContent: "center",
                                    padding: "20px"
                                }}
                            >
                                <div className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-5" style={{marginBottom:"4px"}}>{stat.value}</div>
                                <div className="text-white text-xs md:text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Economic Ticker at Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative bottom-[14px] left-0 w-full overflow-hidden bg-[#0B0E14]/80 py-4 border-t border-white/10 backdrop-blur-md"
                >
                    <div className="flex animate-scroll whitespace-nowrap">
                        {[...Array(8)].map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="flex items-center gap-8 ">
                                    <span className="text-gray-400 text-sm">EUR to USD</span>
                                    <span className="text-white font-medium text-lg">1.05650</span>
                                    <span className="text-red-500 text-sm">-0.00265 (-0.25)%</span>
                                    <span className="text-red-500 text-sm h-5 w-5 bg-green-500 rounded-full"></span>
                                </div>
                                <div className="w-3 h-3 rounded-full bg-blue-500 mx-4" style={{ alignSelf: 'center' }}></div>
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
