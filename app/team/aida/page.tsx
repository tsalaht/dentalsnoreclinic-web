import Image from "next/image";

export default function AidaPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <img src="/aida.jpg" alt="د. عايدة" className="w-48 h-auto mx-auto mb-4 rounded-xl" />
        <h1 className="text-2xl font-bold mb-2">د. عايدة أبو سالم</h1>
        <p className="text-gray-600 mb-4">أخصائية علاج الشخير والتنفس الفموي</p>
        <p className="text-primary/90 mb-4">
          طبيبة أسنان وأخصائية علاج الشخير والتنفس الفموي
        </p>

        <div className="text-primary/90 text-right">
          <h2 className="text-xl font-semibold mb-3">نبذة عن الدكتورة عايدة</h2>
          <p className="mb-4">
            الدكتورة عايدة أبو سالم طبيبة أسنان ماهرة وذات خبرة واسعة في علاج اضطرابات النوم والتنفس واضطرابات المفصل الفكي الصدغي (TMJ)، وذلك باستخدام العلاج العضلي الوظيفي كجزء أساسي من نهجها العلاجي الشامل. كما أنها متخصصة في طب الأسنان بالليزر باستخدام أحدث التقنيات.
          </p>

          <h2 className="text-xl font-semibold mb-3">المؤهلات الأكاديمية</h2>
          <p className="mb-4">
            تحمل شهادة بكالوريوس في جراحة الأسنان (BDS)، ومعتمدة في استخدام جهاز Myosa، أحد أشهر الأجهزة العالمية المستخدمة في العلاج العضلي الوظيفي.
          </p>

          <h2 className="text-xl font-semibold mb-3">الخبرة التقنية</h2>
          <p className="mb-4">
            تتمتع الدكتورة عايدة بخبرة عملية كبيرة في استخدام أجهزة الليزر المتقدمة مثل Fotona وDoctor Smile وElexxion AG Snore 3، مما يمكّنها من تقديم علاجات دقيقة وفعالة مصممة وفقًا لاحتياجات كل مريض.
          </p>

          <h2 className="text-xl font-semibold mb-3">نهجها العلاجي</h2>
          <p>
            بفضل خلفيتها الأكاديمية القوية ونهجها العلاجي المتكامل، تكرّس الدكتورة عايدة جهودها لتوفير أعلى مستويات الرعاية وتحسين جودة حياة مرضاها من خلال معالجة الأسباب الجذرية للمشكلات، وليس فقط الأعراض. تجربتها السريرية المتنوعة والتزامها المستمر بالتطوير والتميز يجعل منها طبيبة موثوقة في تقديم الرعاية الشاملة للأسنان والصحة الوظيفية.
          </p>
        </div>
      </div>
    </div>
  );
}