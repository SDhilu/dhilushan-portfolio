
export default function Contact() {
  return (
    <section className="contact-section section-spacing" id="contact">
      <div className="section-shell contact-panel">
        <p className="eyebrow">05 / GET IN TOUCH</p>
        <h2>Have an opportunity or an idea?</h2>
        <p>
          I'm happy to connect about software development, postgraduate
          opportunities, and interesting technical projects.
        </p>

        <div className="contact-actions">
          {/* Replace the email below with your professional email. */}
          <a
            className="button button-primary"
            href="mailto:YOUR_EMAIL@example.com"
          >
            Email me <span>↗</span>
          </a>

          <a
            className="button button-secondary"
            href="https://github.com/SDhilu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
          </a>

          {/* Replace this URL with your actual LinkedIn profile. */}
          <a
            className="button button-secondary"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
