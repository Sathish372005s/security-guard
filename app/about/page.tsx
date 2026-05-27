import React from "react";
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Users, 
  BadgeCheck, 
  CheckCircle,
  Briefcase
} from "lucide-react";
import ShieldLogo from "@/components/ShieldLogo";

const standards = [
  {
    title: "Vigorous Physical Training",
    desc: "All active guards undergo intensive physical stamina preparation, conflict control, defense techniques, and asset protection drill simulations.",
    icon: Award
  },
  {
    title: "Advanced Threat Detection",
    desc: "Vetting officers learn to utilize high-end technology, identify early threat signals, coordinate evacuation protocols, and manage crowd safety.",
    icon: Eye
  },
  {
    title: "100% Govt PSARA Compliant",
    desc: "We strictly adhere to all guidelines dictated by the Private Security Agencies Regulation Act (PSARA) with full licensing.",
    icon: ShieldCheck
  },
  {
    title: "Ethical Crisis Resolution",
    desc: "Guards are certified in de-escalation methods, first-aid, incident logs, and public coordination to ensure high brand respect.",
    icon: Users
  }
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-slate-100 rounded-full blur-[140px] pointer-events-none" />

      {/* HEADER BANNER */}
      <section className="relative py-20 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase text-orange tracking-[0.3em] font-bold block mb-3">
            Elite Corporate Profile
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase text-brand-navy tracking-wide">
            About Our Company
          </h1>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent w-40 mx-auto mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-semibold">
            Discover the legacy, military-standard discipline, and certified standards that place CORE SHIELD SERVICES at the absolute forefront of premium protection.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text Left */}
            <div 
              data-aos="fade-right"
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="flex items-center gap-2 text-orange">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold">15+ Years Protective Experience</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-brand-navy leading-tight">
                Our Story: Guarding Peace of Mind
              </h2>
              <div className="h-[2px] bg-orange w-24 rounded-full mt-1" />
              
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                CORE SHIELD SERVICES was established with a singular vision: to fill the critical gap in premium, high-trust security operations. In an industry often plagued by lack of training, rapid staff turnover, and poor operational compliance, we chose a different path.
              </p>
              
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                By implementing recruitment rigor, state-of-the-art surveillance tech integrations, and continuous evaluation, we quickly became a premium-grade security provider for premium corporations, high-net-worth families, and high-profile public events.
              </p>

              <div className="bg-white border border-slate-200 p-5 rounded-lg flex items-start gap-4 mt-2 shadow-sm">
                <Briefcase className="w-10 h-10 text-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-bold uppercase tracking-wider text-brand-navy">
                    Corporate Onboarding & Advisory
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 font-semibold">
                    Our Business Development division, managed by industry expert **Samrat Singh**, provides exhaustive onsite risk assessments to draft tailor-made protection parameters for all clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Shield Logo Graphic Panel Right */}
            <div 
              data-aos="fade-left"
              data-aos-delay="150"
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative p-10 bg-slate-50 border border-slate-200 rounded-xl text-center flex flex-col items-center gap-6 max-w-sm shadow-md">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-xl" />
                <ShieldLogo width={100} height={100} showText={false} lightText={true} />
                <span className="text-xs text-orange uppercase tracking-[0.25em] font-extrabold border-y border-slate-200 py-2 w-full">
                  ESTABLISHED SECURITY MATRIX
                </span>
                <ul className="flex flex-col gap-3 text-xs text-slate-700 w-full text-left font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange" /> Licensed PSARA Security Firm
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange" /> EPF & ESI Statutorily Compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange" /> Certified Personal Protection Experts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange" /> Elite 24/7 Patrol Backup Dispatch
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <div 
              data-aos="fade-right"
              className="bg-white border border-slate-200 rounded-xl p-8 hover:border-orange/20 transition-all flex flex-col gap-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-orange/5 flex items-center justify-center border border-orange/20">
                <Target className="w-6 h-6 text-orange" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-brand-navy tracking-wide">
                Our Dedicated Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                To engineer absolute peace of mind by supplying disciplined, meticulously-vetted manpower and intelligent surveillance assets. We strive to prevent threats before they disrupt life, safeguarding corporate continuity and human safety with ultimate integrity.
              </p>
            </div>

            {/* Vision Card */}
            <div 
              data-aos="fade-left"
              className="bg-white border border-slate-200 rounded-xl p-8 hover:border-orange/20 transition-all flex flex-col gap-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-orange/5 flex items-center justify-center border border-orange/20">
                <Eye className="w-6 h-6 text-orange" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-brand-navy tracking-wide">
                Our Ultimate Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                To set the benchmark for high-value protection across India, transforming from a traditional guarding provider into a next-generation predictive security brand where military-grade human tactics blend seamlessly with intelligent real-time data monitoring.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECURITY STANDARDS */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase text-orange tracking-[0.3em] font-bold">
              Unrivaled Quality
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-brand-navy mt-2">
              Professional Security Standards
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent w-40 mx-auto mt-4" />
            <p className="text-slate-600 text-sm mt-4 leading-relaxed font-semibold">
              We never deploy untrained guards. Our officers complete strict training phases covering customer relations, fire evacuations, crisis physical control, and tactical report filings.
            </p>
          </div>

          {/* Grid standards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-white border border-slate-200 p-6 rounded-lg hover:border-orange/25 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 bg-orange/5 border border-orange/20 rounded-md flex items-center justify-center mb-5 group-hover:bg-orange group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-brand-navy text-base font-bold uppercase tracking-wider mb-2 group-hover:text-orange transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TEAM & TRUST SHOWCASE */}
      <section className="relative py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-6 items-center">
          <BadgeCheck className="w-12 h-12 text-orange animate-bounce" />
          <h2 className="font-display text-3xl font-bold uppercase text-brand-navy">
            100% Verified Security Manpower
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent w-40 mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed font-semibold">
            Every CORE SHIELD officer is thoroughly authenticated via fingerprint registry and local police checks. We provide complete service continuity, absolute punctuality, and robust tactical reporting to secure your peace of mind.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-6">
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
              <span className="block text-2xl font-black text-orange font-display">100%</span>
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Police Verified</span>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
              <span className="block text-2xl font-black text-orange font-display">PSARA</span>
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Licensed Desk</span>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
              <span className="block text-2xl font-black text-orange font-display">24/7</span>
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Active Monitoring</span>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
              <span className="block text-2xl font-black text-orange font-display">Zero</span>
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Incident Record</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
