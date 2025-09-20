"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-[#F6F9FB]">
            <Header />

            {/* Hero Section */}
            <section className="mt-[100px] max-md:h-[40%]">
                <div className="h-[40rem] bg-[url('/basel.jpg')] bg-cover bg-center bg-no-repeat relative flex justify-center items-center">
                    <div className="absolute inset-0 bg-black/60 z-0" />

                    <motion.div
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="z-10 text-center px-4"
                    >
                        <motion.h1 className="font-bold text-xl leading-[80px] max-md:leading-[40px] md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                            من نحن
                        </motion.h1>
                        <motion.p className="text-white text-lg md:text-xl max-w-3xl mx-auto mt-4">
                            مبادرة باسل الصفدي - نبني مستقبلاً رقمياً بأيدي سورية
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mt-[100px] mx-[50px]">
                <motion.div
                    className="flex flex-col items-center justify-center gap-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-[40px] text-[#003812] font-bold text-center mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        مهمتنا ورؤيتنا
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-[#003812] mb-4">رؤيتنا</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                نحو تمكين جيل من المبرمجين والمبدعين السوريين لقيادة مستقبل رقمي حر، مفتوح ومزدهر يخدم الإنسان والمجتمع. نطمح لأن نكون الرائدين في بناء مجتمع تقني متكامل يثري الوطن العربي بالابتكار والتميز التقني.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold text-[#003812] mb-4">مهمتنا</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                نعمل على تطوير مهارات البرمجة والتقنية لدى الشباب السوري من خلال برامج تدريبية متخصصة، مشاريع تطبيقية، وفرص عمل حقيقية. نسعى لبناء جسر يربط بين المواهب السورية والفرص العالمية في مجال التكنولوجيا.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="mt-[100px] mx-[50px]">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-[40px] text-[#003812] font-bold text-center mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        قصتنا
                    </motion.h2>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold text-[#003812] mb-6">كيف بدأت رحلتنا</h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    انطلقت مبادرة باسل الصفدي من إيمان عميق بقدرة الشباب السوري على الإبداع والتميز في مجال التكنولوجيا. بدأت كفكرة بسيطة لمساعدة مجموعة من الطلاب على تعلم البرمجة، وتطورت لتصبح منصة شاملة تخدم آلاف المطورين والمطورات.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    اليوم، نحن فخورون بما حققناه من إنجازات وما زلنا نعمل بجد لتحقيق المزيد من الأهداف التي تخدم مجتمعنا التقني.
                                </p>
                            </motion.div>

                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-lg">
                                    <h4 className="text-xl font-bold text-[#003812] mb-4">إنجازاتنا الرئيسية</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                            أكثر من 3,700 مبرمج ومبرمجة
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                            أكثر من 125 مشروع تطبيقي
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                            أكثر من 155 برنامج تدريبي
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                            شبكة من 1,678 شريك ومؤسسة
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="mt-[100px] mx-[50px]">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-[40px] text-[#003812] font-bold text-center mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        قيمنا ومبادئنا
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "التميز التقني",
                                description: "نسعى لتحقيق أعلى معايير الجودة في كل ما نقدمه من برامج ومشاريع",
                                icon: "💻"
                            },
                            {
                                title: "التعاون والشراكة",
                                description: "نؤمن بقوة العمل الجماعي وبناء شبكات من العلاقات المثمرة",
                                icon: "🤝"
                            },
                            {
                                title: "الابتكار المستمر",
                                description: "نحفز الإبداع ونشجع على التفكير خارج الصندوق",
                                icon: "💡"
                            },
                            {
                                title: "الانتماء الوطني",
                                description: "نعمل من أجل خدمة المجتمع السوري والعربي بكل إخلاص",
                                icon: "🇸🇾"
                            },
                            {
                                title: "التعلم المستمر",
                                description: "نؤمن بأن التعلم رحلة مستمرة لا تنتهي",
                                icon: "📚"
                            },
                            {
                                title: "الشفافية والوضوح",
                                description: "نلتزم بالشفافية الكاملة في جميع أعمالنا وعلاقاتنا",
                                icon: "🔍"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-[#003812] mb-3">{value.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Founder Section */}
            <section className="mt-[100px] mx-[50px]">
                <motion.div
                    className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-[40px] text-[#003812] font-bold text-center mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        مؤسس المبادرة
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="text-center lg:text-right"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold text-[#003812] mb-4">باسل الصفدي</h3>
                            <p className="text-lg text-gray-600 mb-4">مؤسس ورئيس مبادرة باسل الصفدي</p>
                            <p className="text-gray-700 leading-relaxed">
                                رائد في مجال التكنولوجيا والبرمجة، يحمل رؤية واضحة لتطوير المجتمع التقني السوري.
                                بدأ رحلته في عالم البرمجة منذ سنوات عديدة، وقرر أن يشارك معرفته وخبرته مع الآخرين
                                من خلال إنشاء هذه المبادرة التي تهدف إلى تمكين الشباب السوري في مجال التكنولوجيا.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="mt-[100px] flex justify-center">
                <motion.div
                    className="w-[97%] bg-gradient-to-b from-[#0f1018] via-[#171927] to-[#222430] rounded-lg p-12 text-center text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        انضم إلى رحلتنا نحو التميز
                    </motion.h2>

                    <motion.p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        سواء كنت مبتدئاً في البرمجة أو مطوراً محترفاً، لديك مكان في مجتمعنا.
                        انضم إلينا اليوم وكن جزءاً من مستقبل التكنولوجيا في سوريا.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <a
                            href="#"
                            className="bg-green-900 text-white px-8 py-3 rounded-lg hover:bg-[#BB2D34] transition duration-300 text-lg font-semibold inline-block"
                        >
                            انضم إلينا الآن
                        </a>
                    </motion.div>
                </motion.div>
            </section>


            <Footer />
        </div>
    );
}
