import { Switch } from '@mui/material'
import { Link } from 'react-router-dom'
import { about } from '../portfolio'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <div className="navbar__logo">{about.abbrevation}</div>
        </Link>
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
            <Link to="/blog">blog</Link>
          </li>
          <Switch onClick={() => setDarkMode(!darkMode)} />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
