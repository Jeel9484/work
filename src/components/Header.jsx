import { FiSearch, FiUser, FiSettings, FiMenu } from "react-icons/fi";

const Header = ({ setSidebarOpen }) => (
  <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-r from-[#0B1437] to-[#111C44] sticky top-0 z-20 border-b border-white/5">
    <div className="flex items-center">
      {/* Mobile menu button */}
      <button 
        className="lg:hidden mr-4 text-blue-200 hover:text-white transition-colors"
        onClick={() => setSidebarOpen(prev => !prev)}
      >
        <FiMenu className="text-2xl" />
      </button>
      
      {/* Title */}
      <div>
        <div className="text-xs text-blue-200 mb-1 font-medium">Pages / Dashboard</div>
        <div className="text-lg font-semibold text-white">Dashboard</div>
      </div>
    </div>
    
    {/* Right side */}
    <div className="flex items-center gap-3 md:gap-4">
      {/* Search box */}
      <div className="relative hidden sm:block">
        <input
          type="text"
          placeholder="Type here..."
          className="bg-[#1A1F37] text-sm text-white rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-300 w-48 border border-white/10"
        />
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 text-lg" />
      </div>
      
      {/* Sign In */}
      <span className="text-blue-200 hover:text-white cursor-pointer text-sm flex items-center gap-1 transition-colors">
        <FiUser className="inline-block" /> 
        <span className="hidden md:inline">Sign In</span>
      </span>
      
      {/* Settings Icon */}
      <FiSettings className="text-blue-200 hover:text-white cursor-pointer text-lg transition-colors" />
    </div>
  </header>
);

export default Header;