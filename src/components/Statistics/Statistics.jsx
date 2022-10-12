import React from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;
  const finalData = [];
  data.forEach((element) => {
    const name = element.name;
    const value = element.total;
    finalData.push({ name, value });
  });
  return (
    <div className="mt-10 ">
      <h2 className="text-2xl font-semibold text-center mb-12 px-4  underline underline-offset-8 ">
        Number of questions in each catagories
      </h2>
      <div className="w-2/3 h-52 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={finalData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
