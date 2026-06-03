import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects.js';

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-card-header">
        <div>
          {project.featured && <span className="tag">Projeto principal</span>}
          <h3>{project.name}</h3>
        </div>
        <a
          className="icon-link"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir repositório do ${project.name}`}
        >
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </div>

      <p className="project-summary">{project.summary}</p>

      <div className="project-block">
        <h4>Funcionalidades reais</h4>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-block">
        <h4>Tecnologias</h4>
        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-block">
        <h4>O que aprendi/construí</h4>
        <p>{project.learning}</p>
      </div>

      {project.note && <p className="project-note">{project.note}</p>}
    </article>
  );
}

function Projects() {
  return (
    <section className="section" id="projetos" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projetos</p>
          <h2 id="projects-title">Projetos técnicos de estudo e portfólio</h2>
          <p>
            Cards escritos a partir dos READMEs dos repositórios, com foco no que
            foi implementado e estudado em cada projeto.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
