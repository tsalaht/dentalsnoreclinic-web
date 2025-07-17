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
              <img src="/blog5.jpg" alt="أفضل الطرق لحل مشكلة الشخير" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">أفضل الطرق لحل مشكلة الشخير</h1>
              <p className="text-primary/90 text-lg mb-4">تعرف على أفضل الطرق للتخلص من الشخير من خلال تمارين الوجه، تحسين وضعية النوم، وبعض الأعشاب الطبيعية.</p>
              <div className="text-primary/90 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ما هو الشخير؟</h2>
                <p>الشخير هو الصوت الذي يصدره النائم نتيجة اهتزاز الأجزاء التنفسية بسبب حركة الهواء المتعسرة خلال التنفس أثناء النوم، وذلك نتيجة تضيق في ممرات التنفس. الشخير الهادئ قد يحدث بسبب وضعية غير صحيحة للرأس بالنسبة للعنق، بينما الشخير العالي قد يكون مصحوبًا بتوقف متقطع في التنفس واضطراب النوم، مما يشير إلى انقطاع التنفس الإنسدادي أثناء النوم. ليس كل من يشخر مصابًا بهذا الاضطراب، لكن الشخير قد يكون علامة تحذيرية.</p>
                
                <p>إضافة إلى كونه مزعجًا للشخص ومن حوله، قد يؤثر الشخير سلبًا على صحة الجسم إذا لم يُعالج. الشخص الذي يشخر بصوت مرتفع غالبًا يعاني من التعب والإرهاق خلال اليوم التالي. إذا كان الشخير يحدث مع فم مغلق، فقد يشير إلى مشكلة في وضعية اللسان، بينما الشخير مع فم مفتوح قد يكون بسبب مشكلة في الحلق. يمكن حل الشخير من خلال تمارين لتقوية عضلات الوجه والفم، تخفيف الوزن، وتحسين وضعية النوم.</p>
                
                <h2 className="text-2xl font-semibold">تمارين الوجه</h2>
                <p>تمارين الوجه تساعد في تقوية عضلات الجهاز التنفسي العلوي، مما يحسن التحكم باللسان والحلق ويقلل من الشخير. ينصح بممارسة هذه التمارين لمدة نصف ساعة يوميًا للحصول على نتائج فعالة.</p>
                
                <h3 className="text-xl font-semibold">1. تمرين تكرار حروف العلة</h3>
                <p>كرر النطق بحروف العلة “A-E-I-O-U” لمدة 3 دقائق متواصلة يوميًا. يمكن زيادة سرعة النطق لتقوية عضلات الجهاز التنفسي العلوي.</p>
                
                <h3 className="text-xl font-semibold">2. تمرين انزلاق اللسان</h3>
                <p>ضع مقدمة اللسان باتجاه سقف الحلق بحيث تلامس الأسنان العلوية من الداخل. مرر اللسان من الأمام إلى الخلف باتجاه اللهاة، ثم أعده إلى الأمام مع إبقائه ملامسًا لسقف الحلق. كرر التمرين لمدة 3 دقائق يوميًا.</p>
                
                <h3 className="text-xl font-semibold">3. تمرين الضغط على الشفاه</h3>
                <p>افتح الفم بأقصى قدر، ثم أغلقه مع الضغط على الشفاه بقوة. زم الشفاه لمدة 10 ثوانٍ، ثم كرر التمرين 5 مرات متتالية مرتين يوميًا.</p>
                
                <h3 className="text-xl font-semibold">4. تمرين انزلاق الفك</h3>
                <p>افتح الفم قليلًا وحرك الفك إلى اليمين واليسار، مع الثبات على كل جهة لمدة 30 ثانية قبل الانتقال للجهة الأخرى.</p>
                
                <h3 className="text-xl font-semibold">5. تمرين المضغ</h3>
                <p>تظاهر بمضغ علكة مع إغلاق الفم بالكامل. تأكد من أن الأضراس تبتعد عن بعضها أثناء المضغ، ثم تتلامس بشكل خفيف.</p>
                
                <h3 className="text-xl font-semibold">6. تمرين تحريك الفك</h3>
                <p>قدم الفك السفلي على الفك العلوي مع إظهار الأسنان وابقَ على هذه الوضعية لمدة 10 ثوانٍ. كرر التمرين عدة مرات لتقوية عضلات الفك، الفم، والرقبة.</p>
                
                <h3 className="text-xl font-semibold">7. تمرين النطق بصوت “ung-gah”</h3>
                <p>عند النطق بـ “ung” يتحرك سقف الحلق الداخلي إلى الأسفل باتجاه اللسان، وعند النطق بـ “gah” يعود إلى موضعه الأصلي. هذا التمرين يقوي عضلات سقف الحلق ويساعد في تحسين التنفس أثناء النوم.</p>
                
                <h2 className="text-2xl font-semibold">وضعية النوم</h2>
                <p>ينصح بالنوم على أحد الجانبين لتجنب الشخير، حيث يؤدي الاستلقاء على الظهر إلى ارتخاء اللهاة باتجاه الحلق، مما يسبب الاهتزازات وصوت الشخير. كما ينصح باستخدام وسادة مرتفعة للحفاظ على موضع الوجه والرقبة أعلى الكتفين، مما يبقي مجرى التنفس مفتوحًا.</p>
                
                <h2 className="text-2xl font-semibold">أعشاب قد تساعد في التخفيف من الشخير</h2>
                <p>الأبحاث مستمرة لتحديد فوائد الأعشاب في مكافحة الشخير. النعناع قد يخفف من احتقان الأنف، مما يقلل من انسداد مجرى التنفس أثناء النوم. الفواكه الحمضية مثل البرتقال غنية بفيتامين C، مما يساعد في تقليل أعراض الرشح والالتهابات. كما قد تساعد أعشاب مثل خاتم الذهب والكينا في التخلص من مضاعفات مشاكل الجهاز التنفسي واحتقان الجيوب الأنفية.</p>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>الشخير مشكلة شائعة يمكن علاجها من خلال تمارين الوجه لتقوية عضلات الفم والحلق، تحسين وضعية النوم، وتجربة بعض الأعشاب الطبيعية. إذا استمرت المشكلة أو كانت مصحوبة بأعراض مثل انقطاع التنفس، استشر طبيبًا مختصًا لتقييم الحالة ووضع خطة علاج مناسبة.</p>
                
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