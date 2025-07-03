import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, PlayCircle, FileText, Download, AlertTriangle, Video, Brain, BookOpen, Zap, Baby, Phone, MessageCircle, CheckCircle, Eye, Clock } from "lucide-react"
import MedicalLibrarySearch from "@/components/MedicalLibrarySearch"
import WhatsAppButton from "@/components/WhatsAppButton"
import Navbar from "@/components/Navbar"
import Breadcrumb from "@/components/Breadcrumb"

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

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">مادة تعليمية</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">فيديو تعليمي</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-600">دراسة علمية</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="مكتبة طبية شاملة للشخير واضطرابات النوم"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">معرفة علمية موثوقة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Interactive Search and Filter Section */}
      <MedicalLibrarySearch />

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">المحتوى المميز هذا الشهر</h2>
            <p className="text-lg text-gray-600">أحدث المواد التعليمية والأكثر مشاهدة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 aspect-video flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    فيديو جديد
                  </Badge>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    15:32
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-red-100 p-1 rounded">
                      <Video className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-red-600">فيديو تعليمي</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">أحدث تقنيات العلاج بالليزر 2024</h3>
                  <p className="text-gray-600 text-sm mb-4">شرح مفصل للتقنيات الجديدة في علاج الشخير بالليزر ونسب النجاح</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      15,400
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      15 دقيقة
                    </span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 aspect-video flex items-center justify-center">
                    <div className="bg-green-600 rounded-full p-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    الأكثر مشاهدة
                  </Badge>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    22:15
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-green-100 p-1 rounded">
                      <Video className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-green-600">فيديو تعليمي</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">كيف تعمل أجهزة Myobrace للأطفال؟</h3>
                  <p className="text-gray-600 text-sm mb-4">دليل شامل لفهم آلية عمل أجهزة Myobrace وكيفية تصحيح التنفس</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      28,200
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      22 دقيقة
                    </span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 aspect-video flex items-center justify-center">
                    <div className="bg-purple-600 rounded-full p-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
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
                  <h3 className="font-bold text-lg text-gray-900 mb-2">دراسة: العلاقة بين الشخير وأمراض القلب</h3>
                  <p className="text-gray-600 text-sm mb-4">بحث علمي حديث يكشف الرابط المؤكد بين الشخير ومخاطر القلب</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      8,900 قراءة
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      10 دقائق
                    </span>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <FileText className="w-4 h-4 ml-2" />
                    قراءة الدراسة العلمية
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تصفح المكتبة حسب التصنيف</h2>
            <p className="text-lg text-gray-600 mb-6">محتوى منظم ومصنف بعناية لسهولة الوصول</p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-red-500" />
                <span>فيديوهات تعليمية</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <span>مقالات مفصلة</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-500" />
                <span>دراسات علمية</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category 1: Causes and Complications */}
            <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">أسباب الشخير ومضاعفاته</h3>
                <p className="text-gray-600 text-sm mb-6">تعرف على الأسباب الجذرية للشخير والمضاعفات الصحية الخطيرة</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Video className="w-4 h-4" />
                      <span>فيديوهات</span>
                    </span>
                    <span className="font-semibold text-red-600">12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span>مقالات</span>
                    </span>
                    <span className="font-semibold text-red-600">18</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Brain className="w-4 h-4" />
                      <span>دراسات</span>
                    </span>
                    <span className="font-semibold text-red-600">5</span>
                  </div>
                </div>
                
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <div className="flex items-center justify-center gap-2">
                    <Video className="w-4 h-4" />
                    <FileText className="w-4 h-4" />
                    <Brain className="w-4 h-4" />
                    <span>تصفح الفيديوهات والمقالات</span>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Category 2: Treatment Methods */}
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">طرق العلاج المختلفة</h3>
                <p className="text-gray-600 text-sm mb-6">الليزر، الأجهزة الفموية، التمارين العلاجية وأحدث التقنيات</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Video className="w-4 h-4" />
                      <span>فيديوهات</span>
                    </span>
                    <span className="font-semibold text-green-600">20</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span>مقالات</span>
                    </span>
                    <span className="font-semibold text-green-600">25</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Brain className="w-4 h-4" />
                      <span>دراسات</span>
                    </span>
                    <span className="font-semibold text-green-600">8</span>
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <div className="flex items-center justify-center gap-2">
                    <Video className="w-4 h-4" />
                    <FileText className="w-4 h-4" />
                    <Brain className="w-4 h-4" />
                    <span>تصفح الفيديوهات والمقالات</span>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Category 3: Children's Snoring */}
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الشخير عند الأطفال</h3>
                <p className="text-gray-600 text-sm mb-6">تأثيره على النمو، التطور، والأداء المدرسي وطرق العلاج المناسبة</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Video className="w-4 h-4" />
                      <span>فيديوهات</span>
                    </span>
                    <span className="font-semibold text-blue-600">15</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span>مقالات</span>
                    </span>
                    <span className="font-semibold text-blue-600">22</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Brain className="w-4 h-4" />
                      <span>دراسات</span>
                    </span>
                    <span className="font-semibold text-blue-600">6</span>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <div className="flex items-center justify-center gap-2">
                    <Video className="w-4 h-4" />
                    <FileText className="w-4 h-4" />
                    <Brain className="w-4 h-4" />
                    <span>تصفح الفيديوهات والمقالات</span>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Category 4: Scientific Studies */}
            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">الدراسات العلمية</h3>
                <p className="text-gray-600 text-sm mb-6">أحدث الأبحاث والدراسات العالمية في مجال اضطرابات النوم</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Video className="w-4 h-4" />
                      <span>فيديوهات</span>
                    </span>
                    <span className="font-semibold text-purple-600">8</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span>مقالات</span>
                    </span>
                    <span className="font-semibold text-purple-600">12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Brain className="w-4 h-4" />
                      <span>دراسات</span>
                    </span>
                    <span className="font-semibold text-purple-600">25</span>
                  </div>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <div className="flex items-center justify-center gap-2">
                    <Video className="w-4 h-4" />
                    <FileText className="w-4 h-4" />
                    <Brain className="w-4 h-4" />
                    <span>تصفح الأبحاث والدراسات</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg aspect-video flex items-center justify-center">
                    <Play className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    8:45
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">لماذا يحدث الشخير؟</h4>
                  <p className="text-sm text-gray-600 mb-3">شرح شامل لأسباب الشخير والعوامل المؤثرة</p>
                  <div className="text-xs text-gray-500">👁️ 45,200 مشاهدة</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg aspect-video flex items-center justify-center">
                    <Play className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    12:30
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">أفضل العلاجات الحديثة</h4>
                  <p className="text-sm text-gray-600 mb-3">تعرف على أحدث تقنيات علاج الشخير</p>
                  <div className="text-xs text-gray-500">👁️ 38,900 مشاهدة</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg aspect-video flex items-center justify-center">
                    <Play className="w-10 h-10 text-purple-600" />
                  </div>
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
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-lg aspect-video flex items-center justify-center">
                    <Play className="w-10 h-10 text-orange-600" />
                  </div>
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
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-t-lg aspect-video flex items-center justify-center">
                    <Play className="w-10 h-10 text-red-600" />
                  </div>
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
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-t-lg aspect-video flex items-center justify-center">
                    <Play className="w-10 h-10 text-teal-600" />
                  </div>
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              <Video className="w-5 h-5 ml-2" />
              شاهد جميع الفيديوهات
            </Button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">حمّل مواد تعليمية مجانية</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              احصل على أدلة مفصلة ومواد تعليمية يمكنك تحميلها ومراجعتها في أي وقت
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">دليل الوالدين</h3>
                <p className="text-blue-100 text-sm mb-4">دليل شامل لفهم مشاكل التنفس عند الأطفال</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  <Download className="w-4 h-4 ml-2" />
                  حمّل مجاناً
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">كتيب العلاجات</h3>
                <p className="text-blue-100 text-sm mb-4">مقارنة شاملة بين طرق العلاج المختلفة</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  <Download className="w-4 h-4 ml-2" />
                  حمّل مجاناً
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">استبيان التقييم</h3>
                <p className="text-blue-100 text-sm mb-4">نموذج تقييم ذاتي لتحديد مستوى المشكلة</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  <Download className="w-4 h-4 ml-2" />
                  حمّل مجاناً
                </Button>
              </CardContent>
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
        </div>      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
