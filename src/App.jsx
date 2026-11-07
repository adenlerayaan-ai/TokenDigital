import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onSelect={setSelected} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
