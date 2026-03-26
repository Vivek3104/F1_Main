"use client";

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { time: 0, speed: 280, rpm: 10500 },
  { time: 1, speed: 310, rpm: 11200 },
  { time: 2, speed: 325, rpm: 11800 },
  { time: 3, speed: 338, rpm: 12100 },
  { time: 4, speed: 290, rpm: 10800 },
  { time: 5, speed: 240, rpm: 9500 },
  { time: 6, speed: 180, rpm: 7200 },
  { time: 7, speed: 210, rpm: 8500 },
  { time: 8, speed: 260, rpm: 9800 },
  { time: 9, speed: 300, rpm: 11000 },
  { time: 10, speed: 320, rpm: 11500 },
];

export const TelemetryPanel = () => {
  return (
    <div className="glass rounded-xl p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Live Telemetry</span>
          <h4 className="text-xl font-black italic tracking-tighter uppercase text-f1-red">VERSTAPPEN</h4>
        </div>
        <div className="text-right">
           <span className="block text-2xl font-black italic tracking-tighter">338 <span className="text-xs text-white/40">KM/H</span></span>
           <span className="text-[10px] font-bold text-green-500 uppercase">DRS ENABLED</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
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
