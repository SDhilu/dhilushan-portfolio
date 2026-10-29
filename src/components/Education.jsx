
export default function Education() {
  return (
    <section className="education-section section-spacing" id="education">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">04 / EDUCATION & DIRECTION</p>
          <h2>Grounded in learning, <span className="accent-text">looking ahead.</span></h2>
        </div>

        <div className="education-card">
          <div className="education-date">DEGREE COMPLETED</div>
          <div className="education-content">
            <h3>BSc (Hons) Computer Science</h3>
            <p className="education-institution">
              Informatics Institute of Technology (IIT)
            </p>
            <p>
              In collaboration with the University of Westminster.
            </p>
          </div>
          <span className="education-mark">↗</span>
        </div>

        <div className="interests-block">
          <p className="eyebrow">AREAS I WANT TO EXPLORE FURTHER</p>
          <div className="interest-list">
            <span>Software Engineering</span>
            <span>Data Science</span>
            <span>Machine Learning</span>
            <span>Usability Engineering</span>
          </div>
          <p className="education-note">
            Interested in postgraduate study that strengthens my technical
            foundations and research skills.
          </p>
        </div>
      </div>
    </section>
  );
}
