"use client";

import { motion } from "framer-motion";

interface DriverCardProps {
  name: string;
  team: string;
  number: string;
  image: string;
  color: string;
}

export const DriverCard = ({ name, team, number, image, color }: DriverCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer"
    >
      <div className="aspect-4/5 rounded-2xl overflow-hidden glass relative">
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ background: `linear-gradient(to bottom, transparent, ${color})` }}
        />
        <div className="absolute -right-4 top-4 text-7xl font-black italic text-white/10 group-hover:text-white/20 transition-colors select-none">
          {number}
        </div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="w-1 h-12 mb-4" style={{ backgroundColor: color }} />
          <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none mb-1">
            {name.split(' ')[0]}<br/>
            <span className="text-f1-red">{name.split(' ').slice(1).join(' ')}</span>
          </h3>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">{team}</p>
        </div>
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
           {/* Image would go here, placeholder for now */}
        </div>
      </div>
      <div 
        className="absolute -bottom-1 left-4 right-4 h-1 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};
