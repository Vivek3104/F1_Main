"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DriverCardProps {
  name: string;
  team: string;
  number: string;
  image: string;
  color: string;
}

export const DriverCard = ({ 
  name, 
  team, 
  number, 
  image, 
  color, 
}: DriverCardProps) => {
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ').slice(1).join(' ');

  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative flex items-center h-52 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
      style={{ backgroundColor: color }}
    >
      {/* GRID / MESH OVERLAY */}
      <div className="absolute inset-0 f1-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/10 pointer-events-none" />
      
      {/* LEFT INFO PANEL */}
      <div className="relative z-10 flex-1 p-8 flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <h3 className="flex flex-col leading-none tracking-tight">
            <span className="text-xl font-light text-white opacity-80 capitalize mb-1">{firstName.toLowerCase()}</span>
            <span className="text-4xl font-black uppercase tracking-tighter text-white drop-shadow-md">
              {lastName}
            </span>
          </h3>
          <p className="text-xs font-bold text-white/60 uppercase tracking-widest mt-2">{team}</p>
          <span className="text-4xl font-black italic text-white/20 mt-4 block leading-none">{number}</span>
        </div>
        
        {/* CIRCULAR FLAG ICON */}
        <div className="mt-auto">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl shadow-lg">
             🏁
          </div>
        </div>
      </div>

      {/* RIGHT DRIVER IMAGE */}
      <div className="relative z-10 w-[45%] h-full pr-4">
        <motion.div
          whileHover={{ x: 5, scale: 1.05 }}
          className="relative w-full h-[110%] -bottom-[5%]"
        >
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] transition-transform duration-700" 
          />
        </motion.div>
      </div>

      {/* TEAM COLOR ACCENT (SUBTLE INNER GLOW) */}
      <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl" />
    </motion.div>
  );
};
