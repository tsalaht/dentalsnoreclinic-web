import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import Link from "next/link";

export default function MedicalLibraryVideosPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <section className="relative bg-gradient-to-l from-purple-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: "المكتبة الطبية", href: "/medical-library" },
            { label: "الفيديوهات التثقيفية" }
          ]} />
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-4">الفيديوهات التثقيفية</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">مجموعة من الفيديوهات التعليمية حول الشخير واضطرابات النوم</p>
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
                  <h4 className="font-bold text-primary mb-2">مكافحة الشخير مع طبيب الأسنان</h4>
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
                  <h4 className="font-bold text-primary mb-2">ما هو التنفس الفموي؟!</h4>
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
                  <h4 className="font-bold text-primary mb-2">كيف يساعد الليزر؟</h4>
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
                  <h4 className="font-bold text-primary mb-2">الشخير عند الأطفال - الخطر الخفي</h4>
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
                  <h4 className="font-bold text-primary mb-2">توقف التنفس أثناء النوم</h4>
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
                  <h4 className="font-bold text-primary mb-2">الأجهزة الفموية - دليل شامل</h4>
                  <p className="text-sm text-gray-600 mb-3">كيفية عمل الأجهزة الفموية وفعاليتها</p>
                  <div className="text-xs text-gray-500">👁️ 22,400 مشاهدة</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://www.youtube.com/@EuroDentalCenterJO" target="_blank">
              <Button size="lg" className="bg-blue-600 hover:bg-primary text-white px-8 py-4">
                <Video className="w-5 h-5 ml-2" />
                شاهد جميع الفيديوهات
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 