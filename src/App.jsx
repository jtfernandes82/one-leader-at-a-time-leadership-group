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
      {/* LEFT COLUMN */}
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

      {/* RIGHT COLUMN: SOFT BLEND PORTRAIT */}
      <figure className="soft-frame" style={{ margin: 0 }}>
        <img
          src="/about-jesseana.jpg"
          alt="Jesseana Fernandes portrait"
        />
        <figcaption className="figcap">
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
      <p className="lead">
        The E.L.I.T.E.™ Framework turns values into visible behaviors and
        measurable results. Empower, Lead, Inspire, Transform, Elevate — a
        practical system to simplify decisions and drive change with clarity and
        care.
      </p>

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginTop: 18,
        }}
      >
        {/* Empower */}
        <div className="card">
          <h3>Empower</h3>
          <p className="muted">
            Build confidence, autonomy, and accountability at every level.
          </p>
          <ul>
            <li>Role clarity & decision rights</li>
            <li>Cadence systems for ownership</li>
            <li>Coaching standards & rituals</li>
          </ul>
          <div className="tagline">Outcome: Teams move faster with less friction.</div>
        </div>

        {/* Lead */}
        <div className="card">
          <h3>Lead</h3>
          <p className="muted">
            Model values, align decisions, and communicate with precision.
          </p>
          <ul>
            <li>Leader standards & daily behaviors</li>
            <li>Decision frameworks under pressure</li>
            <li>Run-of-show discipline & brief/debrief</li>
          </ul>
          <div className="tagline">Outcome: Clear priorities. Consistent execution.</div>
        </div>

        {/* Inspire */}
        <div className="card">
          <h3>Inspire</h3>
          <p className="muted">
            Craft vision and messaging that mobilize action — not just agreement.
          </p>
          <ul>
            <li>Vision-to-action communication</li>
            <li>Leader narrative & symbols</li>
            <li>Recognition loops that stick</li>
          </ul>
          <div className="tagline">Outcome: Momentum you can feel and measure.</div>
        </div>

        {/* Transform */}
        <div className="card">
          <h3>Transform</h3>
          <p className="muted">
            Navigate change with resilience and systems thinking.
          </p>
          <ul>
            <li>Change navigation playbooks</li>
            <li>Risk, response & continuity planning</li>
            <li>After-action learning (close the loop)</li>
          </ul>
          <div className="tagline">Outcome: Adaptability without chaos.</div>
        </div>

        {/* Elevate */}
        <div className="card">
          <h3>Elevate</h3>
          <p className="muted">
            Sustain excellence through coaching, mentoring, and measurement.
          </p>
          <ul>
            <li>Leader pipelines & transition plans</li>
            <li>Pulse metrics that matter</li>
            <li>Promotion readiness & 30-60-90s</li>
          </ul>
          <div className="tagline">Outcome: A culture that compounds.</div>
        </div>
      </div>

      <div
        className="cta"
        style={{
          marginTop: 22,
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <Link className="btn" to="/contact">Request ELITE program details</Link>
        <a className="btn-outline" href="/OneLeaderAtATime_Speaker-OneSheet.pdf">
          Download one-sheet
        </a>
      </div>
    </div>
  </section>
);


const SpeakingPage = () => (
  <section className="section">
    <div className="container">

      <h1>Speaking &amp; Keynotes</h1>
      <p className="lead">
        High-energy, high-credibility talks that turn leadership principles into action.
        Jesseana brings two decades of military and aerospace leadership to the stage,
        equipping audiences to lead with clarity, courage, and the E.L.I.T.E.™ mindset.
      </p>

      {/* Quick facts grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
          marginTop: 10,
        }}
      >
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Formats</h3>
          <ul>
            <li>Keynote (20–45 min)</li>
            <li>Fireside chat / Panelist</li>
            <li>Workshop / Masterclass (60–120 min)</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Audiences</h3>
          <ul>
            <li>Executives &amp; senior leaders</li>
            <li>Emerging leaders &amp; ERGs</li>
            <li>Technical / operations teams</li>
            <li>Veteran &amp; transition groups</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Outcomes</h3>
          <ul>
            <li>Clarity &amp; accountability</li>
            <li>Decision speed under pressure</li>
            <li>Culture momentum &amp; ownership</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Travel &amp; Delivery</h3>
          <ul>
            <li>Domestic &amp; international</li>
            <li>Based in Oklahoma City, OK</li>
            <li>In-person or virtual</li>
          </ul>
        </div>
      </div>

      {/* Flexible CTA panel (no overlap on any screen) */}
      <div
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid rgba(20,40,60,.10)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,.70), rgba(255,255,255,.92))",
          display: "flex",
          gap: 14,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 240 }}>
          <strong>Ready to lock dates or request rates?</strong>
          <div style={{ color: "#576578" }}>
            Use the contact form and mention your event name, location, and
            preferred format.
          </div>
        </div>
        <Link className="btn" to="/contact#speaking">
          Request speaking availability
        </Link>
      </div>

      <h2 style={{ marginTop: 22 }}>Signature Topics</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {/* Topic 1 */}
        <div className="card">
          <h3>Building High-Performance Teams in High-Stakes Environments</h3>
          <p className="muted">
            Align roles, run disciplined stand-ups, and execute with urgency—
            without burning people out.
          </p>
          <div style={{ fontWeight: 600, marginTop: 8 }}>Audience takeaways</div>
          <ul>
            <li>Team trust &amp; cadence systems</li>
            <li>Clarity of priorities &amp; ownership</li>
            <li>Faster, cleaner handoffs</li>
          </ul>
        </div>

        {/* Topic 2 */}
        <div className="card">
          <h3>Culture as a Competitive Advantage</h3>
          <p className="muted">
            Turn values into behaviors, feedback loops, and visible leadership
            standards that lift performance.
          </p>
          <div style={{ fontWeight: 600, marginTop: 8 }}>Audience takeaways</div>
          <ul>
            <li>Leadership standards &amp; rituals</li>
            <li>Constructive feedback culture</li>
            <li>Retention &amp; engagement gains</li>
          </ul>
        </div>

        {/* Topic 3 */}
        <div className="card">
          <h3>
            The E.L.I.T.E.™ Framework: Practical Leadership for Real Results
          </h3>
          <p className="muted">
            A field-tested system to simplify decisions and drive change with
            discipline and care.
          </p>
          <div style={{ fontWeight: 600, marginTop: 8 }}>Audience takeaways</div>
          <ul>
            <li>Decision frameworks</li>
            <li>Change navigation</li>
            <li>Post-event action plans</li>
          </ul>
        </div>

        {/* Topic 4 */}
        <div className="card">
          <h3>Leading Through Change—Without Burning People Out</h3>
          <p className="muted">
            Practical playbooks for risk, response, and communication that
            protect people and performance.
          </p>
          <div style={{ fontWeight: 600, marginTop: 8 }}>Audience takeaways</div>
          <ul>
            <li>Change brief / debrief cadence</li>
            <li>Continuity &amp; risk buffers</li>
            <li>Leader message map</li>
          </ul>
        </div>

        {/* Topic 5 */}
        <div className="card">
          <h3>Veteran-to-Leader Transition Playbook</h3>
          <p className="muted">
            Translate military excellence into civilian leadership and career success.
          </p>
          <div style={{ fontWeight: 600, marginTop: 8 }}>Audience takeaways</div>
          <ul>
            <li>Resume &amp; LinkedIn positioning</li>
            <li>Interview preparation</li>
            <li>30-60-90 leadership plans</li>
          </ul>
        </div>

        {/* Topic 6 */}
        <div className="card">
          <h3>Women Leading in High-Stakes Environments</h3>
          <p className="muted">
            Standards, systems, and presence—without compromise.
          </p>
          <div style={{ fontWeight: 600, marginTop: 8 }}>Audience takeaways</div>
          <ul>
            <li>Confidence &amp; communication under pressure</li>
            <li>Sponsor versus mentor map</li>
            <li>Strategic network design</li>
          </ul>
        </div>
      </div>

      <h2 style={{ marginTop: 22 }}>Event Fit &amp; Logistics</h2>
      <ul>
        <li>Keynotes can be adapted for leadership summits, offsites, or town halls.</li>
        <li>Workshops include hands-on tools, templates, and practical action plans.</li>
        <li>Slides are clean and brand-neutral; AV needs are minimal (handheld or lav mic).</li>
        <li>Virtual sessions available via Zoom, Teams, or platform of choice.</li>
      </ul>

      <div
        className="cta"
        style={{
          marginTop: 22,
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <Link className="btn" to="/contact#speaking">
          Check availability
        </Link>
        <a className="btn-outline" href="/OneLeaderAtATime_Speaker-OneSheet.pdf">
          Download speaker one-sheet
        </a>
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
