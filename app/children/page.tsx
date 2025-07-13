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
            </div>

            <div className="relative animate-fade-in-up z-10" style={{animationDelay: '0.5s'}}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 card-hover-lift">
                <Image
                  src="/baby.png?height=400&width=500"
                  alt="طفل يتنفس بشكل صحي أثناء النوم"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                       loading="lazy"
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
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 animate-fade-in-down">
                لماذا الشخير عند الأطفال خطير جداً؟
                <span className="block w-28 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
                الشخير عند الأطفال ليس أمراً عادياً - إنه علامة على تحديات صحية قد تؤثر على تطورهم
              </p>
            </div>

            <div className="space-y-12 mb-16">
              <div className="flex flex-col md:flex-row items-start gap-8 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Baby className="w-6 h-6 text-red-600" />
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-bold text-red-600 mb-2 relative">
                    تأثيره على النمو
                    <span className="block w-16 h-0.5 bg-red-600 mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    يعطل الشخير إفراز هرمونات النمو خلال النوم العميق، مما قد يؤدي إلى تأخر النمو وقصر القامة.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <User className="w-6 h-6 text-orange-600" />
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-bold text-orange-600 mb-2 relative">
                    تشوهات الوجه والفك
                    <span className="block w-16 h-0.5 bg-orange-600 mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    التنفس الفموي المزمن يسبب تغيرات دائمة في شكل الوجه والفكين لدى الأطفال.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2 relative">
                    ضعف الأداء المدرسي
                    <span className="block w-16 h-0.5 bg-purple-600 mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    يسبب صعوبات في التركيز والذاكرة، مما يؤثر سلباً على الأداء الدراسي ومستقبل الطفل.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-4 sm:p-5 shadow-lg max-w-3xl mx-auto transform hover:scale-102 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div className="flex-1 text-center sm:text-right">
                  <h3 className="text-base sm:text-lg font-bold text-amber-800 mb-1">رسالة للوالدين</h3>
                  <p className="text-amber-700 text-sm sm:text-base leading-relaxed">
                    التدخل المبكر يمكن أن يحمي طفلك من التأثيرات طويلة الأمد على صحته ونموه
                  </p>
                </div>
                <a href="https://wa.me/962796759251?text=طفلي يعاني من الشخير وأحتاج استشارة عاجلة" target="_blank">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 text-sm sm:text-base rounded-full flex-shrink-0 shadow-md w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4 sm:w-5  ml-2" />
                    استشارة فورية
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
                علاج الأطفال: أجهزة فموية، تمارين عضلات الوجه
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
                    أجهزة فموية مثل Myobrace تدفع الفك السفلي للأمام، تعزز تدفق الهواء وتحسن التنفس الأنفي
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ تقوي عضلات الفك</li>
                    <li>✓ تحسن وضعية الفك</li>
                    <li>✓ آمنة ومريحة للأطفال</li>
                    <li>✓ تعزز التنفس الطبيعي</li>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">تمارين عضلات الوجه</h3>
                  <p className="text-gray-600 mb-4">
                    تمارين لتقوية عضلات الوجه، تساعد على تقليل التنفس الفموي وإيقاف الشخير
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ سهلة وممتعة للأطفال</li>
                    <li>✓ تقوي التحكم بالتنفس</li>
                    <li>✓ يمكن ممارستها بالمنزل</li>
                    <li>✓ نتائج ملحوظة بسرعة</li>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">علاج شامل مخصص</h3>
                  <p className="text-gray-600 mb-4">
                    برامج علاجية مدمجة مع أجهزة Myobrace وتمارين الوجه لنتائج مثالية
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ تصميم علاجي مخصص</li>
                    <li>✓ تحسين التنفس الأنفي</li>
                    <li>✓ دعم نمو صحي</li>
                    <li>✓ متابعة طبية مستمرة</li>
                  </ul>
                  <a href="https://wa.me/962796759251?text=أريد استشارة حول علاج شخير الأطفال" target="_blank">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                      احجز استشارة
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Videos Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">فيديوهات تعليمية للأطفال</h2>
            <p className="text-lg text-gray-600">اكتشف محتوى تعليمي حول صحة الأطفال</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <video className="w-full h-64 object-cover" controls poster="/baby.png">
                    <source src="/v1.mp4" type="video/mp4" />
                    فيديو غير مدعوم
                  </video>
                  <Badge className="absolute top-3 right-3 bg-blue-500 text-white flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    فيديو تعليمي
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">السمنة والتنفس مربوطين مع بعض</h3>
                  <p className="text-gray-600 text-sm mb-4">تعرف على العلاقة بين السمنة ومشاكل التنفس عند الأطفال.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <video className="w-full h-64 object-cover" controls poster="/baby.png">
                    <source src="/v2.mp4" type="video/mp4" />
                    فيديو غير مدعوم
                  </video>
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    الأكثر مشاهدة
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">قلة التركيز لدى الأطفال</h3>
                  <p className="text-gray-600 text-sm mb-4">استكشف الأسباب وراء ضعف التركيز وكيفية تحسينه.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <video className="w-full h-64 object-cover" controls poster="/baby.png" >
                    <source src="/v3.mp4" type="video/mp4" />
                    فيديو غير مدعوم
                  </video>
                  <Badge className="absolute top-3 right-3 bg-purple-500 text-white flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    دراسة علمية
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    لماذا التنفس من الأنف أفضل من التنفس من الفم
                    </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    تعلم الفوائد الصحية للتنفس الأنفي لدى الأطفال.
                    </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
{/* Before and After Treatment Section */}
<section className="py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-down">
          أم توثق رحلة علاج طفلها في عيادتنا
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          صورة تبرز كيف ساهم علاجنا في إنهاء شخير طفلها وعادته في التنفس من الفم، ليحظى بأسنان مستقيمة ووجه أكثر تناغما
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Before and After Box 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 card-hover-lift">
          <div className="grid grid-cols-2 gap-4 p-6">
            <div className="relative">
              <Image
                src="/bf1.png"
                alt="قبل العلاج - الطفل 1"
                width={250}
                height={200}
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
              <Badge className="absolute top-3 right-3 bg-red-500 text-white">قبل العلاج</Badge>
            </div>
            <div className="relative">
              <Image
                src="/af1.png"
                alt="بعد العلاج - الطفل 1"
                width={250}
                height={200}
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
              <Badge className="absolute top-3 right-3 bg-green-500 text-white">بعد العلاج</Badge>
            </div>
          </div>
        </div>
        {/* Before and After Box 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 card-hover-lift">
          <div className="grid grid-cols-2 gap-4 p-6">
            <div className="relative">
              <Image
                src="/bf2.png"
                alt="قبل العلاج - الطفل 2"
                width={250}
                height={200}
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
              <Badge className="absolute top-3 right-3 bg-red-500 text-white">قبل العلاج</Badge>
            </div>
            <div className="relative">
              <Image
                src="/af2.png"
                alt="بعد العلاج - الطفل 2"
                width={250}
                height={200}
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
              <Badge className="absolute top-3 right-3 bg-green-500 text-white">بعد العلاج</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Mother's Story Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-down">
          قصة نجاح أم وطفلها
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          قد تكون قصة هذه الأم والنصيحة التي قلبت حياة طفلها للأفضل مصدر إلهام للكثير!! لتي تروي رحلة علاج طفلها لسنوات من التنفس الفموي مسببا له الهالات السوداء تحت عينيه وشخير مزمن، مما كان يجعله يستيقظ متعبا في الصباح، إلى أن أصبح يتنفس من أنفه بشكل طبيعي.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="relative rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/tr4.png"
            alt="رحلة علاج الطفل - صورة 1"
            width={250}
            height={200}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/tr3.png"
            alt="رحلة علاج الطفل - صورة 2"
            width={250}
            height={200}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/tr2.png"
            alt="رحلة علاج الطفل - صورة 3"
            width={250}
            height={200}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/tr1.png"
            alt="رحلة علاج الطفل - صورة 4"
            width={250}
            height={200}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Assessment Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 border-t-4 border-green-400" id="assessment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">لا تنتظروا - صحة طفلكم أهم من كل شيء</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            احجزوا الآن واحصلوا على استشارة مجانية للأطفال دون سن 12 عاماً
          </p>          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 ml-2" />
                احجز عبر النموذج
              </Button>
            </Link>            <a href="https://wa.me/962796759251?text=أريد حجز موعد مجاني لطفلي لعلاج الشخير" target="_blank">
              <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز عبر واتساب
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      {/* <WhatsAppButton /> */}
    </div>
  )
}