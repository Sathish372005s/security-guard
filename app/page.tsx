"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  ShieldCheck, 
  Users, 
  MapPin, 
  ArrowRight, 
  Star, 
  Lock, 
  Eye, 
  Clock, 
  Award,
  ChevronRight
} from "lucide-react";
import ShieldLogo from "@/components/ShieldLogo";

// Featured service teasers for Home Page with high-quality service image URLs
const previewServices = [
  {
    title: "Security Guard Services",
    description: "Highly disciplined armed and unarmed personnel meticulously selected for rigorous physical tactics, elite presence, and constant vigilance.",
    image: "https://img.magnific.com/free-photo/portrait-male-security-guard-with-radio-station_23-2150368765.jpg?semt=ais_hybrid&w=740&q=80",
    icon: Shield,
    badge: "Most Demanded"
  },
  {
    title: "Corporate & Executive Security",
    description: "Tailored receptionist guarding, confrontation mitigation, asset protection, and discrete high-profile executive bodyguards.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    icon: Lock,
    badge: "Premium Corporate"
  },
  {
    title: "CCTV Remote Monitoring",
    description: "Advanced artificial intelligence thermal cameras integrated with our 24/7 Remote Tactical Command Center for instant backup response.",
    image: "https://images.unsplash.com/photo-1618482914248-29272d021005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2N0dnxlbnwwfHwwfHx8MA%3D%3D",
    icon: Eye,
    badge: "Smart Security"
  }
];

// Core trust highlights
const trustHighlights = [
  {
    title: "Elite-Trained Guards",
    desc: "Every officer undergoes rigorous military-standard training, physical defense coordination, and fire-safety drills.",
    icon: Award
  },
  {
    title: "24/7 Integrated Control",
    desc: "Our high-tech Central Control Room maintains continuous radio and smart GPS tracking of all deployed patrols.",
    icon: Clock
  },
  {
    title: "Strict Background Verification",
    desc: "All personnel undergo severe background verification, fingerprinting, and criminal check procedures before deployment.",
    icon: ShieldCheck
  },
  {
    title: "Rapid Tactical Response",
    desc: "Under 8 minutes average response time in our primary territories, with emergency back-up squads ready in patrol vehicles.",
    icon: Users
  }
];

// Stats
const statData = [
  { value: "850+", label: "Guards Deployed" },
  { value: "320+", label: "Sites Safeguarded" },
  { value: "15+", label: "Years Experience" },
  { value: "<8 Min", label: "Response Average" }
];

// Testimonials
const testimonials = [
  {
    quote: "CORE SHIELD SERVICES has managed our corporate park security in Noida for 4 years. Their guards are exceptionally disciplined, clean-uniformed, and alert. The 24/7 command coordination gives us immense peace of mind.",
    name: "Vikram Malhotra",
    role: "Director of Facilities, TechVantage Corp",
    location: "Noida, UP"
  },
  {
    quote: "For our high-profile product launch events, we trust no one else. Their personal protection agents are discrete, extremely professional, and manage crowd flow smoothly. Highly recommended security agency.",
    name: "Ayesha Sen",
    role: "Head of Operations, Elite Events Asia",
    location: "Delhi NCR"
  }
];

