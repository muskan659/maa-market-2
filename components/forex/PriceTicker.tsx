"use client";
import React from 'react';
import { motion } from 'framer-motion';

const prices = [
    { pair: "EUR to USD", value: "1.05650", change: "-0.00265 (-0.25)%", up: false },
    { pair: "EUR to USD", value: "1.05650", change: "+0.00265 (0.25)%", up: true },
    { pair: "EUR to USD", value: "1.05650", change: "-0.00265 (-0.25)%", up: false },
    { pair: "EUR to USD", value: "1.05650", change: "+0.00265 (0.25)%", up: true },
];

const PriceTicker = () => {
    return (
        <div className="bg-white py-4 border-t border-b border-white/5 overflow-hidden whitespace-nowrap relative z-20 shadow-2xl" style={{ padding: "20px" }}>
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-flex gap-12 items-center"
            >
                {[...Array(10)].map((_, i) => (
                    <React.Fragment key={i}>
                        {prices.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <span className="text-[#1F2834] text-md"><b>
                                    {item.pair}</b></span>
                                <span className="text-[#1F2834] font-500">{item.value}</span>
                                <span className={`text-sm ${item.up ? 'text-green-500' : 'text-red-500'}`}>
                                    {item.change}
                                </span>
                                <div className="w-6 h-6 rounded-full bg-blue-500" />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default PriceTicker;
