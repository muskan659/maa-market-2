
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar2 = () => {
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

    const navLinks = [
        { name: "Trading", href: "#" },
        { name: "Learning", href: "#" },
        { name: "Promotions", href: "#" },
        { name: "Partners", href: "#" },
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
    ];

    return (
        <header className={`relative max-w-6xl z-50 transition-all duration-300 `}
            style={{ alignItems: "center", display: "flex", flexDirection: "column", margin: "auto" }}
        >

            {/* Top Bar for Language Selector (Optional based on design, but good for "EN" placement) */}




            <div>


                <div className="container mx-auto px-6 py-3 flex items-center w-auto">
                    {/* <div className="w-full border-b border-white my-1"></div> */}
                    {/* Logo Section */}
                    <div className="d-flex">
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* Logo Icon Placeholder - Replace with actual Oryx image */}
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
                                    className="w-5 h-5 rounded-full"
                                />
                                <span className="font-medium text-black">EN</span>
                                <ChevronDown size={12} fill="black"/>
                            </div>
                        </div>
                        <div className="border-b border-[#1F2834] my-2 opacity-50" style={{ marginBottom: "5px" }}></div>

                        <div className="flex w-full items-center ml-4">
                            <div className="w-1/3 flex flex-col">
                                <img src="/lightlogo.svg" alt="" />
                            </div>
                            <div className="hidden xl:flex w-9/12 items-center justify-center gap-3 mx-auto" style={{ margin: "0px 50px" }}>

                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-[#1F2834] hover:text-[#D4AF37] transition-colors relative group"
                                        style={navMenuStyle}
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>
                            <div className="hidden md:flex w-1/4 items-center justify-end gap-6" style={{ marginLeft: "50px" }}>
                                <Link
                                    href="#"
                                    className="text-white hover:text-[#D4AF37] transition-colors font-bold text-sm tracking-wide uppercase"
                                >
                                    LOGIN
                                </Link>
                                <Link
                                    href="#"
                                    className="px-8 py-3 rounded-full font-bold text-sm tracking-wide uppercase text-white transition-all shadow-lg transform hover:-translate-y-0.5"
                                    style={{
                                        background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%);",
                                        padding: '10px'
                                    }}
                                >
                                    REGISTER
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* Desktop Navigation */}

                    {/* Auth Buttons */}


                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden text-white hover:text-[#D4AF37] transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-[#0B0E14] border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#D4AF37] hover:text-[#D4AF37] py-2"
                                    style={navMenuStyle}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                                <Link
                                    href="#"
                                    className="text-white text-center py-3 font-bold uppercase"
                                >
                                    LOGIN
                                </Link>
                                <Link
                                    href="#"
                                    className="text-center w-full py-3 rounded-full font-bold uppercase text-white"
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

export default Navbar2;
