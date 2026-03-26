"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  grandPrix: string;
}

export const HeroBanner = ({ backgroundImage, title, subtitle, grandPrix }: HeroBannerProps) => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="F1 Hero Background"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-linear-to-r from-f1-black via-f1-black/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-f1-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-f1-red/5 mix-blend-overlay" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-f1-red text-white text-[10px] font-black px-2 py-1 uppercase tracking-tighter">Live Now</span>
            <span className="text-white/60 text-sm font-medium tracking-wide">{grandPrix}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-2 leading-[0.9]">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-8 max-w-xl leading-snug">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/live" className="px-8 py-4 bg-f1-red text-white font-black italic uppercase tracking-tighter -skew-x-12 hover:bg-white hover:text-f1-red transition-all transform hover:scale-105 active:scale-95">
              <span className="skew-x-12 inline-block">Live Updates</span>
            </Link>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black italic uppercase tracking-tighter -skew-x-12 border border-white/20 backdrop-blur-md transition-all transform hover:scale-105 active:scale-95">
              <span className="skew-x-12 inline-block">Watch Highlights</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-f1-black to-transparent z-10" />
    </section>
  );
};
