import React, { useState } from "react";
import { Bar as BarChart } from "react-chartjs-2";
import { Header } from "../../components";
import { Chart as ChartJS } from "chart.js/auto";
import { barDataOne, barDataLabels, barDataTwo } from "../../data/dummy";

const Bar = ({ currentMode }) => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "x",
    scales: {
      x: {
        grid: {
          color:
            currentMode === "Dark"
              ? "rgb(240, 240, 240)"
              : "rgb(194, 194, 193)",
          borderColor:
            currentMode === "Dark"
              ? "rgb(240, 240, 240)"
              : "rgb(194, 194, 193)",
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
        backgroundColor: "#66BB6A",
        borderColor: "black",
        radius: 1,
      },
      {
        label: "Expense",
        data: barDataTwo,
        backgroundColor: "#212121",
        borderColor: "black",
        radius: 1,
      },
    ],
  });

  return (
    <div className="m-4 md:m-3 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Expense and Budget Comparison" />
      <div className=" w-full">
        <BarChart
          style={{ height: "30rem", width: "50rem" }}
          data={userData}
          options={options}
        />
      </div>
    </div>
  );
};

export default Bar;
