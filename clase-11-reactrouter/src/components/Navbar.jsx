import { Link } from "react-router-dom";
import { navegacion, navLink, navList } from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={navegacion}>
      <ul className={navList}>
        <li>
          <Link to="/" className={navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={navLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/faq" className={navLink}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};
