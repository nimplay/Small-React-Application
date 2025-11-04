import React from 'react';
import type { RFP } from '../../../types/rfp';
import { RfpCard } from './RfpCard';
import { EventHeader } from '../../ui/EventHeader';

interface RfpListProps {
  rfps: RFP[];
  isLoading: boolean;
}

export const RfpList: React.FC<RfpListProps> = ({ rfps, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (rfps.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No RFPs found</div>
        <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  const groupedByEvent = rfps.reduce((acc, rfp) => {
    const eventName = rfp.eventName;
    if (!acc[eventName]) {
      acc[eventName] = [];
    }
    acc[eventName].push(rfp);
    return acc;
  }, {} as Record<string, RFP[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedByEvent).map(([eventName, eventRfps]) => (
        <div key={eventName} className="space-y-4">
          <EventHeader eventName={eventName} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventRfps.map((rfp) => (
              <RfpCard key={rfp.roomingListId} rfp={rfp} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
