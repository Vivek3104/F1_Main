"use client";

import { motion } from "framer-motion";
import { useRaceStore } from "@/store/useRaceStore";
import { DRIVERS } from "@/lib/data";

interface DriverEntry {
  id: number;
  pos: number;
  code: string;
  gap: string;
  interval: string;
  tire: "S" | "M" | "H" | "I" | "W";
  teamColor: string;
}

const leaderboard: DriverEntry[] = [
  { id: 1, pos: 1, code: "VER", gap: "LEADER", interval: "-", tire: "M", teamColor: "#3671C6" },
  { id: 2, pos: 2, code: "HAM", gap: "+1.245", interval: "+1.245", tire: "M", teamColor: "#f00000" },
  { id: 3, pos: 3, code: "NOR", gap: "+4.582", interval: "+3.337", tire: "S", teamColor: "#ff8700" },
  { id: 4, pos: 4, code: "LEC", gap: "+5.120", interval: "+0.538", tire: "M", teamColor: "#f00000" },
  { id: 5, pos: 5, code: "PIA", gap: "+8.901", interval: "+3.781", tire: "S", teamColor: "#ff8700" },
  { id: 6, pos: 6, code: "RUS", gap: "+10.234", interval: "+1.333", tire: "H", teamColor: "#27F4D2" },
  { id: 7, pos: 7, code: "SAI", gap: "+12.455", interval: "+2.221", tire: "M", teamColor: "#f00000" },
  { id: 8, pos: 8, code: "ALO", gap: "+15.678", interval: "+3.223", tire: "H", teamColor: "#229971" },
];

const TireIcon = ({ type }: { type: DriverEntry["tire"] }) => {
  const colors = {
    S: "border-f1-red text-f1-red",
    M: "border-yellow-500 text-yellow-500",
    H: "border-white text-white",
    I: "border-green-500 text-green-500",
    W: "border-blue-500 text-blue-500",
  };
  return (
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-black ${colors[type]}`}>
      {type}
    </div>
  );
};

export const LeaderboardTable = () => {
  const { focusedDriverId, setFocusedDriverId, lap, totalLaps } = useRaceStore();

  return (
    <div className="glass rounded-xl overflow-hidden flex flex-col h-full border border-white/5">
      <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Leaderboard</span>
        <span className="text-[10px] font-black uppercase tracking-widest text-f1-red">Lap {lap}/{totalLaps}</span>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {leaderboard.map((driver, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={driver.code} 
            onClick={() => setFocusedDriverId(driver.id)}
            className={`flex items-center gap-3 px-4 py-3 transition-all group cursor-pointer border-b border-white/5 last:border-0 ${
               focusedDriverId === driver.id ? 'bg-f1-red/20 border-l-2 border-l-f1-red' : 'hover:bg-white/5'
            }`}
          >
            <span className="w-4 text-xs font-black italic text-white/40 group-hover:text-white transition-colors">{driver.pos}</span>
            <div className="w-1 h-4 rounded-full" style={{ backgroundColor: driver.teamColor }} />
            <span className="flex-1 text-sm font-black italic tracking-tighter">{driver.code}</span>
            <div className="flex flex-col items-end gap-0.5">
               <span className="text-[10px] font-bold text-white/60">{driver.gap}</span>
               <span className="text-[10px] font-bold text-white/20">{driver.interval}</span>
            </div>
            <TireIcon type={driver.tire} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
