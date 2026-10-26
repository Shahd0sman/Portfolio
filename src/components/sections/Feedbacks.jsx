import SectionTitle from "../SectionTitle.jsx";
import { feedbacks } from "../../data/portfolio.js";

export default function Feedbacks() {
  return (
    <section id="feedbacks" className="section">
      <SectionTitle>Feedbacks</SectionTitle>
      <div className="cards-grid">
        {feedbacks.map((f, i) => (
          <article key={i} className="panel feedback">
            <p className="quote">“{f.text}”</p>
            <div className="who">
              <img
                src={f.avatar}
                alt=""
                onError={(e) => e.currentTarget.replaceWith(Object.assign(document.createElement("span"), { className: "avatar-fallback", textContent: f.name[0] }))}
              />
              <div><b>{f.name}</b><small>{f.role}</small></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
