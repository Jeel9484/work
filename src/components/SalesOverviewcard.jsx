import React from "react";
import ReactApexChart from "react-apexcharts";

const chartOptions = {
  chart: {
    type: "line",
    toolbar: { show: false },
    background: "transparent",
    fontFamily: "inherit",
  },
  grid: {
    show: true,
    borderColor: "#1A1F37",
    strokeDashArray: 4,
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: { style: { colors: "#b3c6f7" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 500,
    tickAmount: 5,
    labels: { style: { colors: "#b3c6f7" } },
  },
  stroke: {
    width: 3,
    curve: "smooth",
  },
  colors: ["#14b8ff", "#3b82f6"],
  legend: { show: false },
  dataLabels: { enabled: false },
  tooltip: { theme: "dark" },
};

const chartSeries = [
  {
    name: "Current Year",
    data: [500, 200, 300, 250, 320, 350, 330, 270, 290, 320, 310, 300],
  },
  {
    name: "Last Year",
    data: [200, 100, 220, 300, 280, 260, 250, 200, 220, 250, 200, 180],
  },
];

const SalesOverviewCard = () => (
  <div className="rounded-3xl bg-gradient-to-br from-[#0B1437] to-[#1A1F37] pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-10 shadow-xl shadow-blue-900/20 w-full max-w-8xl border border-white/5">
    <div>
      <div className="text-white text-lg sm:text-xl font-bold">
        Sales overview
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-green-400 text-xs sm:text-sm font-semibold">
          (+5) more
        </span>
        <span className="text-blue-200 text-xs sm:text-sm font-normal">
          in 2021
        </span>
      </div>
    </div>
    <div className="mt-2">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={260}
      />
    </div>
  </div>
);

export default SalesOverviewCard;
