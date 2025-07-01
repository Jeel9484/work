import React from "react";
import { FiMenu, FiHelpCircle } from "react-icons/fi";
import { IoHome, IoStatsChartSharp, IoDocument } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import { AiOutlineTool } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import jellyfishBg from "../assets/jellyfishBg.jpg";
import { Link } from "react-router-dom";

const SidebarCard = ({ open, setOpen }) => {
  const handleNavClick = () => {
    if (window.innerWidth < 1024) setOpen(false);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className={`lg:hidden fixed top-4 left-4 z-50 bg-[#0B1437] p-2 rounded-lg shadow-lg text-white transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40 w-64
          bg-gradient-to-b from-[#0B1437] to-[#111C44]
          border-r border-white/5 flex flex-col justify-between p-6
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
        `}
      >
        {/* Close button for mobile */}
        {open && (
          <button
            className="lg:hidden absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        )}

        <div>
          {/* Logo/Brand */}
          <div className="text-xl font-bold mb-10 tracking-widest text-blue-300">
            VISION UI FREE
            <div className="w-full h-2 flex items-center justify-center">
              <div className="w-[150%] h-0.5 mt-[26px] rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_16px_0_rgba(255,255,255,0.1)]" />
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-3">
              <li 
                className="hover:bg-[#1A1F37] rounded-xl flex gap-4 px-4 py-3 cursor-pointer font-semibold shadow-md transition-all duration-200" 
                onClick={handleNavClick}
              >
                <IoHome className="bg-[#1A1F37] p-3 rounded-lg text-white" size={45} />
                <span className="mt-2.5 text-white">Dashboard</span>
              </li>
              
              <li 
                className="hover:bg-[#1A1F37] rounded-xl flex gap-4 px-4 py-3 cursor-pointer transition-all duration-200" 
                onClick={handleNavClick}
              >
                <IoStatsChartSharp className="bg-[#1A1F37] p-3 rounded-lg text-blue-500" size={40} />
                <Link to="/tables" className="mt-2.5 text-white w-full block">Tables</Link>
              </li>
              
              <li 
                className="hover:bg-[#1A1F37] rounded-xl flex gap-4 px-4 py-3 cursor-pointer transition-all duration-200" 
                onClick={handleNavClick}
              >
                <FaRegCreditCard className="bg-[#1A1F37] p-3 rounded-lg text-blue-500" size={40} />
                <Link to="/billing" className="mt-2.5 text-white w-full block">Billing</Link>
              </li>
              
              <li 
                className="hover:bg-[#1A1F37] rounded-xl flex gap-4 px-4 py-3 cursor-pointer transition-all duration-200" 
                onClick={handleNavClick}
              >
                <AiOutlineTool className="bg-[#1A1F37] p-3 rounded-lg text-blue-500" size={40} />
                <Link to="/Rtl" className="mt-2.5 text-white w-full block">RTL</Link>
              </li>

              <li className="mt-8 text-xs text-blue-200 uppercase tracking-wider font-semibold">
                ACCOUNT PAGES
              </li>
              
              <li 
                className="hover:bg-[#1A1F37] rounded-xl flex gap-4 px-4 py-3 cursor-pointer transition-all duration-200" 
                onClick={handleNavClick}
              >
                <IoMdPerson className="bg-[#1A1F37] p-3 rounded-lg text-blue-500" size={40} />
                <Link to="/Profile" className="mt-2.5 text-white w-full block">Profile</Link>
              </li>
              
              <li 
                className="hover:bg-[#1A1F37] rounded-xl flex gap-4 px-4 py-3 cursor-pointer transition-all duration-200" 
                onClick={handleNavClick}
              >
                <IoDocument className="bg-[#1A1F37] p-3 rounded-lg text-blue-500" size={40} />
                <Link to="/sign-in" className="mt-2.5 text-white w-full block">Sign In</Link>
              </li>
              
              <li 
                className="hover:bg-[#1A1F37] rounded-xl flex gap-4 px-4 py-3 cursor-pointer transition-all duration-200" 
                onClick={handleNavClick}
              >
                <IoIosRocket className="bg-[#1A1F37] p-3 rounded-lg text-blue-500" size={40} />
                <Link to="/sign-up" className="mt-2.5 text-white w-full block">Sign Up </Link>
              </li>
            </ul>
          </nav>

          {/* Help Card */}
          <div
            className="relative rounded-2xl p-5 mt-8 shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: `url(${jellyfishBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "rgba(11,20,55,0.9)",
            }}
          >
            <div className="absolute -top-5 left-5 mt-8 bg-white rounded-xl p-2 shadow-md">
              <FiHelpCircle className="text-blue-500 text-2xl" />
            </div>
            
            <div className="mt-8 text-left w-full">
              <div className="font-bold text-lg text-white mb-1">Need help?</div>
              <div className="text-blue-100 text-sm mb-4">Please check our docs</div>
            </div>
            
            <button className="w-full py-2 rounded-xl bg-gradient-to-r from-[#1A1F37] to-[#0B1437] text-white font-bold tracking-wide shadow-inner hover:opacity-90 transition">
              DOCUMENTATION
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarCard;