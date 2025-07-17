"use client"

import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, CheckCircle, Calendar } from "lucide-react"

export default function LaserEffectivenessPage() {
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
              فعالية أجهزة الليزر في علاج الشخير
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              نظرة علمية على كيفية استخدام الليزر كعلاج غير جراحي لتقليل الشخير وتحسين جودة النوم.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">دور الليزر في علاج الشخير واضطرابات النوم</h2>
                <p className="text-primary/90 text-sm sm:text-lg leading-relaxed">
                  تشير الأبحاث العلمية إلى أن العلاج بالليزر، مثل تقنية NightLase وجراحة الحلق بمساعدة الليزر (LAUP)، يُعد خيارًا فعالًا وغير جراحي لتقليل الشخير وتحسين جودة النوم. يعمل الليزر على شد الأنسجة الرخوة في سقف الحلق واللهاة، مما يقلل من الاهتزازات المسببة للشخير ويحسن تدفق الهواء.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-base sm:text-lg">تقليل شدة الشخير</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      أظهرت دراسات أن العلاج بالليزر (مثل NightLase) قلل من شدة الشخير بنسبة تصل إلى 70% لدى المرضى بعد ثلاث جلسات علاجية، مع تحسن ملحوظ في جودة النوم للمريض وشريكه <sup>[1,3]</sup>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent text-base sm:text-lg">تحسين تدفق الهواء</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      تقنيات الليزر مثل جراحة الحلق بمساعدة الليزر (LAUP) تعمل على تحسين تدفق الهواء في مجرى التنفس العلوي، مما يقلل من توقف التنفس أثناء النوم في الحالات الخفيفة إلى المتوسطة بنسبة تصل إلى 60% <sup>[2]</sup>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-base sm:text-lg">الأمان وسهولة العلاج</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      العلاج بالليزر غير مؤلم تقريبًا، لا يتطلب تخديرًا عامًا أو فترة نقاهة طويلة، ويمكن تكراره عند الحاجة. يتميز بمعدلات رضا عالية بين المرضى بسبب فعاليته وراحته <sup>[1,2,3]</sup>.
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
                      <p className="font-medium">Kotecha, B., et al. (2023).</p>
                      <p className="italic">Non-ablative laser therapy for snoring and obstructive sleep apnea.</p>
                      <p><i>Journal of Clinical Sleep Medicine</i>.</p>
                      <a
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9879649/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://pmc.ncbi.nlm.nih.gov/articles/PMC9879649/
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-medium">[2]</span>
                    <div>
                      <p className="font-medium">Camacho, M., et al. (2022).</p>
                      <p className="italic">Laser-assisted uvulopalatoplasty for snoring: A systematic review.</p>
                      <p><i>European Archives of Oto-Rhino-Laryngology</i>.</p>
                      <a
                        href="https://link.springer.com/article/10.1007/s00405-022-07539-9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://link.springer.com/article/10.1007/s00405-022-07539-9
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-medium">[3]</span>
                    <div>
                      <p className="font-medium">Stupak, H. D. (2023).</p>
                      <p className="italic">Efficacy of Er:YAG laser therapy (NightLase) in the treatment of snoring.</p>
                      <p><i>Lasers in Medical Science</i>.</p>
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/37579131/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://pubmed.ncbi.nlm.nih.gov/37579131/
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/962796759251?text=أريد استشارة حول علاج الشخير بالليزر"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-primary text-white px görül

System: -4 py-2 text-sm sm:text-base">
                    <Calendar className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
                <Link href="/scientific-studies">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 text-sm sm:text-base"
                  >
                    <BookOpen className="w-4 h-4 ml-2" />
                    المزيد من الدراسات
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}