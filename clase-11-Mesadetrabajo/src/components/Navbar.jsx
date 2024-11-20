import { Link } from "react-router-dom";
import { navegacion, navLink, navList } from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navegacion}>
      <ul className={navList}>
        <li>
          <Link to="/" className={navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contacto" className={navLink}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
