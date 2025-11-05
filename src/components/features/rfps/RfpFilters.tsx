import React, { useState, useRef, useEffect } from "react";

interface RfpFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: string[] | string | null; // ✅ Acepta array, string o null
  onStatusFilterChange: (status: string[]) => void;
  agreementTypeFilter: string | null;
  onAgreementTypeFilterChange: (type: string | null) => void;
}

const statusOptions = [
  { value: "completed", label: "Completed" },
  { value: "received", label: "Received" },
  { value: "archived", label: "Archived" },
  { value: "confirmed", label: "Confirmed" },
];

export const RfpFilters: React.FC<RfpFiltersProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalizar statusFilter a siempre ser un array
  const normalizedStatusFilter = Array.isArray(statusFilter)
    ? statusFilter
    : statusFilter ? [statusFilter] : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStatusChange = (status: string) => {
    const newStatusFilter = normalizedStatusFilter.includes(status)
      ? normalizedStatusFilter.filter(s => s !== status)
      : [...normalizedStatusFilter, status];
    onStatusFilterChange(newStatusFilter);
  };

  const getDisplayText = () => {
    if (normalizedStatusFilter.length === 0) return "Filters";
    if (normalizedStatusFilter.length === 1) {
      const selected = statusOptions.find(opt => opt.value === normalizedStatusFilter[0]);
      return selected?.label || "Filters";
    }
    return `${normalizedStatusFilter.length} selected`;
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-80">
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

        <div className="w-full sm:w-48">
          <div className="relative" ref={dropdownRef}>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 h-4 w-4 pointer-events-none z-10"
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

            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full pl-5 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white text-left"
              aria-label="Filter by status"
            >
              {getDisplayText()}
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                <div className="p-2">
                  {statusOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={normalizedStatusFilter.includes(option.value)}
                        onChange={() => handleStatusChange(option.value)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
