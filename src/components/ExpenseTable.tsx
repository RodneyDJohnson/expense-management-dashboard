/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import "../styles/ExpenseTable.css";

// Define the type for an expense
interface Expense {
  id: number;
  name: string;
  amount: number;
  date: string;
}

interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
  // Calculate the total of all expenses
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>${expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Total:</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseTable;
