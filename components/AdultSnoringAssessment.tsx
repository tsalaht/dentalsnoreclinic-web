"use client"

import { useState } from "react"
import { CheckCircle, AlertTriangle, Clock, Heart, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Question {
  id: string
  question: string
  options: { value: number; text: string }[]
}

export default function AdultSnoringAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const questions: Question[] = [
    {
      id: "loudness",
      question: "كيف تصف قوة صوت شخيرك؟",
      options: [
        { value: 0, text: "لا أشخر أبداً" },
        { value: 1, text: "شخير خفيف أحياناً" },
        { value: 2, text: "شخير متوسط معظم الليالي" },
        { value: 3, text: "شخير قوي كل ليلة" }
      ]
    },
    {
      id: "breathing",
      question: "هل تشعر بتوقف التنفس أثناء النوم؟",
      options: [
        { value: 0, text: "لا، أبداً" },
        { value: 1, text: "نادراً (مرة في الشهر)" },
        { value: 2, text: "أحياناً (عدة مرات في الشهر)" },
        { value: 3, text: "كثيراً (عدة مرات في الليلة)" }
      ]
    },
    {
      id: "tiredness",
      question: "كيف تشعر عند الاستيقاظ صباحاً؟",
      options: [
        { value: 0, text: "نشيط ومرتاح" },
        { value: 1, text: "متعب قليلاً" },
        { value: 2, text: "متعب ومرهق" },
        { value: 3, text: "منهك جداً وغير مرتاح" }
      ]
    },
    {
      id: "daytime",
      question: "هل تشعر بالنعاس أثناء النهار؟",
      options: [
        { value: 0, text: "لا، أشعر بالنشاط" },
        { value: 1, text: "أحياناً بعد الغداء" },
        { value: 2, text: "كثيراً خلال اليوم" },
        { value: 3, text: "أنام بسهولة في أي مكان" }
      ]
    },
    {
      id: "concentration",
      question: "كيف مستوى تركيزك في العمل؟",
      options: [
        { value: 0, text: "ممتاز، لا مشاكل" },
        { value: 1, text: "جيد مع صعوبة بسيطة" },
        { value: 2, text: "متوسط، أواجه صعوبات" },
        { value: 3, text: "ضعيف، مشاكل كبيرة" }
      ]
    },    {
      id: "partner",
      question: "هل يشتكي أفراد الأسرة من شخيرك؟",
      options: [
        { value: 0, text: "لا يشتكي أحد أبداً" },
        { value: 1, text: "يشتكون أحياناً" },
        { value: 2, text: "يشتكون كثيراً" },
        { value: 3, text: "ينامون في غرف منفصلة" }
      ]
    }
  ]

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const getTotalScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0)
  }

  const getResultsData = () => {
    const score = getTotalScore()
    
    if (score <= 3) {
      return {
        level: "منخفض",
        color: "green",
        icon: CheckCircle,
        title: "حالتك جيدة نسبياً",
        description: "لا توجد مؤشرات خطيرة، لكن المتابعة الدورية مهمة",
        recommendations: [
          "حافظ على وزن صحي",
          "تجنب النوم على الظهر",
          "قلل من الكحول والتدخين",
          "فحص دوري سنوياً"
        ],
        urgency: "استشارة وقائية"
      }
    } else if (score <= 9) {
      return {
        level: "متوسط",
        color: "yellow",
        icon: AlertTriangle,
        title: "تحتاج لمراجعة طبية",
        description: "هناك مؤشرات تستدعي الفحص والمتابعة الطبية",
        recommendations: [
          "فحص طبي شامل للتنفس",
          "تقييم انقطاع التنفس النومي",
          "ضبط نمط النوم",
          "علاج مخصص حسب الحالة"
        ],
        urgency: "موعد خلال أسبوعين"
      }
    } else {
      return {
        level: "عالي",
        color: "red",
        icon: AlertTriangle,
        title: "تحتاج لعلاج فوري",
        description: "حالتك تتطلب تدخل طبي عاجل لتجنب المضاعفات",
        recommendations: [
          "فحص طبي فوري",
          "دراسة نوم متخصصة",
          "علاج انقطاع التنفس النومي",
          "متابعة طبية مكثفة"
        ],
        urgency: "موعد عاجل خلال 48 ساعة"
      }
    }
  }

  const restartAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const results = getResultsData()
    const score = getTotalScore()

    return (
      <div className="max-w-4xl mx-auto">
        <Card className={`border-2 ${
          results.color === 'green' ? 'border-green-500 bg-green-50' :
          results.color === 'yellow' ? 'border-yellow-500 bg-yellow-50' :
          'border-red-500 bg-red-50'
        }`}>
          <CardContent className="p-8 text-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              results.color === 'green' ? 'bg-green-500' :
              results.color === 'yellow' ? 'bg-yellow-500' :
              'bg-red-500'
            }`}>
              <results.icon className="w-10 h-10 text-white" />
            </div>

            <Badge className={`mb-4 ${
              results.color === 'green' ? 'bg-green-100 text-green-800' :
              results.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              مستوى الخطر: {results.level} ({score}/18 نقطة)
            </Badge>

            <h3 className="text-2xl font-bold text-primary mb-4">{results.title}</h3>
            <p className="text-lg text-gray-600 mb-6">{results.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-right">
                <h4 className="font-semibold text-primary mb-3">التوصيات:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary/70 mt-1">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right">
                <h4 className="font-semibold text-primary mb-3">خطوات العلاج:</h4>
                <div className={`p-4 rounded-lg ${
                  results.color === 'green' ? 'bg-green-100' :
                  results.color === 'yellow' ? 'bg-yellow-100' :
                  'bg-red-100'
                }`}>
                  <p className="font-medium text-primary mb-2">{results.urgency}</p>
                  <p className="text-sm text-gray-600">
                    {results.color === 'red' ? 
                      "حالتك تتطلب تدخل طبي فوري" :
                      "نوصي بحجز موعد للفحص والمتابعة"
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/9620797377375?text=أريد حجز موعد عاجل - نتيجة اختبار الشخير: ${results.level} (${score}/18)`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={`${
                  results.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                  results.color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-700' :
                  'bg-red-600 hover:bg-red-700'
                } text-white`}>
                  <MessageCircle className="w-4 h-4 ml-2" />
                  احجز موعد الآن
                </Button>
              </a>
              <Button variant="outline" onClick={restartAssessment}>
                إعادة الاختبار
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            السؤال {currentQuestion + 1} من {questions.length}
          </span>
          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index < currentQuestion 
                    ? 'bg-primary/70' 
                    : index === currentQuestion 
                    ? 'bg-blue-300' 
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="bg-white shadow-lg">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-primary mb-6 text-center">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-4 text-right border-2 border-gray-200 rounded-lg hover:border-primary/70 hover:bg-blue-50 transition-all"
              >
                <span className="font-medium">{option.text}</span>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                السؤال السابق
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>جميع إجاباتك سرية ولن يتم حفظها</p>
      </div>
    </div>
  )
}
