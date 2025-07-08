"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { useState, useRef, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const [studiesOpen, setStudiesOpen] = useState(false)
  const studiesRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
      if (studiesRef.current && !studiesRef.current.contains(event.target as Node)) {
        setStudiesOpen(false)
      }
    }
    if (servicesOpen || studiesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesOpen, studiesOpen])

  const navigationItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/medical-library", label: "المكتبة الطبية" },
    { href: "/sleep-challenge", label: "تحدي النوم" },
    { href: "/faq", label: "الأسئلة الشائعة" },
    { href: "/about", label: "عن العيادة" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "/blog", label: "المدونة" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-3 relative">
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
            {/* Dropdown for خدماتنا */}
            <div className="relative" ref={servicesRef}>
              <div
                onClick={() => setServicesOpen((open) => !open)}
                className={`relative font-medium px-4 py-2 rounded-none transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                  ["/adults", "/children"].includes(pathname)
                    ? "text-blue-700"
                    : "text-gray-600 hover:text-blue-700"
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                role='button'
              >
                خدماتنا
                <svg className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
              {servicesOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                  <Link
                    href="/adults"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    علاج البالغين
                  </Link>
                  <Link
                    href="/children"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    علاج الأطفال
                  </Link>
                </div>
              )}
            </div>
            {/* Dropdown for دراسات علمية */}
            <div className="relative" ref={studiesRef}>
              <div
                onClick={() => setStudiesOpen((open) => !open)}
                className={`relative font-medium px-4 py-2 rounded-none transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                  ["/scientific-studies", "/scientific-studies/laser-effectiveness", "/scientific-studies/oral-devices-effectiveness", "/scientific-studies/muscle-exercises-effectiveness", "/scientific-studies/misc-studies"].includes(pathname)
                    ? "text-blue-700"
                    : "text-gray-600 hover:text-blue-700"
                }`}
                aria-haspopup="true"
                aria-expanded={studiesOpen}
                role='button'
              >
                دراسات علمية
                <svg className={`w-4 h-4 transition-transform duration-200 ${studiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
              {studiesOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                  <Link
                    href="/scientific-studies/laser-effectiveness"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                    onClick={() => setStudiesOpen(false)}
                  >
                    فعالية اجهزة الليزر
                  </Link>
                  <Link
                    href="/scientific-studies/oral-devices-effectiveness"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                    onClick={() => setStudiesOpen(false)}
                  >
                    فعالية الأجهزة الفموية
                  </Link>
                  <Link
                    href="/scientific-studies/muscle-exercises-effectiveness"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                    onClick={() => setStudiesOpen(false)}
                  >
                    فعالية التمارين العضلية
                  </Link>
                  <Link
                    href="/scientific-studies/misc-studies"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                    onClick={() => setStudiesOpen(false)}
                  >
                    دراسات متفرقة
                  </Link>
                </div>
              )}
            </div>
            {/* CTA Button */}
        
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