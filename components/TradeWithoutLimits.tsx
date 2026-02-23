"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TradeWithoutLimits = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Inter:wght@300;400;500&display=swap');

        .twl-section {
          position: relative;
          overflow: hidden;
          padding: 60px 60px 80px;
          background: conic-gradient(from 75.77deg at 39.29% 71.08%, #BB9B80 0deg, #1F2834 360deg);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .twl-container {
         
        }

        .twl-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
          margin-bottom: 60px;
        }

        .twl-laptop-box {
          transform: perspective(1400px) rotateY(-18deg) rotateX(7deg) rotateZ(-11deg);
          position: relative;
          top: -90px;
          transform-style: preserve-3d;
          filter: drop-shadow(0 30px 40px rgba(0,0,0,0.38));
        }

        .twl-laptop-box::before {
          content: "";
          position: absolute;
          left: 6%;
          right: 6%;
          bottom: -28px;
          height: 36px;
          border-radius: 999px;
       
          filter: blur(3px);
          z-index: 0;
          pointer-events: none;
        }

    

        

        .twl-right {
          text-align: right;
        }

        .twl-heading {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 28px;
          letter-spacing: -0.5px;
        }

        .twl-tagline {
          color: rgba(255,255,255,0.9);
          font-size: 18px;
          margin-bottom: 20px;
          font-weight: 300;
        }

        .twl-desc {
          color: rgba(255,255,255,0.75);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 460px;
          margin-left: auto;
        }

        .twl-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .twl-card {
          border: 1px solid #8a8481;
          border-radius: 12px;
          background: rgba(178, 151, 125, 0.3);
          padding: 24px 20px;
          text-align: center;
        }

        .twl-card h3 {
          font-family: 'Rajdhani', sans-serif;
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .twl-card-img-wrap {
          height: 160px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }

        .twl-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          padding-top: 40px;
        }

        .twl-qr-block {
          background: rgba(17, 30, 48, 0.95);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 14px 40px rgba(0,0,0,0.35);
        }

        .twl-qr-code {
          background: #ffffff;
    
          border-radius: 10px;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.18);
        }

        .twl-store-btns {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .twl-store-btn:hover { 
          background: #111;
          border-color: rgba(255,255,255,0.45);
        }

        .twl-store-btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
        }

        .twl-store-btn-top {
          font-size: 9px;
          font-weight: 500;
          opacity: 0.9;
          letter-spacing: 0.1px;
        }

        .twl-store-btn-main {
          font-size: 21px;
          font-weight: 700;
          line-height: 0.9;
          font-family: 'Rajdhani', sans-serif;
        }

        .twl-cta-block {
          text-align: right;
        }

        .twl-cta-block p {
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 20px;
          letter-spacing: 0.3px;
        }

        .twl-download-btn {
background: linear-gradient(90deg, #6A6F76 0%, #1F2834 100%);

          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
         
          padding: 10px 60px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .twl-download-btn:hover {
          background: rgba(90, 105, 130, 0.9);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .twl-top-grid { grid-template-columns: 1fr; gap: 20px; }
          .twl-laptop-box { transform: none; top: 0; left: 0; max-width: 400px; margin: 0 auto; }
          .twl-right { text-align: left; }
          .twl-desc { margin-left: 0; }
          .twl-cards-grid { grid-template-columns: 1fr; }
          .twl-bottom-bar { flex-direction: column; align-items: flex-start; gap: 20px; }
          .twl-section { padding: 40px 24px; }
          .twl-cta-block { text-align: left; }
        }
      `}</style>

      <section className="twl-section">
        <div className="twl-container max-w-6xl mx-auto" style={{ margin: "auto" }}>

          {/* Top Grid */}
          <div className="twl-top-grid">

            {/* Left: Laptop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="twl-laptop-box">
                <Image
                  src="/trade.png"
                  alt="Trading Platform"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "auto", borderRadius: 12 }}
                />
              </div>
            </motion.div>

            {/* Right: Content + Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="twl-right"
            >
              <h2 className="twl-heading">
                Trade Without<br />Limits
              </h2>
              <p className="twl-tagline">Markets don't wait — and neither should your platform.</p>
              <p className="twl-desc">
                Access your Ouryx account seamlessly across desktop, web and mobile. Whether you're analysing charts on a large screen or managing positions on the move, your pricing, execution and account data remain fully synchronised.
              </p>

              {/* Cards */}
              <div className="twl-cards-grid">
                {/* Desktop */}
                <motion.div
                  className="twl-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3>MT5 Desktop Trader</h3>
                  <div className="twl-card-img-wrap">
                    <Image
                      src="/trade1.png"
                      alt="MT5 Desktop"
                      width={300}
                      height={160}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "rotate(17deg) perspective(1000px) rotateY(37deg)",
                        borderRadius: 8,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Mobile */}
                <motion.div
                  className="twl-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  viewport={{ once: true }}
                >
                  <h3>MT5 Mobile Trader</h3>
                  <div className="twl-card-img-wrap">
                    <Image
                      src="/image2.png"
                      alt="MT5 Mobile"
                      width={100}
                      height={160}
                      style={{
                        height: "100%",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Web */}
                <motion.div
                  className="twl-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3>MT5 Web Trader</h3>
                  <div className="twl-card-img-wrap">
                    <Image
                      src="/trade3.png"
                      alt="MT5 Web Trader"
                      width={300}
                      height={160}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="twl-bottom-bar"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* QR + Store Buttons */}
            <div className="twl-qr-block">
              <div className="twl-qr-code">
                <Image src="/qr_code.png" alt="QR Code" width={70} height={70} className="w-full h-full" />

              </div>
              <div className="twl-store-btns">
                <button className="twl-store-btn">
                  <img src="/appstore.svg" alt="Apple Store" />
                </button>
                <button className="twl-store-btn">
                  <img src="/googleplay.svg" alt="Google Play" />


                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="twl-cta-block">
              <p>No interruptions. No compromises.</p>
              <button className="twl-download-btn">DOWNLOAD</button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default TradeWithoutLimits;