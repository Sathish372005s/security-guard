"use client";

import { useState } from "react";
import { MapPin, Shield, Activity, Map, RefreshCw } from "lucide-react";

interface LocationData {
  id: string;
  name: string;
  queryName: string;
  description: string;

  embedUrl: string;
  // Estimated pixel percentage positions on the overview map (zoom 7 centered at 29.0,77.5)
  top: string;
  left: string;
}

const locations: LocationData[] = [
  {
    id: "delhi",
    name: "Delhi NCR",
    queryName: "Delhi NCR, India",
    description: "Regional Headquarters & 24/7 Command Center overseeing all operations.",
    embedUrl: "https://maps.google.com/maps?q=Delhi%20NCR,%20India&t=&z=10&ie=UTF8&iwloc=&output=embed",
    top: "54%",
    left: "48%",
  },
  {
    id: "haryana",
    name: "Haryana",
    queryName: "Haryana, India",
    description: "Industrial security guards, corporate guards, and logistics escort services.",

    embedUrl: "https://maps.google.com/maps?q=Haryana,%20India&t=&z=8&ie=UTF8&iwloc=&output=embed",
    top: "47%",
    left: "40%",
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    queryName: "Uttar Pradesh, India",
    description: "Comprehensive security coverage for residential complexes and commercial hubs.",
 
    embedUrl: "https://maps.google.com/maps?q=Uttar%20Pradesh,%20India&t=&z=7&ie=UTF8&iwloc=&output=embed",
    top: "62%",
    left: "64%",
  },
  {
    id: "punjab",
    name: "Punjab",
    queryName: "Punjab, India",
    description: "Premium event security, VIP personal protection, and asset guarding.",

    embedUrl: "https://maps.google.com/maps?q=Punjab,%20India&t=&z=8&ie=UTF8&iwloc=&output=embed",
    top: "34%",
    left: "32%",
  },
];

const overviewEmbedUrl = "https://maps.google.com/maps?q=29.0,77.5&t=&z=7&ie=UTF8&iwloc=&output=embed";

export default function CoverageMap() {
  const [selectedLoc, setSelectedLoc] = useState<LocationData | null>(null);

  const activeUrl = selectedLoc ? selectedLoc.embedUrl : overviewEmbedUrl;

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-2 text-[11px] uppercase tracking-[0.33em] font-semibold text-orange">
            <Map className="w-3.5 h-3.5 animate-pulse" />
            Our Service Territory
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
            Operational Presence & Command Radius
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 leading-relaxed text-sm sm:text-base">
            We provide rapid deployment and 24/7 protection across Northern India. Toggle the map below to view individual state details or see our full coverage zone.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr] items-stretch">
          
          {/* Territory Selectors */}
          <div className="flex flex-col gap-4 justify-center">
            
            {/* Overview Map Select Card */}
            <button
              onClick={() => setSelectedLoc(null)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                selectedLoc === null
                  ? "bg-white border-orange shadow-[0_15px_35px_rgba(255,111,0,0.06)]"
                  : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
              }`}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 transition-transform duration-300 ${
                  selectedLoc === null ? "bg-orange scale-y-100" : "bg-transparent scale-y-0 group-hover:scale-y-50 group-hover:bg-slate-300"
                }`}
              />
              <div className="flex items-center justify-between pl-2">
                <div>
                  <h3 className="font-black text-lg text-brand-navy group-hover:text-orange transition-colors">
                    Overview Map
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Showing indicators for all active regions in Northern India.
                  </p>
                </div>
                <div className={`p-2.5 rounded-xl border transition-colors ${
                  selectedLoc === null ? "bg-orange/10 border-orange/20 text-orange" : "bg-slate-50 border-slate-200 text-slate-400"
                }`}>
                  <RefreshCw className="w-5 h-5" />
                </div>
              </div>
            </button>

            {locations.map((loc) => {
              const isActive = selectedLoc?.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? "bg-white border-orange shadow-[0_15px_35px_rgba(255,111,0,0.06)]"
                      : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-[0_10px_25px_rgba(15,23,42,0.03)]"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-transform duration-300 ${
                      isActive ? "bg-orange scale-y-100" : "bg-transparent scale-y-0 group-hover:scale-y-50 group-hover:bg-slate-300"
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4 pl-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        {/* Live indication dot */}
                        <span className="relative flex h-2 w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isActive ? "bg-orange" : "bg-green-500"}`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${isActive ? "bg-orange" : "bg-green-500"}`}></span>
                        </span>
                        <h3 className="font-bold text-lg text-brand-navy group-hover:text-orange transition-colors">
                          {loc.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        {loc.description}
                      </p>
                      
                     
                    </div>

                    <div className={`p-2.5 rounded-xl border transition-colors shrink-0 ${
                      isActive 
                        ? "bg-orange/10 border-orange/20 text-orange" 
                        : "bg-slate-50 border-slate-200 text-slate-400 group-hover:text-slate-600"
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>

                 
                </button>
              );
            })}
          </div>

          {/* Real Interactive Google Map */}
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_70px_rgba(15,23,42,0.06)] min-h-[450px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center text-orange">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-extrabold block leading-none">Security Radius</span>
                  <span className="text-sm font-bold text-brand-navy">
                    {selectedLoc ? `${selectedLoc.name} Coverage` : "Northern India Overview"}
                  </span>
                </div>
              </div>
              <span className="text-[10px] bg-green-500/10 text-green-600 px-2 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Live Map Feed
              </span>
            </div>
            
            {/* Map Frame wrapper */}
            <div className="relative flex-grow h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-150 bg-slate-100 shadow-inner">
              <iframe
                title={`Google Map - ${selectedLoc ? selectedLoc.name : "Overview"}`}
                src={activeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full filter saturate-[0.85] contrast-[1.05]"
              />

              {/* OVERVIEW MAP OVERLAY: Pulsing Dots for Haryana, Punjab, UP, Delhi */}
              {selectedLoc === null && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  {locations.map((loc) => (
                    <div
                      key={loc.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                      style={{ top: loc.top, left: loc.left }}
                    >
                      {/* Pulsing indicator light */}
                      <span className="relative flex h-5 w-5 justify-center items-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange shadow-[0_0_8px_rgba(255,111,0,0.8)] border-2 border-white"></span>
                      </span>
                      
                      {/* Territory Label overlay */}
                      <span className="mt-1 px-2 py-0.5 rounded bg-brand-navy text-white text-[9px] font-black tracking-wider uppercase shadow-md border border-slate-800">
                        {loc.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {selectedLoc === null && (
              <p className="text-[10px] text-slate-400 font-semibold text-center mt-2.5 italic">
                Pulsing indicators mark our active regional command zones. Click any region on the left to zoom in.
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
