import React, { useState } from "react";
import Header from "../../components/Header";
import SidebarCard from "../../components/SidebarCard";

const Billing = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  React.useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen relative bg-gradient-to-b from-[#051249] to-[#1C50D1]">
      {/* Sidebar for desktop */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-64 z-50 overflow-y-auto">
        <SidebarCard open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="w-64 h-full bg-white shadow-lg">
            <SidebarCard open={sidebarOpen} setOpen={setSidebarOpen} />
          </div>
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden relative z-10 lg:ml-64">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-transparent">
          <Header setSidebarOpen={setSidebarOpen} />
        </div>
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full flex flex-col items-center justify-start">
            <span className="text-white text-2xl">Error 404 || Page Not Found </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Billing;
