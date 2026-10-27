import SectionTitle from "../SectionTitle.jsx";
import { experience } from "../../data/portfolio.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle>Experience</SectionTitle>
      <div className="timeline">
        {experience.map((x, i) => (
          <article key={i} className="panel tl-item">
            {i === 0 && (
              <div className="section-sticker experience-sticker" dir="rtl">
                بعد 14 سنة خدمة ف ثانوي بتقولي اقف!!!
              </div>
            )}
            <span className="period">{x.period}</span>
            <h3>{x.role}</h3>
            <h4>{x.company}</h4>
            <ul>{x.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
