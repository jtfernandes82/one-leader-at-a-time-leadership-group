import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

/* LinkedIn icon */
function LinkedInIcon({ size = 22 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="#0a66c2"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.82-2.2 3.74-2.2 4 0 4.74 2.6 4.74 6V24h-4v-7c0-1.67-.03-3.82-2.33-3.82-2.34 0-2.7 1.83-2.7 3.7V24h-4V8z"/>
    </svg>
  );
}

/* Header with banner + nav */
function Header() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/elite", label: "ELITE" },
    { to: "/speaking", label: "Speaking" },
    { to: "/veterans", label: "Veterans" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="banner-bar">
        <img
          src="/One%20Leader%20at%20a%20Time001.png"
          alt="One Leader at a Time – Leadership Group"
          className="banner-image"
        />
      </div>

      <nav className="nav">
        <div className="container nav-inner">
          <ul className="nav-list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "is-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            className="nav-social"
            href="https://www.linkedin.com/in/jesseanafernandes-enerprisearchitect-busops/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </a>
        </div>
      </nav>
    </header>
  );
}

/* Footer */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <nav className="footer-links">
          <Link to="/elite">ELITE</Link>
          <Link to="/services">Services</Link>
          <Link to="/speaking">Speaking</Link>
          <Link to="/veterans">Veterans</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer-copy">
          © 2025 One Leader at a Time Leadership Group, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ----- PAGES ----- */

function Home() {
  return (
    <main className="container">
      <h1 className="section-title">Lead Today. Transform Tomorrow.</h1>
      <p className="lede">
        Empowering leaders and organizations through the E.L.I.T.E.™ Framework — Empower, Lead,
        Inspire, Transform, Elevate.
      </p>
      <div className="buttons">
        <Link to="/contact" className="btn">Book a discovery call</Link>
        <Link to="/elite" className="btn">Explore the E.L.I.T.E.™ Framework</Link>
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="container about">
      <h1 className="section-title">About Jesseana Fernandes</h1>

      <div className="about-grid">
        <div>
          <p>
            Jesseana Fernandes is a transformational senior leader and Chief Warrant Officer Three (CW3)
            with over two decades of experience leading in complex, high-stakes environments. As a Senior
            Manager in aerospace operations, she blends disciplined execution with people-first leadership
            to build resilient, high-performing teams.
          </p>

          <p>
            Trained to serve as a technical advisor to officers at every level—including senior commissioned
            officers—Jesseana has a proven record of mentoring leaders, elevating standards, and driving
            cultural momentum. Her leadership is grounded in purpose, accountability, and dignity—principles
            that create clarity in complexity and performance under pressure.
          </p>

          <p>
            Jesseana’s philosophy is simple and proven: <em>great organizations are built one leader at a time.</em>{" "}
            That conviction inspired the creation of One Leader at a Time – Leadership Group™ and its proprietary
            E.L.I.T.E.™ Framework—Empower, Lead, Inspire, Transform, Elevate—a field-tested approach that translates
            values into visible behaviors, decision frameworks, and measurable outcomes leaders can apply immediately.
          </p>
        </div>

        <div className="about-image-wrapper">
          <img src="/about-jesseana.jpg" alt="Jesseana Fernandes" className="about-portrait" />
          <small>Jesseana Fernandes, CW3 — Founder of One Leader at a Time – Leadership Group™</small>
        </div>
      </div>

      <h2 className="section-title">Signature Strengths</h2>
      <ul>
        <li><strong>Leader Development:</strong> coaching, standards, and rituals that raise performance</li>
        <li><strong>Organizational Resilience:</strong> change navigation, risk playbooks, and continuity planning</li>
        <li><strong>Operational Excellence:</strong> cadence systems, clear ownership, and disciplined follow-through</li>
        <li><strong>Culture Building:</strong> trust, accountability, and feedback loops that stick</li>
      </ul>

      <h2 className="section-title">About One Leader at a Time – Leadership Group™</h2>
      <p>
        One Leader at a Time – Leadership Group™ equips executives, teams, and transitioning veterans to lead with
        integrity, resilience, and purpose. We deliver executive coaching, organizational transformation programs,
        and veteran transition leadership—bridging the gap between technical mastery and human-centered leadership.
      </p>
      <p>
        Every engagement is grounded in the E.L.I.T.E.™ Framework, aligning empower, lead, inspire, transform, and
        elevate into practical systems: decision cadence, feedback loops, standards of behavior, and measurable outcomes
        that lift culture and performance.
      </p>
      <p className="tagline">
        VETERAN-OWNED • WOMEN-OWNED • PURPOSE-DRIVEN • LEADERSHIP-FOCUSED
      </p>
    </main>
  );
}

