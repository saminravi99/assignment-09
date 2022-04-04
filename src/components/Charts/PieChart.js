import React, { useContext } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { AllContext } from "../App/App";



export default function PieCharts() {


    const {data} = useContext(AllContext);


  return (
    <PieChart width={420} height={400}>
      <Pie
        data={data}
        dataKey="investment"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#ffa35c"
      />
      <Pie
        data={data}
        dataKey="revenue"
        cx={200}
        cy={200}
        innerRadius={90}
        outerRadius={120}
        fill="#f2b872"
        label
      />
      <Tooltip />
    </PieChart>
  );
}
