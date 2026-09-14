import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route
            path="/projects/:projectId"
            element={<ProjectDetails />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </main>

      <Footer />

    </>
  );
}

export default App;