import React, { useState } from "react";
import StatsCard from "../components/StateCard";
import WelcomeCard from "../components/WelcomeCard.jsx";
import SatisfactionCard from "../components/SatisfactionCard.jsx";
import ReferralTrackingCard from "../components/ReferralCard.jsx";
import SalesOverviewCard from "../components/SalesOverviewcard.jsx";
import ActiveUsersCard from "../components/ActiveUsersCard.jsx";
import jellyfishBg from "../assets/jellyfishBg.jpg";
import ProjectCard from "../components/ProjectCard.jsx";
import OrderOverView from "../components/OrderOverView.jsx";
import SidebarCard from "../components/SidebarCard.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Dashboard = () => {
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
    <div
      className="flex min-h-screen relative"
      style={{
        backgroundImage: `url(${jellyfishBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Semi-transparent overlay to improve content readability */}
      <div className="absolute inset-0 bg-[#0B1437]/80 z-0"></div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          style={{ left: "16rem" }} // 16rem = 256px = w-64
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - always above overlay */}
      <div className="fixed top-0 left-0 h-full w-64 z-50 overflow-y-auto">
        <SidebarCard open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden relative z-10">
        <Header setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Stats Cards */}
            <StatsCard />

            {/* First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:row-span-2 lg:min-h-[280px]">
                <WelcomeCard />
              </div>
              <div className="lg:min-h-[280px] lg:min-w-[344px]">
                <SatisfactionCard />
              </div>
              <div className="lg:min-h-[280px] lg:min-w-[344px]">
                <ReferralTrackingCard />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <SalesOverviewCard />
              <ActiveUsersCard />
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <ProjectCard />
              <OrderOverView />
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
