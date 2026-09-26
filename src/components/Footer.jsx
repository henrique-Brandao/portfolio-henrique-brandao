import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" style={{ padding: '40px 0', borderTop: '1px solid var(--surface-border)', color: 'var(--muted)', fontSize: '0.9rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ margin: 0 }}>
          {t('footer_copy', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
