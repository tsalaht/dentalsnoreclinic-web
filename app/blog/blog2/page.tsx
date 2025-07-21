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
              <img src="/blog2.png" alt="طريقة بوتيكو" className="w-full h-auto object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">طريقة بوتيكو: المفتاح للتنفس عن طريق الأنف والصحة القصوى</h1>
              <p className="text-gray-700 text-lg mb-4">اكتشف كيف يمكن لطريقة بوتيكو تحسين صحتك من خلال التنفس عن طريق الأنف وتأثيرها على صحة الفم والوجه.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>عند الحديث عن تقويم الأسنان وإعادة تشكيل وجه البالغين نحو الجمال، يتضح أن اضطرابات الفم والوجه مترابطة بشكل عميق مع التنفس ووضعية الفم. تؤكد الأبحاث الحديثة أن تحقيق توازن عضلي بين الشفاه واللسان يمكن أن يغير ملامح الوجه بشكل ملحوظ.</p>
                
                <h2 className="text-2xl font-semibold">وضعية الفم وتأثيرها</h2>
                <p>وفقًا لجوي مولر، مؤسسة العلاج الوظيفي، فإن التنفس عن طريق الفم يؤدي إلى إطالة الوجه، بينما التنفس عن طريق الأنف مع وضعية لسان مناسبة يعيد تشكيل الوجه نحو مظهر أكثر استدارة. الوضعية الصحيحة للسان عند الراحة تؤثر بشكل كبير على شكل الحنك، مما يؤدي إلى تحسين ملامح الوجه.</p>
                
                <h2 className="text-2xl font-semibold">طريقة بوتيكو: ثورة في التنفس</h2>
                <p>تُظهر طريقة بوتيكو أن التنفس الزائد (Hyperventilation) شائع في الحياة العصرية، حيث يتنفس الناس بمعدل أعلى بكثير مما يحتاجون. الشخص الصحي يتنفس بمعدل 2-3 أنفاس في الدقيقة، مما يحافظ على مستويات ثاني أكسيد الكربون في الجسم، وهو أمر ضروري لنقل الأكسجين بفعالية إلى الأعضاء.</p>
                <p>على عكس الاعتقاد الشائع، ثاني أكسيد الكربون ليس مجرد نفاية، بل يلعب دورًا حاسمًا في تحرير الأكسجين من خلايا الدم الحمراء. التنفس العميق المفرط يقلل من هذا الغاز، مما يؤدي إلى نقص الأكسجين في الأعضاء، بما في ذلك الدماغ، وقد يسبب القلق أو الهلوسة.</p>
                
                <h2 className="text-2xl font-semibold">فوائد التنفس عن طريق الأنف</h2>
                <p>التنفس عن طريق الأنف يقلل من التوتر، يحسن التركيز، ويعزز الصحة العامة. كما أنه يساعد في منع انسداد الأنف عن طريق تقليل التنفس الزائد. تدريب الجسم على التنفس بشكل أقل يعزز الهدوء ويحسن وظائف الجهاز العصبي والعضلي.</p>
                
                <h2 className="text-2xl font-semibold">أهمية عضلات الشفاه</h2>
                <p>التنفس عن طريق الفم أثناء النوم قد يسبب الشخير، انقطاع النفس، ومشاكل صحية أخرى مثل أمراض اللثة ورائحة الفم الكريهة. تقوية عضلات الشفاه تلعب دورًا رئيسيًا في إبقاء الفم مغلقًا أثناء النوم، مما يضمن التنفس عن طريق الأنف. الرضاعة الطبيعية للأطفال تعزز قوة هذه العضلات بشكل طبيعي، بينما الرضاعة الصناعية قد تؤدي إلى ضعفها.</p>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>طريقة بوتيكو تُظهر أن التنفس الأقل هو المفتاح للصحة القصوى. من خلال التنفس عن طريق الأنف وتقوية عضلات الشفاه، يمكن تحسين صحة الفم، الوجه، والجسم ككل. إذا كنت تعاني من الشخير أو اضطرابات النوم، استشر مختصًا لتطبيق هذه الطريقة وتحسين جودة حياتك.</p>
                
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