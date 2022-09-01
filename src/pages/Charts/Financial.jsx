import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Header } from "../../components";
import { Chart as ChartJS } from "chart.js/auto";
import { useStateContext } from "../../context/contextProvider";

import { barDataLabels, barDataTwo, barDataOne } from "../../data/dummy";

const Financial = () => {
  const { currentMode } = useStateContext();

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "x",
    scales: {
      x: {
        stacked: true,
        grid: {
          borderWidth: "none",
        },
      },
      y: {
        grid: {
          color:
            currentMode === "Dark"
              ? "rgb(240, 240, 240)"
              : "rgb(194, 194, 193)",
          borderColor:
            currentMode === "Dark"
              ? "rgb(240, 240, 240)"
              : "rgb(194, 194, 193)",
        },
      },
    },
  };

  const [userData, setUserData] = useState({
    labels: barDataLabels.map((item) => item),
    datasets: [
      {
        label: "Budget",
        data: barDataOne.map((item) => item),
        backgroundColor: "#1A97F5",
        borderColor: "black",
        radius: 1,
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        label: "Expense",
        data: barDataTwo.map((item) => item),
        backgroundColor: "#FB9678",
        borderColor: "black",
        radius: 1,
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  });

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Financial" title="APPLE Historical" />
      <div className="w-full">
        <Bar data={userData} options={options} style={{ height: "25rem" }} />
      </div>
    </div>
  );
};

export default Financial;
