import { useEffect } from 'react';
import { useRFPStore } from '../stores/rfpStore';
import { mockRfps } from '../data/mockData';
import type { RFP } from '../types/rfp';

export const useRfps = () => {
  const {
    setRfps,
    filteredRfps,
    filters,
    setSearchQuery,
    setStatusFilter,
    setAgreementTypeFilter // ← Asegúrate de que esto esté aquí
  } = useRFPStore();

  useEffect(() => {
    const fetchRfps = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setRfps(mockRfps as RFP[]);
    };

    fetchRfps();
  }, [setRfps]);

  return {
    rfps: filteredRfps,
    filters,
    setSearchQuery,
    setStatusFilter,
    setAgreementTypeFilter, // ← Asegúrate de que esto esté en el return
    isLoading: filteredRfps.length === 0 && mockRfps.length > 0,
  };
};
