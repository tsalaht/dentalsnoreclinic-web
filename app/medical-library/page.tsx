import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, PlayCircle, FileText, Download, AlertTriangle, Video, Brain, BookOpen, Zap, Baby, Phone, MessageCircle, CheckCircle, Eye, Clock } from "lucide-react";
import MedicalLibrarySearch from "@/components/MedicalLibrarySearch";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

export default function MedicalLibraryPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-purple-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: "المكتبة الطبية" }
            ]} 
          />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">المكتبة الطبية</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  تعلم كل شيء عن الشخير واضطرابات النوم
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  مجموعة شاملة من الفيديوهات التعليمية والمقالات العلمية والدراسات الحديثة من د. مهند الكسواني
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/87.jpg"
                  alt="مكتبة طبية شاملة للشخير واضطرابات النوم"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">معرفة علمية موثوقة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      

      {/* Featured Content */}
   

      {/* Popular Videos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">الفيديوهات الأكثر مشاهدة</h2>
            <p className="text-lg text-gray-600">المحتوى الذي يهتم به المرضى أكثر</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/_XhyV1vNMuI"
                    title="لماذا يحدث الشخير؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">مكافحة الشخير مع طبيب الأسنان</h4>
                  <p className="text-sm text-gray-600 mb-3"> يعمل أطباء الأسنان على تشخيص وعلاج العديد من الحالات التي تؤدي إلى الشخير</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/Wrr9Z9CiATY"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">ما هو التنفس الفموي؟!</h4>
                  <p className="text-sm text-gray-600 mb-3">تعرف على أسباب التنفس الفموي</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/NQK5SWteZbE"
                    title="كيف يساعد الليزر؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    15:20
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">كيف يساعد الليزر؟</h4>
                  <p className="text-sm text-gray-600 mb-3">العلاج بالليزر وفوائده في علاج الشخير</p>
                  <div className="text-xs text-gray-500">👁️ 32,100 مشاهدة</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/NQK5SWteZbE"
                    title="الشخير عند الأطفال - الخطر الخفي"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    6:15
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">الشخير عند الأطفال - الخطر الخفي</h4>
                  <p className="text-sm text-gray-600 mb-3">لماذا الشخير عند الأطفال خطير جداً؟</p>
                  <div className="text-xs text-gray-500">👁️ 29,800 مشاهدة</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/NQK5SWteZbE"
                    title="توقف التنفس أثناء النوم"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    10:45
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">توقف التنفس أثناء النوم</h4>
                  <p className="text-sm text-gray-600 mb-3">الأعراض والمخاطر وطرق العلاج</p>
                  <div className="text-xs text-gray-500">👁️ 25,600 مشاهدة</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/NQK5SWteZbE"
                    title="الأجهزة الفموية - دليل شامل"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    7:30
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">الأجهزة الفموية - دليل شامل</h4>
                  <p className="text-sm text-gray-600 mb-3">كيفية عمل الأجهزة الفموية وفعاليتها</p>
                  <div className="text-xs text-gray-500">👁️ 22,400 مشاهدة</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://www.youtube.com/@EuroDentalCenterJO" target="_blank">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <Video className="w-5 h-5 ml-2" />
                شاهد جميع الفيديوهات
              </Button>
            </a>
          </div>
        </div>
      </section>
   <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">أحدث المواد التعليمية والأكثر مشاهدة</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative bg-blue-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">كيف أعرف أنني أتنفس عن طريق الفم عندما أكون نائمًا؟</h3>
                  <p className="text-gray-600 text-sm mb-4">قد لا تشعر أنك تقوم بالتنفس عن طريق الفم بدلًا من الأنف، بالأخص في ساعات النوم، ولكن عادة ما تظهر الأعراض الآتية عليك إن كنت تقوم بذلك:</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-2">الأعراض العامة:</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
                    <li>الشخير</li>
                    <li>الناس يقولون إني أفتح فمي ساعات النوم</li>
                    <li>جفاف الشفاه وتشققها</li>
                    <li>رائحة الفم الكريهة</li>
                    <li>خشونة في الصوت</li>
                    <li>جفاف الفم</li>
                    <li>مشاكل في التركيز</li>
                  </ul>
                  <p className="text-gray-600 text-sm mb-2">الأعراض التي تظهر لدى الأطفال:</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
                    <li>تعب مزمن</li>
                    <li>تضخم اللوزتين</li>
                    <li>الاستيقاظ متعبًا</li>
                    <li>بطء في عملية النمو</li>
                    <li>السواد حول العينين</li>
                    <li>زيادة عدد مرات التبول ليلًا</li>
                  </ul>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن التنفس الفموي" target="_blank">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-hover-scale">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative bg-green-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">تعرف على حالات طبيعية للتنفس عن طريق الفم؟</h3>
                  <p className="text-gray-600 text-sm mb-4">هناك بعض الحالات التي تكون حقًا بحاجة خلالها إلى اللجوء إلى التنفس عن طريق الفم لأخذ الشهيق، ولكن إن لاحظت أنك تتنفس عبر الفم طوال الوقت وخلال النوم، فهذا قد يكون يؤدي إلى الإصابة بمشكلة ما.</p>
                </div>
                <div className="p-6">
                  <div className="bg-blue-100 p-4 rounded-lg mb-4">
                    <p className="text-gray-600 text-sm">من الممكن أن تلجأ إلى التنفس عن طريق الفم عندما تعاني من احتقان الأنف نتيجة الإصابة بالحساسية أو الزكام، أو حتى عندما تمارس التمارين الرياضية بشدة فتكون عضلاتك بحاجة إلى وصول الأكسجين لها بصورة أسرع.</p>
                  </div>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://wa.me/962796759251?text=أريد معرفة الحالات الطبيعية للتنفس الفموي" target="_blank">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white btn-hover-scale">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative bg-orange-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">لماذا تقوم بالتنفس عن طريق الفم؟</h3>
                  <p className="text-gray-600 text-sm mb-4">هناك دائمًا أسباب كامنة وراء قيامك بالتنفس عن طريق الفم، ومن أهم هذه الأسباب هو انسداد مجرى الأنف، فعندما يحدث ذلك يقوم الجسم بشكل تلقائي بالتوجه إلى الفم كبديل عن الأنف لتزويده بالأكسجين اللازم. ومن الأسباب التي تؤدي إلى انسداد مجرى الأنف:</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-2">الأسباب:</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
                    <li>احتقان الأنف</li>
                    <li>تضخم اللوزتين</li>
                    <li>انحراف الحاجز الأنفي</li>
                    <li>شكل الأنف والفك</li>
                    <li>متلازمة توقف التنفس الانسدادي أثناء النوم</li>
                    <li>الإصابة بالتوتر والقلق</li>
                  </ul>
                  <p className="text-gray-600 text-sm mb-4">ملاحظة: في كثير من الحالات يعود الإنسان على التنفس عن طريق الفم حتى بعد زوال سبب انسداد الأنف. لذا يجب على الطبيب أو أخصائي التنفس أن يساعدك في كسر عادة التنفس الفموي.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://wa.me/962796759251?text=أريد معرفة أسباب التنفس الفموي" target="_blank">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white btn-hover-scale">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
              </div>
            </Card>

            {/* Original Cards (Unchanged) */}
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/_o9ohoJ8r9w"
                    title="أحدث تقنيات العلاج بالليزر 2024"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    فيديو جديد
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-red-100 p-1 rounded">
                      <Video className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-red-600">فيديو تعليمي</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">علاج الشخير بالليزر | الدكتور مهند الكسواني</h3>
                  <p className="text-gray-600 text-sm mb-4">في هذا الفيديو، يشرح الدكتور مهند الكسواني، المحاضر الدولي في علوم طب الأسنان، أحدث طرق علاج الشخير باستخدام تقنية الليزر. يعتمد العلاج على تقنيات متطورة لشد عضلات سقف الحلق وتقليل الشخير بشكل فعال ودون الحاجة للجراحة.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/watch?v=nmog1iNuFAQ" target="_blank">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/iClh79sqQ-Q"
                    title="كيف تعمل أجهزة Myobrace للأطفال؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    الأكثر مشاهدة
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-green-100 p-1 rounded">
                      <Video className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-green-600">فيديو تعليمي</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">كتاب "الشخير حتى الموت" | مناقشة مع الدكتور مهند الكسواني</h3>
                  <p className="text-gray-600 text-sm mb-4">في هذا الفيديو، يستعرض الدكتور مهند الكسواني، المحاضر الدولي في علوم طب الأسنان، كتاب "الشخير حتى الموت" لمؤلفه ديفيد ماكنتوش. يقدم الدكتور مهند رؤىً شاملة حول المخاطر الصحية المرتبطة بالشخير وتأثيراته السلبية على نوعية الحياة.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/watch?v=nmog1iNuFAQ" target="_blank">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/NQK5SWteZbE"
                    title="دراسة: العلاقة بين الشخير وأمراض القلب"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-purple-500 text-white flex items-center gap-1">
                    <Brain className="w-3 h-3" />
                    دراسة علمية
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-purple-100 p-1 rounded">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-purple-600">دراسة علمية</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">الشخير المزمن هو القاتل الصامت!!</h3>
                  <p className="text-gray-600 text-sm mb-4">الشخير المزمن ليس مجرد إزعاج بسيط، بل هو مؤشر على مشكلة صحية قد تؤثر على صحتك ونومك وجودة حياتك.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/watch?v=nmog1iNuFAQ" target="_blank">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">هل تحتاج لاستشارة مخصصة؟</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            بعد مراجعة المواد التعليمية، احجز استشارة مع د. مهند للحصول على تشخيص دقيق وخطة علاج مخصصة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/962796759251?text=راجعت المكتبة الطبية وأريد استشارة مخصصة" target="_blank">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز استشارة الآن
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 ml-2" />
                معلومات التواصل
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}