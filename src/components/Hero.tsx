"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from 'next/link'

export default function Hero() {
    const images = [
        "/basel/b1.jpg",
        "/basel/b2.png",
        "/basel/b3.jpg",
        "/basel/b4.jpg",
        "/basel/b5.jpg",
        "/basel/b6.jpg",
    ];
    return (
        <section className="mt-[100px]">
            <ImagesSlider className="h-[40rem]" images={images}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                >
                    <motion.p className="font-bold text-xl leading-[80px] md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                        نبني مستقبلاً رقمياً بأيدي سورية <br />
                        معًا نرتقي بمجتمع البرمجة نحو الإبداع والتطور.
                    </motion.p>

                    <div className="flex items-center gap-4">
                        <Link href="/" className="cursor-pointer px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                            <span>عن المبادرة</span>
                            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </Link>

                        <Link href="/" className="md:hidden cursor-pointer px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                            <span>انضم الان</span>
                            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </Link>
                    </div>

                </motion.div>
            </ImagesSlider>
        </section>
    );
}
