import { Navbar } from "@/components/f1/Navbar";
import { Section } from "@/components/f1/Section";
import { DriverCard } from "@/components/f1/DriverCard";
import { DRIVERS } from "@/lib/data";

export default function DriversPage() {
  // Sort by points for the standings table
  const sortedDrivers = [...DRIVERS].sort((a, b) => (b.points || 0) - (a.points || 0));

  return (
    <main className="min-h-screen bg-[#0b0b0b] relative overflow-hidden pt-24 pb-12">
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,24,1,0.15)_0%,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,1)_30%,rgba(139,0,0,0.1)_100%)]" />
      </div>

      <Navbar />
      
      {/* GRID VIEW */}
      <Section title="Drivers" subtitle="2026 Grid Lineup">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 relative z-10">
          {sortedDrivers.slice(0, 3).map((driver, idx) => (
            <DriverCard key={driver.id} {...driver} rank={idx + 1} />
          ))}
        </div>
      </Section>

      {/* STANDINGS DETAILS */}
      <Section title="Season Standings" subtitle="Live Championship Performance">
        <div className="overflow-x-auto rounded-xl border border-white/5 bg-white/5 backdrop-blur-md">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Pos</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Driver</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Team</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Wins</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Podiums</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40 text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {sortedDrivers.map((driver, idx) => (
                <tr key={driver.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-black italic text-xl">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{driver.flag}</span>
                      <span className="font-bold uppercase tracking-tight group-hover:text-f1-red transition-colors">{driver.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 rounded-full" style={{ backgroundColor: driver.color }} />
                      <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{driver.team}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono">{driver.wins || 0}</td>
                  <td className="px-6 py-4 font-mono">{driver.podiums || 0}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="bg-white/10 px-3 py-1 rounded-full font-black text-f1-red">{driver.points || 0}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </main>
  );
}
