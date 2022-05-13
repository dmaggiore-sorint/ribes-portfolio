import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import { useState } from "react";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={ darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} />
      <Projects />
      <Contacts />
    </div>
  );
}

export default HomePage;
