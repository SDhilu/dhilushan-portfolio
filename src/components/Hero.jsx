
export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          COMPUTER SCIENCE GRADUATE
        </p>

        <h1>
          Turning ideas into
          <br />
          <span className="accent-text">meaningful software.</span>
        </h1>

        <p className="hero-description">
          I'm Dhilushan Sivakumar, a Computer Science graduate interested
          in software engineering, data science, and intelligent systems.
          I enjoy building practical applications and learning how technology
          can solve real-world problems.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <span>↗</span>
          </a>
          <a className="button button-secondary" href="#about">
            More about me
          </a>
        </div>

        <div className="hero-meta">
          <span>Based in Sri Lanka</span>
          <span className="meta-divider">/</span>
          <span>Open to opportunities</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Introduction card">
        <div className="visual-top">
          <span>PORTFOLIO / 2026</span>
          <span>01 — 06</span>
        </div>

        <div className="visual-monogram">SD<span>.</span></div>

        <div className="visual-bottom">
          <div>
            <span className="visual-label">FOCUS AREAS</span>
            <p>Software · Data · AI</p>
          </div>
          <span className="visual-arrow">↗</span>
        </div>

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </div>
    </section>
  );
}
