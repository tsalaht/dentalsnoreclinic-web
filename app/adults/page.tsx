import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Heart, Brain, Stethoscope, User, CheckCircle, AlertTriangle, Target, FileText, MessageCircle, Calendar, Zap } from "lucide-react"
import WhatsAppButton from "@/components/WhatsAppButton"
import Navbar from "@/components/Navbar"
import Breadcrumb from "@/components/Breadcrumb"
import SimpleRating from "@/components/SimpleRating"
import AdultSnoringAssessment from "@/components/AdultSnoringAssessment"

export default function AdultsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-primary/5 flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: "علاج البالغين" }
            ]} 
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6 relative z-20">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary font-semibold rounded-xl px-4 py-2">علاج البالغين</Badge>
                <h1 className="text-4xl font-bold text-primary leading-tight drop-shadow-sm">
                  علاج شامل للشخير عند البالغين
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  حلول متقدمة ومخصصة لعلاج الشخير وانقطاع التنفس أثناء النوم باستخدام أحدث التقنيات الطبية
                </p>
              </div>
            </div>
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                <Image
                  src="/Artboard 2.svg"
                  alt="علاج الشخير عند البالغين"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain bg-white"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                  <p className="text-sm font-medium text-primary">نتائج فعالة خلال أسابيع</p>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons Section under the grid */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-right relative z-30">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg w-full sm:w-auto rounded-2xl shadow-md">
                  <Calendar className="w-5 h-5 ml-2" />
                  احجز عبر النموذج
                </Button>
              </Link>
              <a href="https://wa.me/962796759251?text=أريد حجز موعد لعلاج الشخير للبالغين" target="_blank">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8 py-4 text-lg w-full sm:w-auto rounded-2xl shadow-md">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  احجز عبر واتساب
                </Button>
              </a>
              <Link href="#assessment">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 text-lg w-full sm:w-auto rounded-2xl shadow-md"
                >
                  <CheckCircle className="w-5 h-5 ml-2" />
                  ابدأ التقييم الذاتي
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems and Risks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                مخاطر الشخير عند البالغين - لا تتجاهل التحذيرات
              </h2>
              <p className="text-lg text-gray-700">
                الشخير ليس مجرد إزعاج ليلي - إنه مؤشر على مشاكل صحية خطيرة قد تهدد حياتك
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mb-12">
              <Card className="bg-secondary/10 border-0 hover:shadow-xl transition-shadow rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">توقف التنفس أثناء النوم</h3>
                  <p className="text-gray-700 text-base mb-4">
                    انقطاع متكرر في التنفس يؤثر على مستويات الأكسجين في الدم
                  </p>
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <p className="text-secondary font-semibold text-sm">خطر حقيقي على الحياة</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary/10 border-0 hover:shadow-xl transition-shadow rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">تأثيره على الطاقة والتركيز</h3>
                  <p className="text-gray-700 text-base mb-4">
                    إرهاق دائم، ضعف في الذاكرة، وصعوبة في التركيز والانتباه
                  </p>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-primary font-semibold text-sm">يؤثر على الإنتاجية</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-accent/10 border-0 hover:shadow-xl transition-shadow rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-accent mb-3">ارتباطه بأمراض القلب</h3>
                  <p className="text-gray-700 text-base mb-4">
                    زيادة خطر الإصابة بارتفاع ضغط الدم وأمراض القلب والسكتات
                  </p>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-accent font-semibold text-sm">مضاعفات خطيرة</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center shadow-md">
              <AlertTriangle className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-3">⚠️ تحذير طبي عاجل</h3>
              <p className="text-secondary mb-4">
                إذا كنت تعاني من الشخير الشديد أو توقف التنفس أثناء النوم، فأنت في خطر حقيقي
              </p>
              <a href="https://wa.me/962796759251?text=أعاني من شخير شديد وأحتاج استشارة عاجلة" target="_blank">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-xl shadow-md">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  احجز استشارة عاجلة
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Methods Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                أحدث تقنيات العلاج المتوفرة للبالغين
              </h2>
              <p className="text-lg text-gray-700">
                نستخدم أحدث التقنيات العالمية لضمان نتائج فعالة وآمنة
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mb-12">
              <Card className="bg-white hover:shadow-xl transition-shadow rounded-2xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-4">العلاج بالليزر</h3>
                  <p className="text-gray-700 mb-4">
                    تقنية متطورة وآمنة لتقليص الأنسجة الرخوة في الحلق
                  </p>
                  <ul className="text-base text-gray-700 space-y-2 mb-6 text-right">
                    <li>✓ بدون جراحة أو تخدير</li>
                    <li>✓ نتائج فورية ومستمرة</li>
                    <li>✓ آمن وبدون ألم</li>
                    <li>✓ نسبة نجاح 90%</li>
                  </ul>
                  <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن العلاج بالليزر" target="_blank">
                    <Button className="bg-accent hover:bg-accent/90 text-white w-full rounded-xl shadow-md">
                      اعرف المزيد
                    </Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-xl transition-shadow rounded-2xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">الأجهزة الفموية</h3>
                  <p className="text-gray-700 mb-4">
                    أجهزة مخصصة لتحسين مجرى التنفس أثناء النوم
                  </p>
                  <ul className="text-base text-gray-700 space-y-2 mb-6 text-right">
                    <li>✓ مصممة خصيصاً لفمك</li>
                    <li>✓ مريحة أثناء النوم</li>
                    <li>✓ فعالة في 85% من الحالات</li>
                    <li>✓ بديل آمن للجراحة</li>
                  </ul>
                  <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن الأجهزة الفموية" target="_blank">
                    <Button className="bg-primary hover:bg-primary/90 text-white w-full rounded-xl shadow-md">
                      احجز قياسات
                    </Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-xl transition-shadow rounded-2xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-4">العلاج الوظيفي للفم</h3>
                  <p className="text-gray-700 mb-4">
                    تمارين وتقنيات لتقوية عضلات الفم والحلق
                  </p>
                  <ul className="text-base text-gray-700 space-y-2 mb-6 text-right">
                    <li>✓ تقوية عضلات التنفس</li>
                    <li>✓ تحسين وضعية اللسان</li>
                    <li>✓ نتائج طويلة المدى</li>
                    <li>✓ طبيعي وبدون أدوية</li>
                  </ul>
                  <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن العلاج الوظيفي" target="_blank">
                    <Button className="bg-accent hover:bg-accent/90 text-white w-full rounded-xl shadow-md">
                      ابدأ التمارين
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Experience Rating */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تقييم تجربة العلاج للبالغين</h2>
            <p className="text-lg text-gray-600">ساعدنا في تحسين خدماتنا المخصصة للبالغين من خلال تقييمك</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <SimpleRating 
              question="ما رأيك في وضوح خيارات العلاج المقدمة؟"
              type="stars"
            />
            <SimpleRating 
              question="هل تشعر بالثقة في أجهزة علاج الشخير؟"
              type="heart"
            />
            <SimpleRating 
              question="هل ستنصح البالغين بزيارة عيادتنا؟"
              type="thumbs"
            />
            <SimpleRating 
              question="كيف تقيم خبرة الطبيب في علاج البالغين؟"
              type="stars"
            />
            <SimpleRating 
              question="هل الأسعار مناسبة لجودة العلاج؟"
              type="heart"
            />
            <SimpleRating 
              question="هل المواعيد المسائية مناسبة لك؟"
              type="thumbs"
            />
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">لماذا تقييمك مهم للبالغين؟</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">تطوير خدمات البالغين</h4>
                  <p className="text-sm text-gray-600">نركز على احتياجات البالغين المختلفة عن الأطفال</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">نتائج أفضل</h4>
                  <p className="text-sm text-gray-600">تحسين فعالية العلاج لضمان نوم أفضل</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 border-t-4 border-yellow-400" id="assessment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔍 تقييم مخصص للبالغين - اكتشف مدى خطورة شخيرك
              </h2>              <p className="text-xl text-gray-700 mb-6">
                استبيان علمي معتمد يعتمد على مقياس Epworth Sleepiness Scale ومعايير طبية دقيقة
              </p>
            </div>

            {/* Interactive Adult Snoring Assessment */}
            <AdultSnoringAssessment />

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ما الذي ستحصل عليه من التقييم؟</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">تقييم فوري</h4>
                  <p className="text-sm text-gray-600">نتيجة دقيقة لمدى خطورة حالتك</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">تقرير مفصل</h4>
                  <p className="text-sm text-gray-600">توصيات طبية مخصصة لحالتك</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">خطة علاج</h4>                  <p className="text-sm text-gray-600">برنامج علاج مخصص لك</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Experience Rating */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">كيف كانت تجربتك مع اختبار البالغين؟</h3>
              <p className="text-gray-600">تقييمك يساعدنا في تحسين أدوات التشخيص المخصصة للبالغين</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <SimpleRating 
                question="هل الأسئلة مناسبة لنمط حياة البالغين؟"
                type="thumbs"
              />
              <SimpleRating 
                question="كيف تقيم دقة التشخيص للبالغين؟"
                type="stars"
              />
              <SimpleRating 
                question="هل التوصيات قابلة للتطبيق في حياتك؟"
                type="heart"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قصص نجاح حقيقية للبالغين</h2>
            <p className="text-lg text-gray-600">تجارب مرضى حقيقيين تم علاجهم بنجاح في عيادتنا</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`testimonial-1-star-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "بعد 10 سنوات من الشخير المزعج والتعب المستمر، وجدت الحل النهائي مع د. مهند. العلاج بالليزر كان مريح وفعال جداً!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">أ</span>
                  </div>
                  <div>
                    <p className="font-semibold">أحمد محمد (45 عاماً)</p>
                    <p className="text-sm text-gray-500">مهندس - عمان</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`testimonial-2-star-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "كنت أعاني من توقف التنفس أثناء النوم وهذا كان يؤثر على عملي وعلاقتي الزوجية. بعد العلاج أصبح نومي مريح جداً."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">م</span>
                  </div>
                  <div>
                    <p className="font-semibold">محمد علي (38 عاماً)</p>
                    <p className="text-sm text-gray-500">طبيب - الزرقاء</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`testimonial-3-star-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>                <p className="text-gray-600 mb-4">
                  "الجهاز الفموي غير حياتي تماماً. أصبحت أنام بهدوء ولا أشعر بالتعب في الصباح. أفراد الأسرة سعداء جداً!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">خ</span>
                  </div>
                  <div>
                    <p className="font-semibold">خالد أحمد (52 عاماً)</p>
                    <p className="text-sm text-gray-500">مدير - إربد</p>
                  </div>
                </div>
              </CardContent>            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Satisfaction Rating */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تقييم رضا المرضى البالغين</h2>
            <p className="text-lg text-gray-600">شاركنا توقعاتك حول نتائج العلاج</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <SimpleRating 
                question="كم تتوقع أن يحسن العلاج من جودة نومك؟"
                type="stars"
              />
              <SimpleRating 
                question="هل تشعر بالراحة مع طرق علاج البالغين؟"
                type="heart"
              />
            </div>
            <div className="space-y-6">              <SimpleRating 
                question="هل تعتقد أن العلاج سيحسن راحتك العائلية؟"
                type="thumbs"
              />
              <SimpleRating 
                question="كيف تقيم التواصل مع فريق علاج البالغين؟"
                type="stars"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200 max-w-lg mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-3">شكراً لتقييمك!</h3>
              <p className="text-sm text-gray-600 mb-4">
                تقييماتك تساعدنا في تطوير خدمات أفضل للبالغين المصابين بالشخير
              </p>
              <a href="https://wa.me/962796759251?text=أريد حجز استشارة مخصصة للبالغين" target="_blank">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  احجز استشارة للبالغين الآن
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">لا تدع الشخير يدمر صحتك وحياتك</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            احجز استشارتك اليوم واكتشف العلاج المناسب لحالتك مع أفضل طبيب متخصص في الأردن
          </p>          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 ml-2" />
                احجز عبر النموذج
              </Button>
            </Link>            <a href="https://wa.me/962796759251?text=أريد حجز استشارة لعلاج الشخير للبالغين" target="_blank">
              <Button size="lg" variant="outline" className="border-white text-blue-500 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز عبر واتساب
              </Button>
            </a>
          </div>
        </div>
      </section>      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}