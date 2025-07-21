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
              <img src="/blog12.jpg" alt="أسباب الشخير" className="w-full h-auto object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">ما هي أسباب الشخير وكيف يمكن التعامل معه؟</h1>
              <p className="text-gray-700 text-lg mb-4">تعرف على أسباب الشخير، من الخلل التشريحي إلى العوامل الحياتية، واكتشف الطرق الفعالة لعلاجه وتحسين جودة النوم.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ما هو الشخير؟</h2>
                <p>الشخير هو صوت أجش ينتج عن ارتخاء أنسجة الحلق أثناء النوم، مما يتسبب في اهتزازها عند مرور الهواء. قد يكون الشخير عارضًا مؤقتًا أو مزمنًا، وتختلف حدته من خفيف إلى مزعج يؤثر على من يشاركون الغرفة.</p>
                
                <h2 className="text-2xl font-semibold">أسباب الإصابة بالشخير</h2>
                <p>يحدث الشخير عندما ترتخي عضلات وأنسجة الحلق بشكل زائد، مما يضيق المجرى الهوائي ويسبب اهتزاز الأنسجة. تشمل الأسباب الرئيسية:</p>
                <ul className="list-disc pr-6">
                  <li>وجود تاريخ عائلي للشخير أو انقطاع النفس الإنسدادي النومي.</li>
                  <li>خلل تشريحي في الفم أو الحلق، مثل انخفاض الحنك الرخو أو زيادة طول اللهاة.</li>
                  <li>مشكلات الأنف، مثل احتقان الأنف المزمن أو انحراف الحاجز الأنفي.</li>
                  <li>الإفراط في تناول الكحوليات قبل النوم، مما يزيد ارتخاء أنسجة الحلق.</li>
                  <li>السمنة المفرطة وزيادة الوزن.</li>
                  <li>قلة النوم أو اضطرابات النوم بشكل عام.</li>
                  <li>وضعيات نوم خاطئة، مثل النوم على الظهر، التي تضيق الممرات الهوائية.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">متى يتوجب زيارة الطبيب؟</h2>
                <p>يُنصح باستشارة طبيب إذا ترافق الشخير مع أحد الأعراض التالية:</p>
                <ul className="list-disc pr-6">
                  <li>توقف التنفس أثناء النوم (انقطاع النفس الإنسدادي).</li>
                  <li>الاستيقاظ المتكرر ليلًا.</li>
                  <li>التهاب الحلق المتكرر.</li>
                  <li>الخمول والنعاس أثناء النهار.</li>
                  <li>ضعف الذاكرة وصعوبة التركيز.</li>
                  <li>صداع الرأس عند الاستيقاظ.</li>
                  <li>شخير مرتفع يزعج شريك الغرفة.</li>
                  <li>شخير مستمر كل ليلة عند الأطفال.</li>
                </ul>
                <p>تُشير الدراسات إلى أن الشخير المزمن قد يزيد من مخاطر ارتفاع ضغط الدم، أمراض القلب، والسكتة الدماغية.</p>
                
                <h2 className="text-2xl font-semibold">سبل التشخيص</h2>
                <p>لتشخيص الشخير، يقوم الطبيب بما يلي:</p>
                <ul className="list-disc pr-6">
                  <li>فحص الأعراض والتاريخ الطبي، مع التواصل مع شريك الغرفة لتقييم الحالة.</li>
                  <li>إجراء فحص سريري للفم والحلق والأنف.</li>
                  <li>اختبارات التصوير (الأشعة السينية، التصوير المقطعي، أو الرنين المغناطيسي).</li>
                  <li>دراسات النوم لقياس معدل التنفس، ضربات القلب، نسبة الأكسجين، كهربية الدماغ، حركة العينين، ومراحل النوم.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">علاج الشخير</h2>
                <p>تتضمن خيارات العلاج ما يلي:</p>
                <ul className="list-disc pr-6">
                  <li><strong>تغييرات في نمط الحياة:</strong> إنقاص الوزن، النوم على الجانب، الإقلاع عن التدخين، علاج التهابات الأنف والحلق، والحصول على نوم كافٍ.</li>
                  <li><strong>الأجهزة الفموية:</strong> مثل جبائر الفك السفلي أو أجهزة تثبيت اللسان للحفاظ على مجرى هوائي مفتوح.</li>
                  <li><strong>جهاز ضغط المجرى الهوائي الإيجابي (CPAP):</strong> قناع يضخ هواءً مضغوطًا لإبقاء المجرى الهوائي مفتوحًا، وهو الخيار الأمثل للحالات المتقدمة.</li>
                  <li><strong>الجراحة:</strong> لتصحيح الخلل التشريحي في الفم، الحلق، أو الأنف إذا فشلت الخيارات الأخرى.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>الشخير ناتج عن ارتخاء أنسجة الحلق، وقد يكون بسيطًا أو مزمنًا مرتبطًا بعوامل مثل السمنة، الخلل التشريحي، أو اضطرابات النوم. العلاج يشمل تغييرات في نمط الحياة، الأجهزة الفموية، أجهزة CPAP، أو الجراحة في الحالات الشديدة. استشر طبيبًا إذا كان الشخير مصحوبًا بأعراض مثل توقف التنفس أو النعاس النهاري لتحسين جودة النوم والصحة العامة.</p>
                
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