import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const contactLinks = [
  {
    label: 'E-mail',
    value: 'henriquebrandao.dev@gmail.com',
    href: 'mailto:henriquebrandao.dev@gmail.com',
    icon: Mail
  },
  {
    label: 'LinkedIn',
    value: 'in/brandaohenrique',
    href: 'https://www.linkedin.com/in/brandaohenrique/',
    icon: Linkedin
  },
  {
    label: 'GitHub',
    value: 'henrique-Brandao',
    href: 'https://github.com/henrique-Brandao',
    icon: Github
  },
  {
    label: 'Currículo',
    value: 'Download (PDF)',
    href: '/curriculo-henrique-brandao.pdf',
    icon: FileText
  }
];

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">{t('contact_eyebrow')}</p>
          <h2 id="contact-title">{t('contact_title')}</h2>
          <p style={{ marginTop: '16px' }}>
            {t('contact_p')}
          </p>
        </motion.div>
        <motion.div 
          className="contact-list"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined} rel="noreferrer">
              <Icon size={20} aria-hidden="true" />
              <span>
                <strong style={{ display: 'block', color: 'var(--text)' }}>
                  {label === 'Currículo' ? t('nav_cv') : label}
                </strong>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{value}</span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
