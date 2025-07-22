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
              <img src="/blog13.jpg" alt="متلازمة تململ الساقين" className="w-full h-auto object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">متلازمة تململ الساقين وعلاقتها باضطراب النوم</h1>
              <p className="text-gray-700 text-lg mb-4">تعرف على متلازمة تململ الساقين، أسبابها، وكيف تؤثر على جودة النوم، مع أهم الطرق لتشخيصها وعلاجها لتحسين الصحة والراحة.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ما هي متلازمة تململ الساقين؟</h2>
                <p>متلازمة تململ الساقين هي حالة مرضية تتميز برغبة ملحة في تحريك الساقين، خاصة أثناء التوتر أو الاسترخاء مثل ساعات النوم ليلًا. تؤثر هذه الحالة سلبًا على جودة النوم، مما يمنع الحصول على نوم مريح ومنتظم. يمكن أن تحدث في أي عمر، لكن الأعراض تصبح أكثر حدة مع التقدم في العمر، مما يؤثر على الأداء اليومي.</p>
                
                <h2 className="text-2xl font-semibold">عوامل الخطر وأسباب الإصابة</h2>
                <p>السبب الدقيق لمتلازمة تململ الساقين غير معروف، لكن تشير الدراسات إلى دور العوامل التالية:</p>
                <ul className="list-disc pr-6">
                  <li><strong>العوامل الوراثية:</strong> التاريخ العائلي يزيد من مخاطر الإصابة.</li>
                  <li><strong>التغيرات الهرمونية:</strong> النساء أكثر عرضة، خاصة أثناء الحمل أو سن اليأس، مما قد يفسر اضطرابات النوم في هذه الفترات.</li>
                  <li><strong>نمط الحياة الخامل:</strong> قلة النشاط البدني.</li>
                  <li><strong>السمنة المفرطة:</strong> زيادة الوزن تزيد من الأعراض.</li>
                  <li><strong>المشروبات المنبهة:</strong> الإفراط في الكافيين (الشاي، القهوة، مشروبات الطاقة).</li>
                  <li><strong>الأدوية:</strong> الإفراط في مضادات الاكتئاب دون إشراف طبي.</li>
                  <li><strong>المشكلات الصحية:</strong> مثل السكري، قصور الكلى أو الكبد، مرض باركنسون، التصلب المتعدد، أو نقص الحديد وفيتامين (د).</li>
                  <li><strong>التدخين:</strong> الإفراط في التدخين يزيد من الأعراض.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">الأعراض وتأثيرها على النوم</h2>
                <p>تؤثر متلازمة تململ الساقين على النوم من حيث الكم والجودة، مما يسبب:</p>
                <ul className="list-disc pr-6">
                  <li><strong>ارتعاش الأطراف:</strong> حركات لا إرادية تعطل استمرارية النوم.</li>
                  <li><strong>صعوبة الاسترخاء:</strong> الرغبة الملحة في تحريك الساقين تمنع بدء النوم.</li>
                  <li><strong>ألم أو إزعاج:</strong> ألم حاد، حارق، حكة، خدر، أو تنميل في الساقين يؤثر على النوم.</li>
                  <li><strong>الخمول النهاري:</strong> النعاس والإرهاق أثناء النهار بسبب قلة النوم.</li>
                </ul>
                <p>يُنصح باستشارة طبيب إذا تسببت هذه الأعراض في اضطرابات نوم شديدة أو نعاس نهاري.</p>
                
                <h2 className="text-2xl font-semibold">تشخيص متلازمة تململ الساقين</h2>
                <p>يعتمد التشخيص على:</p>
                <ul className="list-disc pr-6">
                  <li><strong>رصد الأعراض:</strong> تقييم الأعراض المرضية مثل الرغبة في تحريك الساقين والألم.</li>
                  <li><strong>فحص التاريخ الطبي:</strong> التأكد من عدم وجود أمراض أخرى تسبب الأعراض.</li>
                  <li><strong>اختبارات الدم:</strong> قياس مستويات الحديد، فيتامين (د)، الجلوكوز، ووظائف الكلى والكبد.</li>
                  <li><strong>دراسات النوم:</strong> مراقبة النشاط الدماغي، حركة الأطراف، معدل التنفس، وضربات القلب أثناء النوم في مختبر النوم.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">علاج متلازمة تململ الساقين</h2>
                <p>يشمل العلاج الخطوات التالية:</p>
                <ul className="list-disc pr-6">
                  <li><strong>إزالة العوامل المسببة:</strong> معالجة نقص الحديد بمكملات، تقليل الكافيين، والحد من مضادات الاكتئاب بإشراف طبي.</li>
                  <li><strong>تحسين عادات النوم:</strong> اتباع روتين نوم صحي، مثل النوم في بيئة مريحة ومواعيد ثابتة.</li>
                  <li><strong>العلاج الدوائي:</strong> 
                    <ul className="list-circle pr-6">
                      <li>أدوية تحفيز الدوبامين (مثل تلك المستخدمة لعلاج باركنسون).</li>
                      <li>باسطات العضلات والمهدئات إذا لم تكن أدوية الدوبامين فعالة.</li>
                      <li>الأفيونات (مثل الأوكسيكودون أو الكوديين) في الحالات المتقدمة، تحت إشراف طبي صارم بسبب الأعراض الجانبية.</li>
                    </ul>
                  </li>
                </ul>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>متلازمة تململ الساقين هي حالة تسبب رغبة ملحة في تحريك الساقين، مما يؤثر سلبًا على جودة النوم ويسبب الخمول النهاري. قد تنتج عن عوامل وراثية، هرمونية، أو صحية مثل نقص الحديد أو أمراض مزمنة. يعتمد العلاج على معالجة الأسباب، تحسين عادات النوم، واستخدام الأدوية عند الحاجة. استشارة طبيب مختص ضرورية إذا أثرت الحالة على النوم أو الأداء اليومي.</p>
                
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