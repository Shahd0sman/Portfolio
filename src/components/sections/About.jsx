import SectionTitle from "../SectionTitle.jsx";
import { about, profile } from "../../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle>About Me</SectionTitle>
      <div className="panel about-grid">
        <img className="about-img" src={about.image} alt="About me" />
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "about-hook" : undefined}>{p}</p>
          ))}
          <div className="chips">
            {about.facts.map((f) => (
              <span key={f.label} className="chip big"><b>{f.label}:</b> {f.value}</span>
            ))}
          </div>
          <a className="btn primary" href={profile.resumeUrl} download>Download CV</a>
        </div>
      </div>
    </section>
  );
}
