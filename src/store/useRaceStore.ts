import { create } from "zustand";

interface RaceState {
  lap: number;
  totalLaps: number;
  status: "LIVE" | "QUALIFYING" | "PRACTICE" | "FINISHED";
  sessionName: string;
  focusedDriverId: number | null;
  activeTab: string;
  setLap: (lap: number) => void;
  setStatus: (status: RaceState["status"]) => void;
  setFocusedDriverId: (id: number | null) => void;
  setActiveTab: (tab: string) => void;
}

export const useRaceStore = create<RaceState>((set) => ({
  lap: 42,
  totalLaps: 71,
  status: "LIVE",
  sessionName: "SÃO PAULO GP - RACE",
  focusedDriverId: 1,
  activeTab: "LEADERBOARD",
  setLap: (lap) => set({ lap }),
  setStatus: (status) => set({ status }),
  setFocusedDriverId: (id) => set({ focusedDriverId: id }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
