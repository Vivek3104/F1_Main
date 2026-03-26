"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DriverCardProps {
  name: string;
  team: string;
  number: string;
  image: string;
  color: string;
  flag?: string;
  lapTime?: string;
  trend?: "up" | "down";
}

export const DriverCard = ({ name, team, number, image, color, flag = "🇮🇹", lapTime = "1:15.234", trend = "up" }: DriverCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group cursor-pointer aspect-4/5 rounded-2xl overflow-hidden border border-white/10"
    >
      {/* BACKGROUND / IMAGE */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#1a1a1a] to-black" />
      
      <div className="absolute inset-x-0 top-0 bottom-1/4 z-10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ backgroundColor: color }}
        />
        <motion.div
          whileHover={{ scale: 1.1, y: 10 }}
          className="relative w-full h-full"
        >
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-contain object-bottom transition-transform duration-500" 
          />
        </motion.div>
      </div>

      {/* DRIVER NUMBER (TOP RIGHT) */}
      <div className="absolute top-4 right-6 z-10 text-6xl font-black italic text-white/10 group-hover:text-white/20 transition-colors select-none">
        {number}
      </div>

      {/* OVERLAY CONTENT (BOTTOM) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 glass backdrop-blur-3xl border-t border-white/10">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Current Lap Time</span>
           <span className={`${trend === "up" ? "text-green-500" : "text-f1-red"}`}>
              {trend === "up" ? "▲" : "▼"}
           </span>
        </div>

        <div className="flex items-baseline gap-1 mb-4">
           <span className="text-5xl font-black italic tracking-tighter leading-none">
              {lapTime.split('.')[0]}<span className="text-white/40">.</span>
           </span>
           <span className="text-3xl font-black italic tracking-tighter text-white/60">
              {lapTime.split('.')[1]}
           </span>
        </div>

        <div className="flex items-center gap-2">
           <span className="text-lg">{flag}</span>
           <span className="text-sm font-black uppercase tracking-widest truncate">{name}</span>
        </div>
        <p className="text-[8px] font-bold text-white/20 uppercase tracking-[0.3em] mt-1">{team}</p>
      </div>

      {/* TEAM COLOR ACCENT */}
      <div 
        className="absolute top-0 left-0 w-1 h-full z-30"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};
