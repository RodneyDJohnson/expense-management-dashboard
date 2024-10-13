/* eslint-disable @typescript-eslint/no-misused-promises */
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
    const newExpense = { name, amount, date };

    try {
      const response = await axios.post(
        "http://localhost:3000/expenses",
        newExpense
      );
      console.log("Expense added:", response.data);
      refreshExpenses(); // Trigger fetching updated expenses list
    } catch (error) {
      console.error("Error adding expense:", error);
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
