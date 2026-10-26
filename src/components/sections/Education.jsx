import SectionTitle from "../SectionTitle.jsx";
import { education } from "../../data/portfolio.js";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle>Education</SectionTitle>
      <div className="timeline">
        {education.map((e, i) => (
          <article key={i} className="panel tl-item">
            <span className="period">{e.period}</span>
            <h3>{e.degree}</h3>
            <h4>{e.school}</h4>
            <p>{e.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
