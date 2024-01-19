import logo from "../Sonic-dostava-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <a href="index.html">
          <img src={logo} alt="Logo" width="280" height="70" />
        </a>
      </div>
      <div className="footer_copyrights">
        <p>&copy; 2023 Sonic Selidbe</p>
      </div>
    </footer>
  );
};
export default Footer;
