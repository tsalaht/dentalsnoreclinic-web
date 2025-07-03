"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/adults", label: "علاج البالغين" },
    { href: "/children", label: "علاج الأطفال" },
    { href: "/medical-library", label: "المكتبة الطبية" },
    { href: "/sleep-challenge", label: "تحدي النوم" },
    { href: "/faq", label: "الأسئلة الشائعة" },
    { href: "/about", label: "عن العيادة" },
    { href: "/contact", label: "تواصل معنا" },
  ]

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
          aria-label="فتح القائمة"
        >
          {isOpen ? (
            <X className="h-7 w-7 text-gray-600" />
          ) : (
            <Menu className="h-7 w-7 text-gray-600" />
          )}
        </Button>
      </div>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-6 border-b bg-blue-50">
              <h2 className="text-xl font-semibold text-gray-800">
                القائمة الرئيسية
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-blue-100 rounded-lg transition-all duration-300"
                aria-label="إغلاق القائمة"
              >
                <X className="h-6 w-6 text-gray-600" />
              </Button>
            </div>
            <nav className="p-6">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li
                    key={item.href}
                    className="transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/962796759251?text=أريد حجز موعد في Dentalsnore Clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-blue-500 text-white py-3 text-lg font-medium rounded-lg hover:bg-blue-600 transition-all duration-300">
                    احجز موعداً الآن
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}