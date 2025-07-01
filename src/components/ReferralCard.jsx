import React from "react";
import { motion } from "framer-motion";
import ReactApexChart from "react-apexcharts";
import { PiDotsThreeBold } from "react-icons/pi";
import { FaUserFriends, FaGift } from "react-icons/fa";

const ReferralTrackingCard = () => {
  const chartOptions = {
    series: [93],
    chart: { type: "radialBar", offsetY: -20, sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: { size: "70%" },
        track: { background: "#1A1F37", strokeWidth: "6%", margin: 0 },
        dataLabels: {
          name: { show: true, offsetY: 15, color: "#A3BFFA", fontSize: "12px" },
          value: {
            formatter: (value) => `${value / 10}`,
            offsetY: -30,
            fontSize: "24px",
            color: "#FFF",
            fontWeight: 600,
          },
        },
      },
    },
    fill: { colors: ["#14B8A6"] },
    stroke: { lineCap: "round" },
    labels: ["Total Score"],
  };

  return (
    <motion.div
      className="referral-gradient rounded-xl p-4 col-span-3 text-white shadow-lg backdrop-blur-[120px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Referral Tracking</h3>
        <button className="text-gray-400 hover:text-white transition-colors">
          <PiDotsThreeBold />
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <div className="flex flex-col gap-3 w-full md:w-1/2 ">
          <div className="bg-gradient-to-r from-[#1A1F37] to-[#0B1437] rounded-lg p-4 flex items-center gap-3 mt-3 border border-white/5">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
              <FaUserFriends className="text-white text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Invited</p>
              <p className="text-base font-bold">145 people</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#1A1F37] to-[#0B1437] rounded-lg p-4 flex items-center gap-3 border border-white/5">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg">
              <FaGift className="text-white text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Bonus</p>
              <p className="text-base font-bold">1,465</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="radialBar"
            height={window.innerWidth < 768 ? 120 : 160}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ReferralTrackingCard;