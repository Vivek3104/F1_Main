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
}

export const DriverCard = ({ 
  name, 
  team, 
  number, 
  image, 
  color, 
  flag = "🇮🇹"
}: DriverCardProps) => {
  // Split name for visual hierarchy
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative w-full aspect-21/9 md:aspect-2/1 rounded-2xl overflow-hidden border border-white/5 cursor-pointer shadow-2xl"
      style={{ backgroundColor: color }}
    >
      {/* MESH PATTERN OVERLAY */}
      <div className="absolute inset-0 dot-pattern opacity-30 z-0" />
      
      {/* GRADIENT OVERLAY (LEFT TO RIGHT) */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/20 via-transparent to-transparent" />

      {/* CONTENT GRID */}
      <div className="relative z-20 h-full w-full flex p-6 md:p-8">
        
        {/* LEFT SIDE: INFO */}
        <div className="flex flex-col h-full items-start justify-start w-1/2">
          <div className="mb-auto">
            <h3 className="text-2xl md:text-3xl font-black leading-none text-white tracking-tight">
              {firstName}<br />
              <span className="uppercase">{lastName}</span>
            </h3>
            <p className="text-xs md:text-sm font-bold text-white/60 tracking-wider mt-1 uppercase">
              {team}
            </p>
          </div>

          <div className="mt-4">
            <span className="text-4xl md:text-5xl font-black italic text-white/90 tracking-tighter">
              {number}
            </span>
          </div>

          <div className="mt-auto">
            <span className="text-2xl md:text-3xl filter drop-shadow-lg">{flag}</span>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="flex-1 relative h-full">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute right-0 bottom-[-20px] w-[140%] h-[130%] z-20"
          >
            <Image 
              src={image} 
              alt={name} 
              fill
              className="object-contain object-bottom" 
            />
          </motion.div>
        </div>

      </div>

      {/* SUBTLE INNER BORDER */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none z-30" />
    </motion.div>
  );
};
