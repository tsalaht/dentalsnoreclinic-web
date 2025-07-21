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
              <img src="/blog10.jpg" alt="علاج الأرق عند الحوامل" className="w-full h-auto object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">علاج الأرق واضطراب النوم عند السيدات الحوامل</h1>
              <p className="text-gray-700 text-lg mb-4">تعرفي على أسباب الأرق واضطراب النوم أثناء الحمل وكيفية تحسين جودة النوم بطرق بسيطة وآمنة لضمان راحة أفضل خلال هذه الفترة.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ما هو الأرق واضطراب النوم؟</h2>
                <p>الأرق هو اضطراب فسيولوجي يتمثل في صعوبة بدء النوم، عدم القدرة على الاستمرار في النوم، أو الاستيقاظ المتكرر ليلاً. يُعتبر الأرق واضطرابات النوم من المشكلات الشائعة أثناء الحمل، خاصة في الثلث الأول والأخير. على الرغم من شعور العديد من الحوامل بالنعاس المستمر في الأشهر الأولى بسبب ارتفاع هرمونات الحمل (مثل الإستروجين والبروجسترون)، إلا أن جودة النوم غالبًا تتأثر سلبًا، مما يؤدي إلى الشعور بالتعب حتى بعد النوم لساعات طويلة.</p>
                
                <h2 className="text-2xl font-semibold">أسباب الأرق واضطراب النوم عند الحوامل</h2>
                <p>يُعد الحمل حالة فسيولوجية مؤقتة تؤدي إلى تغيرات هرمونية وجسمانية تسبب الأرق واضطراب النوم. تشمل الأسباب الرئيسية:</p>
                
                <h3 className="text-xl font-semibold">1. اضطرابات الجهاز الهضمي</h3>
                <p>تتسبب هرمونات الحمل في ارتخاء عضلات القناة الهضمية، خاصة في المرئ والمعدة، مما يؤدي إلى ارتجاع المرئ، حموضة المعدة، تكوّن الغازات، والمغص. تناول الوجبات الدسمة أو الأكل في وقت متأخر يزيد من هذه الأعراض، مما يعيق النوم.</p>
                
                <h3 className="text-xl font-semibold">2. آلام أسفل الظهر</h3>
                <p>يؤدي ارتفاع هرمون البروجسترون إلى ارتخاء مفاصل وأربطة الحوض، ومع زيادة حجم الرحم، يزداد الضغط على عضلات الظهر، مما يسبب آلامًا تتفاقم أثناء النوم في الأشهر الأخيرة من الحمل.</p>
                
                <h3 className="text-xl font-semibold">3. التأثيرات النفسية</h3>
                <p>قد تعاني الحوامل، خاصة في الحمل الأول، من القلق بسبب التفكير في الحمل والولادة، مما يمنع النوم السهل ويؤدي إلى الأرق.</p>
                
                <h3 className="text-xl font-semibold">4. صعوبة التنفس</h3>
                <p>يزيد حجم الرحم من الضغط على الحجاب الحاجز، مما يضغط على الرئتين ويسبب ضيق التنفس أو حتى انقطاع النفس الإنسدادي النومي عند الاستلقاء.</p>
                
                <h3 className="text-xl font-semibold">5. اختلاف عادات التبول</h3>
                <p>تزداد حساسية عضلات المثانة أثناء الحمل، مما يؤدي إلى زيادة مرات التبول، وقد تستيقظ الحامل عدة مرات ليلًا لاستخدام المرحاض، مما يعطل استمرارية النوم.</p>
                
                <h2 className="text-2xl font-semibold">علاج الأرق واضطراب النوم عند الحوامل</h2>
                <p>تُعد أسباب الأرق أثناء الحمل مؤقتة وتزول عادةً بعد الولادة. ومع ذلك، يمكن تحسين جودة النوم باتباع تغييرات بسيطة في نمط الحياة، وتشمل:</p>
                <ul className="list-disc pr-6">
                  <li>تهيئة بيئة نوم مريحة بدرجة حرارة مناسبة، مع استخدام فراش ووسائد مريحة.</li>
                  <li>تقليل تناول السوائل ليلًا لتقليل التبول المتكرر.</li>
                  <li>تجنب الأطعمة الدسمة وتناول الطعام في وقت متأخر من الليل.</li>
                  <li>أخذ قيلولة قصيرة (30-40 دقيقة) خلال النهار دون إفراط.</li>
                  <li>أخذ حمام دافئ قبل النوم للاسترخاء.</li>
                  <li>النوم على الجانب الأيسر مع ثني الساقين والركبتين لتخفيف الضغط على أسفل الظهر.</li>
                  <li>استخدام وسادة أو اثنتين تحت الرأس لتحسين التنفس، ووضع وسادة بين الركبتين لتخفيف آلام الظهر.</li>
                  <li>استشارة طبيب مختص إذا استمر الأرق رغم اتباع هذه التدابير.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>يُعد الأرق واضطراب النوم من المشكلات الشائعة أثناء الحمل بسبب التغيرات الهرمونية والجسمانية. يمكن تحسين جودة النوم من خلال تهيئة بيئة مريحة، تعديل عادات الأكل والشرب، واتباع وضعيات نوم صحية. إذا استمرت الأعراض، يُنصح باستشارة طبيب للحصول على مشورة متخصصة لضمان راحة الحامل وصحة الجنين.</p>
                
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