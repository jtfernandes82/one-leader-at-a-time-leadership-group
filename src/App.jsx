import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

const BRAND = {
  legal: "One Leader at a Time Leadership Group, LLC",
  bannerUrl: "/One Leader at a Time001.png",
  linkedin: "https://www.linkedin.com/in/jesseanafernandes-enerprisearchitect-busops/",
};

const NavItem = ({ to, label }) => (
  <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
    {label}
  </NavLink>
);

const SiteHeader = () => (
  <>
    <div className="banner">
      <img src={BRAND.bannerUrl} alt="One Leader at a Time – Leadership Group" />
    </div>
    <header className="nav">
      <div className="container nav-inner">
        <nav className="menu" aria-label="Primary">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/elite" label="ELITE" />
          <NavItem to="/speaking" label="Speaking" />
          <NavItem to="/veterans" label="Veterans" />
          <NavItem to="/contact" label="Contact" />
        </nav>
        <a className="social-link" href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </header>
  </>
);

const SiteFooter = () => (
  <footer className="footer">
    <div className="container footer-row">
      <div>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</div>
      <div className="footer-links">
        <Link to="/elite">ELITE</Link>
        <Link to="/services">Services</Link>
        <Link to="/speaking">Speaking</Link>
        <Link to="/veterans">Veterans</Link>
        <Link to="/contact">Contact</Link>
        <a className="social-link" href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </footer>
);

/* ---------- Pages ---------- */

const HomePage = () => (
  <section className="section home-hero">
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "42px", marginTop: 6 }}>Lead Today. Transform Tomorrow.</h1>
      <p style={{ maxWidth: 820, margin: "10px auto 18px", color: "#415672" }}>
        Empowering leaders and organizations through the E.L.I.T.E.™ Framework — Empower, Lead, Inspire, Transform, Elevate.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 10 }}>
        <Link className="btn btn-gold" to="/contact">Book a discovery call</Link>
        <Link className="btn btn-gold" to="/elite">Explore the E.L.I.T.E.™ Framework</Link>
      </div>
    </div>
  </section>
);

