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
              <h1 className="text-3xl font-bold text-primary mb-4">المعالجة الوظيفية العضلية “المايوفنكشنال”</h1>
              <p className="text-gray-700 text-lg mb-4">اكتشف كيف تساعد المعالجة الوظيفية العضلية في تحسين وظائف الفم والوجه، التخلص من العادات السيئة، وتعزيز الصحة العامة والمظهر الجمالي.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ما هي المعالجة الوظيفية العضلية؟</h2>
                <p>المعالجة الوظيفية العضلية هي برنامج تمارين يهدف إلى التخلص من العادات الفموية والوجهية الضارة التي تؤثر سلبًا على الصحة والمظهر. يعمل البرنامج على إعادة تدريب عضلات الوجه، الفك، والفم لتحقيق الانسجام الوظيفي وغرس عادات إيجابية لتغييرات دائمة.</p>
                
                <h2 className="text-2xl font-semibold">ما هي الاضطرابات العضلية والوظيفية للوجه والفم (OMD)؟</h2>
                <p>هي مجموعة من الاعتلالات التي تؤثر على عضلات الوجه والفم ووظائفها، مما يؤثر مباشرة أو غير مباشر على:</p>
                <ul className="list-disc pr-6">
                  <li>الرضاعة.</li>
                  <li>النمو الهيكلي للوجه.</li>
                  <li>المضغ والبلع.</li>
                  <li>الكلام.</li>
                  <li>إطباق الأسنان.</li>
                  <li>حركة المفصل الصدغي الفكي.</li>
                  <li>النظافة الفموية.</li>
                  <li>ثبات علاج تقويم الأسنان.</li>
                  <li>جماليات الوجه.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">أسباب اضطرابات OMD</h2>
                <p>لا يمكن تحديد سبب واحد لحدوث اضطرابات OMD، وقد تنتج عن واحد أو أكثر من العوامل التالية:</p>
                <ul className="list-disc pr-6">
                  <li>عادات فموية سيئة مثل مص الإبهام، الإصبع، أو اللهاية لفترات طويلة.</li>
                  <li>ضيق مجرى الهواء بسبب تضخم اللوزتين، اللحمية، الحساسية، أو انسداد الأنف المزمن.</li>
                  <li>عوامل وراثية.</li>
                  <li>تشوهات هيكلية أو فسيولوجية مثل اللجام اللساني القصير (عقدة اللسان) أو اللسان الكبير (ماكروغلوسيا).</li>
                  <li>وضعية الفم المفتوح المزمنة.</li>
                  <li>تشوهات عصبية أو نمائية.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">فوائد المعالجة الوظيفية العضلية</h2>
                <p>يساعد البرنامج العلاجي في:</p>
                <ul className="list-disc pr-6">
                  <li>إيقاف دسر اللسان (البلع غير الصحيح).</li>
                  <li>التحول إلى التنفس الأنفي بدلاً من الفموي.</li>
                  <li>التخلص من عادات سيئة مثل مص الإبهام، قضم الأظافر، أو مضغ الشفاه.</li>
                  <li>إعادة تدريب عضلات الوجه واللسان لتحسين الأداء الوظيفي.</li>
                  <li>دعم وضعية الرأس والعنق.</li>
                  <li>منع أو تصحيح متلازمة الوجه الطويل.</li>
                  <li>تحسين بيئة الفم لتحقيق التناغم.</li>
                  <li>معالجة مشكلات النطق، الشخير، توقف التنفس أثناء النوم، الهضم، والضغط على الأسنان.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">كيف تؤثر اضطرابات OMD على الحياة اليومية؟</h2>
                <p>تؤدي اضطرابات OMD إلى سوء إطباق الأسنان، مما يسبب صعوبات في المضغ، البلع، الهضم، والنطق. كما قد تؤثر على جماليات الوجه وثبات علاج تقويم الأسنان.</p>
                
                <h2 className="text-2xl font-semibold">أعراض اضطرابات OMD</h2>
                <ul className="list-disc pr-6">
                  <li>إطباق غير متوازن للشفتين.</li>
                  <li>وضعية اللسان المستمرة مقابل الأسنان أو بينها.</li>
                  <li>صعوبة التنفس الأنفي.</li>
                  <li>الصداع أو ألم في الفك، الوجه، أو الرقبة.</li>
                  <li>عادات سيئة مثل مضغ الأظافر أو الشفاه.</li>
                  <li>الشخير أو توقف التنفس أثناء النوم.</li>
                  <li>صعوبة في الأكل أو البلع (مثل بلع الحبوب).</li>
                  <li>مشكلات في النطق.</li>
                  <li>وجه ممدود.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">ما هو دسر اللسان؟</h2>
                <p>دسر اللسان (أو البلع العكسي) هو حالة عدم توازن عضلي حيث يتقدم اللسان بين الأسنان الأمامية أثناء البلع، الكلام، أو الراحة. يؤدي الضغط المستمر للسان إلى إزاحة الأسنان أو منع بزوغها، مما يسبب سوء إطباق.</p>
                
                <h2 className="text-2xl font-semibold">أسباب دسر اللسان</h2>
                <p>ينتج دسر اللسان عن:</p>
                <ul className="list-disc pr-6">
                  <li>الضغط المستمر للسان أثناء الراحة.</li>
                  <li>دفع اللسان بشكل غير صحيح بعيدًا عن سقف الفم.</li>
                  <li>عدم تناغم عضلات الوجه، اللسان، والحلق.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">ما هو قصور الشفاه؟</h2>
                <p>هو عدم القدرة على إغلاق الشفتين بشكل مريح أو الحفاظ على إطباقهما دون ضغط عضلي. ينتج عن تغيرات في نمو الوجه، بزوغ الأسنان، التنفس، أو البلع.</p>
                
                <h2 className="text-2xl font-semibold">مص الإبهام أو استخدام اللهايات</h2>
                <p>مص الإبهام أو اللهاية عادة طبيعية عند الرضع، لكن استمرارها بعد سن 2-5 سنوات قد يسبب:</p>
                <ul className="list-disc pr-6">
                  <li>أسنان معوجة أو غير مستوية.</li>
                  <li>فك غير متساوٍ أو متصالب.</li>
                  <li>فك علوي ضيق.</li>
                  <li>خلل في الكلام.</li>
                  <li>اضطرابات OMD مثل دسر اللسان.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">كيفية التخلص من عادة مص الإبهام؟</h2>
                <p>تقترح الدكتورة لوري سميث برنامجًا علاجيًا مدته 4 أسابيع لمساعدة الأطفال على التوقف عن مص الإبهام، مما يقلل من تأثيره على الأسنان والثقة بالنفس.</p>
                
                <h2 className="text-2xl font-semibold">اللهايات وعبوات الشرب</h2>
                <p>اللهايات لها تأثير مشابه لمص الإبهام، لكن التوقف عنها أسهل، حيث نادرًا ما يستمر الأطفال في استخدامها بعد سن الثانية. أما عبوات الشرب:</p>
                <ul className="list-disc pr-6">
                  <li>يُفضل استخدامها بين 6-8 أشهر لدعم نمو البلع.</li>
                  <li>الاستخدام الطويل قد يسبب مشكلات في النطق والأسنان.</li>
                  <li>يُنصح بالتوقف عنها عند سن الثانية والانتقال إلى الكاسات المفتوحة.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">العمر المناسب للعلاج</h2>
                <p>المعالجة الوظيفية العضلية مناسبة من سن 4 سنوات فأكثر، مع كون سن 7-8 سنوات الوقت الأمثل لأن العادات الفموية تكون أقل تأصلًا.</p>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>المعالجة الوظيفية العضلية هي برنامج فعال لتصحيح اضطرابات عضلات الوجه والفم، التخلص من عادات مثل دسر اللسان ومص الإبهام، وتحسين التنفس، النطق، والجماليات. يُنصح ببدء العلاج مبكرًا، خاصة عند الأطفال، لتحقيق أفضل النتائج. استشر مختصًا لتقييم الحالة ووضع خطة علاجية مناسبة.</p>
                
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