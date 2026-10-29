
const skillGroups = [
  {
    title: "Programming",
    number: "01",
    skills: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Web development",
    number: "02",
    skills: ["React", "Vite", "Flask", "Node.js"],
  },
  {
    title: "Data & storage",
    number: "03",
    skills: ["Firebase", "Firestore", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    title: "Tools & design",
    number: "04",
    skills: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section className="section-shell section-spacing" id="skills">
      <div className="section-heading">
        <p className="eyebrow">03 / TOOLKIT</p>
        <h2>Technologies I <span className="accent-text">work with.</span></h2>
        <p className="section-intro">
          A selection of technologies and tools I have used in my projects.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <span className="info-number">{group.number}</span>
            <h3>{group.title}</h3>
            <div className="tech-list skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
