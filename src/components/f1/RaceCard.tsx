"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

interface RaceCardProps {
  title: string;
  location: string;
  date: string;
  image: string;
  isLive?: boolean;
}

export const RaceCard = ({ title, location, date, image, isLive }: RaceCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative min-w-[300px] md:min-w-[400px] aspect-16/10 rounded-xl overflow-hidden glass group cursor-pointer"
    >
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" 
      />
      <div className="absolute inset-0 bg-linear-to-t from-f1-black via-f1-black/20 to-transparent" />
      
      <div className="absolute top-4 left-4 flex gap-2">
        {isLive && (
          <span className="bg-f1-red text-[10px] font-black px-2 py-0.5 uppercase flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Live
          </span>
        )}
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-1">{title}</h3>
        <div className="flex items-center gap-4 text-white/60 text-xs font-bold uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-f1-red" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-f1-red" />
            {date}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-f1-red/50 transition-colors rounded-xl" />
    </motion.div>
  );
};
