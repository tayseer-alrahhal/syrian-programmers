"use client";
import { motion } from "motion/react";
import React from "react";
import Link from 'next/link'

export default function Hero() {

    return (
        <section className="mt-[100px] max-md:h-[40%]">
            <div className="h-[40rem] bg-[url('/code.png')] bg-cover bg-center bg-no-repeat relative flex justify-center items-center">

                <div className="absolute inset-0 bg-black/60 z-0" />

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
                    className="z-10 text-center px-4"
                >
                    <motion.p className="font-bold text-xl leading-[80px] max-md:leading-[40px] md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                        نبني مستقبلاً رقمياً بأيدي سورية <br />
                        معًا نرتقي بمجتمع البرمجة نحو الإبداع والتطور.
                    </motion.p>

                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <Link href="/" className="cursor-pointer px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white rounded-full relative mt-4">
                            <span>عن المبادرة</span>
                            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </Link>

                        <Link href="/" className="md:hidden cursor-pointer px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white rounded-full relative mt-4">
                            <span>انضم الان</span>
                            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
