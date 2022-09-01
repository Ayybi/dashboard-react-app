import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { barDataOne, barDataLabels, barDataTwo } from "../../data/dummy";

const Stacked = ({ width, height }) => {
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    indexAxis: "x",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };
  const [userData, setUserData] = useState({
    labels: barDataLabels.map((item) => item),
    datasets: [
      {
        label: "Budget",
        data: barDataOne.map((item) => item),
        backgroundColor: "#212121",
        borderColor: "black",

        radius: 2,
      },
      {
        label: "Expense",
        data: barDataTwo,
        backgroundColor: "#66BB6A",
        borderColor: "black",
        radius: 2,
      },
    ],
    options: {
      maintainAspectRatio: false,
    },
  });

  return (
    <div>
      <Bar data={userData} options={options} height={height} width={width} />
    </div>
  );
};

export default Stacked;
