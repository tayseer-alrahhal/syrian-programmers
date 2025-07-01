"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FormValidation } from "@/lib/validation"
import { Bounce, toast, ToastContainer } from "react-toastify"

export default function Suggestions() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [specialization, setSpecialization] = useState("")
    const [ideaTitle, setIdeaTitle] = useState("")
    const [subject, setSubject] = useState("")
    const [loading, setLoading] = useState(false);


    const formData = {
        fullName,
        email,
        specialization,
        ideaTitle,
        subject,
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const validation = FormValidation.safeParse(formData);
        if (!validation.success) {
            return toast.error(validation.error.errors[0].message);
        }

        setLoading(true)

        const res = await fetch('/api/sendemail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            toast.success('تم إرسال الفكرة بنجاح!');
            setLoading(false)
        } else {
            toast.error('فشل الإرسال، حاول مرة أخرى.');
        }
    }

    return (
        <section className="mt-[100px] mx-[50px]">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-[40px] text-[#003812] font-bold mb-6">صندوق الاقتراحات</h2>
                <p className="text-[18px] text-gray-700 max-w-2xl text-center">
                    مساحتك المخصصة لطرح الأفكار التي تساعدنا في تحسين وتطوير المبادرة بشكل مستمر. نقدر مساهمتك ونؤمن أن كل فكرة
                    تساهم في بناء مستقبل أفضل للجميع.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
                    dir="rtl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-[#003812] font-semibold">
                                الاسم بالكامل *
                            </Label>
                            <Input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="text-right border-gray-300 focus:border-[#003812] focus:ring-[#003812]"
                                placeholder="أدخل اسمك الكامل"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-[#003812] font-semibold">
                                البريد الإلكتروني *
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-right border-gray-300 focus:border-[#003812] focus:ring-[#003812]"
                                placeholder="example@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="specialization" className="text-[#003812] font-semibold">
                            الاختصاص *
                        </Label>
                        <Input
                            id="specialization"
                            name="specialization"
                            type="text"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                            className="text-right border-gray-300 focus:border-[#003812] focus:ring-[#003812]"
                            placeholder="أدخل مجال اختصاصك"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="ideaTitle" className="text-[#003812] font-semibold">
                            عنوان الفكرة *
                        </Label>
                        <Input
                            id="ideaTitle"
                            name="ideaTitle"
                            type="text"
                            value={ideaTitle}
                            onChange={(e) => setIdeaTitle(e.target.value)}
                            className="text-right border-gray-300 focus:border-[#003812] focus:ring-[#003812]"
                            placeholder="عنوان مختصر وواضح للفكرة"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject" className="text-[#003812] font-semibold">
                            الموضوع *
                        </Label>
                        <Textarea
                            id="subject"
                            name="subject"
                            rows={6}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="text-right border-gray-300 focus:border-[#003812] focus:ring-[#003812] resize-none"
                            placeholder="اشرح فكرتك بالتفصيل، وكيف يمكن أن تساهم في تطوير المبادرة..."
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <Button
                            type="submit"
                            disabled={loading}
                            className={`w-fit py-6 rounded font-medium flex items-center justify-center transition text-white text-sm xl:text-base
                                ${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-900 hover:bg-[#BB2D34] cursor-pointer"
                                }`}
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        ></path>
                                    </svg>
                                    جاري الإرسال...
                                </>
                            ) : (
                                <>
                                    إرسال الاقتراح
                                </>
                            )}
                        </Button>

                    </div>
                </form>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </section>
    )
}
