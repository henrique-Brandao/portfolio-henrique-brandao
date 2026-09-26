import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

function Header() {
  const { t, i18n } = useTranslation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const navItems = [
    { label: t('nav_sobre'), href: '#sobre' },
    { label: t('nav_projetos'), href: '#projetos' },
    { label: t('nav_contato'), href: '#contato' }
  ];

  return (
    <motion.header 
      className="site-header"
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <nav className="container nav" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Henrique Brandão - início" onClick={() => setIsMobileOpen(false)}>
          Henrique.
        </a>
        
        {/* Desktop Links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} style={{ whiteSpace: 'nowrap' }}>
              {item.label}
            </a>
          ))}
          
          <a 
            href="/curriculo-henrique-brandao.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="button"
            style={{ height: '36px', padding: '0 16px', fontSize: '0.85rem', marginLeft: '16px', whiteSpace: 'nowrap' }}
          >
            {t('nav_cv')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Menu">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px 0 24px', borderTop: '1px solid var(--surface-border)' }}>
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileOpen(false);
                    setTimeout(() => {
                      const element = document.querySelector(item.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  style={{ fontSize: '1.2rem', fontWeight: 500 }}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="/curriculo-henrique-brandao.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="button primary"
                style={{ alignSelf: 'flex-start', marginTop: '8px' }}
              >
                {t('nav_cv')}
              </a>

              {/* Mobile Language Switcher */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--surface-border)' }}>
                <button onClick={() => { i18n.changeLanguage('pt'); setIsMobileOpen(false); }} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', padding: 0, opacity: i18n.language === 'pt' ? 1 : 0.4 }} title="Português">🇧🇷</button>
                <button onClick={() => { i18n.changeLanguage('en'); setIsMobileOpen(false); }} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', padding: 0, opacity: i18n.language === 'en' ? 1 : 0.4 }} title="English">🇺🇸</button>
                <button onClick={() => { i18n.changeLanguage('it'); setIsMobileOpen(false); }} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', padding: 0, opacity: i18n.language === 'it' ? 1 : 0.4 }} title="Italiano">🇮🇹</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
