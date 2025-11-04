import React from "react";

interface RfpFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: string | null;
  onStatusFilterChange: (status: string | null) => void;
  agreementTypeFilter: string | null;
  onAgreementTypeFilterChange: (type: string | null) => void;
}

const statusOptions = [
  { value: null, label: "Filters" },
  { value: "completed", label: "Completed" },
  { value: "received", label: "Received" },
  { value: "archived", label: "Archived" },
  { value: "confirmed", label: "Confirmed" },
];
/* In case that we want to add agreement type filtering in the future */

/* const agreementTypeOptions = [
  { value: null, label: 'All Types' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'staff', label: 'Staff' },
]; */

export const RfpFilters: React.FC<RfpFiltersProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  // agreementTypeFilter,
  // onAgreementTypeFilterChange,
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-64">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-7 w-7 bg-gray-100 p-2 rounded"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              aria-label="Search RFPs"
            />
          </div>
        </div>

        <div className="w-full sm:w-24">
          <div className="relative">
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 h-4 w-4 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
              />
            </svg>

            <select
              value={statusFilter || ""}
              onChange={(e) => onStatusFilterChange(e.target.value || null)}
              className="w-full pl-5 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
              aria-label="Filter by status"
            >
              {statusOptions.map((option) => (
                <option key={option.value || "all"} value={option.value || ""}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* <div className="w-full sm:w-48">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <select
              value={agreementTypeFilter || ''}
              onChange={(e) => onAgreementTypeFilterChange(e.target.value || null)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
              aria-label="Filter by agreement type"
            >
              {agreementTypeOptions.map((option) => (
                <option key={option.value || 'all'} value={option.value || ''}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div> */}
      </div>
    </div>
  );
};
