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
      <section className="relative min-h-[20vh] md:min-h-[95vh] bg-primary/5 flex items-center justify-center">
<div className="absolute inset-0 z-0">
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop
    className="w-full h-full bg-[#028FC5]"
  >
    {["/1.png", "/baby.png", "/5.jpg", "/6.JPG"].map((src, idx) => (
      <SwiperSlide key={idx}>
        <div
          className="w-full h-auto opacity-85"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",         
            backgroundPosition: "center",     
            backgroundRepeat: "no-repeat",    
            position: "absolute",
            inset: 0,
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center">
<div className="bg-black/30  px-6 py-5 rounded-xl mb-6 flex flex-col items-center">
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
          
        </div>
      </section>

      {/* Features Section */}
<section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 animate-fade-in-down relative">
        لماذا تختار Dentalsnore Clinic؟
        <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
      </h2>
      <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed tracking-wide">
        تفخر Dentalsnore Clinic التابعة للمركز الأوروبي لطب الأسنان بتقديم علاج متكامل وفعال للشخير، انقطاع التنفس أثناء النوم، والتنفس الفموي. صُمم برنامجنا لتوفير الراحة اللازمة لنوم هانئ، تحسين الصحة العامة، وتفادي مضاعفات مثل ضعف عضلة القلب والجلطات المفاجئة.
      </p>
    </div>
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 h-80 flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 relative">
          <img src="/DSC00023.JPG" alt="Medical Devices" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right">
          <h3 className="text-3xl font-bold text-primary mb-3 relative">
            تقنيات متقدمة وجهاز Myosa
            <span className="block w-16 h-1 bg-secondary mx-auto md:mx-0 mt-2 rounded-full"></span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            نستخدم أحدث أجهزة الليزر لشد عضلات سقف الحلق وجهاز Myosa الفموي لتصحيح التنفس الفموي إلى التنفس الأنفي، مما يعزز جودة النوم ويقلل الشخير بفعالية.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="w-full md:w-1/2 h-80 flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 relative">
          <img src="/70.jpg" alt="Healthcare Center" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right">
          <h3 className="text-3xl font-bold text-primary mb-3 relative">
            رواد الشرق الأوسط
            <span className="block w-16 h-1 bg-secondary mx-auto md:mx-0 mt-2 rounded-full"></span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            نحن من المراكز الرائدة في الشرق الأوسط في علاج اضطرابات التنفس أثناء النوم بمعايير عالمية، مع فريق طبي متخصص ونتائج مثبتة.
          </p>
        </div>
      </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 h-80 flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 relative">
          <img src="/18.png" alt="Medical Devices" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right">
          <h3 className="text-3xl font-bold text-primary mb-3 relative">
      المركز الأوروبي  لطب الأسنان
            <span className="block w-16 h-1 bg-secondary mx-auto md:mx-0 mt-2 rounded-full"></span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
           حاصلون على اعتمادية تيموس في الجودة المهنية والطبية
          </p>
        </div>
      </div>
    </div>
    <div className="text-center mt-16">
      <p className="text-xl text-gray-700 font-semibold animate-pulse relative">
        مع Dentalsnore Clinic، قل وداعًا لليالي المزعجة وأهلاً بالراحة والنوم الهانئ.
        <span className="block w-32 h-1 bg-primary mx-auto mt-3 rounded-full"></span>
      </p>
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



      {/* Doctor Introduction */}
  <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-blue-50 transform hover:scale-105 transition-transform duration-500">
          <img src="/79.jpg" alt="Medical Devices" className="w-full h-auto object-fill" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary relative">
          د. مهند الكسواني
          <span className="block w-16 h-1 bg-secondary mt-2 rounded-full"></span>
        </h3>
        <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
          أخصائي علاج الشخير واضطرابات النوم المتعلقة بصحة الفم
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-base md:text-lg text-gray-600">خبرة أكثر من 15 عاماً</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-base md:text-lg text-gray-600">أكثر من 5000 مريض تم علاجهم</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-base md:text-lg text-gray-600">تقييم 4.9/5 من المرضى</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 w-full md:w-auto">
              <Calendar className="w-5 h-5 ml-2" />
              احجز عبر النموذج
            </Button>
          </Link>
          <a href="https://wa.me/962796759251?text=أريد حجز موعد لاستشارة طبية" target="_blank">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 w-full md:w-auto">
              <MessageCircle className="w-5 h-5 ml-2" />
              احجز عبر واتساب
            </Button>
          </a>
          <Link href="/about">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 w-full md:w-auto">
              <BookOpen className="w-5 h-5 ml-2" />
              المزيد عن الدكتور
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

   <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 relative">
        تجارب المرضى
        <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        استمع إلى تجارب مرضانا الذين حققوا تحسناً ملحوظاً في جودة نومهم مع علاج الشخير في المركز الأوروبي لطب الأسنان
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
        <div className="relative h-48">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/SvJikdXAySI"
            title="تجربة السيد عمار من موسكو"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-primary mb-3 relative">
            تجربة السيد عمار من موسكو
            <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            تجربة السيد عمار من موسكو في علاج الشخير في المركز الأوروبي
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
        <div className="relative h-48">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/nmog1iNuFAQ"
            title="تجربة السيد ماهر التميمي"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-primary mb-3 relative">
            تجربة السيد ماهر التميمي
            <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            تجربة السيد ماهر التميمي في علاج الشخير داخل المركز الأوروبي
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
        <div className="relative h-48">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/uN9LpOMKswA"
            title="تجربة الدكتور محمد نور العبسي"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-primary mb-3 relative">
            تجربة الدكتور محمد نور العبسي
            <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            تجربة الدكتور محمد نور العبسي في علاج الشخير داخل المركز الأوروبي
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 relative">
        الأسئلة الشائعة
        <span className="block w-24 h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        تعرف على إجابات الأسئلة الشائعة حول علاج الشخير واضطرابات النوم مع فريقنا المتخصص
      </p>
    </div>
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <button className="w-full flex justify-between items-center p-6 bg-primary/5 hover:bg-primary/10 transition-colors duration-300" onClick={(e) => e.currentTarget.nextElementSibling.classList.toggle('hidden')}>
          <h3 className="text-xl md:text-2xl font-semibold text-primary">
            هل أتنفس عن طريق الفم أثناء النوم؟
          </h3>
          <span className="text-primary text-2xl">+</span>
        </button>
        <div className="p-6 text-gray-600 hidden">
          <p className="text-lg leading-relaxed">
            قد لا تشعر أنك تتنفس عن طريق الفم بدلاً من الأنف، خاصة أثناء النوم، ولكن عادةً ما تظهر الأعراض التالية إذا كنت تقوم بذلك:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>جفاف الشفاه وتشققها</li>
            <li>النعاس في ساعات النهار</li>
            <li>الشخير</li>
            <li>رائحة الفم الكريهة</li>
            <li>خشونة في الصوت</li>
            <li>جفاف الفم</li>
            <li>مشاكل في التركيز</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            الأعراض التي تظهر لدى الأطفال:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>تعب مزمن</li>
            <li>تضخم اللوزتين</li>
            <li>الاستيقاظ متعبًا</li>
            <li>بطء في عملية النمو</li>
            <li>السواد حول العينين</li>
            <li>زيادة في نوبات البكاء، خاصة في ساعات الليل</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <button className="w-full flex justify-between items-center p-6 bg-primary/5 hover:bg-primary/10 transition-colors duration-300" onClick={(e) => e.currentTarget.nextElementSibling.classList.toggle('hidden')}>
          <h3 className="text-xl md:text-2xl font-semibold text-primary">
            هل علاج الليزر مؤلم؟
          </h3>
          <span className="text-primary text-2xl">+</span>
        </button>
        <div className="p-6 text-gray-600 hidden">
          <p className="text-lg leading-relaxed">
            لا، علاج الليزر غير مؤلم إلى حد كبير. يبلغ معظم المرضى عن إحساس دافئ خفيف أثناء الإجراء.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <button className="w-full flex justify-between items-center p-6 bg-primary/5 hover:bg-primary/10 transition-colors duration-300" onClick={(e) => e.currentTarget.nextElementSibling.classList.toggle('hidden')}>
          <h3 className="text-xl md:text-2xl font-semibold text-primary">
            كيف يعمل الجهاز الفموي؟
          </h3>
          <span className="text-primary text-2xl">+</span>
        </button>
        <div className="p-6 text-gray-600 hidden">
          <p className="text-lg leading-relaxed">
            عندما يكون جهاز Myosa® for Snorers في مكانه، فإنه يفتح مجرى الهواء ويتحكم في التنفس الزائد من خلال الفم. تعمل الجوانب المرنة للجهاز مع قاعدة الزنبرك الهوائي على تقليل التأثير على مفصل الفك (TMJ)، مما يجعله مناسبًا أيضًا للمستخدمين الذين يعانون من اضطراب المفصل الفكي الصدغي أو يصكون أسنانهم.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            بدلاً من التركيز فقط على تخفيف أعراض المشكلة، يهدف الجهاز إلى تصحيح مجرى الهواء العلوي والخلل العصبي العضلي، الذي يمكن أن يسبب اضطراب التنفس أثناء النوم (SDB). تعمل أجهزة Myosa® For Snorers (S1 وS2) عن طريق وضع الفك السفلي للأمام وفتح العض، مما يعمل على فتح مجرى الهواء وتنظيم التنفس.
          </p>
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
              <h3 className="font-bold text-lg mb-4">Dentalsnore Clinic</h3>
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
                <p>📞 07-9737-71-31</p>
                <p>📍 المركز الأوروبي، جبل عمان</p>
               <p>السبت - الأربعاء : 11:00  - 6:00 </p>
                            <p>الخميس  : 11:00  - 2:00 </p>
                            <p>الجمعة:  عطلة </p>
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
            <p>© 2025 Dentalsnore Clinic - المركز الأوروبي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      {/* <WhatsAppButton /> */}
    </div>
  )
}