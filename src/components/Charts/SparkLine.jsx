import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const SparkLine = ({ id, height, width, color, data, currentColor, type }) => {
  const [userData, setUserData] = useState({
    labels: data.map((item) => item.x),
    datasets: [
      {
        label: "Budget",
        data: data.map((item) => item.yval),
        backgroundColor: "#66BB6A",
        borderColor: currentColor,
        borderWidth: 1,
        radius: 1,
        fill: color,
        height,
        width,
      },
    ],
  });

  return <Line data={userData} />;
};

export default SparkLine;