const AboutPage = () => (
  <section className="section">
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: 28,
        alignItems: "start",
      }}
    >
      {/* ---- LEFT COLUMN ---- */}
      <div>
        <h1>About Jesseana Fernandes</h1>

        <p>
          Jesseana Fernandes is a transformational senior leader and{" "}
          <strong>Chief Warrant Officer Three (CW3)</strong> with over two
          decades of experience leading in complex, high-stakes environments. As
          a <strong>Senior Manager in aerospace operations</strong>, she blends
          disciplined execution with people-first leadership to build resilient,
          high-performing teams.
        </p>

        <p>
          Trained to serve as a technical advisor to officers at every level —
          including <strong>senior commissioned officers</strong> — Jesseana has
          a proven record of mentoring leaders, elevating standards, and driving
          cultural momentum. Her leadership is grounded in purpose,
          accountability, clarity, and dignity — principles that create clarity
          in complexity and performance under pressure.
        </p>

        <p>
          Faith and service inform Jesseana’s approach:{" "}
          <em>great organizations are built one leader at a time.</em> That
          conviction inspired{" "}
          <strong>One Leader at a Time – Leadership Group™</strong> and its
          proprietary <strong>E.L.I.T.E.™ Framework</strong> — Empower, Lead,
          Inspire, Transform, Elevate — translating values into daily behaviors,
          decision frameworks, and measurable outcomes.
        </p>

        <h2 style={{ marginTop: 22 }}>Signature Strengths</h2>
        <ul>
          <li>
            <strong>Leader Development:</strong> coaching, standards, and
            rituals that raise performance
          </li>
          <li>
            <strong>Organizational Resilience:</strong> change navigation, risk
            playbooks, continuity planning
          </li>
          <li>
            <strong>Operational Excellence:</strong> cadence systems, ownership,
            disciplined follow-through
          </li>
          <li>
            <strong>Culture Building:</strong> trust, accountability, and
            feedback loops that stick
          </li>
        </ul>

        <h2 style={{ marginTop: 22 }}>
          About One Leader at a Time – Leadership Group™
        </h2>
        <p>
          <strong>One Leader at a Time – Leadership Group™</strong> was founded
          with a simple purpose: to transform ordinary leadership moments into
          legendary impact. Rooted in integrity, resilience, and service,
          Jesseana’s team equips executives, emerging leaders, and transitioning
          veterans to lead with courage and clarity. The organization’s
          approach—anchored in the <strong>E.L.I.T.E.™ Framework</strong>—helps
          clients turn values into action and vision into results.
        </p>

        <p>
          Through leadership development, strategic alignment, and operational
          excellence, the firm partners with organizations to elevate culture,
          improve decision-making, and sustain performance in the most demanding
          environments. Every engagement reflects the belief that leadership is
          not a title—it’s a responsibility to empower others.
        </p>

        <p>
          Veteran-owned, women-led, and purpose-driven,
          <strong> One Leader at a Time – Leadership Group™</strong> brings
          faith, strategy, and experience together to build stronger teams,
          resilient leaders, and enduring organizations.
        </p>
      </div>

      {/* ---- RIGHT COLUMN ---- */}
      <figure style={{ margin: 0, position: "relative" }}>
        <img
          src="/about-jesseana.jpg"
          alt="Jesseana Fernandes portrait"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "14px",
            boxShadow: "0 10px 24px rgba(0,0,0,.12)",
            position: "relative",
            zIndex: 2,
          }}
        />
        {/* soft gradient overlay around the image */}
        <div
          style={{
            position: "absolute",
            top: "-4%",
            left: "-4%",
            right: "-4%",
            bottom: "-4%",
            borderRadius: "18px",
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0) 60%, rgba(255,255,255,0.9) 100%)",
            zIndex: 1,
          }}
        />
        <figcaption className="figcap" style={{ position: "relative", zIndex: 3 }}>
          Jesseana Fernandes, CW3 — Founder of One Leader at a Time – Leadership
          Group™
        </figcaption>
      </figure>
    </div>
  </section>
);


const ServicesPage = () => (
  <section className="section">
    <div className="container">
      <h1>Services</h1>
      <p style={{ maxWidth: 900 }}>
        We transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework — Empower, Lead, Inspire, Transform, Elevate.
        Programs can be delivered onsite or virtually and tailored by audience level.
      </p>

      <div className="grid grid-3" style={{ marginTop: 18 }}>
        <div className="card">
          <h3>Leadership & Team Development</h3>
          <p>High-impact workshops to strengthen trust, communication, decision-making, and execution.</p>
          <ul>
            <li>Team operating rhythm</li>
            <li>Leader standards & rituals</li>
            <li>After-action learning</li>
          </ul>
        </div>

        <div className="card">
          <h3>Executive & Strategic Coaching</h3>
          <p>Confidential coaching for senior leaders navigating growth, transformation, and cultural momentum.</p>
          <ul>
            <li>Decision frameworks</li>
            <li>Executive presence</li>
            <li>Accountability systems</li>
          </ul>
        </div>

        <div className="card">
          <h3>Organizational Resilience</h3>
          <p>Build adaptability and continuity strategies that keep your mission on track in complex environments.</p>
          <ul>
            <li>Change navigation</li>
            <li>Risk & response playbooks</li>
            <li>Metrics that matter</li>
          </ul>
        </div>

        <div className="card">
          <h3>Speaking & Keynotes</h3>
          <p>Dynamic talks that turn leadership principles into action.</p>
          <ul>
            <li>Keynotes</li>
            <li>Panels & firesides</li>
            <li>Workshops</li>
          </ul>
        </div>

        <div className="card">
          <h3>Veteran Transition Leadership</h3>
          <p>End-to-end support to translate military excellence into civilian leadership.</p>
          <ul>
            <li>Resume & LinkedIn</li>
            <li>Interview prep</li>
            <li>30-60-90 plans</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <Link className="btn btn-gold" to="/contact">Schedule a consultation</Link>
      </div>
    </div>
  </section>
);

