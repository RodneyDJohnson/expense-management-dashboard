// src/components/Navbar.tsx
import "../components/Navbar";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/expenses">Expenses</a>
        </li>
        <li>
          <a href="/reports">Reports</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
