import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ExpenseReports.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ExpenseReports: React.FC = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/expenses");
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  // Aggregate data for the reports
  const totalAmount = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <div className="reports-container">
      <h1>Expense Report</h1>

      <div className="report-summary">
        <h2>Total Expenses: ${totalAmount}</h2>
      </div>

      <div className="report-chart">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={expenses}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#6b8e23" />{" "}
            {/* Custom color: soft green */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseReports;
