"use client"

import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, CheckCircle, Calendar } from "lucide-react"

export default function MiscStudiesPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-3xl lg:max-w-6xl">
          <div className="mb-8">
            <Link href="/scientific-studies" className="text-primary hover:underline text-base sm:text-lg">
              ← العودة للدراسات العلمية
            </Link>
          </div>
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">الدراسات العلمية</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              دراسات متفرقة حول اضطرابات النوم
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              نظرة شاملة على أحدث الأبحاث حول أسباب وعلاج اضطرابات النوم والشخير، بما في ذلك نمط الحياة والتدخلات الطبية.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-3xl lg:max-w-6xl">
          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-4 sm:p-6 lg:p-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">أبحاث حول اضطرابات النوم والشخير</h2>
                <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
                  تستعرض هذه الصفحة مجموعة من الدراسات العلمية التي تتناول أسباب اضطرابات النوم، بما في ذلك تأثير نمط الحياة، العوامل الوراثية، والتدخلات العلاجية المبتكرة. كما تشمل الأبحاث دور طب الأسنان في الكشف المبكر عن مشاكل التنفس الفموي وتأثيرها على نمو الفكين.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-base sm:text-lg">تأثير نمط الحياة</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      أظهرت الدراسات أن تحسين نمط الحياة، مثل تقليل الوزن وممارسة الرياضة بانتظام، يمكن أن يقلل من شدة الشخير وتوقف التنفس أثناء النوم بنسبة تصل إلى 40% في الحالات الخفيفة إلى المتوسطة <sup>[1]</sup>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent text-base sm:text-lg">التنفس الفموي ونمو الفكين</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      يمكن لطبيب الأسنان، خاصة المتخصص في تقويم الأسنان، اكتشاف علامات التنفس الفموي مبكرًا. التنفس الفموي غير المصحح يؤدي إلى تطور غير طبيعي في الأسنان والفكين، مما يؤثر على صحة الجهاز الفموي الوجهي. التدخل المبكر يمنع مشاكل أكثر تعقيدًا في المستقبل <sup>[2]</sup>. تشير الدراسات إلى أن أطباء الأسنان يلعبون دورًا حاسمًا في تحديد مشاكل التنفس الفموي لدى الأطفال، مما يستلزم التعاون مع أخصائيي الأنف والأذن والحنجرة لتقديم تدخلات فعالة <sup>[3]</sup>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-base sm:text-lg">العلاجات المبتكرة</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      تشمل العلاجات الحديثة استخدام تقنيات التنبيه العصبي وأجهزة فموية مخصصة لتحسين تدفق الهواء أثناء النوم، مما يوفر خيارات غير جراحية فعالة لتقليل الشخير وتحسين جودة النوم <sup>[1]</sup>. كما أظهرت الأبحاث أن التعاون بين أطباء الأسنان وأخصائيي النوم يمكن أن يعزز فعالية هذه العلاجات من خلال تصميم أجهزة فموية مخصصة تتناسب مع احتياجات المريض <sup>[4]</sup>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-primary border-b-2 border-primary/20 pb-2">المراجع</h3>
                <ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-medium">[1]</span>
                    <div>
                      <p className="font-medium">Alkhalil, M., & Alshammari, A. (2024).</p>
                      <p className="italic">Sleep-Disordered Breathing: Advances in Diagnosis and Management.</p>
                      <p><i>Sleep Medicine: X</i>.</p>
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S2667343624000027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://www.sciencedirect.com/science/article/pii/S2667343624000027
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-medium">[2]</span>
                    <div>
                      <p className="font-medium">The impact of mouth breathing on dentofacial development. (2022).</p>
                      <p className="italic">Study on the effects of uncorrected mouth breathing on dental and facial development.</p>
                      <a
                        href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.929165/full"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.929165/full
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-medium">[3]</span>
                    <div>
                      <p className="font-medium">Rose, E., & Schessl, J. (2014).</p>
                      <p className="italic">The role of orthodontists in diagnosing airway problems.</p>
                      <p><i>Journal of Orofacial Orthopedics</i>.</p>
                      <a
                        href="https://www.ncbi.nlm.nih.gov/pubmed/25206135"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://www.ncbi.nlm.nih.gov/pubmed/25206135
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-medium">[4]</span>
                    <div>
                      <p className="font-medium">Klineberg, I., & Eckhardt, A. (2024).</p>
                      <p className="italic">Oral Health Implications of Obstructive Sleep Apnea: A Literature Review.</p>
                      <p><i>Biomedicines</i>.</p>
                      <a
                        href="https://www.mdpi.com/2227-9059/12/7/1382"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://www.mdpi.com/2227-9059/12/7/1382
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" >
                <a
                  href="https://wa.me/9620797377375?text=أريد استشارة حول اضطرابات النوم"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-primary text-white px-4 py-2 text-sm sm:text-base">
                    <Calendar className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
         
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}