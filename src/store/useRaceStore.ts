import { create } from "zustand";

interface RaceState {
  lap: number;
  totalLaps: number;
  status: "LIVE" | "QUALIFYING" | "PRACTICE" | "FINISHED";
  sessionName: string;
  setLap: (lap: number) => void;
  setStatus: (status: RaceState["status"]) => void;
}

export const useRaceStore = create<RaceState>((set) => ({
  lap: 42,
  totalLaps: 71,
  status: "LIVE",
  sessionName: "SÃO PAULO GP - RACE",
  setLap: (lap) => set({ lap }),
  setStatus: (status) => set({ status }),
}));
