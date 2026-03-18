import Reveal from "../components/common/Reveal";

function About() {
  return (
    <main className="page">
      <section className="section bgGlow">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">About</div>
              <Reveal as="h1" className="h1" style={{ marginTop: 10 }}>
                A business school experience with SaaS-level polish.
              </Reveal>
            </div>
            <Reveal as="p" className="lead">
              Ascencia Business School is designed for modern professionals—clear
              curriculum design, premium presentation, and a calm, structured
              learning flow.
            </Reveal>
          </div>

          <div className="grid2">
            <Reveal as="div" className="card">
              <h2 className="h2">Introduction</h2>
              <p className="muted" style={{ marginTop: 12 }}>
                We believe great learning products feel quiet, intentional, and
                well-structured. Every page, section, and component is designed
                to reduce cognitive load and increase momentum.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                Our approach pairs modern curriculum design with premium UX
                standards—so students focus on mastering skills, not navigating
                clutter.
              </p>
            </Reveal>

            <Reveal as="div" className="card">
              <h2 className="h2">Mission</h2>
              <p className="muted" style={{ marginTop: 12 }}>
                Build a clear path from fundamentals to outcomes through
                structured programs, real-world projects, and professional
                presentation.
              </p>

              <div style={{ height: 18 }} />

              <h2 className="h2">Vision</h2>
              <p className="muted" style={{ marginTop: 12 }}>
                A business school platform that feels as refined and reliable as
                the products our graduates will lead.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">Values</div>
              <h2 className="h2" style={{ marginTop: 10 }}>
                Principles that keep the experience premium.
              </h2>
            </div>
            <p className="lead">
              We prioritize clarity and consistency so students can focus on the
              work that matters.
            </p>
          </div>

          <div className="grid3">
            <Reveal as="div" className="card">
              <h3 className="h3">Structured by design</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                Consistent spacing, clear headings, and clean layouts make the
                experience easy to scan and trust.
              </p>
            </Reveal>
            <Reveal as="div" className="card">
              <h3 className="h3">Minimal, not empty</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                Whitespace is used intentionally to create hierarchy and improve
                readability—without feeling sparse.
              </p>
            </Reveal>
            <Reveal as="div" className="card">
              <h3 className="h3">Professional polish</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                Subtle interactions, refined typography, and careful separation
                between sections—no UI noise.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;