"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/adults", label: "علاج البالغين" },
    { href: "/children", label: "علاج الأطفال" },
    { href: "/medical-library", label: "المكتبة الطبية" },
    { href: "/sleep-challenge", label: "تحدي النوم" },
    { href: "/faq", label: "الأسئلة الشائعة" },
    { href: "/about", label: "عن العيادة" },
    { href: "/contact", label: "تواصل معنا" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between " dir="rtl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block group">
              <div className="rounded-lg p-2 transition-all duration-300 hover:bg-blue-50">
                <Image
                  src="/Artboard 2.svg"
                  alt="Dentalsnore Clinic - المركز الأوروبي"
                  width={240}
                  height={80}
                  className="h-10 md:h-10 lg:h-16 w-auto max-w-[160px] md:max-w-[180px] lg:max-w-[200px] transition-all duration-300"
                  priority
                />
              </div>
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 text-lg">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium px-4 py-2 rounded-none transition-all duration-300
                  ${
                    pathname === item.href
                      ? "text-blue-700"
                      : "text-gray-600 hover:text-blue-700"
                  }
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute left-0 right-0 -bottom-1 h-[3px] rounded-full transition-all duration-300
                    ${
                      pathname === item.href
                        ? "bg-blue-500 w-full"
                        : "bg-blue-200 w-0 group-hover:w-full hover:w-full"
                    }
                  `}
                  aria-hidden="true"
                />
              </Link>
            ))}
            {/* CTA Button */}
            <div className="mr-4">
              <Link href="/contact">
                <button className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300">
                  احجز موعد
                </button>
              </Link>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}