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
    const newExpense = { name, amount, date };

    try {
      await axios.post("http://localhost:3000/expenses", newExpense);
      refreshExpenses(); // Trigger fetching updated expenses list
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Expense Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense name"
        required
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
