import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Welcome from "./Components/Welcome/Welcome.jsx";
import Skills from "./Components/Skills/Skills.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import About from "./Components/About/About.jsx"
import Contact from "./Components/Contact/Contact.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;