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
              <img src="/blog8.jpg" alt="المعالجة الوظيفية العضلية" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">العلاج الوظيفي لتحسين حالة انقطاع النفس أثناء النوم</h1>
              <p className="text-primary/90 text-lg mb-4">اكتشف كيف يمكن للعلاج الوظيفي العضلي تحسين انقطاع النفس أثناء النوم من خلال تقوية عضلات اللسان والفم والحلق بتمارين بسيطة وآمنة.</p>
              <div className="text-primary/90 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">نظرة عامة</h2>
                <p>المعالجة الوظيفية العضلية هي برنامج تمارين مخصصة تستهدف عضلات الوجه المستخدمة في المضغ والبلع والتنفس. تركز هذه التمارين على تقوية اللسان والحلق للحفاظ على مجرى تنفس مفتوح، خاصة أثناء النوم. ضعف عضلات البلعوم قد يؤدي إلى الشخير وانقطاع النفس النومي، حيث يمكن أن يرتخي اللسان ويسد مجرى الهواء.</p>
                
                <p>يساعد العلاج الوظيفي على تحسين قوة عضلات البلعوم ووضعية اللسان الصحيحة، بحيث يكون اللسان موجهًا نحو سقف الحلق خلف الأسنان الأمامية. يُستخدم هذا العلاج من قِبل أخصائيي النوم لتحسين التنفس أثناء النوم، خاصة عند الأطفال، ومن قِبل أطباء الأسنان لمعالجة مشاكل حركة الأسنان الناتجة عن دفع اللسان. يُعتبر العلاج الوظيفي بديلاً غير مكلف وخالٍ من المخاطر مقارنة بأجهزة ضغط الهواء (CPAP) أو الجراحة.</p>
                
                <h2 className="text-2xl font-semibold">فوائد العلاج الوظيفي</h2>
                <p>إلى جانب تحسين انقطاع النفس أثناء النوم، يساعد العلاج الوظيفي في علاج حالات أخرى مثل:</p>
                <ul className="list-disc pr-6">
                  <li>الصداع.</li>
                  <li>مرض ارتجاع المريء (الحرقة).</li>
                  <li>آلام الفك الصدغي.</li>
                  <li>آلام الرقبة.</li>
                  <li>مص الإبهام.</li>
                  <li>قضم الأظافر.</li>
                </ul>
                <p>على عكس الأدوية التي قد تسبب آثارًا جانبية، يعتمد العلاج الوظيفي على تمارين آمنة وفعالة.</p>
                
                <h2 className="text-2xl font-semibold">التمارين الوظيفية</h2>
                <p>تمارين العلاج الوظيفي مناسبة للأطفال (من عمر 6 سنوات) والبالغين، ويمكن ممارستها في المنزل. يُنصح بتكرار كل تمرين 10 مرات، مع إجراء المجموعة الكاملة 4 مرات يوميًا، بإجمالي 45 دقيقة يوميًا. للحصول على أفضل النتائج، يجب الالتزام بالعلاج لمدة سنتين على الأقل. ملاحظة: قد يواجه الأشخاص المصابون بحالة "اللسان الملتصق" صعوبة في بعض التمارين، لذا يُنصح باستشارة الطبيب.</p>
                
                <h3 className="text-xl font-semibold">قائمة التمارين</h3>
                <ol className="list-decimal pr-6">
                  <li><strong>رفع اللسان:</strong> ضع اللسان في سقف الحلق خلف الأسنان الأمامية، ادفع للأعلى لمدة 5 ثوانٍ، كرر 10 مرات.</li>
                  <li><strong>المس أنفك:</strong> أخرج اللسان وحاول ملامسة الأنف لمدة 10 ثوانٍ، ثم استرح، كرر 10 مرات.</li>
                  <li><strong>المس ذقنك:</strong> أخرج اللسان وحاول ملامسة الذقن من الأسفل لمدة 10 ثوانٍ، ثم استرح، كرر 10 مرات.</li>
                  <li><strong>ادفع اللسان إلى اليسار:</strong> أخرج Adeللسان لأقصى اليسار لمدة 10 ثوانٍ، ثم استرح، كرر 10 مرات.</li>
                  <li><strong>ادفع اللسان إلى اليمين:</strong> أخرج اللسان لأقصى اليمين لمدة 10 ثوانٍ، ثم استرح، كرر 10 مرات.</li>
                  <li><strong>تدوير اللسان:</strong> حرك طرف اللسان إلى اليسار بطريقة ملتوية ليلامس أسفل الفم لمدة 10 ثوانٍ، ثم استرح، كرر 10 مرات.</li>
                  <li><strong>إصدار صوت باللسان:</strong> أخرج صوتًا عاليًا بملامسة اللسان لسقف الفم لمدة 15 ثانية، كرر 10 مرات.</li>
                  <li><strong>ادفع اللسان باتجاه ملعقة:</strong> ادفع اللسان للخارج نحو ملعقة أمام الشفتين لمدة 10 ثوانٍ، مع الحفاظ على استقامته، كرر 10 مرات.</li>
                  <li><strong>احمل ملعقة:</strong> ضع يد ملعقة معدنية بين الشفتين (دون الأسنان) لمدة 10 ثوانٍ، حاول إبقاءها متوازية مع الأرض، يمكن إضافة أوزان صغيرة مثل مكعبات السكر، كرر 10 مرات.</li>
                  <li><strong>احمل زر:</strong> (للأطفال والبالغين بعيدًا عن خطر الابتلاع) ضع زرًا مخيطًا على خيط بين الشفتين والأسنان، اسحب الخيط بلطف لمدة 10 ثوانٍ دون إفلاته، كرر 10 مرات.</li>
                </ol>
                
                <h2 className="text-2xl font-semibold">كيفية البدء</h2>
                <p>يمكنك بدء العلاج الوظيفي في المنزل دون إشراف. ومع ذلك، لتحقيق أقصى استفادة، استشر طبيب الرعاية الأولية الذي قد يحيلك إلى أخصائي أسنان، تقويم أسنان، أخصائي نوم، أو علاج طبيعي بناءً على احتياجاتك. التقييم المهني يضمن تحقيق النتائج المرغوبة.</p>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>المعالجة الوظيفية العضلية هي طريقة آمنة وفعالة لتحسين انقطاع النفس أثناء النوم من خلال تقوية عضلات الفم والحلق. الالتزام اليومي بالتمارين لمدة سنتين يمكن أن يقلل من الشخير والانسداد، وقد يلغي الحاجة إلى أجهزة أو جراحات. إذا كنت تعاني من أعراض انقطاع النفس النومي، جرب هذه التمارين واستشر مختصًا للحصول على خطة علاجية مناسبة.</p>
                
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