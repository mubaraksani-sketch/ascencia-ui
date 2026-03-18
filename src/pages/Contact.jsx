import { useMemo, useState } from "react";
import Reveal from "../components/common/Reveal";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const helperText = useMemo(() => {
    if (status === "sending") return "Sending…";
    if (status === "sent") return "Message sent. We’ll reply soon.";
    return "Typically responds within 1–2 business days.";
  }, [status]);

  function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <main className="page">
      <section className="section bgGlow">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">Contact</div>
              <Reveal as="h1" className="h1" style={{ marginTop: 10 }}>
                Start a conversation with admissions.
              </Reveal>
            </div>
            <Reveal as="p" className="lead">
              Share a few details and we’ll guide you to the right program and
              timeline.
            </Reveal>
          </div>

          <div className="grid2">
            <Reveal as="form" className="card formCard" onSubmit={onSubmit}>
              <h2 className="h2">Send a message</h2>
              <p className="muted" style={{ marginTop: 10 }}>
                {helperText}
              </p>

              <div className="formGrid">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    className="input"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    autoComplete="email"
                    placeholder="you@domain.com"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="topic">What are you interested in?</label>
                  <input
                    id="topic"
                    name="topic"
                    className="input"
                    placeholder="Frontend, Product Design, Career Track…"
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="textarea"
                    placeholder="Tell us what you’re aiming for and your timeline."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btnAccent"
                  disabled={status === "sending"}
                >
                  Submit
                </button>
              </div>
            </Reveal>

            <Reveal as="aside" className="card">
              <h2 className="h2">Contact details</h2>
              <p className="muted" style={{ marginTop: 10 }}>
                This is UI-only info—connect it to your backend anytime.
              </p>

              <div style={{ height: 18 }} />

              <div className="grid2" style={{ gap: 16 }}>
                <div className="card" style={{ padding: 18 }}>
                  <div className="sectionKicker">Email</div>
                  <div style={{ marginTop: 8, fontWeight: 700 }}>
                    admissions@ascencia.edu
                  </div>
                  <div className="muted" style={{ marginTop: 6 }}>
                    For programs & enrollment
                  </div>
                </div>
                <div className="card" style={{ padding: 18 }}>
                  <div className="sectionKicker">Location</div>
                  <div style={{ marginTop: 8, fontWeight: 700 }}>
                    City Campus, Suite 210
                  </div>
                  <div className="muted" style={{ marginTop: 6 }}>
                    Mon–Fri, 10:00–18:00
                  </div>
                </div>
              </div>

              <div style={{ height: 16 }} />

              <div className="card" style={{ padding: 18 }}>
                <div className="sectionKicker">What happens next</div>
                <p className="muted" style={{ marginTop: 10 }}>
                  We’ll review your message and suggest a program path, start
                  date, and next steps.
                </p>
                <div className="metaRow">
                  <span className="tag">Clear plan</span>
                  <span className="tag">No pressure</span>
                  <span className="tag">Fast response</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Contact;