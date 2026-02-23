"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
    { label: "Markets to trade", value: "300+" },
    { label: "Starting spreads", value: "0.0 pips" },
    { label: "Flexible leverage", value: "500:1" },
    { label: "Commission (from)", value: "$0" },
];

const TradeMarkets = () => {
    return (

        <>
            <div className="bg-[#F4F6F8] py-20 relative overflow-hidden" style={{ padding: "80px 50px 0px 50px" }}>
                <div className="container mx-auto px-6 max-w-6xl text-center pt-20" style={{ margin: "auto" }}>
                    <h2 className="text-[42px] lg:text-[64px] font-[600] text-[#1a202c] mb-20 tracking-tighter leading-tight px-6 uppercase">
                        Trade 300+<br />of Global Markets
                    </h2>
                    <br></br>

                    <div className="relative w-full mx-auto mb-[-60px] z-10 rounded-2xl overflow-hidden bg-[#0B0E14]">
                        <Image
                            src="/tradermarket.png"
                            alt="Trading Platform"
                            width={1100}
                            height={600}
                            className="w-full h-auto block"
                        />
                    </div>
                </div>

                {/* Stats Bar Section */}

            </div>
            <div className="relative" style={{
                background: "conic-gradient(from 87deg at 39.29% 71.08%, #BB9B80 0deg, #1F2834 360deg);",


                padding: "100px 80px",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <div className="container mx-auto px-6 max-w-6xl relative z-10" style={{ margin: "auto" }}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#B2977D33] border border-white/10 rounded-xl p-2 text-left shadow-lg"
                                style={{
                                    border: "1px solid #8a8481",
                                    borderRadius: "12px",
                                    padding: "30px 40px",
                                    background: "#B2977D4D",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div className="text-white font-bold text-3xl mb-2">{stat.value}</div>
                                <p className="text-white">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TradeMarkets;
