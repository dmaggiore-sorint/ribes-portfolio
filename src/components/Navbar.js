import { Switch } from "@mui/material";
import { about } from "../portfolio";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">{about.abbrevation}</div>
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contacts">contacts</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <Switch onClick={() => setDarkMode(!darkMode)} />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
