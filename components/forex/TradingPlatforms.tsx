"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TradingPlatforms = () => {
    return (
        <section className="relative overflow-hidden py-10 lg:py-24 min-h-[700px] flex items-center" style={{
            background: "linear-gradient(135deg, #A88B70 0%, #1F2834 70%)",

        }}>
            {/* Background stylized shape - Diagonal cut from screenshot */}
            {/* <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[60%] h-[120%] bg-black/10 transform -rotate-12 origin-top-right"></div>
            </div> */}

            <div className="max-w-6xl mx-auto relative z-10 w-full mx-auto" style={{ margin: "auto" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left side: Large Laptop Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-[140%] aspect-[4/3] transform -rotate-6 translate-x-[-25%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
                            <Image
                                src="/trading_platforms_hero.png"
                                alt="Trading Platform on Laptop"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right side: Content */}
                    <div className="text-white lg:pl-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[48px] lg:text-[84px] font-bold leading-[1] mb-8 tracking-tighter text-right lg:text-right px-4"
                        >
                            Trade Without <br />
                            Limits
                        </motion.h2>

                        <div className="max-w-xl ml-auto text-right">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-[18px] lg:text-[22px] font-medium text-white/90 mb-6"
                            >
                                Markets don't wait — and neither should your platform.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-[14px] lg:text-[16px] text-white/70 leading-relaxed mb-12"
                            >
                                Access your Ouryx account seamlessly across desktop, web and mobile. Whether you’re analysing charts on a large screen or managing positions on the move, your pricing, execution and account data remain fully synchronised.
                            </motion.p>
                        </div>

                        {/* Platform Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-3xl ml-auto">
                            {[
                                { title1: "MT5 Desktop", title2: "Trader", img: "/trade3.png" },
                                { title1: "MT5 Mobile", title2: "Trader", img: "/mobile.png" },
                                { title1: "MT5 Web", title2: "Trader", img: "/tradermarket.png" }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                    className="bg-[#1F2834]/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center group"
                                >
                                    <h4 className="text-[16px] lg:text-[18px] font-bold mb-6 text-white group-hover:text-[#A88B70] transition-colors leading-tight">
                                        {card.title1} <br /> {card.title2}
                                    </h4>
                                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg bg-black/20">
                                        <Image
                                            src={card.img}
                                            alt={card.title1}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Text and CTA */}
                        <div className="flex flex-col items-center lg:items-end gap-10">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="text-[22px] lg:text-[28px] font-semibold text-white/90"
                            >
                                No interruptions. No compromises.
                            </motion.p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-10 w-full">
                                {/* QR Code Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                    className="bg-[#18212D] p-5 rounded-3xl flex items-center gap-5 border border-white/5"
                                >
                                    <div className="w-20 h-20 bg-white p-2 rounded-xl">
                                        <Image src="/qr_code.png" alt="QR Code" width={70} height={70} className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Image src="/app_store_buttons.png" alt="App Stores" width={140} height={60} className="h-14 w-auto object-contain" />
                                    </div>
                                </motion.div>

                                {/* Download Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "#2D343E" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#414D5C] text-white px-14 py-5 rounded-full text-[18px] font-bold tracking-[0.2em] shadow-2xl transition-all border border-white/10"
                                >
                                    DOWNLOAD
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Laptop Image (Visible only on bottom for mobile) */}
            <div className="lg:hidden w-full mt-12 px-6">
                <Image
                    src="/trading_platforms_hero.png"
                    alt="Trading Platform on Laptop"
                    width={500}
                    height={375}
                    className="w-full h-auto drop-shadow-2xl"
                />
            </div>
        </section>
    );
};

export default TradingPlatforms;
