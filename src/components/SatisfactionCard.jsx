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
    <div className="rounded-2xl text-white p-4 sm:p-5 shadow-lg relative bg-gradient-to-br from-[#070F32] to-[#143180]/80 flex flex-col justify-between w-full col-span-2">
      <div>
        <h2 className="text-xs sm:text-sm font-semibold mb-3">
          Satisfaction Rate
        </h2>
        <p className="text-xs text-gray-400">From all projects</p>
      </div>
      <div className="flex flex-col items-center relative">
        <div
          className="relative flex items-center justify-center my-4 z-10"
          style={{ minHeight: "120px" }}
        >
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={120}
          />
          <FaSmile className="absolute text-blue-300 text-lg sm:text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div
          className="bg-gradient-to-r from-[#1A1F37] to-[#0B1437] text-center pb-4 px-4 py-3 relative justify-between items-start rounded-lg z-20"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-32px", // adjust as needed for overlap
            width: "90%",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
          }}
        >
          <span className="text-white font-bold text-base sm:text-lg">95%</span>
          <p className="text-xs text-gray-400">Based on likes</p>
          <span className="absolute left-4 bottom-2 text-xs text-gray-500">
            0%
          </span>
          <span className="absolute right-4 bottom-2 text-xs text-gray-500">
            100%
          </span>
        </div>
      </div>
      <div style={{ height: "40px" }} /> {/* Spacer to prevent overlap with next content */}
    </div>
  );
};

export default SatisfactionCard;
