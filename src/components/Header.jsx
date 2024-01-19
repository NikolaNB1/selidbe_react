import { Link } from "react-router-dom";
import logo from "../Sonic-dostava-logo.png";

const Header = () => {
  return (
    <header>
      <nav className="nav_header">
        <ul className="ul_header">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" width="280" height="70" />
            </Link>
          </div>
          <div className="links_header">
            <li>
              <a className="li_header" href="#intro_section">
                Početna
              </a>
            </li>
            <li>
              <a className="li_header" href="#about_us_section">
                O nama
              </a>
            </li>
            <li>
              <a className="li_header" href="#cenovnik_section">
                Cenovnik
              </a>
            </li>
            <li>
              <a className="li_header" href="#contact_section">
                Kontakt
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
