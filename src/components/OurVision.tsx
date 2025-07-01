"use client";

import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
    { label: "عدد المشتركين", value: 3761, image: "/vision/vision1.png", id: 1 },
    { label: "المشاريع", value: 125, image: "/vision/vision2.png", id: 2 },
    { label: "برامجنا التدريبية", value: 155, image: "/vision/vision3.png", id: 3 },
    { label: "شركاؤنا", value: 1678, image: "/vision/vision4.png", id: 4 },
];

export default function OurVision() {
    return (
        <section className='mt-[100px] mx-[50px]'>
            <motion.div
                className='flex flex-col items-center justify-center gap-2'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className='text-[40px] text-[#003812] font-bold text-center mb-6'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    رؤيتنا في المبادرة
                </motion.h2>
                <motion.p
                    className='text-[18px] text-gray-700 max-w-2xl text-center'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    نحو تمكين جيل من المبرمجين والمبدعين السوريين لقيادة مستقبل رقمي حر، مفتوح ومزدهر يخدم الإنسان والمجتمع.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[160px] gap-y-4 justify-center mt-8">
                    {stats.map(({ label, value, image, id }, idx) => (
                        <motion.div
                            key={id}
                            className="flex flex-col items-center justify-center gap-6 p-6"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
                        >
                            <Image
                                width={100}
                                height={100}
                                alt="Our Vision"
                                src={image}
                                className="w-[200px] h-[200px] object-contain"
                            />
                            <h3 className="text-[24px] font-[600]">{label}</h3>
                            <CountUp className='text-[40px] font-[600]' end={value} duration={2} enableScrollSpy scrollSpyOnce separator="," />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
