"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import ShieldLogo from "./ShieldLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "HR Services", href: "/hr-services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-[0_4px_20px_rgba(15,29,51,0.05)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center">
            <ShieldLogo showText={true} width={45} height={45} textSize="lg" lightText={true} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide uppercase transition-colors duration-300 py-2 ${
                    isActive
                      ? "text-brand-navy font-bold text-shadow-orange"
                      : "text-slate-600 hover:text-orange"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange/50 via-orange to-orange/50 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact / CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918796636150"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange transition-colors font-semibold"
            >
              <PhoneCall className="w-4 h-4 text-orange" />
              <span>+91 87966 36150</span>
            </a>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-widest uppercase font-bold text-white bg-gradient-to-r from-orange-light via-orange to-orange-dark rounded-md overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group orange-glow hover:shadow-[0_4px_15px_rgba(255,111,0,0.35)]"
            >
              {/* Highlight shine animation */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              Get Protection
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="tel:+918796636150"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-orange/10 border border-orange/30 text-orange hover:bg-orange hover:text-white transition-all"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-orange focus:outline-none transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[65px] z-40 bg-white/98 backdrop-blur-xl border-t border-slate-200 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full py-8 px-6 justify-between">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold tracking-widest uppercase transition-colors py-2 border-b border-slate-100 flex justify-between items-center ${
                    isActive ? "text-orange" : "text-slate-800"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-orange" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-6 mb-20">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg flex flex-col gap-2">
              <span className="text-xs uppercase text-orange tracking-widest font-semibold">
                Direct Emergency Line
              </span>
              <a
                href="tel:+918796636150"
                className="text-lg font-bold text-brand-navy tracking-wider hover:text-orange transition-colors flex items-center gap-2"
              >
                +91 87966 36150
              </a>
              <span className="text-[10px] text-slate-500">
                24/7 Rapid Response Coordination Team
              </span>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-gradient-to-r from-orange-light via-orange to-orange-dark text-white uppercase font-bold tracking-widest text-sm rounded shadow-lg"
            >
              Get Security Services
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
