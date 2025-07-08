"use client"

import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function OralDevicesEffectivenessPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <section className="py-20 bg-gradient-to-l from-blue-50 to-teal-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Link href="/scientific-studies" className="text-primary hover:underline">← العودة للدراسات العلمية</Link>
          </div>
          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">فعالية الأجهزة الفموية في علاج اضطرابات النوم</h1>
              <p className="text-gray-700 text-lg mb-4">تستعرض هذه الصفحة نتائج الدراسات حول استخدام الأجهزة الفموية في علاج الشخير وانقطاع التنفس أثناء النوم.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>تُظهر الدراسات أن الأجهزة الفموية المخصصة تساعد في إبقاء مجرى الهواء مفتوحًا أثناء النوم، مما يقلل من الشخير ويحسن جودة النوم.</p>
                <p>في دراسة سريرية، أبلغ 80% من المرضى عن تحسن ملحوظ في الأعراض بعد استخدام الأجهزة الفموية لمدة 6 أسابيع.</p>
                <p>تتميز الأجهزة الفموية بسهولة الاستخدام وفعاليتها السريعة، وتعتبر خيارًا مناسبًا للمرضى الذين لا يفضلون العلاجات الجراحية.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 