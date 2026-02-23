"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'STRATEGIES' | 'RISK';
const tabs: TabType[] = ["STRATEGIES", "RISK"];

const resources: Record<TabType, { title: string; desc: string }[]> = {
    STRATEGIES: [
        {
            title: "Trend Following",
            desc: "Trend following strategies involve identifying the direction of market momentum and entering trades that align with the perceived trend. This can be done using various technical indicators such as moving averages, MACD, or ADX."
        },
        {
            title: "Range Trading",
            desc: "Range trading involves identifying support and resistance levels and trading between these levels. This strategy is particularly effective in markets that are moving sideways."
        },
        {
            title: "Breakout Trading",
            desc: "Breakout trading involves entering a trade when the price moves outside a defined support or resistance level with increased volume. The objective is to enter the trade early in anticipation of a large price movement."
        }
    ],
    RISK: [
        {
            title: "Risk Management",
            desc: "Proper risk management is essential for long-term trading success. This includes setting stop-loss orders, managing position sizes, and diversifying your portfolio to minimize potential losses."
        },
        {
            title: "Market Volatility",
            desc: "Understanding market volatility is crucial for traders. Volatility can create opportunities for profit, but it also increases the risk of losses. Traders should use appropriate strategies to manage volatility."
        },
        {
            title: "Trading Psychology",
            desc: "Trading psychology plays a significant role in trading success. Managing emotions such as fear and greed is important for making rational trading decisions and following your trading plan."
        }
    ]
};

const ForexInsights = () => {
    const [activeTab, setActiveTab] = useState<TabType>("STRATEGIES");

    return (
        <section className="py-24  " style={{ background: 'conic-gradient(from 75.77deg at 39.29% 71.08%, #BB9B80 0deg, #1F2834 360deg)', position: "relative", zIndex: "10" }}>
            <div className="container max-w-6xl mx-auto px-6" style={{ margin: "auto" }}>
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    Forex Trading Insights
                </h2>
                <br></br>
                <div className="max-w-6xl mx-auto" style={{ margin: "auto" }}>
                    <div className="flex gap-4 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === tab
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="mb-12">
                        <br></br>
                        <h3 className="text-white text-2xl font-bold mb-2">Forex Trading {activeTab.charAt(0) + activeTab.slice(1).toLowerCase()}</h3>
                        <br></br>
                        <p className="text-white">Popular {activeTab.toLowerCase()} used by forex traders</p>
                        <br></br>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {resources[activeTab].map((item, i) => (


                                <div
                                    key={i}
                                    className="bg-[#F3F4F7E5] rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
                                    style={{ paddingTop: "80px" }}
                                >
                                    <h4 className="text-[#1F2937] text-2xl font-bold mb-9" style={{ marginBottom: "8px" }}>{item.title}</h4>


                                    <p className="text-[#87919C] text-[18px] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ForexInsights;
