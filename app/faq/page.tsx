import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Video, Baby, User, Stethoscope, Heart, Play, Eye, ThumbsUp, PlayCircle, HelpCircle, Phone, MessageCircle, Zap, BookOpen, CheckCircle, Calendar } from "lucide-react"
import WhatsAppButton from "@/components/WhatsAppButton"
import Navbar from "@/components/Navbar"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">❓ الأسئلة الشائعة</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  إجابات شاملة من د. مهند الكسواني
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  أكثر الأسئلة شيوعاً حول الشخير وعلاجه مع إجابات مفصلة بالفيديو والنصوص
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">سؤال وجواب</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">30+</div>
                  <div className="text-sm text-gray-600">فيديو توضيحي</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">دعم متاح</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="د. مهند الكسواني يجيب على الأسئلة الشائعة"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">إجابات من خبير متخصص</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search FAQ */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="ابحث في الأسئلة الشائعة... (مثل: العلاج بالليزر، الأطفال، المدة)"
                className="w-full pr-14 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <Button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                بحث
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              <Video className="w-4 h-4 ml-2" />
              العلاج بالليزر
            </Button>
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
              <Baby className="w-4 h-4 ml-2" />
              الأطفال
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
              <User className="w-4 h-4 ml-2" />
              البالغين
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              <Stethoscope className="w-4 h-4 ml-2" />
              الأجهزة الفموية
            </Button>
            <Button variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
              <Heart className="w-4 h-4 ml-2" />
              الأسعار
            </Button>
          </div>
        </div>
      </section>

      {/* Most Popular Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة الأكثر شيوعاً</h2>
            <p className="text-lg text-gray-600">الأسئلة التي يطرحها المرضى أكثر مع إجابات بالفيديو</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg aspect-video flex items-center justify-center">
                    <Play className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    5:32
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 text-white">الأكثر مشاهدة</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">ما الفرق بين الشخير الطبيعي والمرضي؟</h4>
                <p className="text-sm text-gray-600 mb-4">د. مهند يشرح كيفية التمييز بين الشخير العادي والشخير الذي يحتاج علاج</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>45,200 مشاهدة</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>1,200</span>
                  </span>
                </div>
                <a href="https://wa.me/962796759251?text=أريد مشاهدة فيديو الفرق بين الشخير الطبيعي والمرضي" target="_blank">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد الإجابة
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg aspect-video flex items-center justify-center">
                    <Play className="w-12 h-12 text-green-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    7:15
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-green-500 text-white">شائع</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">هل يمكن علاج الشخير بدون جراحة؟</h4>
                <p className="text-sm text-gray-600 mb-4">البدائل غير الجراحية المتاحة والعلاجات الحديثة وفعاليتها</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>38,900 مشاهدة</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>980</span>
                  </span>
                </div>
                <a href="https://wa.me/962796759251?text=أريد مشاهدة فيديو علاج الشخير بدون جراحة" target="_blank">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد الإجابة
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg aspect-video flex items-center justify-center">
                    <Play className="w-12 h-12 text-purple-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    6:48
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-purple-500 text-white">للوالدين</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">كيف أعرف أن طفلي يحتاج علاج؟</h4>
                <p className="text-sm text-gray-600 mb-4">العلامات التي تدل على ضرورة فحص الطفل للتنفس أثناء النوم</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>32,100 مشاهدة</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>750</span>
                  </span>
                </div>
                <a href="https://wa.me/962796759251?text=أريد مشاهدة فيديو علامات احتياج الطفل للعلاج" target="_blank">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد الإجابة
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg aspect-video flex items-center justify-center">
                    <Play className="w-12 h-12 text-orange-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    4:22
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-orange-500 text-white">علاج حديث</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">ما هي فعالية العلاج بالليزر؟</h4>
                <p className="text-sm text-gray-600 mb-4">شرح تفصيلي عن تقنية الليزر ونسب نجاحها والنتائج المتوقعة</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>29,800 مشاهدة</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>650</span>
                  </span>
                </div>
                <a href="https://wa.me/962796759251?text=أريد مشاهدة فيديو فعالية العلاج بالليزر" target="_blank">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد الإجابة
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg aspect-video flex items-center justify-center">
                    <Play className="w-12 h-12 text-pink-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    8:10
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-pink-500 text-white">مدة العلاج</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">كم يستغرق العلاج للحصول على نتائج؟</h4>
                <p className="text-sm text-gray-600 mb-4">الجدول الزمني المتوقع لعلاج الشخير والنتائج المنتظرة</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>25,600 مشاهدة</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>540</span>
                  </span>
                </div>
                <a href="https://wa.me/962796759251?text=أريد مشاهدة فيديو مدة العلاج والنتائج" target="_blank">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد الإجابة
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg aspect-video flex items-center justify-center">
                    <Play className="w-12 h-12 text-teal-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    6:33
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-teal-500 text-white">أمان</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">هل العلاج آمن للأطفال؟</h4>
                <p className="text-sm text-gray-600 mb-4">أمان العلاجات المختلفة وخصوصيتها للأطفال والآثار الجانبية</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>22,400 مشاهدة</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>480</span>
                  </span>
                </div>
                <a href="https://wa.me/962796759251?text=أريد مشاهدة فيديو أمان العلاج للأطفال" target="_blank">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد الإجابة
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ by Category */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تصفح حسب الموضوع</h2>
            <p className="text-lg text-gray-600">أسئلة منظمة حسب الموضوع لسهولة الوصول</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">العلاج بالليزر</h3>
                <p className="text-gray-600 text-sm mb-4">كل ما تريد معرفته عن تقنية الليزر</p>
                <div className="text-xs text-gray-500 mb-4">
                  <span>📹 12 فيديو • 📝 8 إجابات نصية</span>
                </div>
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50">
                  <Video className="w-4 h-4 ml-2" />
                  شاهد الأسئلة
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Baby className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">علاج الأطفال</h3>
                <p className="text-gray-600 text-sm mb-4">أسئلة الوالدين حول مشاكل الأطفال</p>
                <div className="text-xs text-gray-500 mb-4">
                  <span>📹 15 فيديو • 📝 12 إجابة نصية</span>
                </div>
                <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                  <Video className="w-4 h-4 ml-2" />
                  شاهد الأسئلة
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">الأجهزة الفموية</h3>
                <p className="text-gray-600 text-sm mb-4">معلومات عن أجهزة الفم والعلاج</p>
                <div className="text-xs text-gray-500 mb-4">
                  <span>📹 10 فيديو • 📝 6 إجابات نصية</span>
                </div>
                <Button variant="outline" className="w-full border-purple-500 text-purple-600 hover:bg-purple-50">
                  <Video className="w-4 h-4 ml-2" />
                  شاهد الأسئلة
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">التكلفة والأسعار</h3>
                <p className="text-gray-600 text-sm mb-4">أسئلة حول تكلفة العلاج والتأمين</p>
                <div className="text-xs text-gray-500 mb-4">
                  <span>📹 8 فيديو • 📝 10 إجابات نصية</span>
                </div>
                <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                  <Video className="w-4 h-4 ml-2" />
                  شاهد الأسئلة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Text FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة النصية الشائعة</h2>
              <p className="text-lg text-gray-600">إجابات سريعة ومفصلة للأسئلة الأكثر تكراراً</p>
            </div>

            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    كم تبلغ تكلفة العلاج بالليزر؟
                  </h3>
                  <p className="text-gray-600 mb-4">
                    تكلفة العلاج بالليزر تتراوح من 500-800 دينار حسب حالة المريض وعدد الجلسات المطلوبة. نقدم استشارة مجانية لتحديد الخطة والتكلفة المناسبة.
                  </p>
                  <a href="https://wa.me/962796759251?text=أريد معرفة تكلفة العلاج بالليزر لحالتي" target="_blank">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      استفسر عن التكلفة
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-green-600" />
                    كم مدة علاج الأطفال بأجهزة Myobrace؟
                  </h3>
                  <p className="text-gray-600 mb-4">
                    مدة العلاج تتراوح من 12-24 شهر حسب عمر الطفل وشدة الحالة. النتائج الأولية تظهر خلال 3-6 أشهر، والتحسن الكامل يحتاج للمدة الكاملة.
                  </p>
                  <a href="https://wa.me/962796759251?text=أريد معرفة مدة علاج طفلي بأجهزة Myobrace" target="_blank">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      استشارة للطفل
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-purple-600" />
                    هل يغطي التأمين الصحي علاج الشخير؟
                  </h3>
                  <p className="text-gray-600 mb-4">
                    معظم شركات التأمين في الأردن تغطي علاج الشخير إذا كان مرتبط بتوقف التنفس أثناء النوم. نساعدكم في إعداد التقارير المطلوبة للتأمين.
                  </p>
                  <a href="https://wa.me/962796759251?text=أريد معرفة تفاصيل التغطية التأمينية لعلاج الشخير" target="_blank">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      استفسار التأمين
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    هل هناك آثار جانبية للعلاج؟
                  </h3>
                  <p className="text-gray-600 mb-4">
                    العلاجات التي نستخدمها آمنة جداً. قد يشعر المريض بانزعاج بسيط في الأيام الأولى مع الأجهزة الفموية، وهذا طبيعي ويختفي خلال أسبوع.
                  </p>
                  <a href="https://wa.me/962796759251?text=أريد معرفة المزيد عن أمان العلاج والآثار الجانبية" target="_blank">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      معلومات الأمان
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ask Your Question */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">لم تجد إجابة سؤالك؟</h2>
            <p className="text-xl text-blue-100">اسأل د. مهند مباشرة واحصل على إجابة شخصية</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">🤔 اطرح سؤالك الآن</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="اسمك الكريم"
                    className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <textarea
                    placeholder="اكتب سؤالك هنا بالتفصيل..."
                    rows={4}
                    className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                  ></textarea>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://wa.me/962796759251?text=لدي سؤال خاص حول الشخير وأريد إجابة من الدكتور" target="_blank" className="w-full">
                      <Button className="bg-green-500 hover:bg-green-600 text-white w-full py-3">
                        <MessageCircle className="w-4 h-4 ml-2" />
                        أرسل عبر واتساب
                      </Button>
                    </a>
                    <a href="tel:+96267592513" className="w-full">
                      <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 w-full py-3">
                        <Phone className="w-4 h-4 ml-2" />
                        اتصل مباشرة
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-blue-100 text-sm">
              💬 نجيب على جميع الأسئلة خلال 24 ساعة • 📞 الاستشارة الأولى مجانية
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قد يهمك أيضاً</h2>
            <p className="text-lg text-gray-600">روابط مفيدة لمعلومات إضافية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">المكتبة الطبية</h3>
                <p className="text-gray-600 text-sm mb-4">فيديوهات ومقالات تعليمية شاملة</p>
                <Link href="/medical-library">
                  <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 w-full">
                    تصفح المكتبة
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">اختبار التقييم</h3>
                <p className="text-gray-600 text-sm mb-4">قيّم حالتك واكتشف مدى خطورة الشخير</p>
                <a href="https://wa.me/962796759251?text=أريد إجراء اختبار تقييم الشخير" target="_blank">
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 w-full">
                    ابدأ التقييم
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">احجز استشارة</h3>
                <p className="text-gray-600 text-sm mb-4">احجز موعد مع د. مهند للفحص والعلاج</p>
                <Link href="/contact">
                  <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 w-full">
                    احجز الآن
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
