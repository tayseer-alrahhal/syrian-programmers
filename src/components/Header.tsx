"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 10)
    })

    const baseClass = "fixed top-3 left-1/2 transform -translate-x-1/2 w-[98.5%] px-4 sm:px-6 lg:px-20 py-3 rounded-md z-50 transition-all duration-300 "
    const scrolledClass = "bg-white border shadow-md"

    return (
        <motion.header
            className={`${baseClass} ${isScrolled ? scrolledClass : "bg-transparent border-none shadow-none"}`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="مبادرة باسل الصفدي"
                        width={100}
                        height={100}
                        className="h-12 sm:h-16 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex space-x-8 xl:space-x-16">
                        <li>
                            <Link href="/" className="text-black text-[16px] xl:text-[18px] relative group">
                                <span className="hover-effect">الرئيسية</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-black text-[16px] xl:text-[18px] relative group">
                                <span className="hover-effect">من نحن</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/initiative" className="text-black text-[16px] xl:text-[18px] relative group">
                                <span className="hover-effect">عن المبادرة</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-black text-[16px] xl:text-[18px] relative group">
                                <span className="hover-effect">اتصل بنا</span>
                            </Link>
                        </li>
                    </ul>
                </nav>


                {/* CTA Button */}
                <div className="hidden lg:block">
                    <a href="#" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-[#BB2D34] transition duration-300 text-sm xl:text-base">انضم إلينا</a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all bg-white w-full duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <nav className="pt-4 pb-2">
                    <ul className="flex flex-col space-y-4">
                        <li><Link href="/" className="block text-black text-[16px] py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link></li>
                        <li><Link href="/about" className="block text-black text-[16px] py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>من نحن</Link></li>
                        <li><Link href="/initiative" className="block text-black text-[16px] py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>عن المبادرة</Link></li>
                        <li><Link href="/contact" className="block text-black text-[16px] py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>اتصل بنا</Link></li>
                        <li className="pt-2"><a href="#" className="block bg-green-900 text-white px-4 py-2 w-[95%] mx-auto rounded hover:bg-[#BB2D34] transition duration-300 text-center" onClick={() => setIsMenuOpen(false)}>انضم إلينا</a></li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    )
}
