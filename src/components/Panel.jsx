import { FaPhoneVolume } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Panel = () => {
  const [isTabletScreen, setIsTabletScreen] = useState(
    window.innerWidth <= 750
  );
  const phoneNumber = "+381612419175";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTabletScreen(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      {isTabletScreen ? (
        <>
          <div
            className="text"
            style={{
              padding: "1rem",
              color: "#0469b7",
              fontSize: "30px",
              lineHeight: "27px",
            }}
          >
            <h3
              className="fw-bold fs-5 fs-lg-3"
              style={{
                cursor: "pointer",
              }}
              onClick={handleCallClick}
            >
              <FaPhoneVolume /> {phoneNumber}
            </h3>
          </div>
          <div className="panel_section" style={{ padding: "10px" }}>
            <div className="text">
              <h3 className="fs-5 fs-lg-3">
                <span>
                  <p style={{ padding: "8px" }} className="fs-6 fs-lg-4">
                    SELIDBE
                  </p>

                  <p style={{ padding: "8px" }} className="fs-6 fs-lg-4">
                    KOMBI PREVOZ
                  </p>

                  <p style={{ padding: "8px" }} className="fs-6 fs-lg-4">
                    MONTAŽA / DEMONTAŽA
                  </p>

                  <p style={{ padding: "8px" }} className="fs-6 fs-lg-4">
                    ODNOŠENJE STARIH I NEPOTREBNIH STVARI
                  </p>
                </span>
              </h3>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="text"
            style={{
              padding: "1rem",
              color: "#0469b7",
              fontSize: "30px",
              lineHeight: "27px",
            }}
          >
            <h3
              style={{ fontWeight: "900", cursor: "pointer" }}
              onClick={handleCallClick}
            >
              <FaPhoneVolume /> {phoneNumber}
            </h3>
          </div>
          <div className="panel_section">
            <div className="text">
              <h3>
                <span>
                  <p>SELIDBE</p>
                  <p>KOMBI PREVOZ</p>
                  <p>MONTAŽA / DEMONTAŽA</p>
                  <p>ODNOŠENJE STARIH I NEPOTREBNIH STVARI</p>
                </span>
              </h3>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default Panel;
