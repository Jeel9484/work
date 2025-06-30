import React from "react";
import ReactApexChart from "react-apexcharts";
import { FaSmile } from "react-icons/fa";

const SatisfactionCard = () => {
  const percentage = 95;
  const series = [percentage];

  const options = {
    chart: {
      type: "radialBar",
      offsetY: -10,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: "60%" },
        track: {
          background: "#1A1F37",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 0,
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            formatter: () => `${percentage}%`,
          },
          value: { show: false },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#3b82f6"],
        stops: [0, 100],
      },
    },
    stroke: { lineCap: "round" },
  };

  return (
    <div
      className="rounded-2xl text-white p-4 sm:p-5 shadow-lg relative bg-gradient-to-br from-[#0B1437] to-[#1A1F37] flex flex-col justify-between w-full col-span-2 border border-white/5"
    >
      <div>
        <h2 className="text-xs sm:text-sm font-semibold mb-3">Satisfaction Rate</h2>
        <p className="text-xs text-gray-400">From all projects</p>
      </div>
      <div className="flex flex-col">
      <div className="relative flex items-center justify-center my-4" style={{ minHeight: "120px" }}>
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={120}
        />
        <FaSmile className="absolute text-blue-300 text-lg sm:text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="bg-gradient-to-r from-[#1A1F37] to-[#0B1437] text-center pb-1 px-2 relative mt-0 rounded-lg border border-white/5">
        <span className="text-white font-bold text-base sm:text-lg">95%</span>
        <p className="text-xs text-gray-400">Based on likes</p>
        <span className="absolute left-4 bottom-2 text-xs text-gray-500">0%</span>
        <span className="absolute right-4 bottom-2 text-xs text-gray-500">100%</span>
      </div>
    </div>
    </div>
  );
};

export default SatisfactionCard;