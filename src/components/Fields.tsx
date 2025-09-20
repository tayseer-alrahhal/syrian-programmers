"use client";
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

const fields = [
    {
        title: "تطوير مواقع الويب",
        image: "/fields/fields9.jpg",
        id: 1,
        description: "تطوير مواقع ويب حديثة ومتجاوبة باستخدام أحدث التقنيات",
        icon: "🌐"
    },
    {
        title: "تطوير تطبيقات الهاتف المحمول",
        image: "/fields/fields10.jpg",
        id: 2,
        description: "تطوير تطبيقات محمولة متقدمة لأنظمة iOS و Android",
        icon: "📱"
    },
    {
        title: "الذكاء الاصطناعي وتعلم الآلة",
        image: "/fields/fields12.jpg",
        id: 3,
        description: "بناء نماذج ذكية وحلول تعلم آلة متطورة",
        icon: "🤖"
    },
    {
        title: "تحليل البيانات وعلم البيانات",
        image: "/fields/fields7.jpg",
        id: 4,
        description: "استخراج الرؤى القيمة من البيانات الضخمة",
        icon: "📊"
    },
    {
        title: "الأمن السيبراني وحماية المعلومات",
        image: "/fields/fields4.jpg",
        id: 5,
        description: "حماية الأنظمة والشبكات من التهديدات السيبرانية",
        icon: "🔒"
    },
    {
        title: "برمجة الألعاب والتجارب التفاعلية",
        image: "/fields/fields5.jpg",
        id: 6,
        description: "إنشاء ألعاب وتجارب تفاعلية مبتكرة",
        icon: "🎮"
    },
    {
        title: "الخوارزميات وهياكل البيانات",
        image: "/fields/fields1.jpg",
        id: 7,
        description: "تصميم خوارزميات فعالة وحلول برمجية محسنة",
        icon: "⚙️"
    },
    {
        title: "الحوسبة السحابية والخدمات الرقمية",
        image: "/fields/fields6.jpg",
        id: 8,
        description: "تطوير حلول سحابية وخدمات رقمية متقدمة",
        icon: "☁️"
    },
    {
        title: "الروبوتات وإنترنت الأشياء (IoT)",
        image: "/fields/fields3.jpg",
        id: 9,
        description: "تطوير أنظمة روبوتية وحلول إنترنت الأشياء",
        icon: "🔧"
    },
];

export default function Fields() {
    return (
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-[#003812] mb-6"
                    >
                        مجالاتنا
                        <span className="block w-24 h-1 bg-gradient-to-r from-[#003812] to-green-500 mx-auto mt-4 rounded-full"></span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        نعمل في مجالات متعددة ومتخصصة لتلبية احتياجات مجتمع المبرمجين والمبدعين السوريين،
                        مع التركيز على أحدث التقنيات والمعايير العالمية.
                    </motion.p>
                </div>

                {/* Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fields.map(({ title, image, id, description, icon }, index) => (
                        <motion.div
                            key={id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            className="group relative cursor-pointer"
                        >
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-gray-100 hover:border-[#003812]/20 h-full">
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        width={400}
                                        height={192}
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                    {/* Icon Overlay */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">{icon}</span>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-[#003812]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-3xl">{icon}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#003812] mb-3 group-hover:text-[#004d18] transition-colors duration-300 leading-tight">
                                        {title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {description}
                                    </p>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-[#003812] to-green-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">هل تريد الانضمام إلى مجتمعنا؟</h3>
                        <p className="text-lg opacity-90 mb-6">
                            انضم إلى آلاف المبرمجين السوريين المبدعين وابدأ رحلتك في عالم البرمجة
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-[#003812] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                        >
                            ابدأ الآن
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}