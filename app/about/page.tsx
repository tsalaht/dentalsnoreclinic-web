"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Clock, Users, Award, Stethoscope, BookOpen, CheckCircle, Zap, MessageCircle, Calendar, Building, GraduationCap, Shield, Smile, Trophy, Baby } from "lucide-react"
import WhatsAppButton from "@/components/WhatsAppButton"
import Navbar from "@/components/Navbar"
import { useState } from "react"
export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">عن العيادة والطبيب</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  د. مهند الكسواني - رائد علاج الشخير في الأردن
                </h1>
           
              </div>

            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/79.jpg"
                  alt="د. مهند الكسواني في عيادة علاج الشخير"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">خبرة وثقة ونتائج مؤكدة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
   <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/73.jpg"
            alt="د. مهند الكسواني"
            width={500}
            height={600}
            className="rounded-2xl shadow-lg w-full h-auto"
                 loading="lazy"
          />
        </div>
        <div className="space-y-8">
          <div>
            <Badge className="bg-blue-100 text-blue-800 mb-4">الطبيب المتخصص</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">د. مهند الكسواني</h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              المحاضر الدولي في علوم طب الأسنان الرقمي وإطباق الأسنان والابتسامة الرقمية وطب الأسنان المتعلق بالشخير واضطراب التنفس أثناء النوم
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              د. مهند الكسواني، مؤسس ومدير المركز الأوروبي لطب الأسنان، يتميز بخبرته الواسعة في طب الأسنان وزراعة الأسنان، مع التركيز على تقنيات متقدمة مثل زراعة الأسنان الموجهة بالحاسوب والزراعة الفورية خلال 48 ساعة. يشتهر المركز بتقديم خدمات شاملة عالية الجودة مع فريق من الأطباء والأخصائيين المتميزين.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">التحصيل العلمي</h4>
                <ul className="text-gray-600 space-y-1 mt-2">
                  <li>• دكتور في طب الأسنان - الجامعة الأردنية</li>
                  <li>• ماجستير في علوم الخدمة الصحية - كلية الجراحين، لندن</li>
                  <li>• شهادات متقدمة في طب الأسنان الرقمي وزراعة الأسنان</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">الخبرة المهنية</h4>
                <ul className="text-gray-600 space-y-1 mt-2">
                  <li>• مؤسس ومدير المركز الأوروبي لطب الأسنان</li>
                  <li>• خبير في زراعة الأسنان الموجهة بالحاسوب والزراعة الفورية</li>
                  <li>• عضو في الجمعية الأوروبية لتجميل الأسنان</li>
                  <li>• محاضر دولي في طب الأسنان الرقمي والابتسامة الرقمية</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">الإنجازات والجوائز</h4>
                <ul className="text-gray-600 space-y-1 mt-2">
                  <li>• رائد في تقديم محتوى طبي عبر منصات التواصل الاجتماعي</li>
                  <li>• يؤمن بالممارسات الأخلاقية ومشاركة المريض في قرارات العلاج</li>
                  <li>• محاضر في المؤتمرات الدولية لطب الأسنان الرقمي</li>
                  <li>• تقييم عالي من المرضى لخدمات المركز الأوروبي لطب الأسنان</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://wa.me/962796759251?text=أريد حجز استشارة مع د. مهند الكسواني" target="_blank">
              <Button className="bg-blue-600 hover:bg BLUE-700 text-white px-6 py-3">
                <Calendar className="w-4 h-4 ml-2" />
                احجز استشارة
              </Button>
            </a>
            <Link href="/medical-library">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
                <BookOpen className="w-4 h-4 ml-2" />
                شاهد محاضراته
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-12 bg-gradient-to-br from-blue-50 to-teal-50" dir="rtl">
  <div className="container mx-auto px-6 lg:px-12">
    {/* Section Header */}


 
  <div className="mb-20">
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center relative">
        فريق العمل
        <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
        { name: "د. مهند الكسواني", role: "أخصائي علاج الشخير والتنفس الفموي الليلي", image: "/73.jpg" },
          { name: "د. عايدة", role: "أخصائية علاج الشخير والتنفس الفموي الليلي", image: "/aida.jpg" },
          { name: "د. مجد", role: "أخصائية علاج الشخير والتنفس الفموي الليلي", image: "/majd.png" },
          { name: "د. إيمان", role: "أخصائية الأشعة السنية التشخيصية", image: "/iman.JPG" },
        ].map((doctor, idx) => (
          <Card key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-48 h-auto mx-auto mb-4 rounded-xl overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-contain" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">{doctor.name}</h4>
              <p className="text-gray-600 leading-relaxed text-base">{doctor.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    {/* Dental Sleep Medicine */}
<div className="mb-20">
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center relative">
        طب الأسنان المتعلق بأمراض النوم
        <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
      </h3>
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
        <div>
          <p className="text-gray-600 leading-relaxed text-base mb-6">
            عيادتنا مستحدثة ضمن دائرة المركز الأوروبي لطب الأسنان بإدارة الدكتور مهند الكسواني، وهي الأولى من نوعها في الأردن، عيادة متخصصة في علاج اضطرابات التنفس عند النوم (التنفس الفموي بشكل خاص) لدى الأطفال والبالغين، والتي تؤثر بشكل كبير على شكل نمو الأسنان والفكين.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mb-6">
            البرنامج المتكامل من جهاز الليزر R3 snore يحتوي على ثلاث جلسات علاجية منفصلة يتم إعطاءها خلال 12 أسبوع، وتبقى نتائج العلاج فعالة لحوالي سنتين إلى ثلاث سنوات، ويمكن إعادة العلاج مرة أخرى بعد ذلك. جهاز Lightwalker AST من شركة Fotona متعدد الاستخدامات، يُستخدم ضمن بروتوكول علاج الشخير في عيادة علاج الشخير.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mb-6">
            التنفس من الفم من أسوأ التصرفات التي قد تؤثر في حيوية أجسامنا. التنفس الأنفي يساعد على زيادة النشاط البدني، ويشجع على إنقاص الوزن والتخلص من نزلات الزكام المتكررة والدخول في النوم العميق الهانئ.
          </p>
          {isExpanded && (
            <>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                يؤدي تخصص طب الأسنان المتعلق بالنوم أو ما يعرف بـ Dental Sleep Medicine دوراً مهماً في معالجة مشكلة الشخير واضطراب التنفس والتنفس الفموي أثناء النوم. منذ عام 2015 ظهرت توصيات أمريكية حديثة فيما يتعلق بتشخيص ومعالجة الشخير واضطراب التنفس أثناء النوم، والتي تؤكد دور طبيب الأسنان مع أطباء النوم في معالجة هذه المشكلة للحد من الآثار السلبية الناجمة منها.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                إن من أحد طرق المعالجة هو استخدام أجهزة فموية مخصصة يرتديها المريض لتقدم الفك السفلي وفتح مجرى النفس بشكل أكبر. من المثير للاهتمام أن مثل هذه الأجهزة الفموية تعطي نتائج فعالة بشكل سريع بعد مدة 6 أسابيع من ارتدائها. كما أنه من غير الضروري تقديم الفك السفلي بشكل كبير لفتح مجرى النفس، بضعة ملليمترات تكفي لحل المشكلة!
              </p>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                إضافة إلى ذلك، فإن الأجهزة الفموية التي يصفها طبيب الأسنان المختص تعتبر أقل كلفة وأكثر راحة من الحلول الأخرى لمعالجة الشخير واضطراب التنفس أثناء النوم. كما أن طبيب الأسنان المدرّب على استخدام الليزر لشد عضلة سقف الحلق واللهاة المرتخية، والمسببة للشخير وانسداد مجرى الهواء، يمكنه استعمال بروتوكول علاج الشخير بالليزر عن طريق جهازي Snore3 وLightwalker AST مثل المركز الأوروبي، علمًا أن دمج العلاج بالليزر والأجهزة الفموية بحسب تعليمات الطبيب المتخصص مثل د. مهند الكسواني وفريقه الطبي يقدّم أفضل النتائج للتخلص من الشخير، والحصول على نوم مريح وتنفس سهل.
              </p>
            </>
          )}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary font-semibold hover:underline focus:outline-none"
            >
              {isExpanded ? 'اقرأ أقل' : 'اقرأ المزيد'}
            </button>
          </div>
          <div className="flex justify-center">
            <a href="tel:+962796759251" className="inline-flex items-center bg-primary text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-primary-dark">
              <Phone className="w-5 h-5 ml-2" />
              تواصلوا معنا: 0797377131
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Team Showcase */}
  
  </div>
</section>
<section className="py-16 bg-gradient-to-r from-blue-50 to-white border-t-4 border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-2">
              <Award className="w-8 h-8 text-blue-500" />
              شهادات الدكتور مهند
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              شهادات واعتمادات دولية تؤكد خبرة الدكتور مهند في علاج الشخير واضطرابات النوم
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-blue-100">
              <img
                src="/sartafica1.jpeg"
                alt="شهادة 1"
                className="rounded-lg mb-3 w-full h-40 object-cover cursor-pointer"
                onClick={() => openModal('/sartafica1.jpeg')}
              />
              <span className="text-blue-700 font-semibold text-sm">شهادة اعتماد دولية</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-blue-100">
              <img
                src="/sartafica2.jpeg"
                alt="شهادة 2"
                className="rounded-lg mb-3 w-full h-40 object-cover cursor-pointer"
                onClick={() => openModal('/sartafica2.jpeg')}
              />
              <span className="text-blue-700 font-semibold text-sm">شهادة تخصص في علاج الشخير</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-blue-100">
              <img
                src="/sartafica3.jpeg"
                alt="شهادة 3"
                className="rounded-lg mb-3 w-full h-40 object-cover cursor-pointer"
                onClick={() => openModal('/sartafica3.jpeg')}
              />
              <span className="text-blue-700 font-semibold text-sm">شهادة مشاركة في مؤتمرات دولية</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-blue-100">
              <img
                src="/sartafica4.jpeg"
                alt="شهادة 4"
                className="rounded-lg mb-3 w-full h-40 object-cover cursor-pointer"
                onClick={() => openModal('/sartafica4.jpeg')}
              />
              <span className="text-blue-700 font-semibold text-sm">شهادة خبرة في اضطرابات النوم</span>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
      {/* Clinic Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">عيادة علاج الشخير - المركز الأوروبي</h2>
            <p className="text-lg text-gray-600">أول عيادة متخصصة في علاج الشخير واضطرابات النوم في الأردن</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">الموقع</h3>
                <p className="text-gray-600 text-sm">المركز الأوروبي - جبل عمان</p>
                <p className="text-gray-600 text-sm">موقع متميز وسهل الوصول</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">التقنيات</h3>
                <p className="text-gray-600 text-sm">أحدث تقنيات العلاج</p>
                <p className="text-gray-600 text-sm">معدات طبية متطورة</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">الأمان</h3>
                <p className="text-gray-600 text-sm">معايير أمان عالية</p>
                <p className="text-gray-600 text-sm">تعقيم شامل ونظافة</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">الراحة</h3>
                <p className="text-gray-600 text-sm">بيئة مريحة ومهدئة</p>
                <p className="text-gray-600 text-sm">خدمة عملاء متميزة</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">لماذا تختار عيادتنا؟</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">التخصص الدقيق</h4>
                    <p className="text-gray-600 text-sm">نركز فقط على علاج الشخير واضطرابات النوم، مما يضمن خبرة عميقة ونتائج أفضل</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">التقنيات الحديثة</h4>
                    <p className="text-gray-600 text-sm">أول عيادة تستخدم تقنية الليزر وأجهزة Myobrace المتطورة في الأردن</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">نسب نجاح عالية</h4>
                    <p className="text-gray-600 text-sm">أكثر من 90% من مرضانا حققوا تحسناً ملموساً في جودة النوم</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">متابعة مستمرة</h4>
                    <p className="text-gray-600 text-sm">نقدم متابعة شاملة للمريض حتى بعد انتهاء العلاج لضمان النتائج</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/DSC00016.JPG"
                alt="عيادة علاج الشخير الحديثة"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto"
                     loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics and Achievements */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
            <p className="text-xl text-blue-100">نتائج حقيقية تعكس جودة خدماتنا</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">5,247</div>
              <div className="text-blue-200">مريض تم علاجه</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">تقييم المرضى</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">93%</div>
              <div className="text-blue-200">نسبة النجاح</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">عام خبرة</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Services */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا المتخصصة</h2>
            <p className="text-lg text-gray-600">حلول شاملة لجميع مشاكل الشخير واضطرابات النوم</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">العلاج بالليزر</h3>
                <p className="text-gray-600 mb-6">
                  تقنية متطورة وآمنة لعلاج الشخير بدون جراحة أو ألم
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-right">
                  <li>• بدون جراحة أو تخدير</li>
                  <li>• نتائج فورية ومستمرة</li>
                  <li>• آمن لجميع الأعمار</li>
                  <li>• نسبة نجاح 90%</li>
                </ul>
                <Link href="/adults">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    تفاصيل العلاج
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">علاج الأطفال</h3>
                <p className="text-gray-600 mb-6">
                  أجهزة Myobrace وتقنيات خاصة لعلاج مشاكل التنفس عند الأطفال
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-right">
                  <li>• أجهزة Myobrace المتطورة</li>
                  <li>• تصحيح شكل الفك والأسنان</li>
                  <li>• تحسين الأداء المدرسي</li>
                  <li>• نمو صحي طبيعي</li>
                </ul>
                <Link href="/children">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    علاج الأطفال
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الأجهزة الفموية</h3>
                <p className="text-gray-600 mb-6">
                  أجهزة مخصصة لتحسين مجرى التنفس أثناء النوم
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-right">
                  <li>• مصممة خصيصاً لكل مريض</li>
                  <li>• مريحة أثناء النوم</li>
                  <li>• فعالة في 85% من الحالات</li>
                  <li>• بديل آمن للجراحة</li>
                </ul>
                <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن الأجهزة الفموية" target="_blank">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    استفسر الآن
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Patient Testimonials */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">شهادات المرضى</h2>
            <p className="text-lg text-gray-600">ماذا يقول مرضانا عن تجربتهم معنا</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">                <p className="text-gray-600 mb-4">
                  "د. مهند غير حياتي تماماً. بعد 15 سنة من الشخير المزعج، أصبح نومي هادئ وصحي. الطبيب الوحيد الذي فهم مشكلتي وحلها نهائياً."
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-1-rating-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">أ</span>
                  </div>
                  <div>
                    <p className="font-semibold">أحمد محمد الصالح</p>
                    <p className="text-sm text-gray-500">مهندس - عمان</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-2-rating-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "ابنتي كانت تعاني من مشاكل في التنفس أثناء النوم ودرجاتها المدرسية كانت متراجعة. بعد العلاج مع د. مهند، تحسنت حالتها جداً."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">س</span>
                  </div>
                  <div>
                    <p className="font-semibold">سمر خالد أبو زيد</p>
                    <p className="text-sm text-gray-500">والدة - الزرقاء</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-3-rating-${i + 1}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "العلاج بالليزر كان أفضل قرار اتخذته. الإجراء كان سريع وبدون ألم، والنتيجة كانت رائعة. أنصح كل من يعاني من الشخير."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">م</span>
                  </div>
                  <div>
                    <p className="font-semibold">محمد علي القاسم</p>
                    <p className="text-sm text-gray-500">طبيب - إربد</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">ابدأ رحلتك نحو نوم أفضل اليوم</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            احجز استشارتك مع د. مهند الكسواني واكتشف الحل المناسب لحالتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/962796759251?text=أريد حجز استشارة مع د. مهند الكسواني" target="_blank">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز عبر واتساب
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 ml-2" />
                معلومات التواصل
              </Button>
            </Link>
          </div>
        </div>      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
