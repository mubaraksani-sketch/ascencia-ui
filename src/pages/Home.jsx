import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Reveal from "../components/common/Reveal";
import banner3 from "../assets/images/ascencia-malta-banner-3.jpg";
import banner4 from "../assets/images/ascencia-malta-banner-4.jpg";
import bannerMobile from "../assets/images/ascencia-malta-banner-mobile.jpg";
import overlay01 from "../assets/images/01.png";
import heroArt from "../assets/images/hero-art.jpg";

function Home() {
  const banners = useMemo(
    () => [
      {
        desktop: banner4,
        mobile: bannerMobile,
        kicker: "Welcome to Ascencia Malta",
        title: "A premium business school platform, designed with modern clarity.",
        subtitle:
          "Discover career-focused programmes with SaaS-level polish—structured learning, refined UX, and confident outcomes.",
      },
      {
        desktop: banner3,
        mobile: bannerMobile,
        kicker: "Find the best programme for yourself",
        title: "Modern programmes. Professional presentation. Real momentum.",
        subtitle:
          "From MBA to analytics and leadership—experience a calm, premium interface built for readability and decision-making.",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % banners.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [banners.length]);

  return (
    <main className="page">
      <header
        className="hero heroBanner"

      >
        <div className="bannerFrame" aria-hidden="true">
          {banners.map((b, i) => (
            <div
              key={b.title}
              className={`bannerLayer ${i === active ? "isActive" : ""}`}
            >
              <picture>
                <source media="(max-width: 920px)" srcSet={b.mobile} />
                <img className="bannerImage" src={b.desktop} alt="" />
              </picture>
              <div className="bannerOverlay" />
              <div className="bannerOverlayArt" />
            </div>
          ))}
        </div>

        <div className="container">
          <div className="heroGrid">
            <div className="heroCard">
              <Reveal as="div" className="pill">
                <span aria-hidden="true">●</span>
                {banners[active].kicker}
              </Reveal>

              <Reveal as="h1" className="h1" style={{ marginTop: 16 }}>
                {banners[active].title}
              </Reveal>
              <Reveal as="p" className="lead" style={{ marginTop: 16 }}>
                {banners[active].subtitle}
              </Reveal>

              <div className="btnRow">
                <Link to="/contact" className="btn btnAccent">
                  Discover courses
                </Link>
                <Link to="/about" className="btn btnSecondary">
                  About the school
                </Link>
              </div>

              <div className="metaRow" aria-label="Highlights">
                <span className="tag">Floriana, Malta</span>
                <span className="tag">Accredited</span>
                <span className="tag">Student-first</span>
              </div>
            </div>

            <div className="heroRight" aria-label="Highlights">
              <Reveal as="div" className="statCard">
                <div className="statValue">MBA • DBA • MSc</div>
                <div className="statLabel">Programmes with clear paths</div>
              </Reveal>
              <Reveal as="div" className="statCard">
                <div className="statValue">Premium UX</div>
                <div className="statLabel">Minimal, structured experience</div>
              </Reveal>
              <Reveal as="div" className="statCard">
                <div className="statValue">Career-ready</div>
                <div className="statLabel">Capstones & professional outcomes</div>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      <section className="section section--muted">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">Why Ascencia</div>
              <h2 className="h2" style={{ marginTop: 10 }}>
                SaaS-grade clarity for a premium student experience.
              </h2>
            </div>
            <p className="lead">
              Strong hierarchy, modern spacing, and thoughtful micro-interactions
              across every page.
            </p>
          </div>

          <div className="grid3">
            <Reveal as="div" className="card">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7.5V6.6c0-.9.7-1.6 1.6-1.6h12.8c.9 0 1.6.7 1.6 1.6v.9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.5 10.2h11M6.5 14h7.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.5 19h15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="h3">Clear learning path</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                A structured sequence with crisp outcomes for each phase—no noise,
                no detours.
              </p>
            </Reveal>

            <Reveal as="div" className="card">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l8 4v6c0 5-3.5 8.6-8 8.9C7.5 21.6 4 18 4 13V7l8-4z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 12.2l2.2 2.2 4.8-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="h3">Premium standards</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                Modern typography, consistent spacing, and a polished UI that
                earns trust.
              </p>
            </Reveal>

            <Reveal as="div" className="card">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17l5-10 5 10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.3 14.2h7.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 20h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="h3">Portfolio-first</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                Build projects that read well, ship cleanly, and demonstrate
                professional decision-making.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">Programs</div>
              <h2 className="h2" style={{ marginTop: 10 }}>
                Programs built for modern business careers.
              </h2>
            </div>
            <p className="lead">
              A clean, card-based layout that stays readable as the catalog grows.
            </p>
          </div>

          <div className="grid3">
            <Reveal as="div" className="card">
              <h3 className="h3">MBA Essentials</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                Strategy, finance, and leadership—delivered as a structured
                sequence with clear outcomes.
              </p>
              <div className="metaRow">
                <span className="tag">12 weeks</span>
                <span className="tag">Cohort</span>
                <span className="tag">Capstone</span>
              </div>
            </Reveal>

            <Reveal as="div" className="card">
              <h3 className="h3">Product Management</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                Market discovery, roadmap strategy, execution frameworks, and
                stakeholder communication.
              </p>
              <div className="metaRow">
                <span className="tag">10 weeks</span>
                <span className="tag">Workshops</span>
                <span className="tag">Mentorship</span>
              </div>
            </Reveal>

            <Reveal as="div" className="card">
              <h3 className="h3">Business Analytics</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                Decision-making with data, dashboards, KPI design, and a clean
                portfolio of analysis work.
              </p>
              <div className="metaRow">
                <span className="tag">8 weeks</span>
                <span className="tag">Portfolio</span>
                <span className="tag">Portfolio</span>
              </div>
            </Reveal>
          </div>

          <div className="btnRow" style={{ marginTop: 28 }}>
            <Link to="/contact" className="btn btnPrimary">
              Speak with admissions
            </Link>
            <Link to="/about" className="btn btnGhost">
              Learn about the school
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">Campus</div>
              <h2 className="h2" style={{ marginTop: 10 }}>
                Modern campus experience, thoughtfully designed.
              </h2>
            </div>
            <p className="lead">
              A clean visual rhythm: balance between content and space, with a
              premium layered UI.
            </p>
          </div>

          <div className="grid2">
            <Reveal as="figure" className="campusArt" aria-label="Campus highlight">
              <img className="campusArtImg" src={heroArt} alt="" />
              <div className="campusArtOverlay" aria-hidden="true" />
            </Reveal>
            <div>
              <Reveal as="div" className="card">
                <h3 className="h3">Cohort-first learning</h3>
                <p className="muted" style={{ marginTop: 10 }}>
                  Small cohorts, strong accountability, and a calm learning
                  environment that keeps momentum high.
                </p>
              </Reveal>
              <div style={{ height: 16 }} />
              <Reveal as="div" className="card">
                <h3 className="h3">Career-ready outcomes</h3>
                <p className="muted" style={{ marginTop: 10 }}>
                  Capstones that look and feel professional—clear narratives,
                  strong structure, and refined presentation.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="card" style={{ padding: 44 }}>
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <div className="sectionKicker">Next step</div>
                <h2 className="h2" style={{ marginTop: 10 }}>
                  Ready to join a premium business cohort?
                </h2>
                <p className="lead" style={{ marginTop: 12 }}>
                  Apply in minutes. We’ll guide you to the best program and intake.
                </p>
              </div>
              <div className="btnRow" style={{ justifyContent: "flex-end" }}>
                <Link to="/contact" className="btn btnAccent">
                  Start application
                </Link>
                <Link to="/about" className="btn btnSecondary">
                  View values
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Home;