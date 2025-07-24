import type { Filter } from "@/shared/types";
import { create } from "zustand";

export interface FilterState {
  filter: Filter;
  setFilter: (f: Filter) => void;
  clearFilter: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: {
    propertyId: null,
    operatorId: null,
    value: '',
  },
  setFilter: (f: Filter) => set({ filter: f }),
  clearFilter: () =>
      set({ filter: { propertyId: null, operatorId: null, value: null } }),
}));
