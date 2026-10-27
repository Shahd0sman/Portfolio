import { cover } from "../../data/portfolio.js";

export default function Cover() {
  return (
    <section id="home" className="section cover">
      <div className="sticky-note">{cover.stickyNote}</div>
      <div className="cover-text">
        <h1>
          {cover.greeting} <span className="big-name">{cover.name}</span>
        </h1>
        <p className="role-chip">✦ {cover.role}</p>
        <p className="tagline handwritten">{cover.tagline}</p>
        <div className="btn-row">
          <a href="#projects" className="btn primary">View My Projects →</a>
          <a href="#about" className="btn ghost">About Me ♡</a>
        </div>
      </div>
      <div className="cover-art">
        <span className="bubble">✦ {cover.note}</span>
        <div className="sticky-note enfp-note">ENFP</div>
        <span className="float stars" aria-hidden="true">
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
        </span>
        <span className="float flower">✿</span>
        <img src={cover.image} alt={cover.name} />
      </div>
    </section>
  );
}