const ElitePage = () => (
  <section className="section">
    <div className="container">
      <h1>E.L.I.T.E.™ Framework</h1>
      <p><strong>Empower • Lead • Inspire • Transform • Elevate</strong></p>
      <p style={{ maxWidth:900 }}>
        A field-tested system that turns values into visible behaviors and measurable results. Leaders model curiosity, set clear standards, and
        use feedback loops to drive continuous improvement—without burnout.
      </p>
      <div style={{ marginTop: 16 }}>
        <Link className="btn btn-gold" to="/services">See our services</Link>
      </div>
    </div>
  </section>
);

const SpeakingPage = () => (
  <section className="section">
    <div className="container">
      <h1>Speaking & Keynotes</h1>
      <p>
        High-energy, high-credibility talks that bring two decades of military and aerospace leadership to the stage. Formats include keynote
        (20–45 min), fireside chat, panel, and workshops (90–120 min).
      </p>

      <h2 style={{ marginTop: 18 }}>Signature Topics</h2>
      <div className="grid grid-3" style={{ marginTop: 10 }}>
        <div className="card">
          <h3>Building High-Performance Teams</h3>
          <ul>
            <li>Trust & cadence systems</li>
            <li>Priorities & ownership</li>
            <li>Cleaner handoffs</li>
          </ul>
        </div>
        <div className="card">
          <h3>Culture as a Competitive Advantage</h3>
          <ul>
            <li>Leadership standards & rituals</li>
            <li>Constructive feedback loops</li>
            <li>Retention & engagement gains</li>
          </ul>
        </div>
        <div className="card">
          <h3>The E.L.I.T.E.™ Playbook</h3>
          <ul>
            <li>Decision frameworks</li>
            <li>Change navigation</li>
            <li>Post-event action plans</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <Link className="btn btn-gold" to="/contact">Request speaking availability</Link>
      </div>
    </div>
  </section>
);

const VeteransPage = () => (
  <section className="section">
    <div className="container">
      <h1>Veteran Transition Leadership</h1>
      <ul>
        <li>Translate military excellence into executive-ready language</li>
        <li>Resume & LinkedIn development</li>
        <li>Interview preparation & executive presence</li>
        <li>Job-search coaching & market navigation</li>
        <li>Mentor matching & networking strategies</li>
        <li>Target role 30-60-90 plan aligned to E.L.I.T.E.™</li>
      </ul>
      <div style={{ marginTop: 16 }}>
        <Link className="btn btn-gold" to="/contact">Start your transition</Link>
      </div>
    </div>
  </section>
);

const ContactPage = () => (
  <section className="section">
    <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <div>
        <h1>Contact</h1>
        <p>Email — <a href="mailto:jesse@oneleaderatatimegroup.com">jesse@oneleaderatatimegroup.com</a></p>
        <p style={{ marginTop: 12 }}>Prefer a form? Fill it out and we’ll reply shortly.</p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/contact"
        style={{ background: "#fff", padding: 16, borderRadius: 12, border: "1px solid #e7edf5" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}><label>Don’t fill this out: <input name="bot-field" /></label></p>

        <div style={{ display: "grid", gap: 10 }}>
          <label>Name<input name="name" required style={inputStyle} /></label>
          <label>Email<input type="email" name="email" required style={inputStyle} /></label>
          <label>Phone<input name="phone" style={inputStyle} /></label>
          <label>Message<textarea name="message" rows={5} required style={inputStyle} /></label>
          <button className="btn btn-gold" type="submit">Send inquiry</button>
        </div>
      </form>
    </div>
  </section>
);

const inputStyle = {
  width: "100%", marginTop: 6, padding: "10px 12px",
  borderRadius: 10, border: "1px solid #cfe0f0", outline: "none", fontSize: 15
};

/* ---------- App ---------- */
export default function App() {
  return (
    <Router>
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/elite" element={<ElitePage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/veterans" element={<VeteransPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </Router>
  );
}
