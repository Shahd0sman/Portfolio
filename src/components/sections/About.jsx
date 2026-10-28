import SectionTitle from "../SectionTitle.jsx";
import { about, profile } from "../../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle>About Me</SectionTitle>
      <div className="panel about-grid">
        <div className="section-sticker about-sticker-top" dir="rtl">مين ده؟</div>
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
          <a className="btn primary" download>Download CV</a>
        </div>
        <div className="section-sticker about-sticker-bottom" dir="rtl">
          ده كلاوي جينيص الشقة
        </div>
      </div>
    </section>
  );
}
