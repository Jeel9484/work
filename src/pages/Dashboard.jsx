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
      className="flex min-h-screen relative bg-[#01245A]/90"
      style={{
        backgroundImage: `url(${jellyfishBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >

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

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className= " w-full space-y-6">
            {/* Stats Cards */}
            <StatsCard />

            {/* First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 mt-6">
              <WelcomeCard />
              <SatisfactionCard />
              <ReferralTrackingCard />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-6">
              <div className="lg:col-span-3">
              <SalesOverviewCard />
              </div>
              <div className="lg:col-span-2">
              <ActiveUsersCard />
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
              <div className="lg:col-span-2">
              <ProjectCard />
              </div>
              <div className="lg:col-span-1">
                <OrderOverView />
                </div>
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
