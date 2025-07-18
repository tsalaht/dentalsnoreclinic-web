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
              <img src="/blog3.jpg" alt="الحساسية وصحة الأسنان عند الأطفال" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">الحساسية وصحة الأسنان عند الأطفال</h1>
              <p className="text-gray-700 text-lg mb-4">اكتشف كيف تؤثر الحساسية على التنفس وصحة الأسنان عند الأطفال، وكيفية الوقاية من المضاعفات المرتبطة بها.</p>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>إذا كان طفلك يعاني من التهابات متكررة في اللوزتين أو اللحميات الأنفية، فقد يؤثر ذلك على مجرى التنفس العلوي، مما يدفعه للتنفس من الفم بدلاً من الأنف. التنفس من الفم يزيد من مخاطر الإصابة بالالتهابات والأمراض بسبب دخول هواء جاف وبارد وغير منقى إلى الجهاز التنفسي والهضمي.</p>
                
                <h2 className="text-2xl font-semibold">تأثير الحساسية على التنفس</h2>
                <p>الحساسية تجاه أطعمة معينة قد تؤدي إلى تهيج جهاز المناعة وإفراز أجسام مضادة، مما يسبب تضخم اللوزتين أو اللحميات الأنفية. هذا يؤثر على طريقة التنفس، وقد يتسبب في انسداد جزئي أو كلي لمجرى الهواء. أعراض الحساسية تشمل الطفح الجلدي، الحكة، الاحمرار، العطاس، سيلان الأنف، انتفاخ أسفل العينين، أو حتى انقطاع التنفس الإنسدادي أثناء النوم.</p>
                
                <h2 className="text-2xl font-semibold">العلاقة مع صحة الأسنان</h2>
                <p>التنفس من الفم الناتج عن الحساسية يؤدي إلى جفاف اللعاب، وهو واقي طبيعي ضد نمو البكتيريا في الفم. نقص اللعاب يزيد من مخاطر تسوس الأسنان وأمراض اللثة. كما أن التنفس من الفم في سن مبكر يؤثر على استقامة الأسنان، مما قد يسبب اعوجاجها، استطالة الفك العلوي، وآلام مفصل الفك بسبب ارتخاء اللسان عن موضعه الصحيح.</p>
                
                <h2 className="text-2xl font-semibold">مضاعفات التنفس من الفم</h2>
                <p>التنفس من الفم أثناء النوم قد يؤدي إلى اضطرابات مثل الشخير أو انقطاع التنفس الإنسدادي، مما يجعل الطفل يستيقظ متعبًا، مع انخفاض في التركيز والأداء اليومي، وزيادة في فرط الحركة. هذه الحالة قد تؤثر سلبًا على جودة النوم والصحة العامة.</p>
                
                <h2 className="text-2xl font-semibold">الحلول والوقاية</h2>
                <ul className="list-disc pr-6">
                  <li>إجراء فحوصات مخبرية لتحديد الأطعمة المسببة للحساسية وتجنبها.</li>
                  <li>استبدال الأطعمة المسببة للحساسية ببدائل غذائية تحقق نفس الفائدة الغذائية.</li>
                  <li>مراقبة طريقة تنفس الطفل واستشارة مختص لعلاج الحساسية أو اضطرابات التنفس.</li>
                  <li>اتباع برنامج تمرينات للوجه والفم لتقوية العضلات وتدريب الطفل على التنفس الصحيح من الأنف.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold">الخلاصة</h2>
                <p>الحساسية قد تؤدي إلى اضطرابات التنفس والتأثير على صحة الأسنان والفم لدى الأطفال. من المهم مراقبة أعراض الحساسية وطريقة التنفس، واللجوء إلى استشارة أخصائي تغذية أو طبيب مختص لتقديم حلول شاملة. الحفاظ على التنفس من الأنف وتقوية عضلات الفم يمكن أن يحد من المضاعفات ويحسن صحة الطفل العامة.</p>
                
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