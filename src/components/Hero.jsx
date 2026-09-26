import { motion } from 'framer-motion';
import { ArrowDown, Github, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="section hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-centered">
        
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="pulse-dot" aria-hidden="true"></span>
          <span>Status: Open to Work</span>
        </motion.div>

        <motion.h1 
          className="hero-title-massive"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          id="hero-title"
        >
          {t('hero_title_1')} <br /> <span className="text-gradient">{t('hero_title_2')}</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('hero_subtitle')}
        </motion.p>

        <motion.div 
          className="hero-actions-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projetos" className="button primary">
            <Terminal size={18} aria-hidden="true" />
            {t('nav_projetos')}
          </a>
          <a href="https://github.com/henrique-Brandao" target="_blank" rel="noreferrer" className="button">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          style={{ marginTop: '80px', color: 'var(--muted)' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
            {t('hero_scroll')}
          </span>
          <ArrowDown size={20} style={{ margin: '0 auto' }} aria-hidden="true" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
