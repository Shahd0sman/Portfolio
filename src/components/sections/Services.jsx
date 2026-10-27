import SectionTitle from "../SectionTitle.jsx";
import { services } from "../../data/portfolio.js";

const serviceIcons = {
  search: (
    <>
      <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m15 15 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  smartphone: (
    <>
      <rect x="5" y="1" width="14" height="22" rx="3" />
      <rect x="7.5" y="4" width="9" height="14" rx="1" fill="var(--bg)" />
      <circle cx="12" cy="20" r="1" fill="var(--bg)" />
    </>
  ),
  server: (
    <>
      <rect x="2" y="2" width="20" height="9" rx="2" />
      <rect x="2" y="13" width="20" height="9" rx="2" />
      <circle cx="6" cy="6.5" r="1" fill="var(--bg)" />
      <circle cx="6" cy="17.5" r="1" fill="var(--bg)" />
      <path d="M10 6.5h8M10 17.5h8" stroke="var(--bg)" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 1 21 4v7c0 5.7-3.8 9.8-9 12-5.2-2.2-9-6.3-9-12V4l9-3Z" />
      <path d="m8 12 2.5 2.5 5.5-6" fill="none" stroke="var(--bg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle>Services I Offer</SectionTitle>
      <div className="cards-grid">
        {services.map((s) => (
          <article key={s.title} className="panel service">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              {serviceIcons[s.icon]}
            </svg>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
