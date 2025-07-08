"use client"

import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LaserEffectivenessPage() {
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
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">فعالية اجهزة الليزر في علاج الشخير</h1>
              <p className="text-gray-700 text-lg mb-4">تستعرض هذه الصفحة نتائج الدراسات العلمية حول استخدام الليزر في علاج الشخير واضطرابات النوم.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>تشير الأبحاث الحديثة إلى أن العلاج بالليزر يُعد من الخيارات الفعالة وغير الجراحية لعلاج الشخير. يعمل الليزر على شد الأنسجة الرخوة في سقف الحلق، مما يقلل من الاهتزازات المسببة للشخير.</p>
                <p>أظهرت دراسة نُشرت في مجلة طب النوم أن أكثر من 70% من المرضى لاحظوا تحسنًا ملحوظًا في جودة النوم بعد ثلاث جلسات علاجية بالليزر.</p>
                <p>العلاج بالليزر يتميز بأنه غير مؤلم تقريبًا ولا يتطلب فترة نقاهة طويلة، ويمكن تكراره عند الحاجة.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 