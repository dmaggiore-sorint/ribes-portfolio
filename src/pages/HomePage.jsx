import About from "../components/About";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

const App = ({ darkMode }) => {
  
  return (
    <>
      <About />
      <Projects />
      <Contacts darkMode={ darkMode } />
    </>
  );
}

export default App;
