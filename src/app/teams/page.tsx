"use client";

import { Navbar } from "@/components/f1/Navbar";
import { Section } from "@/components/f1/Section";
import { TEAMS } from "@/lib/data";

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-f1-black pt-24 pb-12">
      <Navbar />
      <Section title="Teams" subtitle="Constructor Championship">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {TEAMS.map((team) => (
            <div key={team.id} className="glass p-12 rounded-3xl group cursor-pointer hover:bg-white/10 transition-all flex items-center justify-between">
              <div>
                <div className="w-16 h-1 mb-6" style={{ backgroundColor: team.color }} />
                <h2 className="text-5xl font-black italic tracking-tighter uppercase">{team.name}</h2>
                <span className="text-f1-red text-xs font-bold uppercase tracking-[0.3em] mt-4 block opacity-60 group-hover:opacity-100 transition-opacity">View Details</span>
              </div>
              <div className="text-8xl font-black italic text-white/5 group-hover:text-white/10 transition-colors">
                {team.name.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
