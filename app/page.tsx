"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Phone, Users, Award, Heart, Stethoscope, Baby, User, BookOpen, Play, GamepadIcon, MessageCircle, Calendar, PlayCircle, ThumbsUp } from "lucide-react"
import Navbar from "@/components/Navbar"
import WhatsAppButton from "@/components/WhatsAppButton"
import SimpleRating from "@/components/SimpleRating"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ggg from '../assets/1.jpg'

export default function ArabicSnoringClinic() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] bg-primary/5 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop
    className="w-full h-full bg-[#028FC5]"
  >
    {["/1.jpg", "/2.jpg", "/3.jpg", "/4.JPG"].map((src, idx) => (
      <SwiperSlide key={idx}>
        <div
          className="w-full h-full opacity-85"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",         // ✅ acts like resizeMode: 'cover'
            backgroundPosition: "center",     // ✅ centers the image
            backgroundRepeat: "no-repeat",    // optional
            position: "absolute",
            inset: 0,
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center">
<div className="bg-black/30 md:backdrop-blur-sm backdrop-blur-none px-6 py-5 rounded-xl mb-6 flex flex-col items-center">
  <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-sm">
    الشخير والتنفس الفموي يؤثران على صحتك
  </h1>
  <p className="text-lg md:text-2xl text-secondary mb-8 leading-relaxed max-w-2xl mx-auto font-bold">
    احصل على نوم هادئ وصحة أفضل مع أحدث تقنيات العلاج
  </p>
</div>

        
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Link href="/children" className="w-full sm:w-auto">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold w-full rounded-2xl shadow-md transition-all duration-300">
                طفلي يعاني من الشخير
              </Button>
            </Link>
            <Link href="/adults" className="w-full sm:w-auto">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg font-semibold w-full rounded-2xl shadow-md transition-all duration-300">
                أنا بالغ وأريد العلاج
              </Button>
            </Link>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-base text-gray-600">عام خبرة</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
              <div className="text-3xl font-bold text-secondary mb-2">2000+</div>
              <div className="text-base text-gray-600">مريض شُفي</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-base text-gray-600">نسبة النجاح</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-base text-gray-600">تقييم المرضى</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              لماذا تختار عيادتنا؟
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              نقدم أحدث التقنيات في علاج الشخير واضطرابات النوم مع فريق طبي متخصص
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-primary/5 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">خبرة طبية متقدمة</h3>
                <p className="text-gray-700 leading-relaxed">
                  أطباء متخصصون في علاج اضطرابات النوم بأحدث الطرق العلمية
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/5 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">رعاية شاملة</h3>
                <p className="text-gray-700 leading-relaxed">
                  نهتم بصحة المريض من جميع النواحي مع متابعة مستمرة
                </p>
              </CardContent>
            </Card>
            <Card className="bg-accent/5 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-4">نتائج مضمونة</h3>
                <p className="text-gray-700 leading-relaxed">
                  معدل نجاح عالي مع تحسن ملحوظ في جودة النوم
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              خدماتنا المتخصصة
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              علاج شامل ومخصص لكل عمر ولكل حالة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/adults">
              <Card className="bg-primary/10 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4">علاج البالغين</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    علاج الشخير وانقطاع التنفس النومي
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/children">
              <Card className="bg-accent/10 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Baby className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-accent mb-4">علاج الأطفال</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    العلاج المبكر والوقاية
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/medical-library">
              <Card className="bg-secondary/10 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-4">المكتبة الطبية</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    مقالات ودراسات علمية
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/sleep-challenge">
              <Card className="bg-primary/10 border-0 hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <GamepadIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4">تحدي النوم</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    اختبر جودة نومك بطريقة تفاعلية
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Experience Rating Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">تقييم تجربة المرضى</h2>
            <p className="text-lg text-gray-700 mb-6">ساعدنا في تحسين خدماتنا من خلال تقييمك</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SimpleRating question="ما رأيك في سهولة استخدام موقعنا؟" type="stars" />
            <SimpleRating question="هل تشعر بالثقة في خدماتنا الطبية؟" type="heart" />
            <SimpleRating question="هل ستنصح أصدقاءك بزيارة عيادتنا؟" type="thumbs" />
            <SimpleRating question="كيف تقيم سرعة الاستجابة لاستفساراتك؟" type="stars" />
            <SimpleRating question="هل المعلومات الطبية واضحة ومفهومة؟" type="heart" />
            <SimpleRating question="هل تجد سهولة في حجز المواعيد؟" type="thumbs" />
          </div>
          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-md max-w-lg mx-auto">
              <h3 className="text-lg font-bold text-gray-800 mb-3">لماذا تقييمك مهم؟</h3>
              <p className="text-sm text-gray-600 mb-4">تقييماتك تساعدنا في تقديم رعاية أفضل</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">تحسين الخدمة</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-sm text-gray-600">رضا المرضى</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className=" ">
              <div className="rounded-lg overflow-hidden shadow-md bg-blue-50  max-w-[100%] md:max-w-[100%] ">
                <div className="text-center p-3 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">فيديو ترحيبي من د. مهند</h3>
                  <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-4">تعرف على العيادة وأهمية علاج الشخير</p>
                  <a href="https://wa.me/962796759251?text=أريد مشاهدة الفيديو الترحيبي" target="_blank">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-base px-3 sm:px-6 py-2 flex items-center justify-center mx-auto">
                      <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      شاهد الفيديو
                    </Button>
                  </a>
                </div>
              </div>
            </div>
        <div className="space-y-4 md:space-y-6">
  <h3 className="text-xl md:text-2xl font-bold text-gray-800">د. مهند الكسواني</h3>
  <p className="text-base md:text-lg text-gray-600">
    أخصائي علاج الشخير واضطرابات النوم المتعلقة بصحة الفم
  </p>
  <div className="space-y-2 md:space-y-3">
    <div className="flex items-start gap-2 md:gap-3">
      <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-1" />
      <span className="text-sm md:text-base text-gray-600">خبرة أكثر من 15 عاماً</span>
    </div>
    <div className="flex items-start gap-2 md:gap-3">
      <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-1" />
      <span className="text-sm md:text-base text-gray-600">أكثر من 5000 مريض تم علاجهم</span>
    </div>
    <div className="flex items-start gap-2 md:gap-3">
      <Star className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-1" />
      <span className="text-sm md:text-base text-gray-600">تقييم 4.9/5 من المرضى</span>
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-2 md:gap-4">
    <Link href="/contact">
      <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base py-2 md:py-2 px-3 md:px-4 w-full md:w-auto">
        <Calendar className="w-4 h-4 ml-2" />
        احجز عبر النموذج
      </Button>
    </Link>
    <a href="https://wa.me/962796759251?text=أريد حجز موعد لاستشارة طبية" target="_blank">
      <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 text-sm md:text-base py-2 md:py-2 px-3 md:px-4 w-full md:w-auto">
        <MessageCircle className="w-4 h-4 ml-2" />
        احجز عبر واتساب
      </Button>
    </a>
    <Link href="/about">
      <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 text-sm md:text-base py-2 md:py-2 px-3 md:px-4 w-full md:w-auto">
        <BookOpen className="w-4 h-4 ml-2" />
        المزيد عن الدكتور
      </Button>
    </Link>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Treatment Effectiveness Rating */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">تقييم فعالية العلاج</h2>
            <p className="text-lg text-gray-600">شاركنا تجربتك مع العلاج</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <SimpleRating question="كم تتوقع أن يكون العلاج فعالاً؟" type="stars" />
            <SimpleRating question="هل تشعر بالراحة مع طرق العلاج؟" type="heart" />
            <SimpleRating question="هل المواعيد المتاحة مناسبة لك؟" type="thumbs" />
            <SimpleRating question="كيف تقيم التواصل مع فريق العيادة؟" type="stars" />
          </div>
          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-md max-w-lg mx-auto">
              <h3 className="text-lg font-bold text-gray-800 mb-3">شكراً لمشاركتك!</h3>
              <p className="text-sm text-gray-600 mb-4">تقييماتك تساعدنا في تحسين خدماتنا</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Calendar className="w-4 h-4 ml-2" />
                    احجز عبر النموذج
                  </Button>
                </Link>
                <a href="https://wa.me/962796759251?text=أريد حجز استشارة مجانية" target="_blank">
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز عبر واتساب
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">لا تدع الشخير يؤثر على حياتك</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              احجز استشارتك اليوم للحصول على خطة علاج مخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/contact" className="flex-1">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 w-full">
                  <Calendar className="w-5 h-5 ml-2" />
                  احجز عبر النموذج
                </Button>
              </Link>
              <a href="https://wa.me/962796759251?text=أريد حجز موعد لعلاج الشخير" target="_blank" className="flex-1">
                <Button size="lg" variant="outline" className="border-white text-blue-500 hover:bg-white hover:text-blue-500 w-full">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  احجز عبر واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">عيادة علاج الشخير</h3>
              <p className="text-gray-300 mb-4">المركز الأوروبي للطب المتقدم</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>د. مهند الكسواني</p>
                <p>أخصائي علاج الشخير واضطرابات النوم</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">صفحات الموقع</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/adults" className="hover:text-white">علاج البالغين</Link></li>
                <li><Link href="/children" className="hover:text-white">علاج الأطفال</Link></li>
                <li><Link href="/medical-library" className="hover:text-white">المكتبة الطبية</Link></li>
                <li><Link href="/sleep-challenge" className="hover:text-white">تحدي النوم</Link></li>
                <li><Link href="/faq" className="hover:text-white">الأسئلة الشائعة</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>تشخيص أسباب الشخير</li>
                <li>علاج انقطاع التنفس النومي</li>
                <li>تقويم الفكين</li>
                <li>العلاج الوقائي للأطفال</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 06-6759-2513</p>
                <p>📍 المركز الأوروبي، جبل عمان</p>
                <p>🕒 السبت - الخميس: 9:00 ص - 8:00 م</p>
                <div className="flex gap-2 mt-4">
                  <a href="https://wa.me/962796759251" target="_blank" className="hover:text-green-300">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="tel:+96267592513" className="hover:text-blue-300">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>© 2025 عيادة علاج الشخير - المركز الأوروبي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      {/* <WhatsAppButton /> */}
    </div>
  )
}