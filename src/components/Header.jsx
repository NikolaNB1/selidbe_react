import logo from "../images/Sonic-dostava-logo.png";
import { FaClock } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className="nav_header">
        <ul className="ul_header">
          <div>
            <a href="/">
              <img src={logo} alt="Logo" width="280" height="70" />
            </a>
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
              <a className="li_header" href="#pricelist_section">
                Cenovnik
              </a>
            </li>
            <li>
              <a className="li_header" href="#contact_section">
                Kontakt
              </a>
            </li>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <span>
                  <i className="clock">
                    <FaClock />
                  </i>
                </span>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{ fontSize: "1.2rem", fontWeight: "600", margin: "0" }}
                >
                  Pon - Ned: 00-24h
                </p>
                <p style={{ fontSize: "1rem", fontWeight: "600", margin: "0" }}>
                  NON-STOP radno vreme
                </p>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
