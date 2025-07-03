
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GamepadIcon, PlayCircle, Target, Trophy, Medal, MessageCircle, Gift, Timer } from "lucide-react"
import WhatsAppButton from "@/components/WhatsAppButton"
import Navbar from "@/components/Navbar"
import Breadcrumb from "@/components/Breadcrumb"
import InteractiveSleepChallenge from "@/components/InteractiveSleepChallenge"

export default function SleepChallengePage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-purple-50 to-pink-100 py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[{ label: "تحدي النوم لمدة 14 يوم" }]} 
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">🎮 تحدي النوم الصحي</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  تحدي النوم لمدة 14 يوم: نوم أفضل، حياة أفضل!
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  انضم إلى تحدي النوم لمدة 14 يوماً لتحسين جودة نومك والتخلص من الشخير مع خطة يومية بسيطة
                </p>
              </div>
 
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#interactive-challenge">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full btn-hover-scale">
                    <GamepadIcon className="w-5 h-5 ml-2" />
                    ابدأ التحدي الآن
                  </Button>
                </a>
                <Link href="#how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full btn-hover-scale"
                  >
                    <PlayCircle className="w-5 h-5 ml-2" />
                    كيف يعمل التحدي؟
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/16.jpg"
                  alt="تحدي النوم لمدة 14 يوم"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">نوم هادئ في 14 يوم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sleep Challenge */}
      <section className="py-16 bg-white" id="interactive-challenge">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 ابدأ تحدي النوم لمدة 14 يوم</h2>
            <p className="text-lg text-gray-600 mb-6">
              اتبع خطة يومية بسيطة لتحسين جودة نومك والتخلص من الشخير
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">14</span>
                </div>
                <h3 className="text-blue-800 font-bold text-xl">كيف يعمل التحدي؟</h3>
              </div>
              <p className="text-blue-800 text-base leading-relaxed mb-4">
                لمدة 14 يوماً، ستتلقى مهام يومية بسيطة عبر واتساب لتحسين عادات نومك وتقليل الشخير. المهام تشمل تمارين، نصائح غذائية، وتوصيات للتنفس الصحي.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">سجل في التحدي</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">اتبع المهام اليومية</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">اربح صحتك</p>
                </div>
              </div>
            </div>
          </div>
          <InteractiveSleepChallenge />
        </div>
      </section>

      {/* 14-Day Challenge Plan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">خطة تحدي النوم لمدة 14 يوم</h2>
            <p className="text-lg text-gray-600">مهام يومية بسيطة لتحسين نومك وتقليل الشخير</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { day: 1, task: "سجل عادات نومك: قم بتدوين وقت النوم والاستيقاظ، ولاحظ أي شخير أو انقطاع في التنفس.", color: "purple" },
              { day: 2, task: "جرب تمرين التنفس الأنفي: تنفس من أنفك ببطء لمدة 5 دقائق قبل النوم لتحسين تدفق الهواء.", color: "pink" },
              { day: 3, task: "قلل من الكافيين: تجنب القهوة والشاي بعد الساعة 2 ظهراً لتحسين جودة النوم.", color: "blue" },
              { day: 4, task: "حافظ على وضعية نوم جانبية: استخدم وسادة لدعم النوم على الجانب لتقليل الشخير.", color: "green" },
              { day: 5, task: "قم بتمارين تقوية الفم: كرر حركات فتح وإغلاق الفم 10 مرات لتقوية عضلات الحلق.", color: "yellow" },
              { day: 6, task: "حافظ على رطوبة الغرفة: استخدم مرطب هواء لمنع جفاف الحلق الذي يزيد الشخير.", color: "red" },
              { day: 7, task: "راجع تقدمك: قارن جودة نومك هذا الأسبوع مع الأسبوع الماضي وشاركنا ملاحظاتك.", color: "teal" },
              { day: 8, task: "تجنب الأكل الثقيل قبل النوم: تناول وجبة خفيفة قبل النوم بساعتين على الأقل.", color: "purple" },
              { day: 9, task: "مارس تمرين اللسان: اضغط لسانك على سقف الحلق لمدة 30 ثانية، 5 مرات يومياً.", color: "pink" },
              { day: 10, task: "حافظ على جدول نوم ثابت: اذهب للنوم واستيقظ في نفس الوقت يومياً.", color: "blue" },
              { day: 11, task: "قلل من استخدام الأجهزة الإلكترونية: تجنب الشاشات قبل النوم بساعة لتحسين النوم.", color: "green" },
              { day: 12, task: "جرب تمارين الاسترخاء: قم بتمارين تنفس عميق أو تأمل لمدة 10 دقائق قبل النوم.", color: "yellow" },
              { day: 13, task: "اشرب الماء بكثرة: حافظ على ترطيب جسمك لتقليل جفاف الحلق والشخير.", color: "red" },
              { day: 14, task: "قيّم نتائجك: أجب على استبيان نهاية التحدي للحصول على تقييم نهائي وجوائز.", color: "teal" },
            ].map(({ day, task, color }) => (
              <Card key={`day-${day}`} className={`bg-${color}-50 border-${color}-200 hover:shadow-xl transition-shadow`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-${color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold">{day}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">اليوم {day}</h3>
                  <p className="text-gray-600 text-sm">{task}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">كيف يعمل تحدي النوم؟</h2>
            <p className="text-lg text-gray-600">خطوات بسيطة لتحسين نومك في 14 يوم</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">التسجيل</h3>
              <p className="text-gray-600 text-sm">سجل في التحدي عبر واتساب لتلقي المهام اليومية.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">المهام اليومية</h3>
              <p className="text-gray-600 text-sm">اتبع المهام اليومية البسيطة لتحسين نومك.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">تتبع التقدم</h3>
              <p className="text-gray-600 text-sm">سجل تقدمك يومياً وشاركنا نتائجك عبر واتساب.</p>
            </div>
       
          </div>
        </div>
      </section>



      {/* Success Stories */}




      {/* Join Challenge CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 انضم لتحدي النوم وغيّر حياتك</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            انضم إلى أكثر من 5000 مشارك وبدأ رحلة تحسين نومك مع تحدي النوم لمدة 14 يوم
          </p>
     
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/962796759251?text=أريد الانضمام فوراً لتحدي النوم والاستفادة من العرض المحدود" target="_blank">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                <GamepadIcon className="w-5 h-5 ml-2" />
                انضم للتحدي فوراً
              </Button>
            </a>
            <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن تحدي النوم قبل البدء" target="_blank">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg">
                <MessageCircle className="w-5 h-5 ml-2" />
                استفسر أولاً
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
