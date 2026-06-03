const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' }
];

function Header() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Henrique Brandão - início">
          Henrique Brandão
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
