"use client"

import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function MiscStudiesPage() {
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
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">دراسات متفرقة حول اضطرابات النوم</h1>
              <p className="text-gray-700 text-lg mb-4">مجموعة من الدراسات المتنوعة حول أسباب وعلاج اضطرابات النوم والشخير.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>تتناول هذه الصفحة ملخصات لأحدث الدراسات حول اضطرابات النوم، بما في ذلك تأثير نمط الحياة، التغذية، والعوامل الوراثية على جودة النوم.</p>
                <p>تشير بعض الدراسات إلى أن تحسين نمط الحياة مثل تقليل الوزن، ممارسة الرياضة، وتجنب المنبهات قبل النوم يمكن أن يساهم في تقليل الشخير وتحسين النوم.</p>
                <p>كما تستعرض الصفحة أبحاثًا حول العلاجات المبتكرة والتقنيات الحديثة في تشخيص وعلاج اضطرابات النوم.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 