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
  { id: 5, pos: 2, code: "NOR", gap: "+1.245", interval: "+1.245", tire: "M", teamColor: "#ff8700" },
  { id: 4, pos: 3, code: "LEC", gap: "+4.582", interval: "+3.337", tire: "S", teamColor: "#f00000" },
  { id: 6, pos: 4, code: "PIA", gap: "+5.120", interval: "+0.538", tire: "M", teamColor: "#ff8700" },
  { id: 7, pos: 5, code: "RUS", gap: "+8.901", interval: "+3.781", tire: "S", teamColor: "#27F4D2" },
  { id: 3, pos: 6, code: "HAM", gap: "+10.234", interval: "+1.333", tire: "H", teamColor: "#f00000" },
  { id: 14, pos: 7, code: "SAI", gap: "+12.455", interval: "+2.221", tire: "M", teamColor: "#64C4FF" },
  { id: 9, pos: 8, code: "ALO", gap: "+15.678", interval: "+3.223", tire: "H", teamColor: "#229971" },
  { id: 2, pos: 9, code: "PER", gap: "+18.901", interval: "+3.223", tire: "M", teamColor: "#3671C6" },
  { id: 13, pos: 10, code: "ALB", gap: "+21.432", interval: "+2.531", tire: "M", teamColor: "#64C4FF" },
  { id: 11, pos: 11, code: "GAS", gap: "+24.567", interval: "+3.135", tire: "M", teamColor: "#0093cc" },
  { id: 16, pos: 12, code: "LAW", gap: "+27.890", interval: "+3.323", tire: "S", teamColor: "#6692FF" },
  { id: 8, pos: 13, code: "ANT", gap: "+30.123", interval: "+2.233", tire: "M", teamColor: "#27F4D2" },
  { id: 15, pos: 14, code: "TSU", gap: "+32.456", interval: "+2.333", tire: "H", teamColor: "#6692FF" },
  { id: 10, pos: 15, code: "STR", gap: "+35.678", interval: "+3.222", tire: "M", teamColor: "#229971" },
  { id: 17, pos: 16, code: "HUL", gap: "+38.901", interval: "+3.223", tire: "H", teamColor: "#52e252" },
  { id: 19, pos: 17, code: "OCO", gap: "+41.234", interval: "+2.333", tire: "M", teamColor: "#B6BABD" },
  { id: 12, pos: 18, code: "DOO", gap: "+44.567", interval: "+3.333", tire: "S", teamColor: "#0093cc" },
  { id: 20, pos: 19, code: "BEA", gap: "+47.890", interval: "+3.323", tire: "M", teamColor: "#B6BABD" },
  { id: 18, pos: 20, code: "BOR", gap: "+51.222", interval: "+3.332", tire: "H", teamColor: "#52e252" },
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
