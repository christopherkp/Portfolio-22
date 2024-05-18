import Dropdown from "./Dropdown";
import "./shared/css/Header.css";

const Header = () => {
  return (
    <nav id="header">
      <Dropdown />
      <img
        src="Github-Mark-Light-120px-plus.png"
        id="imggithubheader"
        alt="Github logo"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/christopherkp", "_blank");
        }}
      />

      <img
        src="ld.png"
        id="imglinkedinheader"
        alt="Linkedin logo"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.linkedin.com/in/christopher-klepp-47376b20a",
            "_blank"
          );
        }}
      />
      <img src="mailicotest.png" id="imgmailheader" alt="Mail icon" />
    </nav>
  );
};

export default Header;
