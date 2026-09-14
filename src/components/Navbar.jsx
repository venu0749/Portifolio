import { NavLink } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Portfolio</h2>

      <ul className="nav-links">

        <li>
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

      </ul>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

    </nav>
  );
}

export default Navbar;