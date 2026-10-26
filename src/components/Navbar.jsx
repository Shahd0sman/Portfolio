import { useEffect, useState } from "react";
import { profile } from "../data/portfolio.js";

const links = ["about", "projects", "skills", "education", "experience", "services", "contact"];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const sectionIds = ["home", ...links];
    const updateActiveSection = () => {
      const header = document.querySelector(".nav");
      const activationLine = (header?.getBoundingClientRect().bottom ?? 0) + 16;
      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="nav">
      <a href="#home" className="nav-logo">
        <img src={profile.logo} alt="" onError={(e) => (e.currentTarget.style.display = "none")} />
        {profile.name} <span className="spark">✦</span>
      </a>
      <nav className="nav-links">
        <a href="#home" className={activeSection === "home" ? "active" : undefined} aria-current={activeSection === "home" ? "location" : undefined}>Home</a>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            className={activeSection === l ? "active" : undefined}
            aria-current={activeSection === l ? "location" : undefined}
          >
            {l[0].toUpperCase() + l.slice(1)}
          </a>
        ))}
      </nav>
      <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
        {dark ? "☀" : "☾"}
      </button>
    </header>
  );
}