function Services() {
  return (
    <main className="container">
      <h1 className="section-title">Services</h1>
      <p>
        We transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework — Empower,
        Lead, Inspire, Transform, Elevate. Programs can be delivered onsite or virtually and tailored
        by audience level.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Leadership & Team Development</h3>
          <ul>
            <li>Team operating rhythm</li>
            <li>Leader standards & rituals</li>
            <li>After-action learning</li>
          </ul>
        </div>

        <div className="card">
          <h3>Executive & Strategic Coaching</h3>
          <ul>
            <li>Decision frameworks</li>
            <li>Executive presence</li>
            <li>Accountability systems</li>
          </ul>
        </div>

        <div className="card">
          <h3>Organizational Resilience</h3>
          <ul>
            <li>Change navigation</li>
            <li>Risk & response playbooks</li>
            <li>Metrics that matter</li>
          </ul>
        </div>

        <div className="card">
          <h3>Speaking & Keynotes</h3>
          <ul>
            <li>Keynotes</li>
            <li>Panels & firesides</li>
            <li>Workshops</li>
          </ul>
        </div>

        <div className="card">
          <h3>Veteran Transition Leadership</h3>
          <ul>
            <li>Resume & LinkedIn</li>
            <li>Interview prep</li>
            <li>30-60-90 day plans</li>
          </ul>
        </div>
      </div>

      <Link to="/contact" className="btn">Schedule a consultation</Link>
    </main>
  );
}

function Elite() {
  return (
    <main className="container">
      <h1 className="section-title">The E.L.I.T.E.™ Framework</h1>
      <p>
        A practical, repeatable way to lead in high-stakes environments. It turns values into visible
        behaviors and measurable outcomes—so teams move with clarity, speed, and trust.
      </p>

      <div className="card-grid">
        <div className="card"><h3>Empower</h3><p>Set standards and equip teams to own outcomes.</p></div>
        <div className="card"><h3>Lead</h3><p>Model calm, courage, and accountability under pressure.</p></div>
        <div className="card"><h3>Inspire</h3><p>Connect purpose to performance and reinforce the “why.”</p></div>
        <div className="card"><h3>Transform</h3><p>Build cadence, playbooks, and feedback loops that enable change.</p></div>
        <div className="card"><h3>Elevate</h3><p>Measure, refine, and sustain excellence over time.</p></div>
      </div>
    </main>
  );
}

function Speaking() {
  return (
    <main className="container">
      <h1 className="section-title">Speaking & Keynotes</h1>
      <p>
        High-energy, high-credibility talks that turn leadership principles into action. Jesseana brings
        two decades of military and aerospace leadership to the stage, equipping audiences to lead with
        clarity, courage, and the E.L.I.T.E.™ mindset.
      </p>

      <div className="card">
        <p><strong>Formats:</strong> Keynote (20–45 min), Fireside chat, Panelist, Workshop (90–120 min)</p>
        <p><strong>Audiences:</strong> Executives, emerging leaders, technical teams, veteran ERGs</p>
        <p><strong>Outcomes:</strong> Clarity, accountability, decision speed, cultural momentum</p>
        <p><strong>Travel:</strong> Domestic & international • Based in Oklahoma City, OK</p>
      </div>

      <h2 className="section-title">Signature Topics</h2>
      <div className="card-grid">
        <div className="card">
          <h3>Building High-Performance Teams</h3>
          <ul>
            <li>Team trust & cadence systems</li>
            <li>Clarity of priorities & ownership</li>
            <li>Faster, cleaner handoffs</li>
          </ul>
        </div>

        <div className="card">
          <h3>Culture as a Competitive Advantage</h3>
          <ul>
            <li>Leadership standards & rituals</li>
            <li>Constructive feedback culture</li>
            <li>Retention & engagement gains</li>
          </ul>
        </div>

        <div className="card">
          <h3>The E.L.I.T.E.™ Framework: Practical Leadership</h3>
          <ul>
            <li>Decision frameworks</li>
            <li>Change navigation</li>
            <li>Post-event action plans</li>
          </ul>
        </div>
      </div>

      <Link to="/contact" className="btn">Request speaking availability</Link>
    </main>
  );
}

