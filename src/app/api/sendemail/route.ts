import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { FormValidation } from "@/lib/validation"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { fullName, email, specialization, ideaTitle, subject } = body

        const validation = FormValidation.safeParse({ fullName, email, specialization, ideaTitle, subject })
        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 })
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `اقتراح جديد: ${ideaTitle}`,
            html: `
    <div style="
      font-family: 'IBM Plex Sans Arabic', sans-serif;
      max-width: 650px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
    ">
      <!-- Header -->
      <div style="
        background-color: #1f2937;
        padding: 25px 30px;
        border-bottom: 3px solid #3b82f6;
      ">
        <h1 style="
          color: #ffffff;
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0.3px;
        ">
          اقتراح جديد
        </h1>
        <p style="
          color: #d1d5db;
          margin: 5px 0 0 0;
          font-size: 14px;
          font-weight: 400;
        ">
          تم استلام اقتراح جديد من النظام
        </p>
      </div>

      <!-- Content -->
      <div style="padding: 30px;">
        
        <!-- Sender Information -->
        <div style="margin-bottom: 25px;">
          <h3 style="
            color: #374151;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #f3f4f6;
          ">معلومات المرسل</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="
                padding: 12px 15px;
                background-color: #f9fafb;
                border: 1px solid #e5e7eb;
                font-weight: 600;
                color: #374151;
                width: 120px;
                vertical-align: top;
              ">الاسم الكامل</td>
              <td style="
                padding: 12px 15px;
                background-color: #ffffff;
                border: 1px solid #e5e7eb;
                color: #6b7280;
              ">${fullName}</td>
            </tr>
            <tr>
              <td style="
                padding: 12px 15px;
                background-color: #f9fafb;
                border: 1px solid #e5e7eb;
                font-weight: 600;
                color: #374151;
                vertical-align: top;
              ">البريد الإلكتروني</td>
              <td style="
                padding: 12px 15px;
                background-color: #ffffff;
                border: 1px solid #e5e7eb;
                color: #6b7280;
              ">${email}</td>
            </tr>
            <tr>
              <td style="
                padding: 12px 15px;
                background-color: #f9fafb;
                border: 1px solid #e5e7eb;
                font-weight: 600;
                color: #374151;
                vertical-align: top;
              ">التخصص</td>
              <td style="
                padding: 12px 15px;
                background-color: #ffffff;
                border: 1px solid #e5e7eb;
                color: #6b7280;
              ">${specialization}</td>
            </tr>
          </table>
        </div>

        <!-- Idea Details -->
        <div style="margin-bottom: 25px;">
          <h3 style="
            color: #374151;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #f3f4f6;
          ">تفاصيل الاقتراح</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="
                padding: 12px 15px;
                background-color: #f9fafb;
                border: 1px solid #e5e7eb;
                font-weight: 600;
                color: #374151;
                width: 120px;
                vertical-align: top;
              ">عنوان الفكرة</td>
              <td style="
                padding: 12px 15px;
                background-color: #ffffff;
                border: 1px solid #e5e7eb;
                color: #374151;
                font-weight: 500;
              ">${ideaTitle}</td>
            </tr>
          </table>
        </div>

        <!-- Message Content -->
        <div style="margin-bottom: 25px;">
          <h3 style="
            color: #374151;
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #f3f4f6;
          ">محتوى الرسالة</h3>
          
          <div style="
            background-color: #f9fafb;
            border: 1px solid #e5e7eb;
            padding: 20px;
            border-radius: 6px;
            min-height: 120px;
          ">
            <p style="
              color: #374151;
              margin: 0;
              font-size: 15px;
              line-height: 1.6;
              white-space: pre-wrap;
            ">${subject}</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
        ">
          <p style="
            color: #9ca3af;
            margin: 0;
            font-size: 12px;
            line-height: 1.4;
          ">
            تم إرسال هذه الرسالة تلقائياً من نظام إدارة الاقتراحات<br>
            تاريخ الإرسال: ${new Date().toLocaleString('ar-SA', {
                timeZone: 'Asia/Riyadh',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
          </p>
        </div>

      </div>
    </div>
                `,
        };


        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: "تم الإرسال بنجاح" }, { status: 200 })
    } catch (error) {
        console.error("Send Email Error:", error)
        return NextResponse.json({ message: "فشل إرسال البريد" }, { status: 500 })
    }
}
