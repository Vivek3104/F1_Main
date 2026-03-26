"use client";

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useRaceStore } from "@/store/useRaceStore";
import { DRIVERS } from "@/lib/data";
import { useEffect, useState } from "react";

const generateData = () => {
  return Array.from({ length: 11 }, (_, i) => ({
    time: i,
    speed: 280 + Math.random() * 60,
    rpm: 10000 + Math.random() * 2500,
  }));
};

export const TelemetryPanel = () => {
  const { focusedDriverId } = useRaceStore();
  const [chartData, setChartData] = useState(generateData());
  const driver = DRIVERS.find(d => d.id === focusedDriverId) || DRIVERS[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => [...prev.slice(1), { time: prev[prev.length - 1].time + 1, speed: 280 + Math.random() * 60, rpm: 10000 + Math.random() * 2500 }]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentSpeed = Math.round(chartData[chartData.length - 1].speed);

  return (
    <div className="glass rounded-xl p-6 flex flex-col h-full border border-white/5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Live Telemetry</span>
          <h4 className="text-xl font-black italic tracking-tighter uppercase text-f1-red">{driver.name.split(' ').slice(1).join(' ') || driver.name}</h4>
        </div>
        <div className="text-right">
           <span className="block text-2xl font-black italic tracking-tighter">{currentSpeed} <span className="text-xs text-white/40">KM/H</span></span>
           <span className="text-[10px] font-bold text-green-500 uppercase">DRS ENABLED</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e10600" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#e10600" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="time" hide />
            <YAxis hide domain={['auto', 'auto']} />
            <Tooltip 
              contentStyle={{ background: '#15151e', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px' }}
              itemStyle={{ color: '#e10600' }}
            />
            <Area 
              type="monotone" 
              dataKey="speed" 
              stroke="#e10600" 
              fillOpacity={1} 
              fill="url(#colorSpeed)" 
              strokeWidth={3}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
         <div className="bg-white/5 p-3 rounded-lg flex flex-col items-center">
            <span className="text-[8px] font-black text-white/40 uppercase">Throttle</span>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
               <div className="bg-green-500 h-full w-[85%]" />
            </div>
         </div>
         <div className="bg-white/5 p-3 rounded-lg flex flex-col items-center">
            <span className="text-[8px] font-black text-white/40 uppercase">Brake</span>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
               <div className="bg-f1-red h-full w-[5%]" />
            </div>
         </div>
         <div className="bg-white/5 p-3 rounded-lg flex flex-col items-center">
            <span className="text-[8px] font-black text-white/40 uppercase">Gear</span>
            <span className="text-xl font-black italic mt-1">8</span>
         </div>
      </div>
    </div>
  );
};
