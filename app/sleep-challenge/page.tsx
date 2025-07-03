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
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: "تحدي النوم التفاعلي" }
            ]} 
          />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">🎮 تحدي النوم الصحي</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  اكتشف جودة نومك مع تحدي النوم التفاعلي!
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  تحدي ممتع وتفاعلي لتقييم جودة نومك، تحسين عاداتك الليلية، والفوز بجوائز حقيقية
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">5000+</div>
                  <div className="text-sm text-gray-600">مشارك</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-pink-600">14</div>
                  <div className="text-sm text-gray-600">يوم تحدي</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">90%</div>
                  <div className="text-sm text-gray-600">نسبة تحسن</div>
                </div>
              </div>              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#interactive-challenge">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full btn-hover-scale">
                    <GamepadIcon className="w-5 h-5 ml-2" />
                    ابدأ التحدي التفاعلي
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
                  src="/placeholder.svg?height=500&width=600"
                  alt="تحدي النوم التفاعلي والممتع"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">نوم أفضل في 14 يوم</p>
                </div>
              </div>
            </div>
          </div>
        </div>      </section>      {/* Interactive Sleep Challenge */}
      <section className="py-16 bg-white" id="interactive-challenge">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 ابدأ تحدي النوم التفاعلي</h2>
            <p className="text-lg text-gray-600 mb-6">
              جاوب على 6 أسئلة بسيطة لتحصل على تقييم أولي دقيق لجودة نومك
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                <h3 className="text-blue-800 font-bold text-xl">كيف يعمل التقييم؟</h3>
              </div>
              <p className="text-blue-800 text-base leading-relaxed mb-4">
                أجب على 6 أسئلة سريعة حول نومك وتنفسك لتحصل على تقييم مخصص وتوصيات لتحسين جودة نومك. التقييم يستغرق دقيقتين فقط!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">أجب على الأسئلة</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">احصل على التقييم</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">اتبع التوصيات</p>
                </div>
              </div>
            </div>
          </div>
          <InteractiveSleepChallenge />
        </div>
      </section>

      {/* Challenge Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">اختر نوع التحدي المناسب لك</h2>
            <p className="text-lg text-gray-600">تحديات مختلفة لأعمار وحالات متنوعة</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-50 border-purple-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">تحدي جودة النوم</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  اختبار سريع وممتع لتقييم مدى جودة نومك وأنماط التنفس الليلي
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">المدة</span>
                    <span className="font-semibold text-purple-600">10 دقائق</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">الأسئلة</span>
                    <span className="font-semibold text-purple-600">20 سؤال</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">النتيجة</span>
                    <span className="font-semibold text-purple-600">فورية</span>
                  </div>
                </div>                
                <a href="#interactive-challenge" className="w-full">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3">
                    <Target className="w-4 h-4 ml-2" />
                    ابدأ التحدي التفاعلي
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-pink-50 border-pink-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">تحدي 14 يوم</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  النوم بدون تنفس فموي لمدة 14 يوم مع تتبع التقدم اليومي والحصول على جوائز
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">المدة</span>
                    <span className="font-semibold text-pink-600">14 يوم</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">التتبع</span>
                    <span className="font-semibold text-pink-600">يومي</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">الجوائز</span>
                    <span className="font-semibold text-pink-600">نعم</span>
                  </div>
                </div>
                
                <a href="https://wa.me/962796759251?text=أريد الانضمام لتحدي النوم الصحي لمدة 14 يوم" target="_blank" className="w-full">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full py-3">
                    <Trophy className="w-4 h-4 ml-2" />
                    انضم للتحدي
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GamepadIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">تحدي العائلة</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  تحدي جماعي للعائلة لتحسين عادات النوم الصحية لجميع أفراد الأسرة
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">المشاركين</span>
                    <span className="font-semibold text-blue-600">2-6 أفراد</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">المدة</span>
                    <span className="font-semibold text-blue-600">30 يوم</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">الجوائز</span>
                    <span className="font-semibold text-blue-600">مضاعفة</span>
                  </div>
                </div>
                
                <a href="https://wa.me/962796759251?text=أريد الانضمام لتحدي العائلة للنوم الصحي" target="_blank" className="w-full">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3">
                    <GamepadIcon className="w-4 h-4 ml-2" />
                    ابدأ مع العائلة
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">كيف يعمل تحدي النوم؟</h2>
            <p className="text-lg text-gray-600">خطوات بسيطة للوصول لنوم أفضل</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">التسجيل</h3>
              <p className="text-gray-600 text-sm">سجل في التحدي عبر واتساب واختر نوع التحدي المناسب</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">التقييم</h3>
              <p className="text-gray-600 text-sm">أجب على أسئلة التقييم لتحديد نقطة البداية وهدفك</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">التتبع اليومي</h3>
              <p className="text-gray-600 text-sm">سجل تقدمك يومياً واحصل على نصائح مخصصة</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">الجوائز</h3>
              <p className="text-gray-600 text-sm">احصل على جوائز حقيقية عند تحقيق أهدافك</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎁 نظام المكافآت والجوائز</h2>
            <p className="text-lg text-gray-600">احصل على جوائز حقيقية مقابل تحسين جودة نومك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-yellow-50 border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Medal className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">المستوى البرونزي</h3>
                <p className="text-gray-600 text-sm mb-6">إكمال 7 أيام متتالية</p>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div>✨ استشارة مجانية (15 دقيقة)</div>
                  <div>📚 كتيب تعليمي مجاني</div>
                  <div>🏆 شهادة إنجاز</div>
                </div>
                
                <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 w-full">
                  تفاصيل الجائزة
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-300 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">المستوى الفضي</h3>
                <p className="text-gray-600 text-sm mb-6">إكمال 14 يوم متتالية</p>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div>⚡ فحص شامل مجاني</div>
                  <div>🎯 خطة علاج مخصصة</div>
                  <div>📱 متابعة لمدة شهر</div>
                </div>
                
                <Button variant="outline" className="border-gray-500 text-gray-600 hover:bg-gray-50 w-full">
                  تفاصيل الجائزة
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-yellow-100 border-yellow-300 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">المستوى الذهبي</h3>
                <p className="text-gray-600 text-sm mb-6">إكمال 30 يوم + تحسن 80%</p>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div>🏅 خصم 50% على أي علاج</div>
                  <div>🎁 جهاز فموي مجاني</div>
                  <div>👨‍⚕️ متابعة مجانية لسنة</div>
                </div>
                
                <Button variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 w-full">
                  تفاصيل الجائزة
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 جائزة خاصة للعائلات</h3>
            <p className="text-gray-600 mb-6">
              العائلة التي تكمل التحدي بنجاح تحصل على فحص مجاني لجميع أفراد الأسرة + خصم 70% على العلاج
            </p>
            <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن جائزة العائلة" target="_blank">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Gift className="w-5 h-5 ml-2" />
                تفاصيل جائزة العائلة
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قصص نجاح من التحدي</h2>
            <p className="text-lg text-gray-600">مشاركون حققوا نتائج مذهلة</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`story-1-star-rating-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "أكملت تحدي 14 يوم وتحسنت جودة نومي بشكل لا يصدق! حصلت على فحص مجاني وخطة علاج مخصصة."
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">ل</span>
                  </div>
                  <div>
                    <p className="font-semibold">ليلى أحمد</p>
                    <p className="text-sm text-gray-500">فائزة بالمستوى الفضي</p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-purple-800 font-semibold text-sm">تحسن 85% في جودة النوم</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`story-2-star-rating-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "تحدي العائلة كان رائع! شاركت مع زوجتي وأطفالي، وحصلنا على فحص مجاني للكل وخصم 70%."
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">م</span>
                  </div>
                  <div>
                    <p className="font-semibold">محمد خالد</p>
                    <p className="text-sm text-gray-500">فائز بجائزة العائلة</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-blue-800 font-semibold text-sm">عائلة كاملة من 4 أفراد</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`story-3-star-rating-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "أكملت 30 يوم وحصلت على المستوى الذهبي! الآن أنام بدون شخير تماماً والجهاز المجاني رائع."
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold">ع</span>
                  </div>
                  <div>
                    <p className="font-semibold">عمر سالم</p>
                    <p className="text-sm text-gray-500">فائز بالمستوى الذهبي</p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3">
                  <p className="text-yellow-800 font-semibold text-sm">توقف الشخير نهائياً</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Challenge Stats */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔥 إحصائيات التحدي المباشرة</h2>
            <p className="text-xl text-purple-100">مشاركون حول العالم يحسنون نومهم الآن</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,247</div>
              <div className="text-purple-200">مشارك نشط</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">892</div>
              <div className="text-purple-200">أكمل 14 يوم</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">156</div>
              <div className="text-purple-200">وصل للذهبي</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-purple-200">نسبة التحسن</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Challenge CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 انضم للتحدي وغيّر حياتك</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            أكثر من 5000 شخص بدأوا رحلة تحسين النوم معنا. ابدأ اليوم واحصل على نوم أفضل وجوائز حقيقية
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">⏰ عرض محدود الوقت</h3>
            <p className="text-gray-600 mb-4">
              المشتركين الجدد هذا الشهر يحصلون على استشارة مجانية إضافية + كتيب تعليمي
            </p>
            <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
              <Timer className="w-5 h-5" />
              <span>ينتهي العرض في 15 يوم</span>
            </div>
          </div>

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
        </div>      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
