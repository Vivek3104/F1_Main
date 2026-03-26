"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DriverCardProps {
  name: string;
  team: string;
  number: string;
  image: string;
  color: string;
  points?: number;
  wins?: number;
  podiums?: number;
  championships?: number;
  starts?: number;
}

export const DriverCard = ({
  name,
  team,
  number,
  image,
  color,
  points = 0,
  wins = 0,
  podiums = 0,
  championships = 0,
  starts = 0
}: DriverCardProps) => {
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative aspect-[3/4] w-full bg-[#111] rounded-[2.5rem] overflow-hidden border border-white/5 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col pt-10 px-8 pb-8"
    >
      {/* DOT PATTERN OVERLAY */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      {/* TEAM STRIPES (CENTERED VERTICAL) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-24 flex z-0 opacity-40">
        <div className="w-1/3 h-full" style={{ backgroundColor: color }} />
        <div className="w-1/3 h-full bg-white/20" />
        <div className="w-1/3 h-full" style={{ backgroundColor: color }} />
      </div>

      {/* TOP SECTION: LOGO + NAME & STAT */}
      <div className="relative z-20 flex justify-between items-start mb-4">
        <div className="flex flex-col gap-2">
          {/* TEAM LOGO PLACEHOLDER (CIRCLE) */}
          <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center p-1 bg-black/20">
             <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black leading-[1.1] tracking-tighter text-white">
              <span className="text-white/40 block text-xs uppercase font-bold tracking-widest mb-1">{team}</span>
              {firstName}<br />
              <span className="uppercase text-f1-red">{lastName}</span>
            </h3>
          </div>
        </div>

        <div className="text-right">
          <div className="text-4xl md:text-5xl font-black italic tracking-tighter text-white leading-none">
            {points}
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-1">Points</div>
        </div>
      </div>

      {/* CENTER SECTION: DRIVER IMAGE */}
      <div className="flex-1 relative z-10 transition-transform group-hover:scale-110 duration-500">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
          priority
        />
      </div>

      {/* BOTTOM SECTION: 4-STATS ROW */}
      <div className="relative z-20 mt-6 pt-6 border-t border-white/5 grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1 text-center leading-tight">GPs</span>
          <span className="text-sm md:text-md font-black italic text-white">{starts}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1 text-center leading-tight">Wins</span>
          <span className="text-sm md:text-md font-black italic text-white">{wins}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1 text-center leading-tight">Podiums</span>
          <span className="text-sm md:text-md font-black italic text-white">{podiums}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1 text-center leading-tight">Titles</span>
          <span className="text-sm md:text-md font-black italic text-white">{championships}</span>
        </div>
      </div>

    </motion.div>
  );
};
