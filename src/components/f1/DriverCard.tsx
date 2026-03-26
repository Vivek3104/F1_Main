"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DriverCardProps {
  name: string;
  team: string;
  number: string;
  image: string;
  color: string;
  countryCode?: string;
  flag?: string; // Add flag prop back for the UI
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
      whileHover={{ scale: 1.02 }}
      className="relative flex items-center h-48 rounded-xl overflow-hidden group cursor-pointer"
      style={{ backgroundColor: color }}
    >
      {/* TEXTURE / PATTERN OVERLAY */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }} />
      
      {/* LEFT INFO SIDE */}
      <div className="relative z-10 flex-1 p-6 flex flex-col justify-between h-full bg-linear-to-r from-black/40 to-transparent">
        <div>
          <h3 className="flex flex-col leading-none">
            <span className="text-xl font-light text-white opacity-90">{firstName}</span>
            <span className="text-3xl font-black uppercase tracking-tighter text-white">{lastName}</span>
          </h3>
          <p className="text-xs font-bold text-white/70 uppercase mt-1">{team}</p>
          <span className="text-4xl font-black italic text-white/20 mt-2 block">{number}</span>
        </div>
        
        {/* ROUND FLAG ICON */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20 relative">
           <div className="absolute inset-0 flex items-center justify-center bg-white/10 text-lg">
             {/* Fallback to text if no image, but we'll use a placeholder or the emoji */}
             🏁
           </div>
        </div>
      </div>

      {/* RIGHT IMAGE SIDE */}
      <div className="relative z-10 w-[45%] h-full">
        <motion.div
          whileHover={{ x: 10, scale: 1.05 }}
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

      {/* GRADIENT OVERLAY FOR DEPTH */}
      <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />
    </motion.div>
  );
};
