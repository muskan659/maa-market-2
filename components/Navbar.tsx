
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navMenuStyle = {
        fontFamily: "var(--font-poppins), sans-serif",
        fontWeight: 500,
        fontSize: "13px",
        lineHeight: "26px",
        letterSpacing: "0",
        textTransform: "uppercase",
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navLinks = [
        { name: "Trading", href: "#" },
        { name: "Learning", href: "#" },
        { name: "Promotions", href: "#" },
        { name: "Partners", href: "#" },
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
    ];

    return (
        <header className={`absolute w-full z-50 transition-all duration-300 ${scrolled ? "" : ""}`}
            style={{ alignItems: "center", display: "flex", flexDirection: "column", margin: "auto", padding: "20px 10px" }}
        >
            <div className="w-full">
                <div className="container mx-auto px-4 md:px-6" style={{
                    margin: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                }}

                >
                    <div className="xl:hidden flex items-center justify-between py-3">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full p-[1px] flex items-center justify-center">
                                <img src="/image.png" alt="Oryx Logo" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <img src="logo.svg" alt="Oryx" className="h-10 w-auto" />
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-xs text-gray-300 cursor-pointer hover:text-white transition-colors">
                                <img
                                    src="https://flagcdn.com/w20/gb.png"
                                    alt="UK Flag"
                                    className="w-4 h-4 rounded-full"
                                />
                                <span className="font-medium">EN</span>
                                <ChevronDown size={12} />
                            </div>
                            <button
                                className="text-white hover:text-[#D4AF37] transition-colors"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </div>
                    </div>

                    <div className="hidden xl:block">
                        <div className="flex items-center w-auto py-3">
                            <div className="d-flex">
                                <Link href="/" className="flex items-center gap-3 group">
                                    <div className="w-25 h-25 md:w-25 md:h-25 rounded-full p-[1px] flex items-center justify-center">
                                        <img src="/image.png" alt="Oryx Logo" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <div className="container mx-auto px-6 py-2 flex items-end w-auto gap-5 justify-end">
                                    <div className="flex items-center gap-1 text-xs text-gray-300 cursor-pointer hover:text-white transition-colors">
                                        <img
                                            src="https://flagcdn.com/w20/gb.png"
                                            alt="UK Flag"
                                            className="w-4 h-4 rounded-full"
                                        />
                                        <span className="font-medium">EN</span>
                                        <ChevronDown size={12} />
                                    </div>
                                </div>
                                <div className="border-b border-white my-2 opacity-50" style={{ marginBottom: "12px", marginTop: "10px" }}></div>

                                <div className="flex w-full items-center ml-4">
                                    <div className="w-1/7 flex flex-col">
                                        <img src="logo.svg" alt="" />
                                    </div>
                                    <div className="w-9/12 items-center justify-center gap-3 mx-auto flex" style={{ margin: "0px 50px" }}>
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="text-white hover:text-[#D4AF37] transition-colors relative group"
                                                style={navMenuStyle}
                                            >
                                                {link.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="w-1/4 items-center justify-end gap-6 hidden md:flex" style={{ marginLeft: "50px" }}>
                                        <Link
                                            href="#"
                                            className="text-white hover:text-[#D4AF37] transition-colors font-semibold text-sm tracking-wide uppercase"
                                        >
                                            LOGIN
                                        </Link>
                                        <Link
                                            href="#"
                                            className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide uppercase text-white transition-all shadow-lg transform hover:-translate-y-0.5"
                                            style={{
                                                    background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%)",

                                                    padding: "10px 35px",
                                            }}
                                        >
                                            REGISTER
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden w-full bg-[#0B0E14] border-t border-white/10"
                    >
                        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white hover:text-[#D4AF37] py-2"
                                    style={navMenuStyle}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                                <Link
                                    href="#"
                                    className="text-white text-center py-3 font-semibold uppercase"
                                >
                                    LOGIN
                                </Link>
                                <Link
                                    href="#"
                                    className="text-center w-full py-3 rounded-full font-semibold uppercase text-white"
                                    style={{
                                        background: "linear-gradient(135deg, #C6A678 0%, #A08354 100%)",
                                    }}
                                >
                                    REGISTER
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
