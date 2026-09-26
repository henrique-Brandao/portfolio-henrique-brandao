import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="section" id="projetos">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t('projects_eyebrow')}</p>
          <h2>{t('projects_title')}</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isMagic = project.name.includes('Magic');
            const summaryKey = isMagic ? 'proj_magic_summary' : 'proj_task_summary';
            const learningKey = isMagic ? 'proj_magic_learning' : 'proj_task_learning';

            return (
              <motion.article 
                key={project.name}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-preview" style={{ position: 'relative' }}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  {project.featured && (
                    <div style={{ position: 'absolute', top: 16, right: 16, background: 'var(--accent)', color: '#000', padding: '4px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {t('projects_featured')}
                    </div>
                  )}
                </div>
                
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p className="project-summary">
                    {t(summaryKey)}
                  </p>
                  
                  <div className="tech-list">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                    {project.technologies.length > 5 && <span>+{project.technologies.length - 5}</span>}
                  </div>
                  
                  <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>
                      {t('projects_learning')}
                    </strong>
                    {t(learningKey)}
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <a href={project.repo} target="_blank" rel="noreferrer" className="button" style={{ flex: 1, justifyContent: 'center' }}>
                      <Github size={18} />
                      {t('projects_view_code')}
                    </a>
                    <a href={project.deploy} target="_blank" rel="noreferrer" className="button primary" style={{ flex: 1, justifyContent: 'center' }}>
                      <ExternalLink size={18} />
                      {t('projects_view_live')}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
