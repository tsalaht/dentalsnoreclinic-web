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
              <img src="/blog5.jpg" alt="أسباب النوم المتقطع" className="w-full h-auto object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">ما هي أسباب النوم المتقطع؟ ومتى يتوجب زيارة الطبيب؟</h1>
              <p className="text-gray-700 text-lg mb-4">تعرف على أسباب النوم المتقطع وتأثيره على الساعة البيولوجية، مع توضيح متى يجب استشارة الطبيب لتحسين جودة النوم.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ما هو النوم المتقطع؟</h2>
                <p>النوم المتقطع هو حالة يستيقظ فيها الشخص ليلًا ويجد صعوبة في العودة إلى النوم بسرعة، مما يشير إلى خلل في الساعة البيولوجية. هذا يؤثر سلبًا على جودة النوم ويتطلب معالجة سريعة إذا تكرر بشكل مستمر.</p>
                
                <h2 className="text-2xl font-semibold">أسباب النوم المتقطع</h2>
                <p>تتعدد أسباب النوم المتقطع، وتشمل:</p>
                
                <h3 className="text-xl font-semibold">1. الشيخوخة</h3>
                <p>مع التقدم في العمر، تقل ساعات النوم المطلوبة، وتزداد التغيرات الفسيولوجية التي تؤدي إلى النوم المتقطع وتقليل جودة النوم.</p>
                
                <h3 className="text-xl font-semibold">2. سن اليأس</h3>
                <p>عند وصول النساء إلى سن اليأس، تؤدي التغيرات الهرمونية إلى اضطرابات النوم، بما في ذلك النوم المتقطع، نتيجة الهبات الساخنة والتعرق الليلي.</p>
                
                <h3 className="text-xl font-semibold">3. السلوكيات المرتبطة بنمط الحياة</h3>
                <p>تشمل:</p>
                <ul className="list-disc pr-6">
                  <li>الإفراط في تناول الكافيين (الشاي، القهوة) ليلًا.</li>
                  <li>تناول الأطعمة الدسمة ليلًا.</li>
                  <li>النوم لفترات طويلة أثناء النهار.</li>
                  <li>بيئة نوم غير مريحة (درجة حرارة غير مناسبة، ضوضاء، إضاءة قوية، فراش غير مريح).</li>
                </ul>
                
                <h3 className="text-xl font-semibold">4. الأدوية</h3>
                <p>بعض الأدوية تسبب النوم المتقطع كأثر جانبي، مثل:</p>
                <ul className="list-disc pr-6">
                  <li>مضادات الاحتقان (تحتوي على مواد منبهة).</li>
                  <li>أدوية أمراض القلب وارتفاع ضغط الدم.</li>
                  <li>أدوية علاج باركنسون.</li>
                  <li>أدوية اضطراب نقص الانتباه وفرط النشاط.</li>
                </ul>
                <p>يُنصح باستشارة الطبيب لتعديل الجرعات أو استبدال الأدوية إذا لزم الأمر.</p>
                
                <h3 className="text-xl font-semibold">5. الضغوط النفسية والعصبية</h3>
                <p>التعرض المستمر للتوتر أو التفكير المفرط في المشكلات الشخصية أو المالية يزيد من الأرق والنوم المتقطع.</p>
                
                <h3 className="text-xl font-semibold">6. فرط نشاط الغدة الدرقية</h3>
                <p>يؤدي إلى التعرق الليلي والكوابيس، مما يسبب استيقاظًا متكررًا ونومًا متقطعًا.</p>
                
                <h3 className="text-xl font-semibold">7. الآلام المزمنة</h3>
                <p>تشمل:</p>
                <ul className="list-disc pr-6">
                  <li>التهابات المفاصل المزمنة.</li>
                  <li>آلام أسفل الظهر.</li>
                  <li>مرض الأمعاء الالتهابي.</li>
                  <li>متلازمة الإرهاق المزمن.</li>
                  <li>الألم العضلي الليفي.</li>
                  <li>الصداع المزمن والنصفي.</li>
                </ul>
                
                <h3 className="text-xl font-semibold">8. مشكلات التبول المتكرر</h3>
                <p>مثل مرض السكري، التهابات المثانة، تضخم البروستاتا عند الرجال، أو السقوط الرحمي عند النساء.</p>
                
                <h3 className="text-xl font-semibold">9. المشكلات الصحية الأخرى</h3>
                <p>تشمل:</p>
                <ul className="list-disc pr-6">
                  <li>مرض باركنسون.</li>
                  <li>أمراض الجهاز التنفسي (مثل الحساسية المزمنة).</li>
                  <li>ارتجاع المرئ وحرقة المعدة.</li>
                  <li>انقطاع النفس الإنسدادي النومي.</li>
                  <li>التهاب الأعصاب الطرفية.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">متى يتوجب زيارة الطبيب؟</h2>
                <p>يُنصح باستشارة طبيب في الحالات التالية:</p>
                <ul className="list-disc pr-6">
                  <li>تكرار النوم المتقطع بشكل يؤثر على الأنشطة اليومية.</li>
                  <li>الشعور بالنعاس الشديد أثناء النهار.</li>
                  <li>تغيرات في الحالة النفسية أو المزاجية بسبب النوم المتقطع.</li>
                </ul>
                <p>تهدف الزيارة إلى تحديد السبب الأساسي ووضع خطة علاجية لضمان نوم صحي ومستمر.</p>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>النوم المتقطع ناتج عن عوامل مثل الشيخوخة، التغيرات الهرمونية، نمط الحياة، الأدوية، التوتر، أو المشكلات الصحية. يؤثر على الساعة البيولوجية وجودة النوم، مما قد يسبب الإرهاق والتغيرات المزاجية. استشارة الطبيب ضرورية عند تكرار الحالة لتحديد السبب وعلاجه، مما يساعد على استعادة نوم مريح وصحي.</p>
                
                <p className="text-sm italic">بقلم الدكتور مهند الكسواني</p>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">شارك بتعليقك</h2>
                <p className="text-sm text-primary/80 mb-4">لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *</p>
                <div className="space-y-4">
                  <textarea
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary Thunderstorm"
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