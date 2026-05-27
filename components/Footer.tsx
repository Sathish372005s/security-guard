import React from "react";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin, ShieldCheck, Award, Eye, Users } from "lucide-react";
import ShieldLogo from "./ShieldLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Brand Column */}
          <div className="flex flex-col gap-5">
            <ShieldLogo showText={true} width={50} height={50} textSize="lg" lightText={true} />
            <p className="text-slate-600 text-sm leading-relaxed mt-2 font-medium">
              An elite integrated security firm delivering military-grade defense, professional manpower, and next-generation smart surveillance solutions to safeguard your highest-value assets.
            </p>
            <div className="flex gap-4 mt-2">
              <span className="flex items-center gap-1.5 text-xs text-orange font-bold uppercase tracking-wider bg-orange/5 border border-orange/20 px-2.5 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5" /> Certified Agency
              </span>
              <span className="flex items-center gap-1.5 text-xs text-orange font-bold uppercase tracking-wider bg-orange/5 border border-orange/20 px-2.5 py-1 rounded">
                <Award className="w-3.5 h-3.5" /> Licensed Staff
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4 md:pl-6">
            <h3 className="text-brand-navy font-display font-bold tracking-widest text-sm uppercase border-b border-slate-200 pb-2 w-fit pr-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-orange transition-colors duration-200 font-semibold">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-orange transition-colors duration-200 font-semibold">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-orange transition-colors duration-200 font-semibold">
                  Security Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-orange transition-colors duration-200 font-semibold">
                  Contact & Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (From Business Card) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-brand-navy font-display font-bold tracking-widest text-sm uppercase border-b border-slate-200 pb-2 w-fit pr-6">
              Contact Details
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-orange shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:8368351578" className="text-slate-800 hover:text-orange transition-colors font-bold">
                    +91 83683 51578
                  </a>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">24/7 Operations Command</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-orange shrink-0 mt-0.5" />
                <a href="mailto:coreshieldservice@gmail.com" className="text-slate-800 hover:text-orange transition-colors font-semibold break-all">
                  coreshieldservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4.5 h-4.5 text-orange shrink-0 mt-0.5" />
                <a href="https://www.coreshieldservices.com" target="_blank" rel="noopener noreferrer" className="text-slate-800 hover:text-orange transition-colors font-semibold">
                  www.coreshieldservices.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-orange shrink-0 mt-0.5" />
                <span className="text-slate-800 leading-snug font-semibold">
                  123, Business Hub, Sector 5, Noida, Uttar Pradesh - 201301
                </span>
              </li>
            </ul>
          </div>

          {/* Territory & Region Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-brand-navy font-display font-bold tracking-widest text-sm uppercase border-b border-slate-200 pb-2 w-fit pr-6">
              Coverage Territory
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              CORE SHIELD SERVICES is fully licensed and operates high-performance tactical, guard, and surveillance teams across major northern territories:
            </p>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {["Delhi", "Uttar Pradesh", "Punjab", "Haryana"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-slate-700 bg-white border border-slate-200 rounded px-2 py-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-10" />

        {/* Lower Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} CORE SHIELD SERVICES. All Rights Reserved. Private & Confidential.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-orange transition-colors font-medium">Inquire Online</Link>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
              HQ Command Status: Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
