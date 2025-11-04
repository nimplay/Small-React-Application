import { create } from 'zustand';
import type { RFP, FilterState } from '../types/rfp';

interface RFPStore {
  rfps: RFP[];
  filteredRfps: RFP[];
  filters: FilterState;
  setRfps: (rfps: RFP[]) => void;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: string | null) => void;
  setAgreementTypeFilter: (type: string | null) => void; // ← Esto debe estar aquí
  applyFilters: () => void;
}

export const useRFPStore = create<RFPStore>((set, get) => ({
  rfps: [],
  filteredRfps: [],
  filters: {
    searchQuery: '',
    statusFilter: null,
    agreementTypeFilter: null,
  },
  setRfps: (rfps) => set({ rfps, filteredRfps: rfps }),
  setSearchQuery: (searchQuery) => {
    set((state) => ({
      filters: { ...state.filters, searchQuery }
    }));
    get().applyFilters();
  },
  setStatusFilter: (statusFilter) => {
    set((state) => ({
      filters: { ...state.filters, statusFilter }
    }));
    get().applyFilters();
  },
  setAgreementTypeFilter: (agreementTypeFilter) => { // ← Y esto debe estar implementado
    set((state) => ({
      filters: { ...state.filters, agreementTypeFilter }
    }));
    get().applyFilters();
  },
  applyFilters: () => {
    const { rfps, filters } = get();
    const { searchQuery, statusFilter, agreementTypeFilter } = filters;

    const filtered = rfps.filter((rfp) => {
      const matchesSearch =
        rfp.rfpName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rfp.eventName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        !statusFilter || rfp.status.toLowerCase() === statusFilter.toLowerCase();

      const matchesAgreementType =
        !agreementTypeFilter || rfp.agreement_type === agreementTypeFilter;

      return matchesSearch && matchesStatus && matchesAgreementType;
    });

    set({ filteredRfps: filtered });
  },
}));
