import { FileText, FolderKanban, Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Portfólio Backend Java</p>
          <h1 id="hero-title">Henrique Brandão</h1>
          <p className="hero-title">Desenvolvedor Backend Java</p>
          <p className="hero-text">
            Construindo APIs REST, integrações e aplicações web com Java, Spring
            Boot, PostgreSQL, Docker e React.
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
            <a className="button" href="/curriculo-henrique-brandao.pdf" target="_blank" rel="noreferrer">
              <FileText size={18} aria-hidden="true" />
              Currículo
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
            <strong>Backend Java/Spring Boot</strong>
          </div>
          <div>
            <span className="panel-label">Estudando</span>
            <strong>Docker, Testes automatizados, CI/CD, Cache e Redis</strong>
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
