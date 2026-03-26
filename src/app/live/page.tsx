"use client";

import { useRaceStore } from "@/store/useRaceStore";
import { DRIVERS } from "@/lib/data";
import { useEffect } from "react";
import { Navbar } from "@/components/f1/Navbar";
import { LeaderboardTable } from "@/components/f1/LeaderboardTable";
import { TrackMap } from "@/components/f1/TrackMap";
import { TelemetryPanel } from "@/components/f1/TelemetryPanel";
import { StatsCard } from "@/components/f1/StatsCard";
import { Tabs } from "@/components/f1/Tabs";
import { Cloud, Thermometer, Info } from "lucide-react";
import Image from "next/image";

export default function LiveDashboard() {
  const { activeTab, setActiveTab, focusedDriverId, lap, setLap, totalLaps } = useRaceStore();
  const focusedDriver = DRIVERS.find(d => d.id === focusedDriverId) || DRIVERS[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setLap((lap % totalLaps) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [lap, totalLaps, setLap]);

  return (
    <main className="min-h-screen bg-[#0b0b0f] pt-24 pb-12 px-6">
      <Navbar />

      {/* TOP BAR */}
      <div className="max-w-[1600px] mx-auto mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 bg-f1-red rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-f1-red">Live Race Session</span>
          </div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase">SÃO PAULO GP - RACE - LAP {lap}</h1>
        </div>

        <Tabs 
          tabs={["Leaderboard", "Driver Tracker", "Telemetry"]} 
          activeTab={activeTab} 
          onChange={setActiveTab} 
        />
      </div>

      {/* DASHBOARD GRID */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6 h-[calc(100vh-200px)] min-h-[700px]">
        {/* LEFT PANEL */}
        <div className="col-span-12 lg:col-span-3 h-full overflow-hidden">
           <LeaderboardTable />
        </div>

        {/* CENTER PANEL */}
        <div className="col-span-12 lg:col-span-6 h-full flex flex-col gap-6">
           <div className="flex-1 min-h-0">
              <TrackMap />
           </div>
           <div className="grid grid-cols-3 gap-4">
              <StatsCard label="Air Temp" value="23.4" subValue="°C" icon={<Thermometer className="w-4 h-4" />} />
              <StatsCard label="Track Temp" value="38.1" subValue="°C" icon={<Thermometer className="w-4 h-4" />} />
              <StatsCard label="Humidity" value="45" subValue="%" icon={<Cloud className="w-4 h-4" />} />
           </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-12 lg:col-span-3 h-full flex flex-col gap-6">
            <div className="glass rounded-xl p-4 flex items-center gap-4 group cursor-pointer border-l-4 border-f1-red bg-white/5">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden glass border border-white/10">
                 <Image src={focusedDriver.image} alt={focusedDriver.name} fill className="object-cover object-top" />
              </div>
              <div>
                 <span className="block text-[8px] font-black text-white/40 uppercase">Current Focus</span>
                 <h3 className="text-xl font-black italic tracking-tighter uppercase leading-none">{focusedDriver.name}</h3>
                 <span className="text-[10px] font-bold text-f1-red uppercase mt-1">P1 - {focusedDriver.team}</span>
              </div>
            </div>
           
           <div className="flex-1">
              <TelemetryPanel />
           </div>

           <div className="glass rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Race Control</span>
                 <Info className="w-4 h-4 text-white/20" />
              </div>
              <div className="space-y-4">
                 <div className="flex gap-3">
                    <span className="text-[10px] font-bold text-f1-red">15:22</span>
                    <p className="text-[10px] font-medium text-white/60">CAR 4 (NOR) - UNDER INVESTIGATION FOR TRACK LIMITS</p>
                 </div>
                 <div className="flex gap-3">
                    <span className="text-[10px] font-bold text-green-500">15:18</span>
                    <p className="text-[10px] font-medium text-white/60">DRS ENABLED IN ZONE 1</p>
                 </div>
                 <div className="flex gap-3">
                    <span className="text-[10px] font-bold text-yellow-500">15:12</span>
                    <p className="text-[10px] font-medium text-white/60">YELLOW FLAG IN SECTOR 3</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
