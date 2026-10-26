import SectionTitle from "../SectionTitle.jsx";
import { services } from "../../data/portfolio.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle>Services I Offer</SectionTitle>
      <div className="cards-grid">
        {services.map((s) => (
          <article key={s.title} className="panel service">
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
