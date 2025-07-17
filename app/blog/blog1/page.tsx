"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function BlogDetail() {
  const [comment, setComment] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle comment submission logic here
    console.log("Comment:", comment, "Email:", email)
    setComment("")
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="mb-8">
            <Link href="/blog" className="text-primary hover:underline">← العودة للمدونة</Link>
          </div>
          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <img src="/blog1.jpg" alt="علاج الشخير في الأردن" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">علاج الشخير في الأردن: دليل شامل لحلول فعالة</h1>
              <p className="text-primary/90 text-lg mb-4">إذا كنت تعاني من الشخير المزعج، فأنت لست وحدك. الشخير مشكلة شائعة تؤثر على جودة النوم والحياة اليومية. في هذا المقال، سنستعرض أفضل طرق علاج الشخير في الأردن، بما في ذلك العيادات المتخصصة والعلاجات المتاحة.</p>
              <div className="text-primary/90 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ما هو الشخير؟</h2>
                <p>الشخير هو صوت مزعج يحدث نتيجة لاهتزاز الأنسجة في الحلق والأنف بسبب انسداد جزئي في مجرى الهواء أثناء النوم. قد يكون الشخير عرضًا لمشكلة صحية أكبر مثل انقطاع النفس الانسدادي النومي (OSA).</p>
                
                <h2 className="text-2xl font-semibold">أسباب الشخير</h2>
                <ul className="list-disc pr-6">
                  <li>زيادة الوزن: تراكم الدهون حول الرقبة والحلق.</li>
                  <li>التهاب الجيوب الأنفية: انسداد الأنف بسبب الحساسية أو البرد.</li>
                  <li>تشوهات في الأنف أو الحلق: مثل انحراف الحاجز الأنفي.</li>
                  <li>النوم على الظهر: يؤدي إلى سقوط اللسان للخلف وإعاقة التنفس.</li>
                  <li>التقدم في العمر: تراخي عضلات الحلق مع التقدم في السن.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">نصائح للوقاية من الشخير</h2>
                <ul className="list-disc pr-6">
                  <li>مارس التمارين الرياضية بانتظام.</li>
                  <li>تجنب التدخين والكحول.</li>
                  <li>علاج الحساسية والتهابات الجيوب الأنفية.</li>
                  <li>النوم على الجنب بدلًا من الظهر.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">علاج الشخير في الأردن</h2>
                <p>في الأردن، توجد العديد من الخيارات المتاحة لعلاج الشخير، سواء من خلال العلاجات الطبية أو الطبيعية. إليك أبرز الطرق:</p>
                
                <h3 className="text-xl font-semibold">1. العلاجات الطبية</h3>
                <ul className="list-disc pr-6">
                  <li>أجهزة الضغط الهوائي الإيجابي (CPAP): تُستخدم لعلاج انقطاع النفس الانسدادي النومي.</li>
                  <li>أجهزة الفم: لتحريك الفك أو اللسان للأمام لفتح مجرى الهواء.</li>
                  <li>الجراحة: لتصحيح التشوهات الهيكلية في الأنف أو الحلق.</li>
                </ul>
                
                <h3 className="text-xl font-semibold">2. العلاجات الطبيعية</h3>
                <ul className="list-disc pr-6">
                  <li>فقدان الوزن: إذا كان الوزن الزائد هو السبب.</li>
                  <li>تغيير وضعية النوم: النوم على الجنب بدلًا من الظهر.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>إذا كنت تعاني من الشخير أو اضطرابات التنفس أثناء النوم، فإن علاج الشخير في الأردن متاح بسهولة من خلال العيادات المتخصصة. تواصل مع “مركز الأردن لعلاج الشخير واضطرابات النوم“ اليوم لحجز استشارة وبدء رحلة العلاج.</p>
                
                <p className="text-sm italic">بقلم الدكتور مهند الكسواني</p>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">شارك بتعليقك</h2>
                <p className="text-sm text-primary/80 mb-4">لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *</p>
                <div className="space-y-4">
                  <textarea
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="5"
                    placeholder="تعليق *"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  ></textarea>
                  <input
                    type="email"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="البريد الإلكتروني *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    إرسال التعليق
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}