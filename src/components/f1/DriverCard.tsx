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
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};