export default function HomePage() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Background parallax moves slower than scroll (speed factor of 0.4)
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
      
      // Hero text moves slightly upward on scroll (speed factor of 0.12) and fades out
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrolled * 0.12}px)`;
        textRef.current.style.opacity = `${Math.max(0, 1 - scrolled / 500)}`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      
      {/* BACKGROUND GRAPHIC PATTERNS (Parallax container) */}
      <div 
        ref={backgroundRef} 
        className="absolute top-0 left-0 w-full h-[85vh] pointer-events-none overflow-hidden will-change-transform"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-60" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] left-[-10%] w-[450px] h-[450px] bg-slate-100 rounded-full blur-[130px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text Content */}
            <div 
              ref={textRef} 
              className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left will-change-transform"
            >
              
              {/* Premium Orange Tagline */}
              <div 
                data-aos="fade-right"
                className="inline-flex items-center gap-2 bg-slate-50 border border-orange/20 px-3.5 py-1.5 rounded-full w-fit mx-auto lg:mx-0 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-orange animate-ping" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-orange-dark uppercase">
                  ⭐ MILITARY-GRADE STANDARDS & INTEGRATED SOLUTIONS
                </span>
              </div>

              {/* Main Headline */}
              <h1 
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-brand-navy leading-[1.1] tracking-tight uppercase"
              >
                Protecting <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-light via-orange to-orange-dark drop-shadow-sm">
                  What Matters Most
                </span>
              </h1>

              {/* Subtext */}
              <p 
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium"
              >
                CORE SHIELD SERVICES delivers state-licensed tactical manpower, professional event crowd management, executive protection, and modern CCTV surveillance systems designed for absolute security and trust.
              </p>

              {/* CTA Buttons */}
              <div 
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-light via-orange to-orange-dark text-white font-bold uppercase tracking-wider text-xs rounded-md shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98] orange-glow flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  Get Security Services
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-white border border-slate-200 hover:border-orange text-slate-800 hover:text-orange font-bold uppercase tracking-wider text-xs rounded-md transition-all hover:bg-slate-50 flex items-center justify-center gap-2"
                >
                  Our Standards
                </Link>
              </div>

              {/* Small trust features */}
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
                className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 mt-6 max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
              >
                <div>
                  <span className="block text-orange text-lg font-bold">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Background Verified</span>
                </div>
                <div className="border-x border-slate-200 px-2">
                  <span className="block text-orange text-lg font-bold">PSARA</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Licensed Agency</span>
                </div>
                <div>
                  <span className="block text-orange text-lg font-bold">24/7</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">HQ Command Desk</span>
                </div>
              </div>

            </div>

            {/* Hero Graphic Panel - Security Guard Image visible on mobile and desktop */}
            <div 
              data-aos="fade-left"
              data-aos-delay="200"
              className="lg:col-span-5 flex justify-center w-full mt-10 lg:mt-0 relative"
            >
              {/* Premium security guard photograph frame */}
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
                <Image
                  src="/security-guard.png"
                  alt="CORE SHIELD Elite Security Officer"
                  fill
                  sizes="(max-w-768px) 100vw, 340px"
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Dark overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Visual badge highlight */}
                <div className="absolute top-4 right-4 bg-orange/90 text-white font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded shadow-md z-10">
                  ★ Elite Guard
                </div>
                
                {/* Floating active coordination status badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-2.5 rounded-xl z-10 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase text-orange font-bold tracking-widest leading-none">Security Force</span>
                    <span className="text-brand-navy text-[11px] font-bold font-display mt-1 tracking-wide">ACTIVE DEPLOYMENT</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    ONLINE
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statData.map((stat, idx) => (
              <div 
                key={stat.label}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="flex flex-col items-center"
              >
                <span className="font-display text-4xl sm:text-5xl font-black text-brand-navy drop-shadow-sm">
                  {stat.value}
                </span>
                <span className="text-orange text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase text-orange tracking-[0.3em] font-bold">
              Our Professionalism
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-brand-navy mt-2">
              Premium Integrated Services
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent w-40 mx-auto mt-4" />
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-semibold">
              Discover a subset of our specialized security operations. We deploy rigorously vetted officers, surveillance networks, and corporate patrol operations tailored to your direct operational threats.
            </p>
          </div>

          {/* Cards Grid with Images - Visible on both Mobile & Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  className="bg-white border border-slate-200 hover:border-orange/30 hover:bg-slate-50/50 rounded-xl overflow-hidden transition-all duration-300 group hover:-translate-y-2 relative flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  {/* Service Image at Card Top - Always visible on all screens */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    
                    {/* Corner Service Icon */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[9px] font-bold tracking-widest text-orange bg-orange/5 border border-orange/20 px-2.5 py-0.5 rounded">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-brand-navy text-lg font-bold uppercase tracking-wide group-hover:text-orange transition-colors mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                        {service.description}
                      </p>
                    </div>

                    <Link 
                      href="/services" 
                      className="flex items-center gap-1 text-xs text-orange font-bold uppercase tracking-wider group-hover:gap-2 transition-all mt-auto"
                    >
                      <span>Full Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-slate-200 text-slate-800 hover:border-orange hover:text-orange hover:bg-slate-50 font-bold uppercase tracking-wider text-xs rounded transition-all duration-300"
            >
              <span>Explore All 6 Core Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="absolute bottom-0 right-[-10%] w-[350px] h-[350px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text details left */}
            <div 
              data-aos="fade-right"
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <span className="text-xs uppercase text-orange tracking-[0.3em] font-bold">
                Elite Trust Pillars
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-brand-navy leading-tight">
                Designed For Absolute Protection
              </h2>
              <div className="h-[2px] bg-gradient-to-r from-orange via-orange/50 to-transparent w-40 mt-1" />
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                CORE SHIELD SERVICES manages security threats by deploying a sophisticated network of trained manpower, real-time tracking, and verified operational procedures. We prioritize reliability above all else.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-orange/5 flex items-center justify-center text-orange text-xs font-bold border border-orange/20">
                    ✓
                  </div>
                  <span className="text-sm font-bold text-slate-800">PSARA (Govt.) Certified & Compliant</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-orange/5 flex items-center justify-center text-orange text-xs font-bold border border-orange/20">
                    ✓
                  </div>
                  <span className="text-sm font-bold text-slate-800">100% Insured & Statutorily Covered</span>
                </div>
              </div>
            </div>

            {/* Grid display right */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustHighlights.map((hl, idx) => {
                const Icon = hl.icon;
                return (
                  <div
                    key={hl.title}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    className="bg-white border border-slate-200 p-6 rounded-lg hover:border-orange/20 transition-all group shadow-sm"
                  >
                    <div className="w-10 h-10 bg-orange/5 border border-orange/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange/10 transition-colors">
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                    <h3 className="text-brand-navy text-base font-bold uppercase tracking-wider mb-2 group-hover:text-orange transition-colors">
                      {hl.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                      {hl.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase text-orange tracking-[0.3em] font-bold">
              Client Feedback
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-brand-navy mt-2">
              Trusted By Enterprise Leaders
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent w-40 mx-auto mt-4" />
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                data-aos={idx === 0 ? "fade-right" : "fade-left"}
                className="bg-slate-50 border border-slate-200 p-8 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-sm"
              >
                {/* Quote symbol */}
                <div className="text-6xl text-orange/10 font-serif absolute top-4 left-4 select-none">
                  “
                </div>

                <div className="relative z-10">
                  {/* Star ratings */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                    ))}
                  </div>

                  <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    "{t.quote}"
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-4 flex justify-between items-center relative z-10">
                  <div className="flex flex-col">
                    <span className="text-brand-navy text-sm font-extrabold uppercase tracking-wider">
                      {t.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-bold mt-0.5">
                      {t.role}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-orange font-bold uppercase tracking-widest bg-orange/5 px-2 py-0.5 border border-orange/10 rounded">
                    <MapPin className="w-3 h-3 text-orange" /> {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CALL-TO-ACTION */}
      <section className="relative py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
        {/* Glowing background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col gap-6 items-center">
          <ShieldLogo width={60} height={60} showText={false} />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-brand-navy leading-tight">
            Ready to Solidify Your Security Guard Defense?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed font-semibold">
            Get an instant custom quote. Our security assessment team will outline direct risk mitigations, patrol counts, and tech configurations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-light via-orange to-orange-dark text-white font-bold uppercase tracking-wider text-xs rounded-md shadow-lg transition-transform hover:scale-[1.03] orange-glow cursor-pointer"
            >
              Request A Protection Quote
            </Link>
            <a
              href="tel:8368351578"
              className="px-8 py-4 bg-white border border-slate-300 hover:border-orange hover:text-orange text-slate-700 font-bold uppercase tracking-wider text-xs rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Call HQ +91 83683 51578
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
