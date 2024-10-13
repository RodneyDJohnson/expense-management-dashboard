/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from "react";
import axios from "axios";

interface ExpenseFormProps {
  refreshExpenses: () => void; // Callback to refresh the expenses list
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ refreshExpenses }) => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random().toString(36).substr(2, 9), // Unique ID for each expense
      name,
      amount,
      date,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/expenses",
        newExpense
      );
      console.log("Expense added:", response.data); // Log the response to see if the request was successful
      refreshExpenses(); // Trigger fetching updated expenses list
    } catch (error) {
      console.error("Error adding expense:", error); // Log the error for further diagnosis
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense name"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
