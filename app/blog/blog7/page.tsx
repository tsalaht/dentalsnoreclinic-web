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
              <img src="/blog7.jpeg" alt="النظام الغذائي لانقطاع النفس أثناء النوم" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">النظام الغذائي لانقطاع النفس أثناء النوم</h1>
              <p className="text-primary/90 text-lg mb-4">تعرف على النظام الغذائي الأمثل لتحسين أعراض انقطاع النفس أثناء النوم من خلال التركيز على الأطعمة الغنية بالفيتامينات والمعادن وتجنب الأطعمة المصنعة.</p>
              <div className="text-primary/90 leading-relaxed space-y-4 text-base">
                <h2 className="text-2xl font-semibold">ماذا يجب أن يشمل النظام الغذائي الجيد لانقطاع النفس أثناء النوم؟</h2>
                <p>يجب أن يحتوي النظام الغذائي على الفواكه والخضروات العضوية الطازجة، الغنية بالفيتامينات والمعادن. وفقًا لبيانات من عامي 2007 و2008، وجد الباحثون أن تناول المغذيات يرتبط ارتباطًا وثيقًا بجودة النوم. الأشخاص الذين يعانون من نقص المغذيات يواجهون صعوبة في النوم المتواصل لليلة كاملة.</p>
                
                <p>إذا كنت تعاني من زيادة الوزن، فإن فقدان بعض الوزن قد يحسن صحتك العامة، لكنه لا يضمن اختفاء أعراض انقطاع النفس أثناء النوم بشكل كامل. ومع ذلك، النظام الغذائي الصحي يلعب دورًا مهمًا في تقليل الأعراض.</p>
                
                <h2 className="text-2xl font-semibold">النظام الغذائي الجيد لعلاج انقطاع النفس أثناء النوم</h2>
                <h3 className="text-xl font-semibold">تجنب الأطعمة التي تزيد من الإفرازات المخاطية</h3>
                <p>قد تؤدي منتجات الألبان إلى زيادة احتقان الأنف والجيوب الأنفية لدى بعض الأشخاص، مما يسبب تراكم المخاط في الجزء الخلفي من الحلق. هذا المخاط يمكن أن يزيد من مشاكل انقطاع النفس أثناء النوم. يُنصح بتقليل استهلاك منتجات الألبان أو اختيار الخيارات قليلة الدسم.</p>
                
                <h3 className="text-xl font-semibold">الابتعاد عن الأطعمة المصنعة</h3>
                <p>ينبغي تجنب الأطعمة المصنعة والمعلبة قدر الإمكان، مثل الأطعمة الجاهزة للأكل. تحتوي هذه الأطعمة على سموم تضع ضغطًا إضافيًا على الجهاز التنفسي، مما يؤدي إلى تسارع التنفس وتفاقم أعراض انقطاع النفس. بدلاً من ذلك، ركز على الأطعمة العضوية الطازجة القابلة للهضم بسهولة لتحسين أداء الجسم.</p>
                
                <h2 className="text-2xl font-semibold">التركيز على الأطعمة الغنية بالفيتامينات والمعادن</h2>
                <h3 className="text-xl font-semibold">فيتامين د</h3>
                <p>أظهرت الدراسات أن تناول فيتامين د يرتبط بتحسين جودة النوم المتواصل. الأشخاص الذين يتناولون كميات أعلى من فيتامين د لديهم مخاطر أقل بنسبة 16% لصعوبة النوم لليلة كاملة. تشمل مصادر فيتامين د الأسماك الدهنية (مثل السلمون)، صفار البيض، والأطعمة المدعمة.</p>
                
                <h3 className="text-xl font-semibold">فيتامين ج</h3>
                <p>وفقًا لدراسة نُشرت في الصحيفة الأمريكية للجهاز التنفسي والعناية المركزة، يعمل فيتامين ج كمضاد أكسدة فعال يقلل من الضرر الخلوي الناتج عن انقطاع النفس أثناء النوم. زيادة استهلاك فيتامين ج يمكن أن تحمي الجسم من الآثار الخطيرة لهذا الاضطراب، مثل السكتات الدماغية، التي تنخفض بنسبة 50% عندما تكون مستويات فيتامين ج عالية في الدم. تشمل مصادر فيتامين ج:</p>
                <ul className="list-disc pr-6">
                  <li>الفلفل الحلو الملون.</li>
                  <li>البرتقال.</li>
                  <li>الفراولة.</li>
                  <li>الجريب فروت.</li>
                  <li>الكيوي.</li>
                  <li>البروكلي.</li>
                </ul>
                
                <h3 className="text-xl font-semibold">المغنيسيوم</h3>
                <p>الكثير من الأشخاص يعانون من نقص المغنيسيوم دون علمهم. يساعد المغنيسيوم في تنظيم حركة العضلات، وهو أمر بالغ الأهمية لتقليل تراخي عضلات الحلق المسببة لانقطاع النفس أثناء النوم. تشمل الأطعمة الغنية بالمغنيسيوم الخضروات الورقية الخضراء (مثل السبانخ)، المكسرات، والبذور.</p>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>اتباع نظام غذائي غني بالفواكه والخضروات العضوية الطازجة، ومصادر فيتامين د، فيتامين ج، والمغنيسيوم، مع تجنب الأطعمة المصنعة ومنتجات الألبان كاملة الدسم، يمكن أن يحسن جودة النوم ويقلل من أعراض انقطاع النفس أثناء النوم. الالتزام بنظام غذائي صحي، إلى جانب فقدان الوزن إذا لزم الأمر، يعزز الصحة العامة ويخفف من تأثيرات هذا الاضطراب. للحصول على أفضل النتائج، استشر أخصائي تغذية أو طبيبًا مختصًا.</p>
                
                <p className="text-sm italic">بقلم الدكتور مهند الكسواني</p>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">شارك بتعليقك</h2>
                <p className="text-sm">لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *</p>
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