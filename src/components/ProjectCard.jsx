// Whole card is a link → opens the project website in a new tab
export default function ProjectCard({ project }) {
  const { title, tag, description, image, tech, link } = project;
  return (
    <a className="project-card" href={link} target="_blank" rel="noopener noreferrer">
      <div className="project-img">
        <span className="project-tag">{tag}</span>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="chips">
        {tech.map((t) => <span key={t} className="chip">{t}</span>)}
        <span className="go">↗</span>
      </div>
    </a>
  );
}
