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
              <img src="/blog11.jpg" alt="أسباب الأرق عند النساء" className="w-full h-auto object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">أسباب الإصابة بالأرق واضطرابات النوم لدى النساء</h1>
              <p className="text-gray-700 text-lg mb-4">تعرفي على أبرز أسباب الأرق واضطرابات النوم لدى النساء، سواء المتعلقة بالتغيرات الهرمونية أو العوامل الصحية والنفسية العامة.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ما هو الأرق؟</h2>
                <p>الأرق هو اضطراب نوم شائع يتمثل في صعوبة بدء النوم، الاستيقاظ المتكرر ليلًا وعدم القدرة على العودة للنوم، أو الشعور بالتعب بعد الاستيقاظ صباحًا. يؤثر الأرق سلبًا على الصحة العامة والقدرات الذهنية والإدراكية. وتُعد النساء، خاصة مع التقدم في العمر، أكثر عرضة للأرق مقارنة بالرجال.</p>
                
                <h2 className="text-2xl font-semibold">أسباب الأرق واضطرابات النوم لدى النساء</h2>
                <p>تتعدد أسباب الأرق لدى النساء، ويمكن تقسيمها إلى أسباب خاصة بالنساء وأسباب عامة.</p>
                
                <h3 className="text-xl font-semibold">أولًا: أسباب مرتبطة بالنساء</h3>
                <h4 className="text-lg font-semibold">1. دورة الطمث الشهرية</h4>
                <p>تبدأ الدورة الشهرية عند البلوغ، وتستمر كل 28 يومًا تقريبًا لمدة 3-5 أيام. الأيام التي تسبق الدورة غالبًا تشهد أرقًا واضطرابات نوم بسبب التغيرات الهرمونية. النساء اللواتي يعانين من اضطرابات الدورة الشهرية أكثر عرضة لهذه المشكلات.</p>
                
                <h4 className="text-lg font-semibold">2. الحمل</h4>
                <p>تؤدي التغيرات الهرمونية أثناء الحمل، خاصة في الثلث الأول والأخير، إلى الأرق. كما أن زيادة حجم الرحم تسبب أعراضًا مثل حموضة المعدة، تشنج الساقين، والتبول المتكرر، مما يعيق النوم المستمر.</p>
                
                <h4 className="text-lg font-semibold">3. سن اليأس</h4>
                <p>مع توقف الدورة الشهرية في سن اليأس، تعاني النساء من تغيرات فسيولوجية مثل الهبات الساخنة والتعرق الليلي، مما يؤثر سلبًا على النوم. العلاج الهرموني التعويضي قد يكون فعالًا في تقليل هذه الأعراض وتحسين النوم.</p>
                
                <h3 className="text-xl font-semibold">ثانيًا: أسباب عامة</h3>
                <h4 className="text-lg font-semibold">1. المشكلات الصحية</h4>
                <p>يُعد الأرق أحد أعراض العديد من الحالات الصحية، مثل:</p>
                <ul className="list-disc pr-6">
                  <li>انقطاع النفس الإنسدادي النومي.</li>
                  <li>متلازمة تململ الساقين.</li>
                  <li>اضطرابات الغدة الدرقية.</li>
                  <li>مرض باركنسون.</li>
                  <li>أمراض القلب.</li>
                  <li>التهابات المفاصل.</li>
                  <li>الاضطرابات النفسية مثل القلق والاكتئاب.</li>
                </ul>
                
                <h4 className="text-lg font-semibold">2. الأدوية</h4>
                <p>بعض الأدوية تسبب الأرق كأثر جانبي، مثل:</p>
                <ul className="list-disc pr-6">
                  <li>أدوية الاكتئاب.</li>
                  <li>أدوية ارتفاع ضغط الدم.</li>
                  <li>أدوية الربو القصبي.</li>
                  <li>أدوية إنقاص الوزن التي تحتوي على الكافيين.</li>
                </ul>
                
                <h4 className="text-lg font-semibold">3. ممارسات النوم الخاطئة</h4>
                <p>تشمل استخدام الهواتف المحمولة أو مشاهدة التلفاز في غرفة النوم قبل النوم مباشرة، وتناول المشروبات الغنية بالكافيين (مثل الشاي والقهوة) ليلًا.</p>
                
                <h4 className="text-lg font-semibold">4. عدم وجود روتين نوم ثابت</h4>
                <p>أخذ قيلولة طويلة أثناء النهار قد يعطل النوم الليلي.</p>
                
                <h4 className="text-lg font-semibold">5. التوتر والتفكير المفرط</h4>
                <p>الشعور بالتوتر أو الانشغال بالتفكير عند الاستعداد للنوم يمنع الاسترخاء ويزيد من الأرق.</p>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>يُعد الأرق واضطرابات النوم أكثر شيوعًا لدى النساء بسبب التغيرات الهرمونية المرتبطة بالدورة الشهرية، الحمل، وسن اليأس، بالإضافة إلى العوامل الصحية والنفسية العامة مثل الأمراض المزمنة، الأدوية، والتوتر. لتحسين جودة النوم، يُنصح بتجنب الممارسات الخاطئة، تحسين بيئة النوم، واستشارة طبيب مختص إذا استمرت الأعراض لضمان صحة أفضل.</p>
                
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