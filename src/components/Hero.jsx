import { Github, Linkedin, Mail, FolderKanban } from 'lucide-react';

function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Portfólio backend</p>
          <h1 id="hero-title">Henrique Brandão</h1>
          <p className="hero-title">Desenvolvedor Backend Java em formação</p>
          <p className="hero-text">
            Construindo APIs REST e aplicações web com Java, Spring Boot,
            PostgreSQL e Docker.
          </p>
          <div className="hero-actions" aria-label="Links principais">
            <a className="button primary" href="https://github.com/henrique-Brandao" target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button" href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button" href="#projetos">
              <FolderKanban size={18} aria-hidden="true" />
              Projetos
            </a>
            <a className="button" href="mailto:seuemail@email.com">
              <Mail size={18} aria-hidden="true" />
              Contato
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Resumo técnico">
          <div>
            <span className="panel-label">Foco atual</span>
            <strong>Backend Java/Spring Boot</strong>
          </div>
          <div>
            <span className="panel-label">Estudando</span>
            <strong>APIs REST, autenticação, banco de dados e Docker</strong>
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
