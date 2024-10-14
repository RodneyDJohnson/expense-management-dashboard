/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseReports from "./pages/ExpenseReports";
import Footer from "./components/Footer";
import axios from "axios";

// Define the type for the expenses
interface Expense {
  id: number;
  name: string;
  amount: number;
  date: string;
}

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Fetch the expenses from the API
  useEffect(() => {
    axios
      .get("http://localhost:3000/expenses") // Replace this URL with your actual API
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Header is placed here, it will persist across pages */}
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  refreshExpenses={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
            <Route
              path="/expenses"
              element={<ExpenseTable expenses={expenses} />} // Passing expenses to the ExpenseTable
            />
            <Route path="/reports" element={<ExpenseReports />} />
          </Routes>
        </div>
        <Footer /> {/* Footer placed at the bottom */}
      </div>
    </Router>
  );
};

export default App;
