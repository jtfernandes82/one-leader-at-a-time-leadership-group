import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

/* --- LinkedIn Icon --- */
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="#0a66c2"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.82-2.2 3.74-2.2 4 0 4.74 2.6 4.74 6V24h-4v-7c0-1.67-.03-3.82-2.33-3.82-2.34 0-2.7 1.83-2.7 3.7V24h-4V8z"/>
    </svg>
  );
}

/* --- Header with Banner --- */
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
      <div className="header-blend" aria-hidden="true"></div>

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
            <LinkedInIcon />
          </a>
        </div>
      </nav>

      <div className="header-blend bottom" aria-hidden="true"></div>
    </header>
  );
}

/* --- Footer --- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-blend" aria-hidden="true"></div>
      <div className="container footer-inner">
        <nav>
          <Link to="/elite">ELITE</Link>
          <Link to="/services">Services</Link>
          <Link to="/speaking">Speaking</Link>
          <Link to="/veterans">Veterans</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div>
          © 2025 One Leader at a Time Leadership Group, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* --- PAGES --- */
function Home() {
  return (
    <main className="container">
      <h1 className="section-title">Lead Today. Transform Tomorrow.</h1>
      <p>
        Empowering leaders and organizations through the E.L.I.T.E.™ Framework —
        Empower, Lead, Inspire, Transform, Elevate.
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
            Jesseana’s philosophy is simple and proven: <em>great organizations are built one leader at a time.</em> 
            That conviction inspired the creation of One Leader at a Time – Leadership Group™ and its proprietary
            E.L.I.T.E.™ Framework—Empower, Lead, Inspire, Transform, Elevate—a field-tested approach that
            translates values into visible behaviors, decision frameworks, and measurable outcomes.
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

      <div className="service-grid">
        <div className="card"><h3>Leadership & Team Development</h3><p>Trust, communication, and execution across all levels.</p></div>
        <div className="card"><h3>Executive & Strategic Coaching</h3><p>Decision frameworks, executive presence, accountability systems.</p></div>
        <div className="card"><h3>Organizational Resilience</h3><p>Continuity, adaptability, and mission assurance in complex environments.</p></div>
        <div className="card"><h3>Speaking & Keynotes</h3><p>Dynamic keynotes and workshops that turn leadership into action.</p></div>
        <div className="card"><h3>Veteran Transition Leadership</h3><p>Translating military excellence into civilian leadership success.</p></div>
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
        The E.L.I.T.E.™ Framework is a practical, repeatable way to lead in high-stakes environments.
        It turns values into visible behaviors and measurable outcomes—so teams move with clarity,
        speed, and trust.
      </p>

      <div className="elite-grid">
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
        <strong>Formats:</strong> Keynote (20–45 min), Fireside chat, Panelist, Workshop (90–120 min)<br/>
        <strong>Audiences:</strong> Executives, emerging leaders, technical teams, veteran ERGs<br/>
        <strong>Outcomes:</strong> Clarity, accountability, decision speed, cultural momentum<br/>
        <strong>Travel:</strong> Domestic & international • Based in Oklahoma City, OK
      </div>

      <h2 className="section-title">Signature Topics</h2>
      <div className="service-grid">
        <div className="card"><h3>Building High-Performance Teams</h3><p>Team trust, cadence, and disciplined execution.</p></div>
        <div className="card"><h3>Culture as a Competitive Advantage</h3><p>Lift performance through feedback, retention, and engagement.</p></div>
        <div className="card"><h3>The E.L.I.T.E.™ Framework in Action</h3><p>Real-world tools to simplify decisions and drive results.</p></div>
      </div>

      <Link to="/contact" className="btn">Request speaking availability</Link>
    </main>
  );
}

function Veterans() {
  return (
    <main className="container">
      <h1 className="section-title">Veteran Transition Leadership</h1>
      <p>
        End-to-end support for veterans moving into corporate leadership roles — helping translate
        military discipline, adaptability, and values into civilian career success.
      </p>
      <ul>
        <li>Resume and LinkedIn coaching</li>
        <li>Interview preparation and positioning</li>
        <li>30–60–90 day integration plans</li>
      </ul>
    </main>
  );
}

function Contact() {
  return (
    <main className="container">
      <h1 className="section-title">Contact</h1>
      <p>Email: <a href="mailto:jesse@oneleaderatatimegroup.com">jesse@oneleaderatatimegroup.com</a></p>

      <form name="contact" method="POST" data-netlify="true" className="card">
        <input type="hidden" name="form-name" value="contact" />
        <label>Name<input type="text" name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Message<textarea name="message" rows="5" required></textarea></label>
        <button className="btn" type="submit">Send</button>
      </form>
    </main>
  );
}

export default function App() {
  return (
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
