function About() {
  return (
    <section className="section alt-section" id="sobre" aria-labelledby="about-title">
      <div className="container split">
        <div>
          <p className="eyebrow">Sobre mim</p>
          <h2 id="about-title">Em formação, com foco prático em backend</h2>
        </div>
        <div className="text-stack">
          <p>
            Sou estudante do curso técnico em Desenvolvimento de Sistemas no
            SENAI CIMATEC e graduando em Engenharia de Software pela Cruzeiro do
            Sul. Estou direcionando meus estudos para backend com Java e Spring
            Boot, com atenção a APIs REST, persistência em banco relacional,
            autenticação, Docker e boas práticas de organização de código.
          </p>
          <p>
            Meus projetos são de estudo e portfólio, criados para consolidar
            fundamentos que aparecem em aplicações reais: separação em camadas,
            DTOs, validações, regras de negócio, integração frontend/backend,
            documentação de API e configuração de ambiente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
