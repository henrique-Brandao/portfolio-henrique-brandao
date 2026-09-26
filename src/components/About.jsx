import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t('about_eyebrow')}</p>
          <h2>{t('about_title')}</h2>
        </div>
        
        <div className="bento-grid">
          <motion.div 
            className="bento-item large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>{t('about_base_title')}</h3>
            <p style={{ marginTop: '16px' }}>
              {t('about_base_p1')}
            </p>
            <p style={{ marginTop: '16px' }}>
              {t('about_base_p2')}
            </p>
          </motion.div>
          
          <motion.div 
            className="bento-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>{t('about_focus_title')}</h3>
            <p style={{ marginTop: '16px' }}>
              {t('about_focus_p')}
            </p>
          </motion.div>
          
          <motion.div 
            className="bento-item large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>{t('about_exp_title')}</h3>
            <p style={{ marginTop: '16px' }}>
              {t('about_exp_p')}
            </p>
          </motion.div>

          <motion.div 
            className="bento-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h3 style={{ marginBottom: '24px' }}>{t('about_stack_title')}</h3>
            <div className="skills-wrapper">
              {skillGroups.flatMap(group => group.skills).map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
