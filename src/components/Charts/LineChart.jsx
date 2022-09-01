import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { SparklineAreaData, barDataOne, barDataTwo } from "../../data/dummy";
import { useStateContext } from "../../context/contextProvider";

const LineChart = ({ height, width, currentMode }) => {
  const { currentColor } = useStateContext();
  const [userData, setUserData] = useState({
    labels: SparklineAreaData.map((data) => data.x),
    datasets: [
      {
        label: "Budget",
        data: SparklineAreaData.map((item) => item.yval),
        backgroundColor: currentColor,
        borderColor: "#7352FF",
        borderWidth: 1,
        radius: 3,
        fill: false,
        height,
        width,
      },
      {
        label: "Expense",
        data: barDataOne.map((item) => item),
        backgroundColor: "#7352FF",
        borderColor: currentColor,
        borderWidth: 1,
        radius: 3,
        fill: false,
        height,
        width,
      },
      {
        label: "Amount Spend",
        data: barDataTwo.map((item) => item),
        backgroundColor: currentColor,
        borderColor: "#FB9678",
        borderWidth: 1,
        radius: 3,
        fill: false,
        height,
        width,
      },
    ],
  });

  const options = {
    maintainAspectRatio: false,
    responsive: true,
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

  return <Line data={userData} options={options} style={{ height: "30rem" }} />;
};

export default LineChart;
