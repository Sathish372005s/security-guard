import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Layers, ClipboardCheck, Users, ShieldCheck, Clock, Briefcase, Sparkles } from "lucide-react";
import CoverageMap from "@/components/CoverageMap";

const workforceItems = [
  {
    title: "Construction Labour",
    desc: "Skilled workers for civil construction and infrastructure projects.",
  },
  {
    title: "Skilled Technicians",
    desc: "Technical teams for maintenance, installations and field support.",
  },
  {
    title: "Civil Engineers",
    desc: "Engineers experienced in site planning, supervision and coordination.",
  },
  {
    title: "Mechanical Engineers",
    desc: "Mechanical specialists for project execution and operations.",
  },
  {
    title: "Electrical Engineers",
    desc: "Electrical staff for power systems, controls and installations.",
  },
  {
    title: "Site Supervisors",
    desc: "Supervisors who ensure productivity, safety and delivery standards.",
  },
  {
    title: "Warehouse & Logistics Staff",
    desc: "Logistics personnel for warehousing, dispatch and inventory support.",
  },
  {
    title: "Drivers",
    desc: "Professional drivers for transport, delivery and site mobility.",
  },
  {
    title: "Security Guards",
    desc: "Trustworthy guards for access control, patrols and asset protection.",
  },
  {
    title: "Housekeeping Staff",
    desc: "Facility teams for cleanliness, hygiene and workplace upkeep.",
  },
  {
    title: "Office Support Staff",
    desc: "Admin assistants and receptionists for daily office functions.",
  },
  {
    title: "HR & Administrative Professionals",
    desc: "HR coordinators and admin experts for workforce administration.",
  },
];

const features = [
  {
    title: "Right Talent",
    desc: "Qualified professionals matched to your exact workforce requirements.",
  },
  {
    title: "Third-Party Employment",
    desc: "Employees remain on our payroll while working at your organisation.",
  },
  {
    title: "Payroll Management",
    desc: "Accurate salary processing delivered on time every cycle.",
  },
  {
    title: "Attendance Coordination",
    desc: "We manage attendance records and workforce tracking for compliance.",
  },
  {
    title: "Compliance Support",
    desc: "Documentation, statutory checks, and regulatory oversight handled by us.",
  },
  {
    title: "Timely Replacement",
    desc: "Fast replacement of manpower whenever a role needs backfill.",
  },
  {
    title: "Dedicated Workforce Management",
    desc: "A single partner manages your workforce from hiring to deployment.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We support clients beyond a single project with consistent delivery.",
  },
];

const steps = [
  "Understand your manpower requirements",
  "Source and screen candidates",
  "Recruit and employ selected candidates",
  "Deploy manpower to your site",
  "Manage payroll, attendance, and compliance",
  "Provide continuous support and replacements",
];

