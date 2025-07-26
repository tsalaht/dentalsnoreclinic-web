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
                <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  إجابات شاملة من د. مهند الكسواني
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  أكثر الأسئلة شيوعاً حول الشخير وعلاجه مع إجابات مفصلة بالفيديو والنصوص
                </p>
              </div>

            
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/86.jpg"
                  alt="د. مهند الكسواني يجيب على الأسئلة الشائعة"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                       loading="lazy"
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



      {/* Quick Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" className="border-primary/70 text-blue-600 hover:bg-blue-50">
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
       
          </div>
        </div>
      </section>

      {/* Most Popular Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">الأسئلة الأكثر شيوعاً</h2>
            <p className="text-lg text-gray-600">الأسئلة التي يطرحها المرضى أكثر مع إجابات بالفيديو</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/UlDWKP1QOiU"
                    title="أسباب ظهور الحمو داخل الفم !!"
                    className="w-full aspect-video rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 text-white">الأكثر مشاهدة</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">أسباب ظهور الحمو داخل الفم !!</h4>
                <p className="text-sm text-gray-600 mb-4">تقرح الفم و التهابات الفم؛ هي بثور صغيرة سطحية تظهر في الأغشية المبطنة للفم أو على اللثة
                و تعتبر واحده من اشهر قرح الفم و التهابات الفم التى تتسبب الم مع الأكل والكلام</p>
         
                <a href="https://www.youtube.com/embed/UlDWKP1QOiU" target="_blank">
                  <Button className="w-full bg-blue-600 hover:bg-primary text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد على يوتيوب
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/_3c5gjsxKvg"
                    title="
هل الزرعات الفورية افضل من التقليدية ؟ "
                    className="w-full aspect-video rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-green-500 text-white">شائع</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">
                هل الزرعات الفورية افضل من التقليدية ؟ </h4>
                <p className="text-sm text-gray-600 mb-4">يفضل اطباء الاسنان الزراعة العادية عن الزراعة الفورية لما لها من اثار صحية و طبية 
حيث يجب وضع الزرعة و الانتظار مدة 3 اشهر حتى يحدث ما يسمى بالاندماج العظمي بين الزرعة و عظام الفك و من ثم يتم التركيب على الزرعة 
على عكس الزراعة الفورية التي تكون لحالات خاصة جدا او فقط في زراعة الاسنان الامامية او لحالات لا تستطيع الانتظار مع التنبيه بالخطورة المحتملة 
</p>
          
                <a href="https://www.youtube.com/embed/_3c5gjsxKvg" target="_blank">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد على يوتيوب
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/Qqy35fGyOI0"
                    title="
هل يوجد زراعة أسنان بدون جراحة؟"
                    className="w-full aspect-video rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-2 left-2">
                  <Badge className="bg-green-500 text-white">شائع</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">
                هل يوجد زراعة أسنان بدون جراحة؟</h4>
                <p className="text-sm text-gray-600 mb-4">سواء الزراعة الموجهة بالحاسوب او الزراعة العادية كلها تحتاج الى جراحة 
                و الفكرة من استخدام تقنية الزراعة الموجهة بالحاسوب </p>
           
                <a href="https://www.youtube.com/watch?v=Qqy35fGyOI0" target="_blank">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد على يوتيوب
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
      <h2 className="text-4xl font-bold text-primary mb-4">الأسئلة الشائعة</h2>
      <p className="text-lg text-gray-600">إجابات مفصلة عن الشخير، علاج الأطفال، الأجهزة الفموية، والعلاج بالليزر</p>
    </div>

    <div className="space-y-12">
      {/* Snoring Questions */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">أسئلة عن الشخير</h3>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">كل الناس بتشخر... بس هل ممكن يكون علامة على مشكلة صحية محتاجة انتباه؟</h4>
            <p className="text-gray-600">الشخير هو الصوت الذي يصدر عندما يضيق مجرى الهواء أثناء النوم وتتذبذب الأنسجة الرخوة في الحلق. على الرغم من أنه قد يبدو غير ضار، إلا أنه غالباً ما يكون عرضاً لمشكلة أكبر تسمى "انقطاع التنفس الانسدادي النومي" (OSA). هذا الاضطراب يمكن أن يؤدي إلى نقص الأكسجين في الدم، مما يزيد من مخاطر الإصابة بأمراض القلب، ارتفاع ضغط الدم، السكري، الجلطات، والإرهاق المزمن. في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نؤكد على أهمية تشخيص الشخير بدقة لتحديد ما إذا كان مجرد شخير بسيط أم جزءاً من مشكلة صحية أعمق.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">كيف يختلف التنفس الفموي عن التنفس الأنفي، وما هي مخاطره؟</h4>
            <p className="text-gray-600">الأنف هو الفلتر الطبيعي للجسم، حيث يقوم بترطيب وتدفئة وتصفية الهواء قبل وصوله إلى الرئتين. التنفس الفموي المزمن، خصوصاً لدى الأطفال، يؤثر على نمو عظام الوجه والفكين، مما قد يؤدي إلى ضيق الفك العلوي، تزاحم الأسنان، وتغيرات في ملامح الوجه. في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نركز على إعادة تأهيل نمط التنفس الصحي.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">هل علاج الشخير يتطلب جراحة؟</h4>
            <p className="text-gray-600"><strong>الإجابة السريعة:</strong> لا، في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نقدم حلول غير جراحية فعالة لمعظم حالات الشخير والتنفس الفموي.<br /><br />على عكس الاعتقاد الشائع، فإن العديد من حالات الشخير واضطرابات التنفس الفموي يمكن علاجها بنجاح دون الحاجة إلى تدخل جراحي. يعتمد نهجنا في المركز الأوروبي على التشخيص الدقيق أولاً لتحديد السبب الجذري للمشكلة، ثم وضع خطة علاجية مخصصة قد تشمل الليزر، الأجهزة الفموية، التمارين، وتغييرات في نمط الحياة. الجراحة تتم بالتعاون مع أطباء الأنف والأذن والحنجرة للحالات التي تستدعي ذلك.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">ما هي أحدث التقنيات المستخدمة لعلاج الشخير في المركز الأوروبي؟</h4>
            <p className="text-gray-600">في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي - عيادة الشخير، نفخر بتقديم بروتوكول علاجي متكامل ومتطور وغير جراحي. نستخدم تقنية الليزر المتطورة التي تعمل على شد الأنسجة الرخوة في سقف الحلق، مما يقلل من اهتزازها ويحسن تدفق الهواء بشكل ملحوظ، وكل ذلك يتم بدون ألم أو جراحة. كما نقدم حلولاً مثل الأجهزة الفموية المخصصة التي تساعد على كسر عادة التنفس الفموي، بالإضافة إلى برامج تمارين الوجه والعضلات لتعزيز قوة الأنسجة وتحسين وظيفة التنفس.</p>
          </div>
        </div>
      </div>

      {/* Children's Treatment Questions */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">أسئلة عن علاج الأطفال</h3>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">متى يجب أن أقلق بشأن تنفس طفلي من فمه؟</h4>
            <p className="text-gray-600">من المهم جداً مراقبة طريقة تنفس الأطفال، فالتنفس الأنفي هو الأساس لنمو صحي. يجب القلق إذا لاحظت أن طفلك:<br />
            • يتنفس من فمه معظم الوقت، حتى أثناء اللعب أو مشاهدة التلفاز.<br />
            • يشخر بصوت عالٍ أو يتوقف تنفسه لفترات قصيرة أثناء النوم.<br />
            • يعاني من جفاف الفم أو الشفاه المتشققة.<br />
            • يظهر عليه علامات "وجه التنفس الفموي" مثل الفك السفلي المتراجع، أو تضيق الفك العلوي، أو تزاحم الأسنان.<br />
            • يعاني من التهابات متكررة في الحلق أو الأذن.<br />
            • يواجه صعوبة في التركيز أو يعاني من فرط النشاط بسبب قلة النوم.<br />
            التدخل المبكر أمر حيوي لتصحيح هذه العادة ومنع المضاعفات المستقبلية.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">هل الأجهزة الفموية آمنة ومريحة للأطفال؟</h4>
            <p className="text-gray-600">الأجهزة الفموية المستخدمة للأطفال تختلف عن تلك المخصصة للبالغين. فهي لا تعالج الشخير فقط، بل تهدف أيضاً إلى توجيه نمو الفك العلوي والسفلي بشكل صحيح، وتوسيع مجرى الهواء، وتشجيع التنفس الأنفي. هذه الأجهزة مصممة لتكون مريحة قدر الإمكان، ويتم تعديلها بانتظام لتناسب مراحل نمو الطفل. يحرص أطباؤنا في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي على اختيار الجهاز الأنسب لكل طفل وشرح كيفية استخدامه والعناية به لضمان أقصى درجات الأمان والفعالية.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">هل يمكن علاج التنفس الفموي عند الأطفال دون جراحة؟</h4>
            <p className="text-gray-600">في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نؤمن بالنهج الشامل للعلاج. حتى لو كان هناك عائق مثل اللحمية أو اللوزتين وتمت إزالته جراحياً، فإن عادة التنفس الفموي قد تستمر كنمط سلوكي. لذلك، نركز على العلاج الوظيفي لعضلات الوجه والفكين، والذي يشمل تمارين محددة واستخدام أجهزة فموية مصممة لتدريب الطفل على التنفس من الأنف بشكل صحيح. هذا النهج يساعد على تصحيح نمو الفك وتطوير عادات تنفس صحية ودائمة، مما يقلل الحاجة إلى التدخلات الجراحية المتكررة.</p>
          </div>
        </div>
      </div>

      {/* Oral Appliances Questions */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">أسئلة عن الأجهزة الفموية</h3>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">ما هي الأجهزة الفموية المستخدمة في علاج الشخير والتنفس الفموي؟</h4>
            <p className="text-gray-600">الأجهزة الفموية هي حلول غير جراحية وفعالة لعلاج الشخير وانقطاع التنفس الانسدادي الخفيف إلى المتوسط. يتم تصميمها لتناسب كل مريض، تعمل عن طريق دفع الفك السفلي أو اللسان إلى الأمام قليلاً أثناء النوم، مما يوسع مجرى الهواء ويمنع انسداده. هذه الأجهزة مريحة وسهلة الاستخدام.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">هل الأجهزة الفموية مريحة للاستخدام أثناء النوم؟</h4>
            <p className="text-gray-600">على الرغم من أن التكيف الأولي قد يستغرق بضعة أيام، إلا أن الأجهزة الفموية الحديثة مصممة لتكون مريحة قدر الإمكان. يحرص أطباؤنا على تعديل الجهاز حتى يشعر المريض بالراحة التامة، مما يسمح له بالنوم بشكل طبيعي دون إزعاج. يجد معظم المرضى أنهم يتكيفون مع الجهاز بسرعة ويصبح جزءًا طبيعيًا من روتين نومهم.</p>
          </div>
        </div>
      </div>

      {/* Laser Treatment Questions */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">أسئلة عن الليزر</h3>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">ما هو علاج الشخير بالليزر وكيف يعمل؟</h4>
            <p className="text-gray-600">يعتمد علاج الشخير بالليزر على استخدام طاقة ليزر آمنة وموجهة بدقة، لتسخين الأنسجة الرخوة في الحلق وسقف الحلق. هذا التسخين اللطيف يحفز إنتاج الكولاجين الجديد في الأنسجة، مما يؤدي إلى شدها وتقويتها بمرور الوقت. النتيجة هي فتح مجرى الهواء بشكل أكبر وتقليل اهتزاز الأنسجة المسببة لصوت الشخير، مما يمنحك نوماً أعمق وأكثر هدوءاً.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">هل علاج الشخير بالليزر مؤلم؟ وهل يتطلب فترة تعافٍ طويلة؟</h4>
            <p className="text-gray-600">يتميز علاج الشخير بالليزر بكونه إجراءً لطيفاً وغير مؤلمٍ. معظم المرضى لا يشعرون بأي ألم أثناء الجلسة، وقد يشعر البعض بانزعاج خفيف أو شعور بالدفء. لا يتطلب العلاج تخديراً، وبعد الجلسة مباشرة، يمكن للمريض العودة إلى أنشطته اليومية بشكل طبيعي، بخلاف تجنب الأطعمة والمشروبات شديدة الحرارة أو البرودة لبضع ساعات.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">هل علاج الشخير بالليزر آمن وفعال؟</h4>
            <p className="text-gray-600">يعتبر علاج الشخير بالليزر إجراءً آمناً للغاية عند إجرائه بواسطة أطباء متخصصين ومدربين. تم اعتماد هذه التقنية على نطاق واسع وأظهرت الدراسات العلمية نتائج فعالة في تقليل الشخير وتحسين جودة النوم لدى العديد من المرضى. كما أن الليزر المستخدم آمن للأنسجة الرخوة ولا يسبب أي ضرر للأصوات أو التنفس. في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نستخدم أحدث أجهزة الليزر ونتّبع بروتوكولات علاجية دقيقة لضمان أعلى مستويات الأمان والفعالية.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Text FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">الأسئلة النصية الشائعة</h2>
              <p className="text-lg text-gray-600">إجابات سريعة ومفصلة للأسئلة الأكثر تكراراً</p>
            </div>

            <div className="space-y-6">
              {/* <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    كم تبلغ تكلفة العلاج بالليزر؟
                  </h3>
                  <p className="text-gray-600 mb-4">
                    تكلفة العلاج بالليزر تتراوح من 500-800 دينار حسب حالة المريض وعدد الجلسات المطلوبة. نقدم استشارة مجانية لتحديد الخطة والتكلفة المناسبة.
                  </p>
                  <a href="https://wa.me/9620797377375?text=أريد معرفة تكلفة العلاج بالليزر لحالتي" target="_blank">
                    <Button className="bg-blue-600 hover:bg-primary text-white">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      استفسر عن التكلفة
                    </Button>
                  </a>
                </CardContent>
              </Card> */}

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-green-600" />
                    كم مدة علاج الأطفال بالجهاز العضلي الوظيفي الفموي 
                  </h3>
                  <p className="text-gray-600 mb-4">
                    مدة العلاج تتراوح من 12-24 شهر حسب عمر الطفل وشدة الحالة. النتائج الأولية تظهر خلال 3-6 أشهر، والتحسن الكامل يحتاج للمدة الكاملة.
                  </p>
                  <a href="https://wa.me/9620797377375?text=أريد معرفة مدة علاج طفلي بأجهزة Myobrace" target="_blank">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      استشارة للطفل
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-purple-600" />
                    هل يغطي التأمين الصحي علاج الشخير؟
                  </h3>
                  <p className="text-gray-600 mb-4">
                    معظم شركات التأمين في الأردن تغطي علاج الشخير إذا كان مرتبط بتوقف التنفس أثناء النوم. نساعدكم في إعداد التقارير المطلوبة للتأمين.
                  </p>
                  <a href="https://wa.me/9620797377375?text=أريد معرفة تفاصيل التغطية التأمينية لعلاج الشخير" target="_blank">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      استفسار التأمين
                    </Button>
                  </a>
                </CardContent>
              </Card> */}

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    هل هناك آثار جانبية للعلاج؟
                  </h3>
                  <p className="text-gray-600 mb-4">
                    العلاجات التي نستخدمها آمنة جداً. قد يشعر المريض بانزعاج بسيط في الأيام الأولى مع الأجهزة الفموية، وهذا طبيعي ويختفي خلال أسبوع.
                  </p>
                  <a href="https://wa.me/9620797377375?text=أريد معرفة المزيد عن أمان العلاج والآثار الجانبية" target="_blank">
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
            <h2 className="text-3xl font-bold mb-4 text-white">لم تجد إجابة سؤالك؟</h2>
            <p className="text-xl text-blue-100">اسأل د. مهند مباشرة واحصل على إجابة شخصية</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center text-white">🤔 اطرح سؤالك الآن</h3>
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
                    <a href="https://wa.me/9620797377375?text=لدي سؤال خاص حول الشخير وأريد إجابة من الدكتور" target="_blank" className="w-full">
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
            <h2 className="text-3xl font-bold text-primary mb-4">قد يهمك أيضاً</h2>
            <p className="text-lg text-gray-600">روابط مفيدة لمعلومات إضافية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">المكتبة الطبية</h3>
                <p className="text-gray-600 text-sm mb-4">فيديوهات ومقالات تعليمية شاملة</p>
                <Link href="/medical-library">
                  <Button variant="outline" className="border-primary/70 text-blue-600 hover:bg-blue-50 w-full">
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
                <h3 className="text-lg font-bold text-primary mb-3">اختبار التقييم</h3>
                <p className="text-gray-600 text-sm mb-4">قيّم حالتك واكتشف مدى خطورة الشخير</p>
                <a href="https://wa.me/9620797377375?text=أريد إجراء اختبار تقييم الشخير" target="_blank">
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
                <h3 className="text-lg font-bold text-primary mb-3">احجز استشارة</h3>
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
