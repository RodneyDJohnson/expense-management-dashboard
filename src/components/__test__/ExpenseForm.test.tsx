import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import ExpenseForm from "../ExpenseForm";
import axios from "axios";
jest.mock("axios");
import { Expense } from "../../types";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const mockAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
  mockAxios.get.mockResolvedValue({
    data: [{ id: 1, name: "Sample", amount: 100, date: "2023-01-01" }],
  });
});

test("renders ExpenseForm correctly", () => {
  render(<ExpenseForm refreshExpenses={() => {}} />);
  expect(screen.getByPlaceholderText(/Expense name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Amount/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
});

test("submits the form correctly", async () => {
  const mockRefreshExpenses = jest.fn();
  render(<ExpenseForm refreshExpenses={mockRefreshExpenses} />);

  fireEvent.change(screen.getByPlaceholderText(/Expense name/i), {
    target: { value: "Test Expense" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
    target: { value: "100" },
  });
  fireEvent.change(screen.getByLabelText(/Date/i), {
    target: { value: "2024-10-15" },
  });

  fireEvent.click(screen.getByText(/Add Expense/i));

  await waitFor(() => expect(mockRefreshExpenses).toHaveBeenCalled());
});
