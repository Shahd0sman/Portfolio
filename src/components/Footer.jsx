import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <p className="contact-message">{profile.contactMessage}</p>
      <div className="socials">
        {profile.socials.map((s) => (
          <a className="social-card" key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
        <a className="social-card" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <p className="handwritten">Thanks for stopping by! ✿</p>
    </footer>
  );
}
