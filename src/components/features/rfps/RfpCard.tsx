import React from 'react';
import type { RFP } from '../../../types/rfp';

interface RfpCardProps {
  rfp: RFP;
}

export const RfpCard: React.FC<RfpCardProps> = ({ rfp }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'received':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
        return 'bg-purple-100 text-purple-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAgreementTypeColor = (type: string) => {
    return type === 'leisure'
      ? 'bg-orange-100 text-orange-800'
      : 'bg-indigo-100 text-indigo-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{rfp.rfpName}</h3>
          <p className="text-gray-600">{rfp.eventName}</p>
        </div>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rfp.status)}`}>
            {rfp.status}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAgreementTypeColor(rfp.agreement_type)}`}>
            {rfp.agreement_type}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
        <div>
          <span className="font-medium">Cut Off:</span>
          <p>{new Date(rfp.cutOffDate).toLocaleDateString()}</p>
        </div>
        <div>
          <span className="font-medium">Guests:</span>
          <p>{rfp.bookings.length}</p>
        </div>
      </div>

      <div className="border-t pt-3">
        <h4 className="font-medium text-sm text-gray-700 mb-2">Recent Guests:</h4>
        <div className="space-y-1 max-h-24 overflow-y-auto">
          {rfp.bookings.slice(0, 2).map((booking) => (
            <div key={booking.bookingId} className="flex justify-between text-xs">
              <span className="text-gray-600 truncate">{booking.guestName}</span>
              <span className="text-gray-500 text-nowrap ml-2">
                {new Date(booking.checkInDate).toLocaleDateString()}
              </span>
            </div>
          ))}
          {rfp.bookings.length > 2 && (
            <div className="text-xs text-gray-500 text-center">
              +{rfp.bookings.length - 2} more guests
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
