"use client";

import { Navbar } from "@/components/f1/Navbar";
import { Section } from "@/components/f1/Section";
import { RaceCard } from "@/components/f1/RaceCard";
import { RACES } from "@/lib/data";

export default function RacesPage() {
  return (
    <main className="min-h-screen bg-f1-black pt-24 pb-12">
      <Navbar />
      <Section title="Race Calendar" subtitle="2026 Season Schedule">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RACES.map((race) => (
            <RaceCard key={race.id} {...race} />
          ))}
        </div>
      </Section>
    </main>
  );
}
