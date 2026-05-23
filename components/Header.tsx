"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { FiMenu, FiSearch } from "react-icons/fi"
import Image from "next/image"

export default function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }
  
  const getLinkClass = (href: string) => {
    const baseClass = "relative text-[14px] font-semibold tracking-wide transition duration-300"
    const activeClass = "text-[#C8A96B] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#C8A96B]"
    const inactiveClass = "text-[#0D1B2A] hover:text-[#C8A96B] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#C8A96B] after:transition-all after:duration-300 hover:after:w-full"
    
    return `${baseClass} ${isActive(href) ? activeClass : inactiveClass}`
  }
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar removed per user request */}

      {/* Main Navigation Bar (white floating panel) */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-300/70 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(80,80,80,0.2)] border border-gray-100 relative z-40">
            <div className="h-[78px] px-5 sm:px-8 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-24 h-12 sm:w-32 sm:h-14">
                  <Image src="/amathole/assets/img/saint-logo.png" alt="Amathole Funerals" fill className="object-contain" sizes="160px" />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-10">
                <Link href="/" className={getLinkClass("/")}>HOME</Link>
                <Link href="/about" className={getLinkClass("/about")}>ABOUT</Link>
                <Link href="/services" className={getLinkClass("/services")}>SERVICES</Link>
                <Link href="/caskets" className={getLinkClass("/caskets")}>CASKETS</Link>
                <Link href="/pricing" className={getLinkClass("/pricing")}>PRICING</Link>
                <Link href="/contact" className={getLinkClass("/contact")}>CONTACT</Link>
              </nav>

              {/* Right Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="hidden md:flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0D1B2A] text-white text-sm font-semibold hover:bg-[#C8A96B] transition duration-300"
                >
                  24/7 Assistance
                </a>
                <button aria-label="search" className="p-2 rounded-full text-[#0D1B2A] hover:bg-gray-100 hover:text-[#C8A96B] transition duration-300">
                  <FiSearch size={18} />
                </button>
                <button aria-label="menu" className="md:hidden p-2 text-[#0D1B2A]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <FiMenu size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-20 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-6">
            <nav className="flex flex-col gap-3">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`block w-full py-3 px-4 text-lg rounded font-semibold transition ${isActive("/") ? "text-[#C8A96B] bg-[#F5F0E8]" : "text-primary hover:bg-gray-50"}`}>HOME</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`block w-full py-3 px-4 text-lg rounded font-semibold transition ${isActive("/about") ? "text-[#C8A96B] bg-[#F5F0E8]" : "text-primary hover:bg-gray-50"}`}>ABOUT</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={`block w-full py-3 px-4 text-lg rounded font-semibold transition ${isActive("/services") ? "text-[#C8A96B] bg-[#F5F0E8]" : "text-primary hover:bg-gray-50"}`}>SERVICES</Link>
              <Link href="/caskets" onClick={() => setMobileMenuOpen(false)} className={`block w-full py-3 px-4 text-lg rounded font-semibold transition ${isActive("/caskets") ? "text-[#C8A96B] bg-[#F5F0E8]" : "text-primary hover:bg-gray-50"}`}>CASKETS</Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className={`block w-full py-3 px-4 text-lg rounded font-semibold transition ${isActive("/pricing") ? "text-[#C8A96B] bg-[#F5F0E8]" : "text-primary hover:bg-gray-50"}`}>PRICING</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block w-full py-3 px-4 text-lg rounded font-semibold transition ${isActive("/contact") ? "text-[#C8A96B] bg-[#F5F0E8]" : "text-primary hover:bg-gray-50"}`}>CONTACT</Link>
            </nav>
            <div className="mt-6 border-t pt-4 text-sm text-muted">
              <div>Customer Care: <a href="tel:+27656201771" className="font-semibold text-primary">065 620 1771</a></div>
              <div className="mt-2">WhatsApp: <a href="https://wa.me/27656201771" className="font-semibold text-primary">065 620 1771</a></div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
