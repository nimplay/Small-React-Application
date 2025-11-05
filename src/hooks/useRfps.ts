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
    setAgreementTypeFilter 
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
    setAgreementTypeFilter,
    isLoading: filteredRfps.length === 0 && mockRfps.length > 0,
  };
};
