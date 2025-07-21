"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Play } from "lucide-react"
import Navbar from "@/components/Navbar"
import Breadcrumb from "@/components/Breadcrumb"

const blogPosts = [
  {
    slug: "blog1",
    title: "علاج الشخير في الأردن",
    image: "/blog1.jpg",
    description: "علاج الشخير في الأردن: دليل شامل لحلول فعالة إذا كنت تعاني من الشخير المزعج، فأنت لست وحدك. الشخير مشكلة شائعة تؤثر على جودة النوم والحياة اليومية. في هذا المقال، سنستعرض أفضل طرق علاج الشخير في الأردن، بما في ذلك العيادات المتخصصة والعلاجات المتاحة.   ما هو الشخير؟",
  },
  {
    slug: "blog2",
    title: "كيف يمكن أن يغير علاج الوجه الوظيفي شكل الوجوه؟",
    image: "/blog2.png",
    description: "طريقة بوتيكو المفتاح للتنفس عن طريق الأنف والصحة القصوى عند قلع تقويم الأسنان وإعادة وجه البالغين نحو الجمال وجعل تلك الأولوية القصوى في الحياة، يبدو أنه أصبحت الرؤى والمعرفة بصورة أعمق وأكبر حول ما يسبب اضطرابات الفم والوجه، وكيفية عكس ذلك، وكيف كل شيء مترابط حقا مع...اقرأ المزيد",
  },
  {
    slug: "blog3",
    title: "الحساسية وصحة الأسنان عند الأطفال",
    image: "/blog3.jpg",
    description: "إن كان طفلك يعاني من تكرار في التهابات اللوزتين أو اللحميات الأنفية فسيتأثر مجرى التنفس العلوي بشكل كبير مما يمنعه من التنفس الصحيح عن طريق الأنف و يلجأ الطفل تلقائياً للتنفس من الفم. إن الاعتياد على التنفس من الفم يزيد فرصة الإصابة بالاتهابات والأمراض بسبب دخول كمية...اقرأ المزيد",
  },
  {
    slug: "blog4",
    title: "الأكل الحساسية وانقطاع التنفس أثناء النوم",
    image: "/blog4.jpg",
    description: "ل ما تحتاج لمعرفته مقدمة تلعب الحمية الغذائية دوراً كبيراً في تحسين صحة الشخص، فكلما كانت الحمية صحية أكثر كانت صحة الشخص بشكل أفضل. هناك العديد من الأمراض والظروف الصحية بحاجة لتدخل تغذوي ليستطيع الشخص التغلب على الظرف الصحي. يمكن لتغيير صغير في طبيعة الحمية التي...اقرأ المزيد",
  },
  {
    slug: "blog5",
    title: "أفضل الطرق لحل مشكلة الشخير",
    image: "/blog5.jpg",
    description: "الشخير هو الصوت الذي يصدرة النائم نتيجة لاهتزاز في الأجزاء التنفسية بسبب حركة الهواء المتعسرة خلال التنفس أثناء النوم، و ذلك نتيجة لتضيق في ممرات التنفس. يحدث الشخير الهادئ مع غالبية الناس إذا كان وضع الرأس بالنسبة للعنق غير صحيحاً، أما الشخير العالي فقد يكون مصحوباً...اقرأ المزيد",
  },
  {
    slug: "blog6",
    title: "انقطاع التنفس أثناء النوم التعريف، الأسباب، الأعراض و أفضل طرق العلاج",
    image: "/blog6.png",
    description: "ما هو انقطاع التنفس أثناء النوم؟ قد تبدو كلمة “انقطاع التنفس أثناء النوم” أمراً بسيطاً و غير مؤلماً، إلا أن الأشخاص الذين يعانون من هذه المشكلة يدركون تماماً صعوبتها و مدى تأثيرها الصحي و النفسي على حياتهم اليومية. يعاني هؤلاء الأشخاص من صعوبة حقيقية في...اقرأ المزيد",
  },
  {
    slug: "blog7",
    title: "النظام الغذائي لانقطاع النفس أثناء النوم",
    image: "/blog7.jpeg",
    description: "ماذا يجب أن يشمل النظام الغذائي الجيد لانقطاع النفس أثناء النوم؟ تأكد من اتباع نظام غذائي يحتوي على الكثير من الفواكه والخضروات العضوية الطازجة وأيضاً الفيتامينات والمعادن. استخدم الباحثون البيانات من عام 2007 و 2008 لجمع المعلومات عن جودة النوم، أعراض النوم وتناول...اقرأ المزيد",
  },
  {
    slug: "blog8",
    title: "العلاج الوظيفي لتحسين حالة انقطاع النفس أثناء النوم",
    image: "/blog8.jpg",
    description: "المعالجة الوظيفية العضلية هي برنامج يتكونُ من عددٍ من التمرينات والتي تساعدك على التوقفِ عن العادات الفموية والوجهيّة التي تؤثر سلباً على صحتك وتغير في شكلك. إذ يقوم البرنامج العلاجي بإعادة تشكيل عضلات الوجه والفك والفم بحيث تبدأ بالعمل بانسجام وتوافق، ويغرس البرنامج...اقرأ المزيد",
  },
  {
    slug: "blog9",
    title: "التنفس من الفم: التوابع الجسدية، العقلية والعاطفية",
    image: "/blog9.jpg",
    description: "التنفس من الفم: التوابع الجسدية، العقلية والعاطفية يعتبر التنفس أحد أهم الوظائف التي يقوم بها جسم الإنسان في كل مرة نتنفس بها، يمكن أن يتأثر الجسم بشكل إيجابي أو سلبي و ذلك يعتمد على كيفية التنفس من المؤكد أن التنفس الطبيعي والصحيح هو التنفس عن طريق الأنف إلا أن البعض...اقرأ المزيد",
  },
  {
    slug: "blog10",
    title: "علاج الأرق واضطراب النوم عند السيدات الحوامل",
    image: "/blog10.jpg",
    description: "علاج الأرق واضطراب النوم عند السيدات الحوامل   الأرق هو اضطراب فسيولوجي في آلية النوم، متمثلا في صعوبة بدء النوم أو تعذر الاستمرار في النوم والاستيقاظ ليلا. يعد الأرق واضطرابات النوم أحد المشكلات شائعة الحدوث أثناء الحمل، ولاسيما في الثلث الأول والأخير منه.     ويجدر...اقرأ المزيد",
  },
  {
    slug: "blog11",
    title: "أسباب الإصابة بالأرق واضطرابات النوم لدى النساء",
    image: "/blog11.jpg",
    description: "أسباب الإصابة بالأرق واضطرابات النوم لدى النساء   يصنف الأرق باعتباره أحد أكثر اضطرابات النوم شيوعا وانتشارا، والذي يتخذ العديد من الصور، مثل البقاء مستيقظا لفترة طويلة دون نوم، أو صعوبة البدء في النوم، أو الاستيقاظ من النوم أثناء الليل وعدم القدرة على معاودة النوم...اقرأ المزيد",
  },
  {
    slug: "blog12",
    title: "ما هي أسباب الشخير & كيف يمكن التعامل معه؟",
    image: "/blog12.jpg",
    description: "ما هي أسباب الشخير & كيف يمكن التعامل معه؟   الشخير هو صوت غير اعتيادي يصدر نتيجة ارتخاء الأنسجة الموجودة بممر الحلق، حيث يتسبب تدفق الهواء عبر الحلق أثناء النوم، واحتكاكه بالأنسجة المرتخية بالحلق في خروج هذا الصوت الأجش المميز. ويلاحظ أن الشخير قد يكون مشكلة...اقرأ المزيد",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Blog Section */}
      <section className="relative bg-gradient-to-l from-blue-50 to-teal-100 py-12 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl animate-float morphing-shape"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-sky-200/20 rounded-full blur-3xl animate-bounce-slow morphing-shape"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-scale-pulse morphing-shape"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: "المدونة" }
            ]} 
          />

          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 animate-fade-in-up mb-4">المدونة الطبية</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 animate-fade-in-down relative">
              اكتشف أحدث المقالات الطبية
              <span className="block w-28 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              تعرف على معلومات قيمة حول الشخير، اضطرابات النوم، وصحة الفم والأسنان من خلال مقالاتنا العلمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="bg-white border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover-lift">
                  <CardContent className="p-6 text-center relative">
                    <div className="w-full h-60 rounded-xl overflow-hidden mb-4 relative">
                      {post.image.endsWith('.mp4') ? (
                        <video src={post.image} className="w-full h-full object-cover" autoPlay loop muted />
                      ) : (
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={500}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <Badge className="absolute top-3 right-3 bg-primary/70 text-white flex items-center gap-1 animate-fade-in-up">
                        <BookOpen className="w-3 h-3" />
                        مقالة
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base line-clamp-3">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}