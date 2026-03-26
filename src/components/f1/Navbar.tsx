import Link from "next/link";
import { Search, User, Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 glass flex items-center px-6 md:px-12 backdrop-blur-xl bg-black/40">
      <div className="flex items-center gap-8 w-full max-w-7xl mx-auto">
        {/* F1 STYLE LOGO */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="h-8 w-1 bg-f1-red skew-x-[-20deg]" />
          <span className="text-2xl font-black tracking-tighter italic text-white group-hover:text-f1-red transition-colors">
            F1<span className="text-f1-red">PLATFORM</span>
          </span>
          <div className="h-8 w-1 bg-f1-red skew-x-[-20deg]" />
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/70">
          <Link href="/" className="hover:text-white transition-colors border-b-2 border-f1-red">Home</Link>
          <Link href="/drivers" className="hover:text-white transition-colors">Drivers</Link>
          <Link href="/teams" className="hover:text-white transition-colors">Teams</Link>
          <Link href="/races" className="hover:text-white transition-colors">Races</Link>
          <Link href="/live" className="hover:text-f1-red transition-colors flex items-center gap-2">
            <span className="w-2 h-2 bg-f1-red rounded-full animate-pulse" />
            Live
          </Link>
        </div>

        {/* SEARCH & USER */}
        <div className="ml-auto flex items-center gap-6">
          <button className="hover:text-f1-red transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-f1-red transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};
