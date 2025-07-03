import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Brain, Stethoscope, Baby, User, CheckCircle, AlertTriangle, Target, MessageCircle, Calendar, Clock, Moon, Play, PlayCircle } from "lucide-react"
import WhatsAppButton from "@/components/WhatsAppButton"
import Navbar from "@/components/Navbar"
import Breadcrumb from "@/components/Breadcrumb"

export default function ChildrenPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-green-50 to-emerald-100 py-12 overflow-hidden">
        {/* Enhanced floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-float morphing-shape"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-full blur-3xl animate-bounce-slow morphing-shape"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-scale-pulse morphing-shape"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: "علاج الأطفال" }
            ]} 
          />
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 relative z-20">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 animate-fade-in-up">علاج الأطفال</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  علاج الشخير والتنفس الفموي عند الأطفال
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  رعاية متخصصة للنمو الصحي والنوم المريح لطفلك باستخدام أحدث التقنيات الآمنة
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 animate-fade-in-up card-hover-lift" style={{animationDelay: '0.4s'}}>
                <h3 className="font-bold text-lg text-yellow-800 mb-3">
                  🎁 عرض خاص للأطفال
                </h3>
                <p className="text-yellow-700 mb-3">استشارة مجانية أولى للأطفال دون سن 12 عاماً</p>
                <a href="https://wa.me/962796759251?text=أريد الاستفادة من العرض المجاني للأطفال" target="_blank">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto px-6 py-3 btn-hover-scale">
                    استفد من العرض
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-up z-10" style={{animationDelay: '0.5s'}}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 card-hover-lift">
                <Image
                  src="/baby.png?height=400&width=500"
                  alt="طفل يتنفس بشكل صحي أثناء النوم"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">نمو صحي وطبيعي</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Buttons Section under the grid */}
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-right animate-fade-in-up relative z-30" style={{animationDelay: '0.3s'}}>
              <Link href="/contact" className="group">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <Calendar className="w-5 h-5 ml-2" />
                  احجز عبر النموذج
                </Button>
              </Link>
              <a href="https://wa.me/962796759251?text=أريد حجز موعد لطفلي لعلاج الشخير والتنفس الفموي" target="_blank" className="group">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  احجز عبر واتساب
                </Button>
              </a>
              <Link href="#assessment" className="group">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 ml-2" />
                  تقييم سريع للطفل
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Children's Snoring is Dangerous */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                لماذا الشخير عند الأطفال خطير جداً؟
              </h2>
              <p className="text-lg text-gray-600">
                الشخير عند الأطفال ليس أمراً طبيعياً - إنه مؤشر على مشاكل خطيرة تؤثر على نموهم
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Baby className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">تأثيره على النمو</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    يؤثر على إفراز هرمونات النمو الطبيعية أثناء النوم العميق
                  </p>
                  <div className="bg-red-100 rounded-lg p-3">
                    <p className="text-red-800 font-semibold text-sm">نمو متأخر وقصر القامة</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">تشوهات الوجه والفك</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    التنفس الفموي المستمر يؤثر على شكل الوجه والفكين
                  </p>
                  <div className="bg-orange-100 rounded-lg p-3">
                    <p className="text-orange-800 font-semibold text-sm">تغيرات دائمة في الوجه</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">ضعف الأداء المدرسي</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    صعوبة في التركيز والذاكرة وضعف في الدرجات المدرسية
                  </p>
                  <div className="bg-purple-100 rounded-lg p-3">
                    <p className="text-purple-800 font-semibold text-sm">تأثير على المستقبل</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compact Warning Banner */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-r-4 border-amber-500 rounded-lg p-3 shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-amber-800 mb-1">تحذير مهم للوالدين</h3>
                  <p className="text-amber-700 text-xs leading-relaxed">
                    التدخل المبكر ضروري لمنع المضاعفات الخطيرة على نمو الطفل
                  </p>
                </div>
                <a href="https://wa.me/962796759251?text=طفلي يعاني من الشخير وأحتاج استشارة عاجلة" target="_blank">
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 text-xs flex-shrink-0">
                    <MessageCircle className="w-3 h-3 ml-1" />
                    استشارة سريعة
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Methods for Children */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                طرق العلاج المبتكرة والآمنة للأطفال
              </h2>
              <p className="text-lg text-gray-600">
                علاجات مخصصة للأطفال، آمنة ومريحة ومصممة لضمان النمو الطبيعي
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">أجهزة Myobrace</h3>
                  <p className="text-gray-600 mb-4">
                    أجهزة متطورة لتصحيح الفك والأسنان وتحسين التنفس
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ آمنة 100% للأطفال</li>
                    <li>✓ مريحة أثناء النوم</li>
                    <li>✓ تصحح شكل الفك طبيعياً</li>
                    <li>✓ تحسن التنفس فوراً</li>
                  </ul>
                  <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن أجهزة Myobrace للأطفال" target="_blank">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                      اعرف المزيد
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Baby className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">تمارين الوجه والفم</h3>
                  <p className="text-gray-600 mb-4">
                    تمارين ممتعة وفعالة لتحسين التنفس الأنفي
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ تقوي عضلات الفم</li>
                    <li>✓ تمارين على شكل ألعاب</li>
                    <li>✓ يمكن للطفل عملها في البيت</li>
                    <li>✓ نتائج سريعة ومرئية</li>
                  </ul>
                  <a href="https://wa.me/962796759251?text=أريد تعلم تمارين الوجه والفم للأطفال" target="_blank">
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                      تعلم التمارين
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">علاج مشاكل الأنف</h3>
                  <p className="text-gray-600 mb-4">
                    تصحيح التضخم اللوزي ومشاكل الجيوب الأنفية
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ بدون جراحة في معظم الحالات</li>
                    <li>✓ علاج الحساسية المسببة</li>
                    <li>✓ تنظيف مجرى التنفس</li>
                    <li>✓ متابعة دورية مستمرة</li>
                  </ul>
                  <a href="https://wa.me/962796759251?text=طفلي يعاني من مشاكل في الأنف وأريد فحص" target="_blank">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                      احجز فحص أنف
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">علاج مخصص حسب عمر الطفل</h2>
            <p className="text-lg text-gray-600">لكل مرحلة عمرية احتياجاتها الخاصة في العلاج</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-pink-50 border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الرضع (6 شهور - 3 سنوات)</h3>
                <p className="text-gray-600 mb-4">تقييم وعلاج مبكر لمشاكل التنفس</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-right">
                  <li>• فحص شامل للمجرى التنفسي</li>
                  <li>• تقييم وضعية النوم</li>
                  <li>• نصائح للرضاعة الطبيعية</li>
                  <li>• متابعة النمو الطبيعي</li>
                </ul>
                <a href="https://wa.me/962796759251?text=أريد فحص طفلي الرضيع للتنفس" target="_blank">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full">
                    احجز للرضيع
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الأطفال (3 - 8 سنوات)</h3>
                <p className="text-gray-600 mb-4">العمر الذهبي للتدخل والعلاج الفعال</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-right">
                  <li>• أجهزة Myobrace المناسبة</li>
                  <li>• تمارين الوجه التفاعلية</li>
                  <li>• تصحيح عادات النوم</li>
                  <li>• تقييم النمو والتطور</li>
                </ul>
                <a href="https://wa.me/962796759251?text=أريد علاج طفلي من عمر 3-8 سنوات" target="_blank">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    ابدأ العلاج
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">المراهقين (8 - 16 سنة)</h3>
                <p className="text-gray-600 mb-4">علاج متقدم لمرحلة ما قبل البلوغ</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-right">
                  <li>• أجهزة متقدمة ومريحة</li>
                  <li>• تصحيح مشاكل الأسنان</li>
                  <li>• تحسين الثقة بالنفس</li>
                  <li>• متابعة طويلة المدى</li>
                </ul>
                <a href="https://wa.me/962796759251?text=ابني مراهق ويعاني من مشاكل في التنفس" target="_blank">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    استشارة مراهقين
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 border-t-4 border-green-400" id="assessment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔍 تقييم سريع لطفلك - اكتشف المشكلة مبكراً
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                استبيان مخصص للأطفال يساعدك على تحديد ما إذا كان طفلك يحتاج لعلاج
              </p>
            </div>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-green-200 mb-8">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">اختبار التنفس للأطفال</h3>
                <p className="text-gray-600 mb-6">تقييم مخصص لاضطرابات التنفس والنوم عند الأطفال والرضع</p>
                <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>3 دقائق</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>12 سؤال</span>
                  </div>
                </div>
                <a href="https://wa.me/962796759251?text=أريد إجراء اختبار التنفس المفصل لطفلي" target="_blank" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                    ابدأ تقييم الطفل
                  </Button>
                </a>
              </CardContent>
            </Card>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">علامات تحتاج انتباهك فوراً</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">التنفس الفموي</h4>
                  <p className="text-sm text-gray-600">الطفل يتنفس من فمه باستمرار</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Moon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">نوم متقطع</h4>
                  <p className="text-sm text-gray-600">الطفل يستيقظ كثيراً أثناء الليل</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">تراجع الدرجات</h4>
                  <p className="text-sm text-gray-600">ضعف في الانتباه والتحصيل المدرسي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قصص نجاح للأطفال</h2>
            <p className="text-lg text-gray-600">أطفال تحسنت حالتهم بعد العلاج في عيادتنا</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`child-testimonial-1-star-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "ابنتي سارة (6 سنوات) كانت تعاني من التنفس الفموي وضعف في الدرجات. بعد علاج Myobrace تحسنت حالتها جداً!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">ف</span>
                  </div>
                  <div>
                    <p className="font-semibold">فاطمة أحمد</p>
                    <p className="text-sm text-gray-500">والدة سارة</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`child-testimonial-2-star-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "ابني محمد (8 سنوات) كان يشخر بقوة ولا يستطيع التركيز في المدرسة. الآن ينام بهدوء ودرجاته ممتازة."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">ل</span>
                  </div>
                  <div>
                    <p className="font-semibold">ليلى خالد</p>
                    <p className="text-sm text-gray-500">والدة محمد</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`child-testimonial-3-star-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>                <p className="text-gray-600 mb-4">
                  "ابني أحمد (4 سنوات) كان وجهه يتغير بسبب التنفس الفموي. العلاج أوقف التشوه وعاد وجهه لطبيعته."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">ع</span>
                  </div>
                  <div>
                    <p className="font-semibold">عبد الله محمود</p>
                    <p className="text-sm text-gray-500">والد أحمد</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Video */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">شاهد: كيف تعمل تقنية Myobrace للأطفال</h2>
              <p className="text-lg text-gray-600">شرح مفصل وبسيط عن كيفية عمل العلاج</p>
            </div>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-800 mb-2">تقنية Myobrace للأطفال</h3>
                      <p className="text-green-700">شرح مفصل عن كيفية عمل التقنية</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded">
                    12:45 دقيقة
                  </div>
                </div>
                <div className="p-6 text-center">
                  <a href="https://wa.me/962796759251?text=أريد مشاهدة فيديو تقنية Myobrace للأطفال" target="_blank">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <PlayCircle className="w-5 h-5 ml-2" />
                      شاهد الفيديو التعليمي
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">لا تنتظروا - صحة طفلكم أهم من كل شيء</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            احجزوا الآن واحصلوا على استشارة مجانية للأطفال دون سن 12 عاماً
          </p>          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 ml-2" />
                احجز عبر النموذج
              </Button>
            </Link>            <a href="https://wa.me/962796759251?text=أريد حجز موعد مجاني لطفلي لعلاج الشخير" target="_blank">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز عبر واتساب
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
