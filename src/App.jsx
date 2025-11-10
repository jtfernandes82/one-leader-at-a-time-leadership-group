import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

/** =========================================================
 * Brand & shared helpers
 * ======================================================= */
const BRAND = {
  name: "One Leader at a Time – Leadership Group™",
  email: "jesse@oneleaderatatimegroup.com",
  banner: "/One Leader at a Time001.png", // make sure this image is in /public
  colors: {
    navy: "#223B6B",
    ink: "#1f2d3d",
    text: "#334155",
    gold: "#F0C460",
    goldDark: "#DBA841",
  },
};

const Button = ({ href = "#", children }) => (
  <a className="btn" href={href}>
    {children}
  </a>
);

/** =========================================================
 * Layout (header + nav + footer with soft gradients)
 * ======================================================= */
const Layout = ({ children }) => {
  return (
    <div className="site">
      {/* Top banner */}
      <header className="banner">
        <img
          src={BRAND.banner}
          alt="One Leader at a Time – Leadership Group"
          className="banner-img"
        />
      </header>

      {/* Navigation (soft, granular gradient) */}
      <nav className="nav">
        <div className="nav-inner">
          <NavLink to="/" end className="navlink">
            Home
          </NavLink>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/services" className="navlink">
            Services
          </NavLink>
          <NavLink to="/elite" className="navlink">
            ELITE
          </NavLink>
          <NavLink to="/speaking" className="navlink">
            Speaking
          </NavLink>
          <NavLink to="/veterans" className="navlink">
            Veterans
          </NavLink>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Main content */}
      <main className="main">{children}</main>

      {/* Footer (matching, subtle gradient, no sharp line) */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            © {new Date().getFullYear()} One Leader at a Time Leadership Group,
            LLC. All rights reserved.
          </div>
          <div className="footer-links">
            <NavLink to="/elite" className="footlink">
              ELITE
            </NavLink>
            <NavLink to="/services" className="footlink">
              Services
            </NavLink>
            <NavLink to="/speaking" className="footlink">
              Speaking
            </NavLink>
            <NavLink to="/veterans" className="footlink">
              Veterans
            </NavLink>
            <NavLink to="/contact" className="footlink">
              Contact
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

/** =========================================================
 * Pages
 * ======================================================= */
const Home = () => (
  <Layout>
    <section className="section home-hero">
      <h1 className="hero-title">Lead Today. Transform Tomorrow.</h1>
      <p className="lead">
        Empowering leaders and organizations through the E.L.I.T.E.™ Framework —
        Empower, Lead, Inspire, Transform, Elevate.
      </p>
      <div className="cta-row">
        <Button href="/contact">Book a discovery call</Button>
        <Button href="/elite">Explore the E.L.I.T.E.™ Framework</Button>
      </div>
    </section>
  </Layout>
);

const About = () => (
  <Layout>
    <section className="section">
      <h2>About Jesseana Fernandes</h2>
      <div className="stack">
        <p>
          Jesseana Fernandes is a transformational senior leader and{" "}
          <strong>Chief Warrant Officer Three (CW3)</strong> with 20+ years of
          military leadership, logistics, and organizational strategy
          experience. In her civilian career as a <strong>Senior Manager</strong>{" "}
          in aerospace operations, she combines the discipline of military
          execution with modern, people-first leadership.
        </p>
        <p>
          Jesseana has mentored leaders from{" "}
          <strong>junior enlisted to senior commissioned officers</strong>,
          serving as a trusted technical advisor at every echelon. Her approach
          is rooted in clarity, accountability, and service—principles that
          consistently deliver high performance in high-stakes environments.
        </p>
        <ul className="bullets">
          <li>
            <strong>Expertise:</strong> leadership development, decision
            frameworks, organizational resilience, supply chain & logistics,
            coaching
          </li>
          <li>
            <strong>Leadership Reach:</strong> frontline supervisors to{" "}
            <strong>senior commissioned officers</strong> & enterprise executives
          </li>
          <li>
            <strong>Commitment:</strong> results with integrity, dignity, and
            purpose—people-first, mission-aligned
          </li>
        </ul>
      </div>

      <h3 className="mt-lg">
        About One Leader at a Time – Leadership Group™
      </h3>
      <div className="stack">
        <p>
          <strong>One Leader at a Time – Leadership Group™</strong> equips
          executives, teams, and transitioning veterans to lead with integrity,
          resilience, and purpose. We deliver executive coaching, organizational
          transformation, and veteran transition leadership—bridging the gap
          between technical mastery and human-centered leadership.
        </p>
        <p>
          Our proprietary <strong>E.L.I.T.E.™ Framework</strong>—Empower, Lead,
          Inspire, Transform, Elevate—translates values into daily behaviors,
          decision cadences, and measurable outcomes. Every engagement strengthens{" "}
          <strong>high-performing teams</strong> and a{" "}
          <strong>resilient culture</strong>.
        </p>
        <p className="tagline">
          VETERAN-OWNED • WOMEN-OWNED • PURPOSE-DRIVEN • LEADERSHIP-FOCUSED
        </p>
        <div className="cta-inline">
          <Button href="/elite">Explore the E.L.I.T.E.™ Framework</Button>
          <Button href="/services">See our services</Button>
        </div>
      </div>
    </section>
  </Layout>
);

const Services = () => (
  <Layout>
    <section className="section">
      <h2>Services</h2>
      <p className="lead">
        We transform leaders, teams, and organizations through the E.L.I.T.E.™
        Framework — Empower, Lead, Inspire, Transform, Elevate.
      </p>

      <div className="cards">
        <article className="card">
          <h4>Leadership & Team Development</h4>
          <p>
            High-impact workshops that strengthen trust, communication, decision-
            making, and execution across all levels.
          </p>
          <ul>
            <li>Team operating rhythm</li>
            <li>Leader standards & rituals</li>
            <li>After-action learning</li>
          </ul>
        </article>

        <article className="card">
          <h4>Executive & Strategic Coaching</h4>
          <p>
            Confidential coaching for senior leaders navigating growth,
            transformation, and cultural momentum.
          </p>
          <ul>
            <li>Decision frameworks</li>
            <li>Executive presence</li>
            <li>Accountability systems</li>
          </ul>
        </article>

        <article className="card">
          <h4>Organizational Resilience</h4>
          <p>
            Build adaptability and continuity strategies that keep your mission
            on track in complex environments.
          </p>
          <ul>
            <li>Change navigation</li>
            <li>Risk & response playbooks</li>
            <li>Metrics that matter</li>
          </ul>
        </article>

        <article className="card">
          <h4>Speaking & Keynotes</h4>
          <p>
            High-energy, practical talks that turn leadership principles into
            action—tailored to your audience.
          </p>
          <ul>
            <li>Keynotes</li>
            <li>Panels & firesides</li>
            <li>Workshops</li>
          </ul>
        </article>

        <article className="card">
          <h4>Veteran Transition Leadership</h4>
          <p>
            Translate military excellence into civilian leadership and career
            success.
          </p>
          <ul>
            <li>Resume & LinkedIn</li>
            <li>Interview prep</li>
            <li>30-60-90 plans</li>
          </ul>
        </article>
      </div>

      <div className="cta-row mt-md">
        <Button href="/contact">Schedule a consultation</Button>
      </div>
    </section>
  </Layout>
);

const Elite = () => (
  <Layout>
    <section className="section">
      <h2>E.L.I.T.E.™ Framework</h2>
      <p className="lead">
        Empower, Lead, Inspire, Transform, Elevate — a field-tested system that
        simplifies decisions and drives change.
      </p>
      <div className="cards five">
        {[
          ["Empower", "Build confidence, autonomy, and accountability."],
          ["Lead", "Model values, align decisions, and execute with clarity."],
          ["Inspire", "Craft vision and communicate to mobilize action."],
          ["Transform", "Navigate change with resilience and systems thinking."],
          [
            "Elevate",
            "Sustain excellence through coaching and continuous learning.",
          ],
        ].map(([title, body]) => (
          <article key={title} className="card">
            <h4>{title}</h4>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="cta-row mt-md">
        <Button href="/contact">Request ELITE program details</Button>
      </div>
    </section>
  </Layout>
);

const Speaking = () => (
  <Layout>
    <section className="section">
      <h2>Speaking & Keynotes</h2>

      <div className="info-callout">
        <div className="callout-text">
          Ready to lock dates or request rates?
        </div>
        <Button href="/contact">Request speaking availability</Button>
      </div>

      <div className="cards three mt-md">
        <article className="card">
          <h4>Building High-Performance Teams in High-Stakes Environments</h4>
          <p>
            Align roles, run disciplined stand-ups, and execute with urgency—
            without burning people out.
          </p>
          <div className="small">
            <div className="subhead">Audience takeaways</div>
            <ul>
              <li>Team trust & cadence systems</li>
              <li>Clarity of priorities & ownership</li>
              <li>Faster, cleaner handoffs</li>
            </ul>
          </div>
        </article>

        <article className="card">
          <h4>Culture as a Competitive Advantage</h4>
          <p>
            Turn values into visible standards, feedback loops, and leadership
            rituals that lift performance.
          </p>
          <div className="small">
            <div className="subhead">Audience takeaways</div>
            <ul>
              <li>Leadership standards & rituals</li>
              <li>Constructive feedback culture</li>
              <li>Retention & engagement gains</li>
            </ul>
          </div>
        </article>

        <article className="card">
          <h4>The E.L.I.T.E.™ Framework: Practical Leadership for Real Results</h4>
          <p>
            A system to simplify decisions, navigate change, and convert
            insight into action.
          </p>
          <div className="small">
            <div className="subhead">Audience takeaways</div>
            <ul>
              <li>Decision frameworks</li>
              <li>Change navigation</li>
              <li>Post-event action plans</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  </Layout>
);

const Veterans = () => (
  <Layout>
    <section className="section">
      <h2>Veteran Transition Leadership</h2>
      <p className="lead">
        From junior enlisted to senior commissioned officers — stepping into what’s
        next with confidence.
      </p>
      <ul className="bullets">
        <li>Leadership & skills translation into executive-ready language</li>
        <li>Resume & LinkedIn development for leadership/technical roles</li>
        <li>Interview preparation + executive presence</li>
        <li>Job search coaching & market navigation strategies</li>
        <li>Career counseling aligned to purpose & advancement goals</li>
        <li>Senior mentor matching & executive networking</li>
        <li>Target-role 30-60-90 onboarding plan aligned to E.L.I.T.E.™</li>
      </ul>
      <div className="cta-row mt-md">
        <Button href="/contact">Start your transition</Button>
      </div>
    </section>
  </Layout>
);

const Contact = () => (
  <Layout>
    <section className="section">
      <h2>Contact</h2>
      <p className="lead">
        Tell us about your goals, dates, and audience. We’ll recommend the best
        path forward.
      </p>

      <div className="contact-grid">
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label>
            Phone
            <input name="phone" type="text" placeholder="(###) ###-####" />
          </label>
          <label>
            What are you looking for?
            <select name="topic">
              <option>Keynote / Speaking</option>
              <option>Leadership Workshop</option>
              <option>Executive Coaching</option>
              <option>Veteran Transition Program</option>
              <option>Custom Engagement</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="6"
              placeholder="Share goals, dates, audience size…"
            />
          </label>
          <button className="btn" type="submit">
            Send inquiry
          </button>
        </form>

        <div className="contact-side">
          <div>
            <strong>Email: </strong>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>
          <div>
            <strong>Location: </strong> Oklahoma City, OK
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

/** =========================================================
 * Router
 * ======================================================= */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/elite" element={<Elite />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/veterans" element={<Veterans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
