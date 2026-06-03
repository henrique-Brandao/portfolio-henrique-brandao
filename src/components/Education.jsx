function Education() {
  return (
    <section className="section" id="formacao" aria-labelledby="education-title">
      <div className="container education-layout">
        <div className="section-heading compact">
          <p className="eyebrow">Formação</p>
          <h2 id="education-title">Formação acadêmica e cursos</h2>
        </div>
        <div className="timeline" aria-label="Formação acadêmica">
          <article>
            <span>Em andamento</span>
            <h3>Técnico em Desenvolvimento de Sistemas</h3>
            <p>SENAI CIMATEC</p>
          </article>
          <article>
            <span>Em andamento</span>
            <h3>Engenharia de Software</h3>
            <p>Graduação em andamento</p>
          </article>
        </div>
        <div className="course-box">
          <h3>Certificações e cursos</h3>
          <ul>
            <li>Ford Enter — Front-end e Back-end</li>
            <li>Alura — Java, Spring Boot, Git, Docker ou SQL</li>
          </ul>
          <p>Estrutura preparada para detalhar certificados, cargas horárias e links depois.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
