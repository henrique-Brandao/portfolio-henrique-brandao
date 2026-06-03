import { Github, Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    label: 'GitHub',
    value: 'github.com/henrique-Brandao',
    href: 'https://github.com/henrique-Brandao',
    icon: Github
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/brandaohenrique',
    href: 'https://www.linkedin.com/in/brandaohenrique/',
    icon: Linkedin
  },
  {
    label: 'Email',
    value: 'henriquebrandao.dev@gmail.com',
    href: 'mailto:henriquebrandao.dev@gmail.com',
    icon: Mail
  }
];

function Contact() {
  return (
    <section className="section alt-section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title">Aberto a estágio ou vaga júnior</h2>
          <p>
            Estou buscando uma primeira oportunidade para aplicar e evoluir meus
            estudos em desenvolvimento web, especialmente com Java, Spring Boot,
            APIs REST, banco de dados e integração com front-end.
          </p>
        </div>
        <div className="contact-list">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon size={20} aria-hidden="true" />
              <span>
                <strong>{label}</strong>
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
