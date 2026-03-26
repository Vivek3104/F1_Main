"use client";

import { motion } from "framer-motion";
import { DriverCard } from "./DriverCard";
import { DRIVERS } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const DriversSection = () => {
  // Show only first 12 for the home grid section
  const displayDrivers = DRIVERS.slice(0, 12);

  return (
    <section className="py-20 px-6 max-w-[1600px] mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-6xl font-black italic tracking-tighter mb-2 leading-none">DRIVERS</h2>
          <p className="text-sm font-bold text-white/40 uppercase tracking-[0.4em]">2026 Grid Lineup</p>
        </div>
        <Link 
          href="/drivers"
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 hover:text-f1-red transition-colors group"
        >
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayDrivers.map((driver, idx) => (
          <motion.div
            key={driver.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <DriverCard 
              name={driver.name}
              team={driver.team}
              number={driver.number}
              image={driver.image}
              color={driver.color}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
