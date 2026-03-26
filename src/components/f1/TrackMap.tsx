"use client";

import { motion } from "framer-motion";

export const TrackMap = () => {
  // Simplified Interlagos track path (SVG)
  const trackPath = "M 50 150 C 50 50, 150 50, 250 50 L 450 50 C 550 50, 550 150, 450 150 L 350 150 C 250 150, 250 250, 150 250 L 100 250 C 50 250, 50 200, 50 150 Z";

  return (
    <div className="glass rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
      <div className="absolute top-4 left-6">
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Track Map</span>
        <h4 className="text-xl font-black italic tracking-tighter uppercase">Interlagos</h4>
      </div>

      <svg viewBox="0 0 600 300" className="w-full h-auto max-w-lg drop-shadow-[0_0_15px_rgba(225,6,0,0.2)]">
        {/* Track Outline */}
        <path
          d={trackPath}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d={trackPath}
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* DRS Zones */}
        <path
          d="M 250 50 L 450 50"
          fill="none"
          stroke="#4ade80"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Driver Dots (Animated) */}
        <motion.circle
          r="6"
          fill="#3671C6"
          stroke="white"
          strokeWidth="2"
        >
          <animateMotion 
            dur="20s" 
            repeatCount="indefinite" 
            path={trackPath} 
          />
        </motion.circle>

        <motion.circle
          r="6"
          fill="#E8002D"
          stroke="white"
          strokeWidth="2"
        >
          <animateMotion 
            dur="22s" 
            repeatCount="indefinite" 
            path={trackPath} 
            begin="-5s"
          />
        </motion.circle>

        <motion.circle
          r="6"
          fill="#FF8700"
          stroke="white"
          strokeWidth="2"
        >
          <animateMotion 
            dur="25s" 
            repeatCount="indefinite" 
            path={trackPath} 
            begin="-12s"
          />
        </motion.circle>
      </svg>

      <div className="absolute bottom-6 right-8 flex flex-col items-end gap-2">
         <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-white/40 uppercase">Sector 1</span>
            <div className="w-12 h-1 bg-green-500/50 rounded-full" />
         </div>
         <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-white/40 uppercase">Sector 2</span>
            <div className="w-12 h-1 bg-green-500/50 rounded-full" />
         </div>
         <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-white/40 uppercase">Sector 3</span>
            <div className="w-12 h-1 bg-f1-red/50 rounded-full" />
         </div>
      </div>
    </div>
  );
};
