import React from 'react'


export default function Footer() {

    const getCurrentYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <footer
            className='mt-[100px] m-2 w-[98%] mx-auto rounded-lg bg-gradient-to-b from-[#0f1018] via-[#171927] to-[#222430] py-8'>
            <div className='mx-[50px] flex flex-col items-center justify-center text-center text-white gap-20'>
                <div className='flex max-md:flex-col items-center justify-center gap-10'>
                    <h2>باب الانضمام إلى المبادرة مفتوح الآن — شاركنا رحلتنا نحو التميّز.</h2>
                    <div className="hidden lg:block">
                        <a href="#" className="bg-green-900  text-white px-4 py-2 rounded hover:bg-[#BB2D34] transition duration-300 text-sm xl:text-base">انضم إلينا</a>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-around w-full gap-10'>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-5">سياساتنا الرسمية</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-green-400 transition">سياسة الخصوصية</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">سياسة ملفات تعريف الارتباط</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">الشروط والأحكام</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">سياسة الاسترداد</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">البيان التأسيسي</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-5">روابط الموقع</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-green-400 transition">الصفحة الرئيسية</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">من نحن</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">المشاريع</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">المدونة</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">تواصل معنا</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-5">تابعنا عبر المنصات</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-green-400 transition">انستاغرام</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">فيسبوك</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">أكس</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">تيليغرام</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">لينكد اين</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p className="text-sm mt-10">
                        حقوق النشر محفوظة
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-600 transition-colors mx-1"
                        >
                            مبادرة باسل الصفدي
                        </a>
                        &copy; {getCurrentYear()}
                        <span className="mx-1">|</span>
                        Powered by
                        <a
                            href="https://www.instagram.com/zaitonaid/?hl=ar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-600 transition-colors ml-1"
                        >
                            Zaitona
                        </a>
                        .
                    </p>

                </div>
            </div>
        </footer>
    )
}
