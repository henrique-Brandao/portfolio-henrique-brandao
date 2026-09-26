import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const flags = { pt: '🇧🇷', en: '🇺🇸', it: '🇮🇹' };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="lang-switcher-container">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(5, 5, 5, 0.75)',
          backdropFilter: 'blur(24px)',
          border: '1px solid var(--surface-border)',
          borderRadius: '999px',
          color: 'var(--text)',
          cursor: 'pointer',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '1.2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'all 0.2s'
        }}
        title="Trocar idioma"
      >
        <Globe size={16} color="var(--muted)" />
        {flags[i18n.language] || '🇧🇷'}
        <ChevronDown size={14} color="var(--muted)" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.2s' }} />
      </button>
      
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: '0',
          background: 'rgba(15, 15, 15, 0.95)',
          border: '1px solid var(--surface-border)',
          borderRadius: '16px',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          marginTop: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
          backdropFilter: 'blur(16px)'
        }}>
          {Object.entries(flags).map(([code, flag]) => (
            <button
              key={code}
              onClick={() => {
                i18n.changeLanguage(code);
                setIsOpen(false);
              }}
              style={{
                background: i18n.language === code ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
                color: 'var(--text)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                borderRadius: '8px',
                transition: 'background 0.2s',
                fontWeight: 500,
                textAlign: 'left'
              }}
            >
              <span>{flag}</span>
              <span style={{ fontSize: '0.9rem', color: i18n.language === code ? 'var(--text)' : 'var(--muted)' }}>
                {code.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
