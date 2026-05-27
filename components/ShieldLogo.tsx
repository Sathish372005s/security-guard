import React from "react";

interface ShieldLogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg" | "xl";
  lightText?: boolean;
}

export default function ShieldLogo({
  className = "",
  width = 50,
  height = 50,
  showText = false,
  textSize = "md",
  lightText = true, // Default to true for light background theme
}: ShieldLogoProps) {
  const textClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
    xl: "text-xl md:text-2xl",
  }[textSize];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Shield Logo in Premium Steel Gray & Orange Accent theme */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(255,111,0,0.25)] transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Steel Gray Shield Border */}
        <path
          d="M50 5L85 18C85 45 72 75 50 95C28 75 15 45 15 18L50 5Z"
          fill="url(#steelGradient)"
          stroke="#475569"
          strokeWidth="1.5"
        />
        
        {/* Inner Dark Shield Body */}
        <path
          d="M50 9L81 21C81 44 69 71 50 89C31 71 19 44 19 21L50 9Z"
          fill="#0f1d33" // Deep navy blue inner body for light mode theme
        />

        {/* Inner Orange Shield Border Pin-stripe */}
        <path
          d="M50 12L77 23C77 42 66 67 50 84C34 67 23 42 23 23L50 12Z"
          stroke="url(#orangeGradient)"
          strokeWidth="0.75"
          fill="none"
          className="opacity-60"
        />

        {/* Reverted Classic Security Checkmark in Orange Accent */}
        <path
          d="M36 50L45 59L64 36"
          stroke="url(#orangeGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="drop-shadow-[0_0_6px_rgba(255,111,0,0.4)]"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9100" />
            <stop offset="50%" stopColor="#ff6f00" />
            <stop offset="100%" stopColor="#e65100" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col select-none">
          <span
            className={`font-display font-bold tracking-wider leading-none uppercase ${
              lightText ? "text-brand-navy" : "text-white"
            } ${textClass}`}
          >
            CORE SHIELD
          </span>
          <span
            className={`font-sans tracking-[0.25em] font-semibold text-[9px] uppercase mt-0.5 ${
              lightText ? "text-orange" : "text-orange-light"
            }`}
          >
            SERVICES
          </span>
        </div>
      )}
    </div>
  );
}
