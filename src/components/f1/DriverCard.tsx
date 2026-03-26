"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DriverCardProps {
  id: number;
  name: string;
  team: string;
  number: string;
  image: string;
  carImage?: string;
  color: string;
  flag?: string;
  points?: number;
  placements?: string[];
  rank?: number;
}

export const DriverCard = ({
  id,
  name,
  team,
  number,
  image,
  carImage = "/media__1774517208136.png",
  color,
  flag = "🇬🇧",
  points = 0,
  placements = ["1st", "2nd", "3rd"],
  rank = 1
}: DriverCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20"
    >
      {/* HEADER SECTION: IMAGE + LOGO + NUMBER */}
      <div className="relative h-72 md:h-80 w-full overflow-hidden bg-linear-to-b from-white/5 to-transparent">
        {/* TEAM LOGO BACKGROUND (LARGE) */}
        <div 
          className="absolute top-10 left-5 w-40 h-40 opacity-10 blur-sm pointer-events-none"
          style={{ backgroundColor: color, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        
        {/* DRIVER NUMBER (LARGE BACKGROUND) */}
        <div className="absolute top-8 right-4 text-9xl font-black italic text-white/10 select-none tracking-tighter">
          {number}
        </div>

        {/* DRIVER PORTRAIT */}
        <div className="absolute inset-0 z-10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-bottom pt-8 drop-shadow-[0_20px_30px_rgba(0,0,0,1)]"
          />
        </div>

        {/* BOTTOM DRIVER BAR */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-3 flex justify-between items-center border-t border-white/10 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xl filter drop-shadow-md">{flag}</span>
            <span className="text-sm font-black uppercase tracking-tight text-white">{name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{team}</span>
            <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: color }} />
          </div>
        </div>
      </div>

      {/* RANK & CAR SECTION */}
      <div className="mx-4 mt-6 p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between relative group overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex flex-col relative z-10">
          <span className="text-4xl font-black italic text-white/80 leading-none">{rank}</span>
        </div>
        
        <div className="relative w-40 h-16 z-10">
          <Image 
            src={carImage} 
            alt="F1 Car" 
            fill 
            className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform group-hover:translate-x-2" 
          />
        </div>
      </div>

      {/* PLACEMENTS & POINTS SECTION */}
      <div className="px-6 py-6 flex flex-col gap-6">
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">Placements</h4>
          <div className="flex gap-2 text-[11px] font-bold text-white/80 font-mono">
            {placements.map((p, i) => (
              <span key={i} className="whitespace-nowrap">
                {p}{i < placements.length - 1 ? " -" : ""}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Points</h4>
          <div className="text-6xl font-black italic text-white tracking-tighter leading-none">
            {points}
          </div>
        </div>
      </div>

      {/* DECORATIVE TEAM LINE AT BOTTOM */}
      <div className="h-1 w-full" style={{ backgroundColor: color }} />
    </motion.div>
  );
};