/* --------- UPDATED VETERANS PAGE (full detail) --------- */
function Veterans() {
  return (
    <main className="container">
      <h1 className="section-title">Veteran Transition Leadership</h1>
      <p className="lede">
        End-to-end support for veterans moving into corporate leadership roles—translating military
        discipline, adaptability, and values into civilian career success.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Who this is for</h3>
          <ul>
            <li>Active duty and Guard/Reserve leaders preparing to transition</li>
            <li>Veterans targeting roles in operations, supply chain, and technical leadership</li>
            <li>Military spouses and ERGs building veteran-ready cultures</li>
          </ul>
        </div>

        <div className="card">
          <h3>What you’ll get</h3>
          <ul>
            <li>Resume & LinkedIn built for civilian hiring systems (ATS-ready)</li>
            <li>Positioning that translates MOS/achievements into business outcomes</li>
            <li>Interview prep, story banking, and leadership value cases</li>
            <li>30-60-90 day integration plan tailored to your target role</li>
          </ul>
        </div>

        <div className="card">
          <h3>Program flow</h3>
          <ul>
            <li><strong>Assess:</strong> map strengths, roles, and industries; identify keywords</li>
            <li><strong>Translate:</strong> convert military impact into metrics and business language</li>
            <li><strong>Launch:</strong> networking plan, interview reps, and first-90-days cadence</li>
          </ul>
        </div>
      </div>

      <h2 className="section-title">Common deliverables</h2>
      <ul>
        <li>Executive resume and optimized LinkedIn profile</li>
        <li>2–3 role-specific versions (e.g., Ops Manager, Program Manager, Materials Lead)</li>
        <li>Interview prep kit with accomplishment stories and question bank</li>
        <li>First-week/30/60/90-day onboarding plan with quick-win targets</li>
      </ul>

      <div className="buttons">
        <Link to="/contact" className="btn">Request a veteran consult</Link>
        <a
          className="btn"
          href="mailto:jesse@oneleaderatatimegroup.com?subject=Veteran Transition Consult"
        >
          Email Jesseana
        </a>
      </div>
    </main>
  );
}

/* --------- UPDATED CONTACT PAGE (clean Netlify form) --------- */
// === Contact Page (drop-in replacement) ===
function Contact() {
  return (
    <main className="container contact">
      <section className="section">
        <h1 className="section-title">Get in Touch</h1>
        <p className="lead">
          Have a question or want to book a speaking engagement? I’d love to
          connect and learn more about your goals.
        </p>
        <p>
          Prefer email? Reach me directly at{" "}
          <a href="mailto:jesse@oneleaderatatimegroup.com">
            jesse@oneleaderatatimegroup.com
          </a>
          .
        </p>

        {/* Netlify form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="card contact-form"
        >
          {/* Required hidden inputs for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div className="form-grid">
            <label>
              Name
              <input type="text" name="name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" required />
            </label>

            <label>
              Phone (optional)
              <input type="tel" name="phone" />
            </label>

            <label>
              Topic
              <select name="topic" defaultValue="Discovery call">
                <option>Discovery call</option>
                <option>ELITE Framework</option>
                <option>Speaking availability</option>
                <option>Veteran transition consult</option>
                <option>Other</option>
              </select>
            </label>

            <label className="full-width">
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me a bit about your event or team..."
                required
              ></textarea>
            </label>
          </div>

          <button className="btn" type="submit">
            Send Message
          </button>
        </form>

        <div style={{ marginTop: 24 }}>
          <p>
            You can also connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/jesseanafernandes-enerprisearchitect-busops/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/elite" element={<Elite />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/veterans" element={<Veterans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
