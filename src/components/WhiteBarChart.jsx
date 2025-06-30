import React from "react";
import Chart from "react-apexcharts";

const WhiteBarChart = () => {
  const series = [
    {
      name: "Users",
      data: [350, 220, 80, 340, 480, 400, 470, 320, 180, 500, 420, 150],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      background: "transparent",
      fontFamily: "inherit",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "20%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: Array(12).fill(""),
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      max: 500,
      min: 0,
      tickAmount: 5,
      labels: {
        show: true,
        align: "left",
        style: {
          colors: ["#B6C3D1"],
          fontSize: "12px",
          fontWeight: 700,
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    fill: {
      colors: ["#FFFFFF"],
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="w-full h-[200px]">
      <Chart 
        options={options} 
        series={series} 
        type="bar" 
        height="100%" 
        width="100%" 
      />
    </div>
  );
};

export default WhiteBarChart;