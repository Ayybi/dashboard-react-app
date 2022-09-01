import React from "react";
import { FunnelChart, Funnel, Tooltip, LabelList } from "recharts";
import { Header } from "../../components";
import { pieChartData } from "../../data/dummy";

const Pyramid = () => {
  return (
    <div className="m-4 md:m-3 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pyramid" />
      <div className="w-full">
        <FunnelChart width={730} height={400} style={{ marginLeft: "9rem" }}>
          <Tooltip />
          <Funnel dataKey="value" data={pieChartData} isAnimationActive>
            <LabelList
              position="right"
              fill="rgb(100 116 139)"
              stroke="none"
              dataKey="name"
            />
          </Funnel>
        </FunnelChart>
      </div>
    </div>
  );
};

export default Pyramid;
