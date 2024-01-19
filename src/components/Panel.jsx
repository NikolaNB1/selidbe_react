import { FaPhoneVolume } from "react-icons/fa6";

const Panel = () => {
  return (
    <section>
      <div
        className="text"
        style={{
          padding: "1rem",
          color: "#0469b7",
          fontSize: "30px",
          lineHeight: "27px",
        }}
      >
        <h3 style={{ fontWeight: "900" }}>
          <FaPhoneVolume /> +381 61 241 91 75
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
    </section>
  );
};
export default Panel;
