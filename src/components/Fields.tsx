import Image from 'next/image';
import React from 'react'




const fields = [
    { title: "تطوير مواقع الويب", image: "/fields/fields9.jpg", id: 1 },
    { title: "تطوير تطبيقات الهاتف المحمول", image: "/fields/fields10.jpg", id: 2 },
    { title: "الذكاء الاصطناعي وتعلم الآلة", image: "/fields/fields12.jpg", id: 3 },
    { title: "تحليل البيانات وعلم البيانات", image: "/fields/fields7.jpg", id: 4 },
    { title: "الامن السيبراني وحماية المعلومات", image: "/fields/fields4.jpg", id: 5 },
    { title: "برمجة الألعاب والتجارب التفاعلية", image: "/fields/fields5.jpg", id: 6 },
    { title: "الخوارزميات وهياكل البيانات", image: "/fields/fields1.jpg", id: 7 },
    { title: "الحوسبة السحابية والخدمات الرقمية", image: "/fields/fields6.jpg", id: 8 },
    { title: "الروبوتات وإنترنت الأشياء (IoT)", image: "/fields/fields3.jpg", id: 9 },

];

export default function Fields() {
    return (
        <section className='bg-white pt-1 pb-12'>
            <div className='mt-[100px] mx-[50px] flex flex-col items-center justify-center'>
                <h2 className='text-[40px] text-[#003812] font-bold mb-6'>مجالاتنا</h2>
                <p className='text-[18px] text-gray-700 max-w-2xl text-center mb-8'>
                    نعمل في مجالات متعددة لتلبية احتياجات مجتمع المبرمجين والمبدعين السوريين.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[160px] gap-y-4 justify-center mt-8'>

                    {fields.map(({ title, image, id }) => (
                        <div
                            key={id}
                            className="group relative flex flex-col items-center justify-between gap-5 p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100  rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out max-w-[280px] min-h-[320px] cursor-pointer overflow-hidden "
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 w-[220px] h-[180px] rounded-lg overflow-hidden shadow-lg ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
                                <Image
                                    width={220}
                                    height={180}
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                                <h3 className="text-xl font-bold text-[#003812] group-hover:text-[#004d18] transition-colors duration-300 leading-tight px-2">
                                    {title}
                                </h3>

                                <div className="w-12 h-0.5 bg-gradient-to-r from-[#003812] to-green-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                            </div>

                            <div className="absolute top-3 right-3 w-6 h-6 bg-[#003812]/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-[#003812] rounded-full"></div>
                            </div>

                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 via-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                        </div>

                    ))}

                </div>

            </div>
        </section>
    )
}
