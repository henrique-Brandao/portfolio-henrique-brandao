import { Github, Linkedin, Mail, FolderKanban } from 'lucide-react';

function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Portfólio Java / Full stack</p>
          <h1 id="hero-title">Henrique Brandão</h1>
          <p className="hero-title">Desenvolvedor Java com foco em Back end</p>
          <p className="hero-text">
            Construindo APIs REST, integrações e aplicações web com Java, Spring
            Boot, React, PostgreSQL e Docker.
          </p>
          <div className="hero-actions" aria-label="Links principais">
            <a className="button primary" href="https://github.com/henrique-Brandao" target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button" href="https://www.linkedin.com/in/brandaohenrique/" target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button" href="#projetos">
              <FolderKanban size={18} aria-hidden="true" />
              Projetos
            </a>
            <a className="button" href="mailto:henriquebrandao.dev@gmail.com">
              <Mail size={18} aria-hidden="true" />
              Contato
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Resumo técnico">
          <div>
            <span className="panel-label">Foco atual</span>
            <strong>Back end Java/Spring Boot, com base full stack</strong>
          </div>
          <div>
            <span className="panel-label">Estudando</span>
            <strong>APIs REST, autenticação, banco de dados, Docker e React</strong>
          </div>
          <div>
            <span className="panel-label">Objetivo</span>
            <strong>Estágio ou primeira oportunidade como desenvolvedor</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
