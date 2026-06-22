"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldAlert, 
  CheckCircle2, 
  Send,
  Loader2,
  Clock,
  Map
} from "lucide-react";

// Separate Client Form to use search parameters inside Suspense
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Pre-fill service from query params
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all the required fields.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Unable to connect to the mail server. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div 
        data-aos="zoom-in"
        suppressHydrationWarning
        className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center flex flex-col items-center gap-6 shadow-[0_15px_40px_rgba(15,29,51,0.04)]"
      >
        <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center border border-orange/20 animate-bounce">
          <CheckCircle2 className="w-8 h-8 text-orange" />
        </div>
        <h3 className="font-display text-2xl font-black uppercase text-brand-navy tracking-wide">
          Inquiry Submitted Successfully
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-md font-semibold">
          Thank you for contacting **CORE SHIELD SERVICES**. A senior threat mitigation coordinator will review your parameters and call you within **4 hours**.
        </p>
        <div className="h-px bg-slate-200 w-40 my-2" />
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-gradient-to-r from-orange-light to-orange text-white font-bold uppercase tracking-widest text-xs rounded hover:shadow-lg hover:shadow-orange/20 transition-all cursor-pointer font-bold"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" data-aos="fade-up" suppressHydrationWarning>
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-xs text-red-700 flex items-center gap-3 font-semibold">
          <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Grid Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase text-slate-500 font-bold tracking-wider">
            Full Name <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Samrat Singh"
            className="bg-slate-50 border border-slate-200 focus:border-orange/70 focus:bg-white rounded-lg p-3.5 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/15 transition-all w-full font-medium"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase text-slate-500 font-bold tracking-wider">
            Email Address <span className="text-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. client@company.com"
            className="bg-slate-50 border border-slate-200 focus:border-orange/70 focus:bg-white rounded-lg p-3.5 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/15 transition-all w-full font-medium"
          />
        </div>
      </div>

      {/* Grid Phone + Service selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs uppercase text-slate-500 font-bold tracking-wider">
            Phone Number <span className="text-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 87966 36150"
            className="bg-slate-50 border border-slate-200 focus:border-orange/70 focus:bg-white rounded-lg p-3.5 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/15 transition-all w-full font-medium"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-xs uppercase text-slate-500 font-bold tracking-wider">
            Service Required <span className="text-orange">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="bg-slate-50 border border-slate-200 focus:border-orange/70 focus:bg-white rounded-lg p-3.5 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-orange/15 transition-all w-full font-semibold"
          >
            <option value="">-- Choose Security Service --</option>
            <option value="Security Guard Services">Security Guard Services</option>
            <option value="Corporate Security">Corporate Security</option>
            <option value="Event Security">Event Security</option>
            <option value="Industrial Security">Industrial Security</option>
            <option value="Personal Protection">Personal Protection</option>
            <option value="CCTV & Surveillance Support">CCTV & Surveillance Support</option>
            <option value="Other Integrated Solutions">Other Integrated Solutions</option>
          </select>
        </div>
      </div>

      {/* Message / Event Details */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase text-slate-500 font-bold tracking-wider">
          Message & Event Details <span className="text-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your facility location, required patrol count, special events, or duration..."
          className="bg-slate-50 border border-slate-200 focus:border-orange/70 focus:bg-white rounded-lg p-3.5 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/15 transition-all w-full font-medium resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 mt-2 bg-gradient-to-r from-orange-light via-orange to-orange-dark text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:shadow-lg hover:shadow-orange/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4.5 h-4.5 animate-spin" />
            <span>Establishing Secure Link...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            <span>Submit Security Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-slate-100 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER BANNER */}
      <section className="relative py-20 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase text-orange tracking-[0.3em] font-bold block mb-3">
            Secure Communications
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase text-brand-navy tracking-wide">
            Contact Us
          </h1>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent w-40 mx-auto mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-semibold">
            Reach our central coordination headquarters instantly. Submit your parameters online for a custom deployment blueprint or connect through our operations lines.
          </p>
        </div>
      </section>

      {/* CONTACT CONTAINER */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Section (Left Column) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(15,29,51,0.06)]">
              <h2 className="text-lg font-bold uppercase tracking-wider text-brand-navy mb-2">
                Protection Inquiry Form
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 border-b border-slate-100 pb-4 font-medium">
                Submit this secure form. The fields will route directly to our central command registry via Nodemailer integration.
              </p>
              
              <Suspense fallback={
                <div className="flex flex-col items-center justify-center py-20 text-slate-400 gap-3">
                  <Loader2 className="w-8 h-8 text-orange animate-spin" />
                  <span className="text-xs uppercase font-bold tracking-widest">Loading Secure Form...</span>
                </div>
              }>
                <ContactFormContent />
              </Suspense>
            </div>

            {/* Sidebar Details (Right Column) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Detailed Contact List */}
              <div 
                data-aos="fade-left"
                className="bg-brand-navy border border-brand-navy rounded-2xl p-8 text-white shadow-[0_20px_40px_rgba(15,29,51,0.12)] relative overflow-hidden"
              >
                {/* Visual angled luxury cut background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange/5 rounded-full blur-xl pointer-events-none" />

                <h3 className="text-white font-display font-bold tracking-widest text-sm uppercase border-b border-orange/20 pb-3 mb-6 w-full">
                  HQ Operational Coordinates
                </h3>

                <ul className="flex flex-col gap-6 text-sm text-slate-300">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-orange/15 flex items-center justify-center text-orange shrink-0 border border-orange/25">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">24/7 Operations Desk</span>
                      <a href="tel:+918796636150" className="text-white hover:text-orange-light font-black text-lg tracking-wider mt-0.5 transition-colors">
                        +91 87966 36150
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-orange/15 flex items-center justify-center text-orange shrink-0 border border-orange/25">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">Email Registry</span>
                      <a href="mailto:Info@faithgloballogistics.in" className="text-slate-100 hover:text-orange-light font-bold mt-0.5 transition-colors break-all">
                        Info@faithgloballogistics.in
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-orange/15 flex items-center justify-center text-orange shrink-0 border border-orange/25">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">Corporate Headquarters</span>
                      <span className="text-slate-200 leading-relaxed mt-0.5 font-semibold text-sm">
                        House no 1, 1st floor, BLK-B-5 PKT 3, SEC 34, Utsav Residency, North West Delhi, Delhi 110042
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-orange/15 flex items-center justify-center text-orange shrink-0 border border-orange/25">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">Working Hours</span>
                      <span className="text-slate-200 leading-relaxed mt-0.5 font-semibold text-sm">
                        Office: 9:00 AM - 6:00 PM <br />
                        Patrol & Command Center: 24 Hours / 365 Days
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="h-px bg-slate-800/80 my-6" />

                <div>
                  <span className="text-[10px] uppercase text-orange tracking-widest font-bold block mb-3">
                    Authorized Territories
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {["Delhi NCR", "Uttar Pradesh", "Punjab", "Haryana"].map((t) => (
                      <div key={t} className="text-xs text-slate-200 bg-brand-navy-dark/60 border border-slate-800 px-3 py-2 rounded-lg flex items-center gap-2 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Aesthetic Light Command Radar Graphic */}
              <div 
                data-aos="fade-left"
                data-aos-delay="100"
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_15px_40px_rgba(15,29,51,0.04)] relative overflow-hidden"
              >
                <div className="flex items-center gap-2 text-orange mb-4">
                  <Map className="w-4 h-4" />
                  <span className="text-xs uppercase font-extrabold tracking-widest text-brand-navy font-bold">Interactive Command Radius</span>
                </div>
                
                {/* Styled light map card */}
                <div className="h-48 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden flex flex-col items-center justify-center text-center p-4">
                  {/* Subtle vector grid lines */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-orange/10 rounded-full animate-ping pointer-events-none" />
                  <MapPin className="w-8 h-8 text-orange drop-shadow-[0_0_8px_rgba(255,111,0,0.3)] relative z-10 animate-bounce" />
                  
                  <span className="block text-xs text-brand-navy uppercase font-black tracking-wider mt-4 relative z-10">
                    Noida Sector 5 HQ Command
                  </span>
                  <span className="block text-[10px] text-slate-500 font-bold mt-1.5 relative z-10">
                    Serving Entire Delhi NCR & Surrounding States
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
