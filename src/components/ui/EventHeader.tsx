interface EventHeaderProps {
  eventName: string;
}
export const EventHeader: React.FC<EventHeaderProps> = ({ eventName }) => {
  const getEventColors = (name: string) => {
    switch (name) {
      case 'Rolling Loud':
        return {
          text: 'text-green-800',
          bg: 'bg-green-100',
          border: 'border-green-300',
          line: 'bg-green-400'
        };
      case 'Ultra Miami':
        return {
          text: 'text-purple-800',
          bg: 'bg-purple-100',
          border: 'border-purple-300',
          line: 'bg-purple-400'
        };
      default:
        return {
          text: 'text-gray-800',
          bg: 'bg-gray-100',
          border: 'border-gray-300',
          line: 'bg-gray-400'
        };
    }
  };

  const colors = getEventColors(eventName);

  return (
    <div className="relative w-full py-6">
      <div className="flex items-center">
        <div className={`flex-1 h-0.5 ${colors.line} opacity-80`}></div>
        <div className={`mx-6 px-3 py-1 ${colors.bg} ${colors.border} border-2 rounded-md shadow-sm`}>
          <h3 className={`text-sm font-bold ${colors.text} tracking-wide`}>
            {eventName}
          </h3>
        </div>
        <div className={`flex-1 h-0.5 ${colors.line} opacity-80`}></div>
      </div>
    </div>
  );
};
