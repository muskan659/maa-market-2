
"use client";
import React from "react";
import { Zap, ShieldCheck, Clock, Layers, Users, BarChart } from "lucide-react";

const WhyWeAreDifferent = () => {
    const features = [
        {
            icon: Zap,
            title: "Ultra-Fast Execution",
            desc: "Our servers are located in Equinix NY4 data center, ensuring trade execution in under 30ms.",
        },
        {
            icon: Layers,
            title: "Deep Liquidity",
            desc: "Access tier-1 liquidity from top global banks for the best possible pricing.",
        },
        {
            icon: ShieldCheck,
            title: "Secure & Regulated",
            desc: "Client funds are segregated in top-tier banks, ensuring maximum security and transparency.",
        },
        {
            icon: Clock,
            title: "24/7 Support",
            desc: "Our dedicated support team is available around the clock to assist you in multiple languages.",
        },
        {
            icon: BarChart,
            title: "Advanced Tools",
            desc: "Free access to premium analysis tools, VPS hosting, and Autochartist.",
        },
        {
            icon: Users,
            title: "Community Focused",
            desc: "Join thousands of traders in our thriving community for insights and strategies.",
        },
    ];

    return (
        <section className="py-24 bg-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Why We Are <span className="text-primary">Different</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We've built a trading environment that gives you the edge you need to succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-gradient-to-br from-dark-lighter to-dark border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />

                            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-transparent rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <feature.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyWeAreDifferent;
