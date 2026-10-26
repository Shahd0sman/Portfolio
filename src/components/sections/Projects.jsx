import SectionTitle from "../SectionTitle.jsx";
import ProjectCard from "../ProjectCard.jsx";
import { projects } from "../../data/portfolio.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="projects-grid">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
}
