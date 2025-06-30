"use client";

import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup';


const stats = [
    { label: "عدد المشتركين", value: 3761, image: "/vision/vision1.png", id: 1 },
    { label: "المشاريع", value: 125, image: "/vision/vision2.png", id: 2 },
    { label: "برامجنا التدريبية", value: 155, image: "/vision/vision3.png", id: 3 },
    { label: "شركاؤنا", value: 1678, image: "/vision/vision4.png", id: 4 },
];

export default function OurVision() {



    return (
        <section className='mt-[100px] mx-[50px]'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-[40px] font-bold text-center mb-6'>رؤيتنا في المبادرة</h2>
                <p className='text-[18px] text-gray-700 max-w-2xl text-center'>
                    نحو تمكين جيل من المبرمجين والمبدعين السوريين لقيادة مستقبل رقمي حر، مفتوح ومزدهر يخدم الإنسان والمجتمع.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[160px] gap-y-4 justify-center mt-8">
                    {stats.map(({ label, value, image, id }) => (
                        <div key={id} className="flex flex-col items-center justify-center gap-6 p-6">
                            <Image
                                width={100}
                                height={100}
                                alt="Our Vision"
                                src={image}
                                className="w-[200px] h-[200px] object-contain"
                            />
                            <h3 className="text-[24px] font-[600]">{label}</h3>
                            {/* <span className="text-[40px] font-[600]">{value}</span> */}
                            <CountUp className='text-[40px] font-[600]' end={value} duration={2} enableScrollSpy scrollSpyOnce separator="," />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
