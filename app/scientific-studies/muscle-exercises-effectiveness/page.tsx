"use client"

import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, CheckCircle, Calendar } from "lucide-react"

export default function MuscleExercisesEffectivenessPage() {
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
              فعالية التمارين العضلية في علاج اضطرابات النوم
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto break-words">
              نظرة علمية على كيفية تحسين التمارين العضلية لعضلات الفم والحلق جودة النوم وتقليل الشخير.
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">دور التمارين العضلية في علاج الشخير وتوقف التنفس أثناء النوم</h2>
                <p className="text-primary/90 text-sm sm:text-lg leading-relaxed break-words">
                  تشير الدراسات العلمية إلى أن التمارين العضلية للفم والحلق (Myofunctional Therapy) تلعب دورًا فعالًا في تقليل الشخير وتحسين جودة النوم لدى الأشخاص الذين يعانون من اضطرابات التنفس أثناء النوم، مثل توقف التنفس الانسدادي أثناء النوم (OSA). هذه التمارين تعزز قوة عضلات مجرى الهواء العلوي، مما يقلل من انسداده أثناء النوم.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-base sm:text-lg">تقليل شدة الشخير</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      أظهرت دراسة منهجية أن التمارين العضلية أدت إلى انخفاض بنسبة 51% في شدة الشخير لدى المرضى بعد ممارسة التمارين لمدة 3 أشهر، مما يساهم في تحسين جودة النوم للمريض وشريكه.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent text-base sm:text-lg">تحسين توقف التنفس أثناء النوم</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      وجدت الأبحاث أن التمارين العضلية قللت من مؤشر توقف التنفس ونقص التنفس (AHI) بنسبة تصل إلى 31% في الحالات الخفيفة إلى المتوسطة من توقف التنفس الانسدادي، مما يجعلها علاجًا غير جراحي فعال.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-base sm:text-lg">سهولة التطبيق والأمان</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      تعتبر التمارين العضلية خيارًا غير جراحي، آمن، ومنخفض التكلفة يمكن للمرضى تطبيقه بسهولة في المنزل. يمكن دمجها مع علاجات أخرى مثل الأجهزة الفموية لتحقيق نتائج أفضل، مع مستويات عالية من التزام المرضى.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/962796759251?text=أريد استشارة حول التمارين العضلية لعلاج الشخير"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-primary text-white px-4 py-2 text-sm sm:text-base">
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