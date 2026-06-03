import { skillGroups } from '../data/skills.js';

function Skills() {
  return (
    <section className="section alt-section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title">Habilidades organizadas por área</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
