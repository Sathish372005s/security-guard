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
    image: "security-1.JPG",
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
    image: "security-2.jpeg",
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
    image: "security-3.jpeg",
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
    image: "security-4.jpeg",
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
  },
  {
  id: "quality-audit-services",
  title: "Quality Check & Audit Services",
  icon: ShieldCheck,
  image: "https://media.gettyimages.com/id/2197425749/photo/diverse-warehouse-team-analyzing-stock-data-on-a-digital-tablet-african-manager-and-middle.jpg?s=612x612&w=0&k=20&c=2lcy1GAPT_FaT7fnOEMtAyLI_mnIZ_X5BakJjLMLP48=",
  shortDesc:
    "Comprehensive quality inspections, compliance audits, and process evaluations to ensure operational excellence.",
  fullDesc:
    "Our Quality Check & Audit Services help organizations maintain high standards across operations, manufacturing, facilities, and service delivery. Our experienced auditors conduct detailed inspections, compliance reviews, process assessments, and quality assurance checks to identify gaps and recommend improvements.",
  bullets: [
    "Quality inspection and verification processes",
    "Compliance and regulatory audits",
    "Process improvement recommendations",
    "Detailed audit reports with corrective actions"
  ],
  bgSlug: "Quality Assurance & Compliance Audits"
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
