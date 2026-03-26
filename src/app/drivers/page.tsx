"use client";

import { Navbar } from "@/components/f1/Navbar";
import { Section } from "@/components/f1/Section";
import { DriverCard } from "@/components/f1/DriverCard";
import { DRIVERS } from "@/lib/data";

export default function DriversPage() {
  return (
    <main className="min-h-screen bg-f1-black pt-24 pb-12">
      <Navbar />
      <Section title="Drivers" subtitle="2026 Grid Lineup">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {DRIVERS.map((driver) => (
            <DriverCard key={driver.id} {...driver} />
          ))}
        </div>
      </Section>
    </main>
  );
}
