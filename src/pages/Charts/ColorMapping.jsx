import React from "react";
import { Header } from "../../components";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const options = {
  maintainAspectRatio: false,
  responsive: true,
  indexAxis: "x",
  scales: {
    x: {
      stacked: true,
    },
  },
};

const data = {
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};

const ColorMapping = () => {
  return (
    <div className="m-4 md:m-3 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Color Mapping" />
      <div className=" w-full">
        <PolarArea data={data} options={options} style={{ height: "30rem" }} />
      </div>
    </div>
  );
};

export default ColorMapping;
