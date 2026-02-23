"use client";
import React, { useState } from 'react';

const categories = ["MAJORS", "MINORS", "EXOTICS", "CROSSES"];

const tradingPairs = [
    { symbol: "USDJPY", name: "U.S Dollar vs. Japanese Yen", avgSpread: "1.1", lowSpread: "0.8", leverage: "1:500" },
    { symbol: "USDJPY", name: "U.S Dollar vs. Japanese Yen", avgSpread: "1.3", lowSpread: "0.8", leverage: "1:500" },
    { symbol: "USDJPY", name: "U.S Dollar vs. Japanese Yen", avgSpread: "1.2", lowSpread: "0.8", leverage: "1:500" },
    { symbol: "USDJPY", name: "U.S Dollar vs. Japanese Yen", avgSpread: "1.2", lowSpread: "1.1", leverage: "1:500" },
    { symbol: "USDJPY", name: "U.S Dollar vs. Japanese Yen", avgSpread: "1.3", lowSpread: "0.8", leverage: "1:500" },
    { symbol: "USDJPY", name: "U.S Dollar vs. Japanese Yen", avgSpread: "1.1", lowSpread: "1.2", leverage: "1:500" },
];

const MarketTable = () => {
    const [activeTab, setActiveTab] = useState("MAJORS");

    return (
        <section className="bg-white py-16 px-4 max-w-6xl" id="markettab" style={{ margin: "auto", padding: "60px 0px" }}>
            <div className="max-w-6xl mx-auto">
                {/* Search and Categories */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-8">
                    <div className="relative w-full max-w-xs group">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pb-2 border-b border-gray-200 outline-none focus:border-blue-500 transition-colors text-gray-400 text-sm"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-6 py-2 rounded-lg font-bold text-xs tracking-wider transition-all border ${activeTab === cat
                                    ? 'bg-[#1890FF] text-white border-[#1890FF] shadow-sm'
                                    : 'text-[#1890FF] border-[#E6F7FF] bg-white hover:bg-blue-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                <br></br>
                {/* Table wrapper with horizontal scroll for mobile */}
                <div className="overflow-x-auto rounded-2xl shadow-[0_15px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-100/50">
                    <table className="w-full text-left border-collapse min-w-[1000px] md:min-w-full">
                        <thead>
                            <tr className="bg-[#9A7F67] text-white">

                                <th className="py-7 px-6 text-xs font-bold text-center first:text-left tracking-wider" style={{ minWidth: "280px" }}>Symbol</th>
                                <th className="py-7 px-4 text-xs font-bold text-center tracking-wider leading-relaxed">Average Spread<br />(pips)</th>
                                <th className="py-7 px-4 text-xs font-bold text-center tracking-wider leading-relaxed">Spread As Low As<br />(pips)</th>
                                <th className="py-7 px-4 text-xs font-bold text-center tracking-wider leading-relaxed">Maximum<br />Leverage</th>
                                <th className="py-7 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tradingPairs.map((pair, i) => (
                                <tr key={i} className={`hover:bg-gray-50/50 transition-colors ${i === 1 ? 'bg-[#FCF9F6]' : ''}`}>
                                    <td className="py-6 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex -space-x-1.5">
                                                <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden z-20">
                                                    <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden z-10">
                                                    <img src="https://flagcdn.com/w40/jp.png" alt="JP" className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-[#002B49] font-bold text-lg leading-tight tracking-tight">{pair.symbol}</div>
                                                <div className="text-[11px] text-gray-400 font-medium">{pair.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4 text-center">
                                        <span className="text-[#4A5568] font-bold text-base">{pair.avgSpread}</span>
                                    </td>
                                    <td className="py-6 px-4 text-center">
                                        <span className="text-[#4A5568] font-bold text-base">{pair.lowSpread}</span>
                                    </td>
                                    <td className="py-6 px-4 text-center">
                                        <span className="text-[#4A5568] font-bold text-base">{pair.leverage}</span>
                                    </td>
                                    <td className="py-6 px-6 text-right">
                                        <button className="px-8 py-2 border border-[#D4B483] text-[#D4B483] rounded-full text-sm font-semibold hover:bg-[#D4B483] hover:text-white transition-all">
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="mt-8 flex flex-col items-start gap-2">
                    <button className="text-[#1890FF] font-bold text-sm flex items-center gap-2 group">
                        Expand Full List
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="7" x2="17" y2="17"></line>
                            <polyline points="17 7 17 17 7 17"></polyline>
                        </svg>
                    </button>
                    <p className="text-[11px] text-gray-400 font-normal">
                        *The pricing is for indicative purposes only. Please click on individual symbols to see trading conditions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MarketTable;
