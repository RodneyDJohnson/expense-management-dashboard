import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "../components/ExpenseForm";
//import ExpenseTable from "../components/ExpenseTable";
import "../styles/Dashboard.css";
import ExpenseTable from "../components/ExpenseTable";

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
    <div className="dashboard-container">
      <h1 className="dashboard-title">Expense Management Dashboard</h1>
      {/* Render the Expense Form */}
      <ExpenseForm refreshExpenses={fetchExpenses} />
      {/* Render the Expense Table below the form */}

      <ExpenseTable expenses={expenses} />
    </div>
  );
};

export default Dashboard;
