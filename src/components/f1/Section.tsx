"use client";

import { ReactNode } from "react";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ title, subtitle, children, className = "" }: SectionProps) => {
  return (
    <section className={`py-20 px-6 md:px-20 max-w-[1400px] mx-auto ${className}`}>
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/50 text-sm font-bold uppercase tracking-widest">
              {subtitle}
            </p>
          )}
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-f1-red transition-colors border-b border-white/20 pb-1">
          View All
        </button>
      </div>
      {children}
    </section>
  );
};
