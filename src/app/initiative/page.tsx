"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Initiative() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="mt-[100px] relative">
                    <div className="h-[30rem] bg-[url('/fields/fields1.jpg')] bg-cover bg-center bg-no-repeat relative flex justify-center items-center">
                        <div className="absolute inset-0 bg-black/60 z-0" />
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="z-10 text-center px-4 max-w-4xl"
                        >
                            <h1 className="font-bold text-3xl md:text-5xl text-white mb-6">مبادرة المبرمجين السوريين</h1>
                            <p className="text-lg md:text-xl text-gray-200 mb-8">
                                نسعى لبناء مجتمع برمجي سوري متكامل يدعم المواهب ويطور المهارات ويفتح آفاق المستقبل
                            </p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <Link href="#about" className="cursor-pointer px-6 py-3 backdrop-blur-sm border bg-emerald-500/20 border-emerald-500/40 text-white rounded-full relative hover:bg-emerald-500/30 transition-colors duration-300">
                                    <span>تعرف على المبادرة</span>
                                    <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* About Initiative Section */}
                <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">عن المبادرة</h2>
                            <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    تهدف مبادرة المبرمجين السوريين إلى بناء مجتمع برمجي متكامل يجمع المبرمجين السوريين من مختلف الخبرات والتخصصات، ويوفر لهم بيئة تعليمية وتطويرية متميزة تساعدهم على تنمية مهاراتهم وتطوير قدراتهم البرمجية.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    نسعى من خلال هذه المبادرة إلى تعزيز التعاون بين المبرمجين السوريين وتبادل الخبرات والمعارف، وإيجاد فرص عمل وتدريب للمبرمجين الشباب، وتشجيع الإبداع والابتكار في مجال البرمجة والتقنية.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"
                            >
                                <Image
                                    src="/fields/fields2.jpg"
                                    alt="مبادرة المبرمجين السوريين"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أهداف المبادرة</h2>
                            <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "بناء مجتمع برمجي",
                                    description: "تأسيس مجتمع برمجي سوري متكامل يجمع المبرمجين من مختلف التخصصات والخبرات",
                                    icon: "🌐"
                                },
                                {
                                    title: "تطوير المهارات",
                                    description: "توفير فرص تعليمية وتدريبية لتطوير مهارات المبرمجين السوريين وتحسين قدراتهم",
                                    icon: "💻"
                                },
                                {
                                    title: "دعم المشاريع",
                                    description: "تقديم الدعم للمشاريع البرمجية السورية وتشجيع الابتكار والإبداع في مجال التقنية",
                                    icon: "🚀"
                                },
                                {
                                    title: "تبادل الخبرات",
                                    description: "إتاحة الفرصة لتبادل الخبرات والمعارف بين المبرمجين من مختلف المستويات",
                                    icon: "🔄"
                                },
                                {
                                    title: "فرص عمل",
                                    description: "المساعدة في إيجاد فرص عمل للمبرمجين السوريين وربطهم بسوق العمل المحلي والعالمي",
                                    icon: "💼"
                                },
                                {
                                    title: "مواكبة التطور",
                                    description: "مساعدة المبرمجين السوريين على مواكبة أحدث التقنيات والتطورات في عالم البرمجة",
                                    icon: "📈"
                                }
                            ].map((goal, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="text-4xl mb-4">{goal.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{goal.title}</h3>
                                    <p className="text-gray-600">{goal.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join Us Section */}
                <section className="py-20 px-4 md:px-8 lg:px-16 bg-emerald-700 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">انضم إلى مبادرتنا</h2>
                                <p className="text-lg mb-8 text-emerald-100">
                                    نرحب بانضمام جميع المبرمجين السوريين من مختلف المستويات والتخصصات للمشاركة في مبادرتنا وتحقيق أهدافنا المشتركة.
                                </p>
                                <Link href="#" className="inline-block px-8 py-3 bg-white text-emerald-700 font-bold rounded-full hover:bg-emerald-100 transition-colors duration-300">
                                    انضم الآن
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"
                            >
                                <Image
                                    src="/fields/fields5.jpg"
                                    alt="انضم إلى مبادرة المبرمجين السوريين"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
