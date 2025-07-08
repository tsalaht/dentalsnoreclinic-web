"use client"

import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function MuscleExercisesEffectivenessPage() {
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
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">فعالية التمارين العضلية في علاج اضطرابات النوم</h1>
              <p className="text-gray-700 text-lg mb-4">تستعرض هذه الصفحة نتائج الدراسات حول دور التمارين العضلية في تحسين التنفس أثناء النوم.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>تشير الأبحاث إلى أن تمارين تقوية عضلات الفم والحلق (التمارين العضلية) تساهم في تقليل الشخير وتحسين جودة النوم.</p>
                <p>دراسة حديثة أظهرت أن ممارسة التمارين العضلية لمدة 3 أشهر أدت إلى انخفاض ملحوظ في شدة الشخير لدى 60% من المشاركين.</p>
                <p>تعتبر التمارين العضلية خيارًا غير جراحي وآمن يمكن دمجه مع العلاجات الأخرى لتحقيق أفضل النتائج.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 