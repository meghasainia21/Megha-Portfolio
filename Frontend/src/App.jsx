import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <ParticleBackground darkMode={darkMode} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Home/>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}