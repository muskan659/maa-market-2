
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { text } from "stream/consumers";

const InvestYourWay = () => {
  const [activeTab, setActiveTab] = useState("forex");

  const categories = [
    { id: "forex", label: "FOREX" },
    { id: "indices", label: "INDICES" },
    { id: "commodities", label: "COMMODITIES" },
    { id: "crypto", label: "CRYPTO" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container max-w-6xl px-6" style={{ margin: 'auto', padding: '50px 20px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        

          >
            <h2 className="text-3xl md:text-6xl font-bold text-black" style={{ marginBottom: "25px" }}>
              Invest Your Way
            </h2>

            <p className="text-gray-500 mb-6 leading-relaxed" style={{ color: "rgba(135, 145, 156, 1)", lineHeight: "150%", textAlign: "justify", fontSize: "19px" }}>
              Ouryx is built for traders who prioritise conditions over marketing promises.
            </p>
            <br></br>
            <p className="text-gray-500 mb-8 leading-relaxed" style={{ color: "rgba(135, 145, 156, 1)" ,lineHeight: "150%", textAlign: "justify", fontSize: "19px"}}>
              Trade global CFD markets through one Ouryx account. Forex, indices, commodities and crypto — all available on MT5 with transparent pricing and efficient execution.
            </p>
            <br></br>
            {/* Category Tabs */}
            <div className="flex flex-wrap md:flex-nowrap w-full overflow-x-auto gap-3 mb-8 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{ padding: '10px', borderRadius: "10px",border:"2px solid #b3cce4" }}
                  className={` text-sm w-full font-medium transition-all duration-300 ${activeTab === cat.id
                    ? "bg-[#0E8BFF] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-400"
                    }`}
                >


                  {cat.label}
                </button>
              ))}
            </div>
            <br></br>

            <p className="text-gray-500 mb-8  leading-relaxed" style={{ color: "rgba(135, 145, 156, 1)", lineHeight: "150%", textAlign: "justify", fontSize: "19px" }}>
              Ouryx is built for traders who prioritise conditions over marketing promises.

         
            </p>
            <br></br>
            <br></br>
            {/* Register Button */}
            <button
              className="px-8 py-4 rounded-full font-medium text-white transition-all hover:shadow-lg"
              style={{
                background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%);",
                padding: '10px 80px'
              }}
            >
              REGISTER NOW
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center w-full mt-24 lg:mt-0 h-full"
          >
            <div
              className="relative w-full max-w-[450px] xl:max-w-[500px] aspect-[4/4.8] flex justify-center items-center"
              style={{
                background: "conic-gradient(from 72.58deg at 34.5% 79.87%, #BB9B80 0deg, #1F2834 360deg)",
                borderRadius: "20px",
              }}
            >
              {/* Phone mockup */}
              <img
                src="/mobile.png"
                alt="Phone Mockup"
                className="absolute w-[110%] sm:w-[115%] md:w-[105%] lg:w-[110%] h-auto object-contain drop-shadow-2xl z-10"
                style={{
                  transform: 'rotate(13deg) translateY(-79px);',
                  left:"39px",
                  borderRadius: "2rem",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Trading Conditions Link */}
        <div className="mt-26 flex justify-end" style={{ margin: "50px 35px" }}>
          <a
            href="#"
            style={{ color: "#0E8BFF",fontSize: "22px" }}
            className="flex items-center  text-blue-500 hover:text-blue-600 font-medium text-lg transition-colors"
          >
            Trading Conditions
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestYourWay;

