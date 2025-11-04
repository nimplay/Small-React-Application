import React from "react";
import type { RFP } from "../../../types/rfp";
import { formatDateRange } from "../../../utils/dateUtils";
import { Button } from "../../ui/Button";

interface RfpCardProps {
  rfp: RFP;
}

export const RfpCard: React.FC<RfpCardProps> = ({ rfp }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{rfp.rfpName}</h3>
          <p className="text-gray-600">
            Agreement: <b>{rfp.agreement_type}</b>
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="relative -top-2 -right-3 w-12 h-12 bg-blue-100 border border-blue-200 rounded-lg flex flex-col items-center justify-center overflow-hidden">
            <span className="text-xs font-bold text-blue-800 uppercase leading-none bg-blue-300 w-full text-center py-1">
              {new Date(rfp.cutOffDate).toLocaleDateString("en", {
                month: "short",
              })}
            </span>
            <div className="text-xl font-bold text-blue-600 leading-none flex-1 flex items-center justify-center">
              {new Date(rfp.cutOffDate).getDate()}
            </div>
          </div>
          <span className="text-gray-600 text-xs">Cut-Off Date</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-medium">
            {formatDateRange(
              rfp.bookings[0].checkInDate,
              rfp.bookings[rfp.bookings.length - 1].checkOutDate
            )}
          </span>
        </div>
      </div>

      <div>
        <Button onClick={() => console.log("View details clicked")}>
          View Details
        </Button>
      </div>
    </div>
  );
};
