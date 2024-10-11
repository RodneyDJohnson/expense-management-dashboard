import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import ExpenseTable from "./components/ExpenseTable";
import { useState, useEffect } from "react";
import axios from "axios";

interface Expense {
  id: number;
  name: string;
  amount: number;
  date: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/expenses")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        {/* Ensure this route renders only ExpenseTable */}
        <Route
          path="/expenses"
          element={<ExpenseTable expenses={expenses} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
