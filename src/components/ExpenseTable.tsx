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
  const total = expenses.reduce(
    (sum, expense) => sum + (expense.amount || 0),
    0
  );

  return (
    <div className="table-container">
      {/* Add the title here */}
      <h2 className="expense-title">Expenses</h2> {/* Title for the table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th> {/* Swapped Date here */}
            <th>Amount</th> {/* Swapped Amount here */}
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.date}</td> {/* Swapped Date here */}
              <td>${expense.amount}</td> {/* Swapped Amount here */}
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Total:</td>
            <td></td> {/* Empty column under Date */}
            <td>${total.toFixed(2)}</td> {/* Total under Amount */}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseTable;
