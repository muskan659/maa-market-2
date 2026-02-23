"use client";
import React from 'react';
import { Check } from 'lucide-react';

const accounts = [
    {
        name: "Standard Account",
        minDep: "$20",
        features: [
            "Min spread from 1.7 pips",
            "Max leverage up to 1:500",
            "Customer support 24/5",
            "30% Stop out",
            "50% Margin call"
        ],
        popular: false
    },
    {
        name: "Premium Account",
        minDep: "$5,000",
        features: [
            "Min spread from 1.2 pips",
            "Max leverage up to 1:500",
            "Customer support 24/5",
            "30% Stop out",
            "50% Margin call"
        ],
        popular: true
    },
    {
        name: "VIP Account",
        minDep: "$20,000",
        features: [
            "Min spread from 0 pips",
            "Customer support 24/5",
            "Commission $4 per lot",
            "Exclusive strategies & offers",
            "50% Margin call"
        ],
        popular: false
    }
];

const AccountTypes = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: 'conic-gradient(from 75.77deg at 39.29% 71.08%, #BB9B80 0deg, #1F2834 360deg)' }}>
            <div className="max-w-6xl mx-auto px-6" style={{ margin: "auto" }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {accounts.map((acc, i) => (
                        <div
                            key={i}
                            className={`relative rounded p-8 transition-transform hover:-translate-y-2 duration-500 flex flex-col items-center text-center border border-white ${acc.popular ? 'bg-[#BB9B80] scale-105 shadow-2xl' : 'bg-white/10 backdrop-blur-sm'
                                }`}
                        >
                            {acc.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0095FF] text-white text-[10px] font-black uppercase tracking-widest py-2 px-8 rounded-lg shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-white text-2xl font-semibold mb-8 mt-4 leading-tight">
                                {acc.name.split(' ').map((word, idx) => (
                                    <React.Fragment key={idx}>{word}<br /></React.Fragment>
                                ))}
                            </h3>
                            <br></br>

                            <div className="mb-8">
                                <p className="text-white/70 text-sm font-bold mb-1 uppercase tracking-tight">Min Dep from</p>
                                <p className="text-white text-5xl font-black">{acc.minDep}</p>
                            </div>
                            <br></br>
                            <div className="w-full  rounded  space-y-4 mb-10 flex-grow" style={{ padding: "15px 10px" }}>
                                {acc.features.map((feat, idx) => (
                                    <>
                                        <div key={idx} className="flex items-center gap-3 text-left" style={{ marginBottom: "20px" }}>
                                            <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} className="text-white" />
                                            </div>
                                            <span className="text-white/90 text-[13px] font-medium leading-tight ">{feat}</span>
                                        </div>

                                    </>
                                ))}
                            </div>


                            <button className="w-full py-4 rounded-full text-white text-xs font-black uppercase tracking-widest hover:bg-[#2c3a4d] transition-colors shadow-xl" style={{ background: "linear-gradient(90deg, #6A6F76 0%, #1F2834 100%)" }}>
                                Trade Now
                            </button>
                        </div>
                    ))}

                </div>
                <div className=" gap-8 relative z-10" style={{ margin: "90px 0px 0px 0px ", width: "100%" }}>
                    <p className="text-center text-white text-[10px] mt-12">
                        Trading involves significant risk of loss
                    </p>
                </div>


            </div>

        </section>
    );
};

export default AccountTypes;
