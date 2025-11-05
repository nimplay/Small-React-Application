import { create } from 'zustand';
import type { RFP, FilterState } from '../types/rfp';

interface RFPStore {
  rfps: RFP[];
  filteredRfps: RFP[];
  filters: FilterState;
  setRfps: (rfps: RFP[]) => void;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: string[]) => void;
  setAgreementTypeFilter: (type: string | null) => void;
  applyFilters: () => void;
}

export const useRFPStore = create<RFPStore>((set, get) => ({
  rfps: [],
  filteredRfps: [],
  filters: {
    searchQuery: '',
    statusFilter: [],
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
  setAgreementTypeFilter: (agreementTypeFilter) => {
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
        statusFilter.length === 0 || statusFilter.includes(rfp.status);

      const matchesAgreementType =
        !agreementTypeFilter || rfp.agreement_type === agreementTypeFilter;

      return matchesSearch && matchesStatus && matchesAgreementType;
    });

    set({ filteredRfps: filtered });
  },
}));
