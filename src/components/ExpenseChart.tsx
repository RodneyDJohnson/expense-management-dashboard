/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Define a type for the expense data
interface ExpenseData {
  name: string;
  amount: number;
}

interface ExpenseChartProps {
  data: ExpenseData[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
