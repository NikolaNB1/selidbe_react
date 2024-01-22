import logo from "../images/Sonic-dostava-logo.png";
import { FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  const [isTabletScreen, setIsTabletScreen] = useState(
    window.innerWidth <= 1490
  );
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 750
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTabletScreen(window.innerWidth <= 1490);
      setIsMobileScreen(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      <nav className="nav_header">
        {isMobileScreen ? (
          <>
            <ul className="ul_header">
              <div>
                <a href="/">
                  <img src={logo} alt="Logo" width="180" height="70" />
                </a>
              </div>
              <div>
                <li className="burger_mobile">
                  <Menu isOpen={true} width={"300px"} right>
                    <a className="menu-item" href="#intro_section">
                      Početna
                    </a>
                    <a className="menu-item" href="#about_us_section">
                      O nama
                    </a>
                    <a className="menu-item" href="#pricelist_section">
                      Cenovnik
                    </a>
                    <a className="menu-item" href="#contact_section">
                      Kontakt
                    </a>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          paddingTop: "100px",
                        }}
                      >
                        <div
                          style={{
                            marginLeft: "10px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "1rem",
                              fontWeight: "600",
                              margin: "0",
                            }}
                          >
                            Radno vreme
                          </p>
                          <p
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: "600",
                              margin: "0",
                            }}
                          >
                            Pon - Ned: 08-20h
                          </p>
                        </div>
                      </div>
                    </div>
                  </Menu>
                </li>
              </div>
            </ul>
          </>
        ) : isTabletScreen ? (
          <>
            <ul className="ul_header">
              <div>
                <a href="/">
                  <img src={logo} alt="Logo" width="220" height="70" />
                </a>
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
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        margin: "0",
                      }}
                    >
                      Radno vreme
                    </p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        margin: "0",
                      }}
                    >
                      Pon - Ned: 08-20h
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <li className="burger_mobile">
                  <Menu isOpen={true} width={"300px"} right>
                    <a className="menu-item" href="#intro_section">
                      Početna
                    </a>
                    <a className="menu-item" href="#about_us_section">
                      O nama
                    </a>
                    <a className="menu-item" href="#pricelist_section">
                      Cenovnik
                    </a>
                    <a className="menu-item" href="#contact_section">
                      Kontakt
                    </a>
                  </Menu>
                </li>
              </div>
            </ul>
          </>
        ) : (
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
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      margin: "0",
                    }}
                  >
                    Radno vreme
                  </p>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      margin: "0",
                    }}
                  >
                    Pon - Ned: 08-20h
                  </p>
                </div>
              </div>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};
export default Header;
