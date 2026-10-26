import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Cover from "./components/sections/Cover.jsx";
import About from "./components/sections/About.jsx";
import Education from "./components/sections/Education.jsx";
import Experience from "./components/sections/Experience.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Services from "./components/sections/Services.jsx";
import Feedbacks from "./components/sections/Feedbacks.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Cover />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Services />
        <Feedbacks />
      </main>
      <Footer />
    </>
  );
}
