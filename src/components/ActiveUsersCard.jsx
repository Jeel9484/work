import React from "react";
import CountUp from "react-countup";
import WhiteBarChart from "./WhiteBarChart";
import {
  FaWallet,
  FaShoppingCart,
  FaWrench,
} from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

const stats = [
  {
    label: "Users",
    value: 32984,
    icon: <FaWallet className="text-white text-lg" />,
    progress: 80,
  },
  {
    label: "Clicks",
    value: 2.42,
    suffix: "m",
    icon: <IoIosRocket className="text-white text-lg" />,
    progress: 60,
  },
  {
    label: "Sales",
    value: 2400,
    prefix: "$",
    icon: <FaShoppingCart className="text-white text-lg" />,
    progress: 90,
  },
  {
    label: "Items",
    value: 320,
    icon: <FaWrench className="text-white text-lg" />,
    progress: 100,
  },
];

const ActiveUsersCard = () => (
  <div
    className="rounded-2xl bg-gradient-to-br from-[#0B1437] to-[#1A1F37] shadow-xl shadow-blue-900/20 overflow-hidden w-full max-w-xl min-h-[220px] p-4 sm:p-6 border border-white/5"
  >
    {/* Title and change indicator */}
    <div className="mb-2 sm:mb-4">
      <h2 className="text-white text-lg sm:text-xl font-bold">Active Users</h2>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-green-400 text-xs font-semibold">(+23)</span>
        <span className="text-blue-200 text-xs font-normal">
          than last week
        </span>
      </div>
    </div>

    {/* Chart */}
    <WhiteBarChart />

    {/* Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-2 shadow-md">
            {stat.icon}
          </div>
          <span className="text-blue-300 text-xs font-medium mb-1">
            {stat.label}
          </span>
          <span className="text-white text-base sm:text-lg font-bold">
            <CountUp
              end={stat.value}
              duration={1.2}
              separator=","
              decimals={stat.suffix === "m" ? 2 : 0}
              prefix={stat.prefix || ""}
              suffix={stat.suffix || ""}
            />
          </span>
          <div className="w-full h-1 bg-[#1A1F37] rounded-full mt-2">
            <div
              className="h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-700"
              style={{ width: `${stat.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ActiveUsersCard;