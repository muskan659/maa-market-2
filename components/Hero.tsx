
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity, BarChart2, Zap, DollarSign } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative flex flex-col" style={{ background: "linear-gradient(270deg, rgba(44, 53, 63, 0) 0%, #2C353F 100%)" }}>
            <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(270deg, rgba(44, 53, 63, 0) 0%, #2C353F 100%)" }}>
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

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-12 w-full lg:w-[60%] xl:w-[50%]">
                    {/* Text Content */}
                    <div className="text-center flex flex-col gap-6">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                            >
                                Built for Serious Trading
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="leading-tight mb-6 text-gray-300"
                            >
                                Forex, indices, commodities and crypto CFDs. Competitive spreads. Fast execution. Powerful platforms.
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
                                    className="text-white hover:bg-primary-hover rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] flex items-center justify-center gap-2 group"
                                    style={{
                                        background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%)",
                                        padding: '10px 40px'
                                    }}
                                >
                                    Open Live Account
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all text-white flex items-center justify-center"
                                >
                                    Try Demo
                                </Link>
                            </motion.div>

                        </div>

                        {/* Stats */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8"
                            >
                                {[
                                    { label: "Markets", value: "300+", icon: Activity },
                                    { label: "Spreads", value: "0.0 pips", icon: BarChart2 },
                                    { label: "Leverage", value: "500:1", icon: Zap },
                                    { label: "Commission", value: "$0", icon: DollarSign },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center md:text-left" style={{
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "12px",
                                        padding: "20px",
                                        background: "rgba(178, 151, 125, 0.2)",
                                        backdropFilter: "blur(10px)"
                                    }}>
                                        <div className="text-white font-bold text-2xl md:text-3xl mb-1">{stat.value}</div>
                                        <div className="text-white/70 text-sm uppercase tracking-wider font-medium flex items-center justify-center md:justify-start gap-2">

                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Economic Ticker at Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#0B0E14]/80 py-4 border-t border-white/10 backdrop-blur-md"
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
