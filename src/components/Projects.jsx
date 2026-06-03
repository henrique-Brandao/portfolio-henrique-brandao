import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects.js';

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''} ${project.wide ? 'wide' : ''}`}>
      <div className="project-preview" aria-label={`Preview visual do ${project.name}`}>
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        ) : (
          <div className="preview-window">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-content">
              <div>
                <strong>{project.preview.title}</strong>
                <small>{project.preview.subtitle}</small>
              </div>
              <div className="preview-stats">
                {project.preview.stats.map((stat) => (
                  <span key={stat}>{stat}</span>
                ))}
              </div>
              <div className="preview-rows">
                {project.preview.rows.map((row) => (
                  <span key={row}>{row}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="project-card-header">
        <div>
          {project.featured && <span className="tag">Projeto principal</span>}
          {project.status && <span className="tag muted-tag">{project.status}</span>}
          <h3>{project.name}</h3>
        </div>
      </div>

      <p className="project-summary">{project.summary}</p>

      <div className="project-actions" aria-label={`Links do ${project.name}`}>
        {project.deploy && (
          <a className="button primary" href={project.deploy} target="_blank" rel="noreferrer">
            <ExternalLink size={18} aria-hidden="true" />
            Ver site
          </a>
        )}
        <a className="button" href={project.repo} target="_blank" rel="noreferrer">
          <Github size={18} aria-hidden="true" />
          GitHub
        </a>
      </div>

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
            Projetos Java/Spring com backend como ponto principal e integração
            com interfaces web quando isso faz parte do repositório.
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
