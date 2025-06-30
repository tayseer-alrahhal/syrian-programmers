"use client";
import { motion } from "motion/react";
import React from "react";
import Link from 'next/link'
import Image from "next/image";

export default function HeroT() {

    return (
        <section className="mt-[100px] mx-[50px]">
            <div className=" relative flex max-md:flex-col justify-center items-center gap-10">

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
                        duration: 0.8,
                    }}
                >
                    <Image
                        src="/code.svg"
                        alt="مبادرة باسل الصفدي"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover object-center"
                        priority
                    />
                </motion.div>


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
                        duration: 0.8,
                    }}
                    className="z-10 text-center px-4"
                >
                    <motion.p className="font-bold text-2xl leading-[65px] max-md:leading-[40px] md:text-left md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-green-800 py-4">
                        نبني مستقبلاً رقمياً بأيدي سورية
                        معًا نرتقي بمجتمع البرمجة نحو الإبداع والتطور.
                    </motion.p>

                    <div className="flex flex-wrap items-center gap-4 max-md:justify-center md:justify-end">
                        <Link
                            href="/"
                            className="cursor-pointer px-4 py-2 backdrop-blur-sm border bg-emerald-600/10 border-emerald-600 text-emerald-700 font-medium rounded-full relative mt-4 hover:bg-emerald-600/20 transition-colors duration-300"
                        >
                            <span>عن المبادرة</span>
                            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-600 to-transparent" />
                        </Link>

                        <Link
                            href="/"
                            className="cursor-pointer px-4 py-2 backdrop-blur-sm border bg-emerald-500/10 border-emerald-500 text-emerald-700 font-medium rounded-full relative mt-4 hover:bg-emerald-500/20 transition-colors duration-300"
                        >
                            <span>انضم الآن</span>
                            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
