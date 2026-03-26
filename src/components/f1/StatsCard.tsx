"use client";

interface StatsCardProps {
  label: string;
  value: string;
  subValue?: string;
  icon?: React.ReactNode;
}

export const StatsCard = ({ label, value, subValue, icon }: StatsCardProps) => {
  return (
    <div className="glass rounded-xl p-5 flex items-center justify-between group hover:bg-white/10 transition-colors">
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">
          {label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black italic tracking-tighter uppercase leading-none">
            {value}
          </span>
          {subValue && (
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
              {subValue}
            </span>
          )}
        </div>
      </div>
      {icon && <div className="text-white/20 group-hover:text-f1-red transition-colors">{icon}</div>}
    </div>
  );
};
