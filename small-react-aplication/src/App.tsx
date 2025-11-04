import React from "react";
import { useRfps } from "./hooks/useRfps";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
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
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 lg:ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-red-600">
                Si ves esto en rojo, Tailwind funciona!
              </h1>
              <h1 className="text-2xl font-bold text-gray-900">
                RFP Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your requests for proposals
              </p>
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
