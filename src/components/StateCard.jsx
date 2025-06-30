import React from "react";
import { FaFileAlt, FaGlobe, FaWallet, FaShoppingCart } from "react-icons/fa";

const statsData = [
  {
    title: "Today's Money",
    value: "$53,000",
    change: "+55%",
    changeColor: "text-green-400",
    Icon: FaWallet,
    iconBg: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    title: "Today's Users",
    value: "2,300",
    change: "+3%",
    changeColor: "text-green-400",
    Icon: FaGlobe,
    iconBg: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    title: "New Clients",
    value: "+3,052",
    change: "-24%",
    changeColor: "text-red-400",
    Icon: FaFileAlt,
    iconBg: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    title: "Total Sales",
    value: "$173,000",
    change: "+8%",
    changeColor: "text-green-400",
    Icon: FaShoppingCart,
    iconBg: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
];

const StatsCard = ({ title, value, change, changeColor, Icon, iconBg }) => (
  <div className="bg-gradient-to-br from-[#0B1437] to-[#1A1F37] rounded-xl p-4 h-20 w-full border border-white/5 shadow-lg">
    <div className="flex justify-between h-full">
      <div className="flex flex-col justify-between">
        <div className="text-gray-400 text-xs font-medium">{title}</div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-white">{value}</span>
          <span className={`text-xs font-medium ${changeColor}`}>{change}</span>
        </div>
      </div>
      <div className={`${iconBg} rounded-lg w-10 h-10 flex items-center justify-center ml-4 shadow-md`}>
        <Icon className="text-white text-lg" />
      </div>
    </div>
  </div>
);

const StatsCardGroup = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    {statsData.map((card, idx) => (
      <StatsCard key={idx} {...card} />
    ))}
  </div>
);

export default StatsCardGroup;