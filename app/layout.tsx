import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'عيادة علاج الشخير - د. مهند الكسواني | المركز الأوروبي',
  description: 'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن. د. مهند الكسواني يقدم حلول متقدمة لعلاج الشخير وانقطاع التنفس للبالغين والأطفال في المركز الأوروبي - عمان',
  keywords: ['علاج الشخير', 'د. مهند الكسواني', 'انقطاع التنفس أثناء النوم', 'عيادة الشخير عمان', 'المركز الأوروبي', 'علاج الشخير للأطفال', 'اضطرابات النوم', 'CPAP', 'التنفس الفموي'],
  authors: [{ name: 'د. مهند الكسواني' }],
  creator: 'عيادة علاج الشخير - المركز الأوروبي',
  publisher: 'عيادة علاج الشخير - المركز الأوروبي',
  robots: 'index, follow',
  openGraph: {
    title: 'عيادة علاج الشخير - د. مهند الكسواني | المركز الأوروبي',
    description: 'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن. حلول متقدمة للبالغين والأطفال',
    url: 'https://dental-snore-clinic.com',
    siteName: 'عيادة علاج الشخير - المركز الأوروبي',
    locale: 'ar_JO',
    type: 'website',
    images: [
      {
        url: '/Artboard 2.svg',
        width: 1200,
        height: 630,
        alt: 'عيادة علاج الشخير - د. مهند الكسواني',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عيادة علاج الشخير - د. مهند الكسواني',
    description: 'أفضل طبيب لعلاج الشخير واضطرابات النوم في الأردن',
    images: ['/Artboard 2.svg'],
  },
  alternates: {
    canonical: 'https://dental-snore-clinic.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  )
}
