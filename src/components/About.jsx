
export default function About() {
  return (
    <section className="section-shell section-spacing" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 / ABOUT</p>
        <h2>A little about <span className="accent-text">me.</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <p className="large-copy">
            I’m interested in the space between building software and
            solving problems.
          </p>

          <p>
            My Computer Science background has given me a foundation in
            programming, web development, and software design. Through
            personal and academic projects, I’ve explored how to turn ideas
            into usable applications.
          </p>

          <p>
            I’m keen to deepen my technical knowledge through further study,
            particularly in software engineering, usability engineering, and
            intelligent systems.
          </p>
        </div>

        <div className="about-side">
          <div className="info-card">
            <span className="info-number">01</span>
            <h3>Build</h3>
            <p>Developing practical web applications and useful interfaces.</p>
          </div>

          <div className="info-card">
            <span className="info-number">02</span>
            <h3>Explore</h3>
            <p>Learning about data-driven approaches and intelligent systems.</p>
          </div>

          <div className="info-card">
            <span className="info-number">03</span>
            <h3>Grow</h3>
            <p>Continuing to learn through projects and postgraduate study.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
