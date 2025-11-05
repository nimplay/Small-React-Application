import React from "react";
import { useRfps } from "./hooks/useRfps";
import { RfpFilters } from "./components/features/rfps/RfpFilters";
import { RfpList } from "./components/features/rfps/RfpList";

function App() {
  const {
    rfps,
    filters,
    setSearchQuery,
    setStatusFilter,
    setAgreementTypeFilter, // ← Agregar esto
    isLoading,
  } = useRfps();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Rooming List Management: Events
              </h1>
            </div>

            <RfpFilters
              searchQuery={filters.searchQuery}
              onSearchChange={setSearchQuery}
              statusFilter={filters.statusFilter}
              onStatusFilterChange={setStatusFilter}
              agreementTypeFilter={filters.agreementTypeFilter}
              onAgreementTypeFilterChange={setAgreementTypeFilter}
            />

            <RfpList rfps={rfps} isLoading={isLoading} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
