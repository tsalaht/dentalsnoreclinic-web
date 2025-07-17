import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { MessageCircle, PlayCircle, Video, Brain } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MedicalLibraryMaterialsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <section className="relative bg-gradient-to-l from-green-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: "المكتبة الطبية", href: "/medical-library" },
            { label: "المواد التثقيفية" }
          ]} />
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-4">المواد التثقيفية</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">أحدث المواد التعليمية والأكثر مشاهدة حول الشخير واضطرابات النوم</p>
          </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative bg-blue-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">كيف أعرف أنني أتنفس عن طريق الفم عندما أكون نائمًا؟</h3>
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
                  <Button className="w-full bg-blue-600 hover:bg-primary text-white btn-hover-scale">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز استشارة
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative bg-green-100 p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">تعرف على حالات طبيعية للتنفس عن طريق الفم؟</h3>
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
                  <h3 className="text-xl font-bold text-primary mb-2">لماذا تقوم بالتنفس عن طريق الفم؟</h3>
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
                  <Badge className="absolute top-3 right-3 bg-primary text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    فيديو جديد
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-primary/20 p-1 rounded">
                      <Video className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">فيديو تعليمي</span>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">علاج الشخير بالليزر | الدكتور مهند الكسواني</h3>
                  <p className="text-gray-600 text-sm mb-4">في هذا الفيديو، يشرح الدكتور مهند الكسواني، المحاضر الدولي في علوم طب الأسنان، أحدث طرق علاج الشخير باستخدام تقنية الليزر. يعتمد العلاج على تقنيات متطورة لشد عضلات سقف الحلق وتقليل الشخير بشكل فعال ودون الحاجة للجراحة.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/watch?v=nmog1iNuFAQ" target="_blank">
                  <Button className="w-full bg-primary/80 hover:bg-primary text-white btn-hover-scale">
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
                    <div className="bg-accent/20 0 p-1 rounded">
                      <Video className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-accent">فيديو تعليمي</span>
                  </div>
                  <h3 className="font-bold text-lg text-accent mb-2">كتاب "الشخير حتى الموت" | مناقشة مع الدكتور مهند الكسواني</h3>
                  <p className="text-gray-600 text-sm mb-4">في هذا الفيديو، يستعرض الدكتور مهند الكسواني، المحاضر الدولي في علوم طب الأسنان، كتاب "الشخير حتى الموت" لمؤلفه ديفيد ماكنتوش. يقدم الدكتور مهند رؤىً شاملة حول المخاطر الصحية المرتبطة بالشخير وتأثيراته السلبية على نوعية الحياة.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/watch?v=nmog1iNuFAQ" target="_blank">
                  <Button className="w-full bg-accent/80 hover:bg-accent text-white btn-hover-scale">
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
                  <Badge className="absolute top-3 right-3 bg-secondary text-white flex items-center gap-1">
                    <Brain className="w-3 h-3" />
                    دراسة علمية
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-secondary/20 p-1 rounded">
                      <Brain className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm font-medium text-secondary">دراسة علمية</span>
                  </div>
                  <h3 className="font-bold text-lg text-secondary mb-2">الشخير المزمن هو القاتل الصامت!!</h3>
                  <p className="text-gray-600 text-sm mb-4">الشخير المزمن ليس مجرد إزعاج بسيط، بل هو مؤشر على مشكلة صحية قد تؤثر على صحتك ونومك وجودة حياتك.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/watch?v=nmog1iNuFAQ" target="_blank">
                  <Button className="w-full bg-secondary/80 hover:bg-secondary text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 