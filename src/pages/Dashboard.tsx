/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import "../styles/Dashboard.css";
const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from the JSON server
  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/expenses");
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses(); // Fetch expenses when the component mounts
  }, []);

  return (
    <div>
      <h1>Expense Management Dashboard</h1>

      {/* Render the Expense Form at the top */}
      <ExpenseForm refreshExpenses={fetchExpenses} />

      {/* Render the Expense Table below the form */}
      <ExpenseTable expenses={expenses} />
    </div>
  );
};

export default Dashboard;
