import { z } from "zod";





export const FormValidation = z.object({
    fullName: z.string()
        .min(1, { message: "يرجى إدخال الاسم الكامل لضمان استكمال البيانات بشكل صحيح." }),

    email: z.string()
        .min(1, { message: "يرجى إدخال عنوان البريد الإلكتروني." })
        .email({ message: "يرجى إدخال بريد إلكتروني صالح وفقًا للمعايير." }),

    specialization: z.string()
        .min(1, { message: "يرجى تحديد الاختصاص الخاص بكم." }),

    ideaTitle: z.string()
        .min(1, { message: "يرجى كتابة عنوان واضح للفكرة المقدمة." }),

    subject: z.string()
        .min(1, { message: "يرجى تحديد موضوع الرسالة بدقة." }),
});
