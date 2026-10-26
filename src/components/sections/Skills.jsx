import SectionTitle from "../SectionTitle.jsx";
import { skills, skillsNote } from "../../data/portfolio.js";

const isImg = (s) => /^(\/|http)/.test(s);

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle>My Skills</SectionTitle>
      <div className="panel skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill">
            {isImg(s.icon) ? <img src={s.icon} alt="" /> : <span className="skill-emoji">{s.icon}</span>}
            <span>{s.name}</span>
          </div>
        ))}
        <div className="skill note handwritten">{skillsNote}</div>
      </div>
    </section>
  );
}
