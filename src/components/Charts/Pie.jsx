import React, { useState } from "react";
import { Header } from "../../components";
import { barDataLabels, barDataOne, pieChartData } from "../../data/dummy";
import { Pie as PieChart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Pie = () => {
  const [userData, setUserData] = useState({
    labels: barDataLabels.map((item) => item),
    datasets: [
      {
        label: "Gains",
        data: barDataOne.map((item) => item),
        backgroundColor: pieChartData.map((item) => item.text),
        borderColor: "black",
        borderWidth: 0.1,
      },
    ],
  });

  return (
    <div className="m-4 md:m-3 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pie Chart" />
      <div className="w-full">
        <PieChart data={userData} />
      </div>
    </div>
  );
};

export default Pie;
