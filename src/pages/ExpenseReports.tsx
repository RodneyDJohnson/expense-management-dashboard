// src/pages/ExpenseReports.tsx
import React from "react";
import "../styles/ExpenseReports.css";

const ExpenseReports = () => {
  return (
    <div className="expense-container">
      {" "}
      {/* Apply the expense-container class */}
      <h2 className="expense-title">Expense Reports</h2>{" "}
      {/* Apply the expense-title class */}
      <p>This is where users can generate and view reports.</p>
    </div>
  );
};

export default ExpenseReports;
