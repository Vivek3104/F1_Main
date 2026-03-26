import { Navbar } from "@/components/f1/Navbar";
import { HeroBanner } from "@/components/f1/HeroBanner";
import { Section } from "@/components/f1/Section";
import { RaceCard } from "@/components/f1/RaceCard";
import { DriverCard } from "@/components/f1/DriverCard";
import { SLIDES, RACES, DRIVERS } from "@/lib/data";

export default function Home() {
  const hero = SLIDES[0];

  return (
    <main className="min-h-screen bg-f1-black">
      <Navbar />
      
      <HeroBanner 
        backgroundImage={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
        grandPrix={hero.grandPrix}
      />

      <div className="relative z-20 -mt-20">
        <Section title="Trending Races" subtitle="Upcoming & Live Events">
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
            {RACES.map((race) => (
              <RaceCard key={race.id} {...race} />
            ))}
          </div>
        </Section>

        <Section title="Top Drivers" subtitle="2026 World Championship Standings">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DRIVERS.map((driver) => (
              <DriverCard key={driver.id} {...driver} />
            ))}
          </div>
        </Section>

        <Section title="Teams" subtitle="Constructor Standings">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {DRIVERS.map((driver) => (
              <div key={driver.id} className="glass p-8 rounded-2xl flex flex-col items-center justify-center group cursor-pointer hover:bg-white/10 transition-colors">
                <div 
                  className="w-12 h-1 mb-4 rounded-full" 
                  style={{ backgroundColor: driver.color }}
                />
                <span className="text-xl font-black italic text-white/80 group-hover:text-white transition-colors">
                  {driver.team.split(' ')[0]}
                </span>
                <span className="text-f1-red text-[10px] font-bold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <footer className="py-20 px-6 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-1">
            <div className="h-6 w-1 bg-f1-red skew-x-[-20deg]" />
            <span className="text-xl font-black tracking-tighter italic">F1<span className="text-f1-red">PLATFORM</span></span>
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Legal Info</a>
            <a href="#" className="hover:text-white transition-colors">Contacts</a>
          </div>
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
            © 2026 F1 PLATFORM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
}