export default function HRServicesPage() {
  return (
    <div className="relative overflow-hidden bg-white text-brand-navy">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50 to-transparent" />

      <section className="relative overflow-hidden py-24">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute right-0 top-24 h-60 w-60 rounded-full bg-slate-100 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-2 text-[11px] uppercase tracking-[0.33em] font-semibold text-orange">
                Third-party workforce management
              </span>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                Your Trusted Third-Party Workforce Partner
              </h1>
              <p className="max-w-2xl text-slate-600 text-base leading-8 sm:text-lg">
                We provide skilled manpower across multiple industries while taking complete responsibility for employment, payroll, compliance, attendance, and workforce management. Our clients focus on growing their business while we manage their workforce.
              </p>
              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-orange/20 transition hover:scale-[1.02]"
                >
                  Request Manpower
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy transition hover:bg-slate-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-blue-50/80 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
              <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-white/80 blur-2xl" />
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/70 blur-2xl" />
              <div className="relative rounded-[1.5rem] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <div className="grid gap-6">
                  <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-50 to-slate-100 p-8">
                    <div className="relative h-56 rounded-[1.25rem] overflow-hidden bg-blue-100">
                      <Image
                        src="/hr_services_hero.png"
                        alt="HR Services"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-blue-50 p-4">
                      <p className="text-sm font-semibold text-brand-navy">Engineers & Technicians</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-blue-50 p-4">
                      <p className="text-sm font-semibold text-brand-navy">Construction & Site Teams</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-blue-50 p-4">
                      <p className="text-sm font-semibold text-brand-navy">Warehouse & Logistics</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-blue-50 p-4">
                      <p className="text-sm font-semibold text-brand-navy">HR & Office Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.33em] text-orange font-semibold">
                More Than Just Labour Supply
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                More Than Just Labour Supply
              </h2>
              <div className="space-y-4 text-slate-600 leading-8">
                <p>We are not just a labour supplier. Our goal is to become a long-term workforce partner for every client.</p>
                <p>Unlike traditional recruitment agencies, we don't simply recommend candidates. We recruit, employ, and manage professionals on your behalf.</p>
                <p>Your employees work for your organization while remaining under our employment and payroll management. This allows your business to scale faster while reducing administrative burden, recruitment costs, and compliance risks.</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="grid gap-5">
                <div className="rounded-[1.5rem] bg-blue-50 p-6">
                  <h3 className="text-xl font-semibold text-brand-navy">Our Service Model</h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    We provide workforce management services that extend beyond candidate supply to full employment, payroll and compliance support.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-blue-50 p-6">
                  <h3 className="text-xl font-semibold text-brand-navy">Your Advantage</h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    Receive dependable manpower without recruitment risk or payroll administration, freeing your team to focus on core business delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-center mb-12">
            <span className="text-xs uppercase tracking-[0.33em] text-orange font-semibold">
              Manpower We Provide
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
              Manpower We Provide
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 leading-8">
              Skilled personnel across industrial, technical, operational and support roles, delivered through a premium workforce management partnership.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workforceItems.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-orange shadow-sm">
                  <span className="text-xl font-bold">•</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid grid-rows-[auto_1fr] h-full gap-6">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.33em] text-orange font-semibold">
                  Why Companies Partner With Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                  Why Companies Partner With Us
                </h2>
                <p className="max-w-2xl text-slate-600 leading-8">
                  We are a third-party employer and workforce management company. Our clients receive dedicated manpower support without the burden of recruitment, payroll or employee administration.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-blue-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)] h-[90%]">
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/workforce_illustration.png"
                    alt="Workforce Illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-orange shadow-sm">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-7">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-center">
            <span className="text-xs uppercase tracking-[0.33em] text-orange font-semibold">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
              How We Work
            </h2>
            <div className="relative mt-12 mx-auto max-w-3xl">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200" />
              <div className="space-y-10">
                {steps.map((step, index) => (
                  <div key={step} className="relative mx-auto flex max-w-3xl flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border border-orange/20 bg-white text-orange shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                      <span className="font-semibold">{index + 1}</span>
                    </div>
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] w-full">
                      <h3 className="text-xl font-semibold text-brand-navy">Step {index + 1}</h3>
                      <p className="mt-3 text-slate-600 leading-7">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.33em] text-orange font-semibold">
                We Build Workforce Partnerships
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                We Build Workforce Partnerships
              </h2>
              <div className="space-y-4 text-slate-600 leading-8">
                <p>We focus on providing the right people, timely replacements, proper documentation, attendance coordination, payroll support, and compliance so that your team can focus entirely on operations instead of recruitment.</p>
                <p>Our objective is not simply filling vacancies. We build long-term workforce partnerships by consistently delivering reliable manpower and professional workforce management.</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="space-y-6">
                {[
                  "Right people with fast replacements",
                  "Complete documentation and compliance",
                  "Payroll and attendance handled end to end",
                  "Long-term workforce partnership focus",
                ].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="text-base font-semibold text-brand-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Service Territory Map */}
      <CoverageMap />

      <section className="relative overflow-hidden py-24 bg-blue-50">
        <div className="absolute inset-y-0 right-0 hidden w-80 rounded-full bg-white/40 blur-3xl lg:block" />
        <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-blue-100 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-12 shadow-[0_40px_120px_rgba(15,23,42,0.1)]">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.33em] text-orange font-semibold">
                  Let's Build Your Workforce Together
                </span>
                <h2 className="text-4xl font-black text-brand-navy tracking-tight leading-tight">
                  Let's Build Your Workforce Together
                </h2>
                <p className="max-w-2xl text-slate-600 leading-8">
                  We would like to understand your current and future manpower requirements so we can provide the best workforce solution for your business.
                </p>
                <p className="max-w-2xl text-slate-600 leading-8">
                  If we successfully support your current project, we look forward to becoming your trusted workforce partner across all departments and future projects.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-orange px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-orange/20 transition hover:scale-[1.02]"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy transition hover:bg-slate-50"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-blue-50 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                <div className="space-y-5">
                  <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.33em] text-orange font-semibold mb-2">Client-first support</p>
                    <p className="text-slate-600 leading-7">We are ready to partner with you for today’s manpower needs and tomorrow’s expansion plans.</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.33em] text-orange font-semibold mb-2">Long-term success</p>
                    <p className="text-slate-600 leading-7">Our goal is to reduce your administration burden while delivering a trusted workforce every day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
