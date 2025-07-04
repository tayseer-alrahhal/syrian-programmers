import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "مبادرة باسل الصفدي",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={"antialiased"}>

        <Header />

        {children}


      </body>
    </html>
  );
}
