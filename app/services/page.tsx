import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Building, 
  Users, 
  Factory, 
  Lock, 
  Eye,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";

const allServices = [
  {
    id: "guard-services",
    title: "Security Guard Services",
    icon: Shield,
    image: "https://img.magnific.com/free-photo/portrait-male-security-guard-with-radio-station_23-2150368765.jpg?semt=ais_hybrid&w=740&q=80",
    shortDesc: "Vigilant, state-licensed armed and unarmed personnel deployed for constant presence and active threat prevention.",
    fullDesc: "Our security guards are recruited through strict standards and trained to handle high-risk facilities, financial centers, and gate controls. We deploy both armed security officers and unarmed guards who represent absolute professional discipline and readiness.",
    bullets: [
      "Rigorous military-style daily reporting",
      "Armed & Unarmed certified personnel",
      "PSARA regulated training curriculum",
      "Immediate patrol vehicle backup support"
    ],
    bgSlug: "Armed & Unarmed Guarding"
  },
  {
    id: "corporate-security",
    title: "Corporate Security",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Tailored receptionist guarding, executive office presence, and confrontation de-escalation.",
    fullDesc: "We provide high-end guarding solutions for corporate headquarters, software parks, and business towers. Our officers blend executive concierge decorum with solid crisis protection, managing guest check-ins, floor patrols, and high-value equipment assets.",
    bullets: [
      "Visitor badge check & registry management",
      "Concierge-decorum professional uniforming",
      "Active floor checks & emergency response drills",
      "Asset and data center room protection"
    ],
    bgSlug: "High-Rise & Corporate Guarding"
  },
  {
    id: "event-security",
    title: "Event Security",
    icon: Users,
    image: "data:image/jpeg;base64,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",
    shortDesc: "Elite crowd management, emergency planning, and VIP protection for events of all scales.",
    fullDesc: "Whether managing a high-profile corporate launch, media gala, or a large public concert, our specialized event security teams handle crowd flow, ticketing entries, metal detectors, VIP escorting, and instant crisis response logistics.",
    bullets: [
      "Comprehensive perimeter threat mapping",
      "Baggage checks & metal detection gates",
      "VIP discrete security escort squads",
      "Rapid evacuation and medical cooperation"
    ],
    bgSlug: "Conferences, Concerts & Galas"
  },
  {
    id: "industrial-security",
    title: "Industrial Security",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Heavy industrial guarding, logistics log checks, and asset safeguarding for factories.",
    fullDesc: "Factories, warehouses, and logistic hubs present unique security challenges, from cargo theft to trespassing. We deploy specialized industrial guards trained in vehicle weight logs, supply chain safeguarding, and severe fire hazards coordination.",
    bullets: [
      "Strict incoming & outgoing inventory logbook",
      "Thermal perimeter checks and wall monitoring",
      "24/7 continuous guard post cycles",
      "Hazardous gas and fire alarm response readiness"
    ],
    bgSlug: "Factories & Logistic Hubs"
  },
  {
    id: "personal-protection",
    title: "Personal Protection",
    icon: Lock,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Discrete executive bodyguards and highly secure private transit logistics.",
    fullDesc: "For high-profile executives, VIP celebrities, or families in high-risk scenarios, we supply elite Personal Protection Officers (PPO). Every agent is highly trained in defensive tactics, private route risk mapping, and discrete close-proximity protection.",
    bullets: [
      "Highly discrete, premium attire options",
      "Exhaustive route threat analysis",
      "Armed personal escort capabilities",
      "Confidentiality & ultimate trust protocols"
    ],
    bgSlug: "Close Protection Bodyguards"
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & Surveillance Support",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
    shortDesc: "Next-gen smart thermal cameras integrated with 24/7 central alarm monitoring.",
    fullDesc: "We design, support, and actively monitor premium CCTV surveillance grids. Our systems feature advanced AI motion analytics, thermal sensing, and are directly integrated with our Central Command Center to dispatch field backup squads in minutes.",
    bullets: [
      "Smart AI object and intrusion detection",
      "24/7 Remote Command Center coordination",
      "System design, maintenance, and support",
      "Instant security alert and field dispatch integration"
    ],
    bgSlug: "Smart CCTV Command Center"
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-primary-dark">
      {/* Decorative background grids */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-navy/35 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER BANNER */}
      <section className="relative py-20 border-b border-orange/15 bg-brand-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase text-orange tracking-[0.3em] font-bold block mb-3">
            Elite Security Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-wide">
            Our Security Services
          </h1>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent w-40 mx-auto mt-4" />
          <p className="text-steel-light text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            From premier physical manpower to integrated remote CCTV surveillance networks, explore our 6 core security disciplines built to protect your high-value assets.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {allServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                  className="bg-brand-navy/35 border border-zinc-800/80 hover:border-orange/30 rounded-xl overflow-hidden transition-all duration-300 group relative flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Backdrop text slug for high-end luxury styling */}
                  <span className="absolute bottom-2 right-4 text-[24px] md:text-[32px] font-black uppercase text-orange/3 select-none pointer-events-none transition-all duration-500 group-hover:text-orange/5 group-hover:scale-105">
                    {service.bgSlug}
                  </span>

                  {/* Top card photo banner visible on all screens */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Top title and icon row */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-orange/10 border border-orange/25 rounded-lg flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-black transition-all duration-300 shadow-[0_4px_15px_rgba(255,111,0,0.15)]">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-display font-extrabold uppercase tracking-wide text-white group-hover:text-orange transition-colors">
                            {service.title}
                          </h2>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                            PSARA Certified Parameters
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                        {service.shortDesc}
                      </p>

                      <p className="text-steel-light text-xs sm:text-sm leading-relaxed mb-6 border-l border-orange/30 pl-4 font-medium">
                        {service.fullDesc}
                      </p>

                      {/* Bullet list of advantages */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                            <Check className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions row */}
                    <div className="border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between mt-auto">
                      <span className="text-[10px] uppercase text-zinc-500 tracking-widest font-bold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-orange" /> Active Coverage
                      </span>
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-light to-orange text-white font-bold uppercase tracking-wider text-xs rounded shadow group-hover:orange-glow transition-all duration-300 w-full sm:w-auto cursor-pointer"
                      >
                        Inquire For Service
                        <ArrowRight className="w-4 h-4 text-white" />
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* EMERGENCY LINE BOTTOM */}
      <section className="relative py-16 bg-brand-navy border-t border-orange/15 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col gap-5 items-center">
          <span className="text-xs uppercase text-orange tracking-[0.3em] font-extrabold bg-orange/10 px-3 py-1 rounded border border-orange/25">
            24/7 Operations Room
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white leading-tight">
            Need Rapid Deployment for an Upcoming Event?
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-lg leading-relaxed">
            Our tactical team is equipped to deploy trained manpower and site setup parameters within 24-48 hours across Delhi, Noida, Gurgaon, Haryana, and Punjab.
          </p>
          <a
            href="tel:8368351578"
            className="mt-2 text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-light via-orange to-orange-dark tracking-wider hover:scale-[1.02] transition-transform flex items-center gap-2"
          >
            +91 83683 51578
          </a>
        </div>
      </section>
    </div>
  );
}
