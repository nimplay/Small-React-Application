export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white transform -translate-x-full lg:translate-x-0 transition-transform duration-200 ease-in-out z-40">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <nav className="mt-6 space-y-2">
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
            Rooming Lists
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
            Events
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
            Settings
          </a>
        </nav>
      </div>
    </div>
  );
};
