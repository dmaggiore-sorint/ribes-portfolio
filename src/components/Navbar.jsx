import { Switch } from '@mui/material'
import { Link } from 'react-router-dom'
import { about } from '../portfolio'

const Navbar = ({ darkMode, setDarkMode }) => {

  const setRootDarkMode = (darkMode) => {
    const root = document.getElementById('root');
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setDarkMode(darkMode)
  }

  return (
    <div className={`navbar${darkMode ? ' dark' : ''}`}>
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
          <Switch onClick={() => setRootDarkMode(!darkMode)} />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
