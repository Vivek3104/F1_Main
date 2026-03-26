"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy } from "lucide-react";

interface DriverCardProps {
  name: string;
  team: string;
  number: string;
  image: string;
  color: string;
  countryCode?: string;
  lapTime?: string;
  trend?: "up" | "down";
  championships?: number;
}

export const DriverCard = ({
  name,
  team,
  number,
  image,
  color,
  countryCode = "NL",
  lapTime = "1:15.234",
  trend = "up",
  championships = 0
}: DriverCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative group cursor-pointer aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 transition-shadow duration-500 w-full"
      style={{
        // @ts-ignore
        "--glow-color": color
      }}
    >
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#1a1a1a] to-[#0b0b0f]" />

      {/* DRIVER IMAGE */}
      <div className="absolute inset-0 z-10">
        <motion.div
          whileHover={{ scale: 1.1, y: 10 }}
          className="relative w-full h-full" // Use 100% height since parent has aspect-ratio
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain object-bottom transition-transform duration-700"
            priority={parseInt(number) < 10}
          />
        </motion.div>
      </div>

      {/* CHAMPIONSHIPS BADGE */}
      {championships > 0 && (
        <div className="absolute top-4 left-4 z-40 bg-f1-red text-white py-1 px-2 rounded-md flex items-center gap-1.5 shadow-lg">
          <Trophy className="w-3 h-3" />
          <span className="text-[10px] font-black uppercase tracking-widest">{championships}x Champion</span>
        </div>
      )}

      {/* DRIVER NUMBER (TOP RIGHT - FADED) */}
      <div className="absolute top-2 right-4 z-0 text-8xl font-black italic text-white/5 select-none tracking-tighter">
        {number}
      </div>

      {/* INFO PANEL (BOTTOM OVERLAY) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-5 bg-white/5 backdrop-blur-md border-t border-white/10 group-hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Current Lap Time</span>
          <span className={`${trend === "up" ? "text-green-400" : "text-f1-red"}`}>
            {trend === "up" ? "▲" : "▼"}
          </span>
        </div>

        <div className="flex flex-col mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black italic tracking-tighter leading-none">
              {lapTime.split('.')[0]}<span className="text-white/20">.</span>
            </span>
            <span className="text-3xl font-black italic tracking-tighter text-white/40">
              {lapTime.split('.')[1]}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-bold text-white/40">{countryCode}</span>
            <span className="text-sm font-black uppercase tracking-tight">{name}</span>
          </div>
          <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">{team}</p>
        </div>
      </div>

      {/* TEAM COLOR ACCENT (VERTICAL + GLOW) */}
      <div
        className="absolute top-0 left-0 w-1 h-full z-40 transition-all duration-500 group-hover:w-1.5 shadow-[0_0_20px_var(--glow-color)] group-hover:shadow-[0_0_30px_var(--glow-color)]"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};
