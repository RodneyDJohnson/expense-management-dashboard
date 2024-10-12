import { Link } from "react-router-dom";
import "../styles/Header.css"; // Ensure you create a Header.css file for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
