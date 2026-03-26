"use client";

import { motion } from "framer-motion";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => {
  return (
    <div className="flex bg-white/5 p-1 rounded-lg gap-1 border border-white/10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${
            activeTab === tab ? "text-white" : "text-white/40 hover:text-white/60"
          }`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-f1-red rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
};
