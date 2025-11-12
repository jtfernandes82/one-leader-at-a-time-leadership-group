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
    <main className="container home">
      {/* HERO */}
      <section className="hero section">
        <h1 className="section-title">Lead Today. Transform Tomorrow.</h1>
        <p className="lede">
          Empowering leaders and organizations through the{" "}
          <strong>E.L.I.T.E.™ Framework</strong> — Empower, Lead, Inspire, Transform, Elevate.
        </p>
        {/* ❌ Removed the double button bar */}
      </section>

      {/* WHO WE HELP */}
      <section className="section intro">
        <h2>Who We Help</h2>
        <p>
          We partner with organizations, teams, and individual leaders who want to elevate
          performance, strengthen culture, and build sustainable systems of excellence.
        </p>
        <ul className="pill-list">
          <li>Military and veteran leaders</li>
          <li>Corporate and manufacturing teams</li>
          <li>Emerging professionals</li>
          <li>Faith-driven leadership groups</li>
        </ul>
      </section>

      {/* ELITE SNAPSHOT */}
      <section className="section elite-preview">
        <h2>The E.L.I.T.E.™ Snapshot</h2>
        <p>
          A proven framework to align values, improve communication, and transform culture —
          one leader at a time.
        </p>

        <div className="elite-grid">
          <article>
            <h3>E — Empower</h3>
            <p>Equip teams with clarity, trust, and ownership.</p>
          </article>
          <article>
            <h3>L — Lead</h3>
            <p>Model consistency and accountability every day.</p>
          </article>
          <article>
            <h3>I — Inspire</h3>
            <p>Connect people to purpose and mission.</p>
          </article>
          <article>
            <h3>T — Transform</h3>
            <p>Turn challenges into catalysts for improvement.</p>
          </article>
          <article>
            <h3>E — Elevate</h3>
            <p>Measure, coach, and celebrate progress.</p>
          </article>
        </div>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link to="/elite" className="btn btn-ghost">
            Learn more about the Framework
          </Link>
        </p>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="section testimonials">
        <h2>What Military Leaders Are Saying</h2>
        <div className="testimonial-cards">
          <blockquote>
            “The ELITE framework brought clarity and cohesion to our unit — it helped us lead with
            purpose, not just position.”
            <footer>— Senior NCO, U.S. Army</footer>
          </blockquote>
          <blockquote>
            “Authentic, practical, and mission-focused. This program speaks directly to how
            military leaders can bridge service and civilian success.”
            <footer>— Chief Warrant Officer, National Guard</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <h2>Ready to elevate your team?</h2>
        <p>Let’s turn your leadership vision into a roadmap for results.</p>
        <div className="buttons">
          <Link to="/contact" className="btn">
            Schedule a call
          </Link>
          <Link to="/speaking" className="btn btn-ghost">
            See speaking topics
          </Link>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-grid">
          <div className="about-text">
            <h1>About Jesseana "Jesse" Fernandes</h1>
            <p className="lead">
              Founder of <strong>One Leader At A Time Leadership Group™</strong>. Veteran and builder
              of high-performance teams. I help leaders elevate people and culture through the
              <strong> E.L.I.T.E.™ Framework</strong> — Empower, Lead, Inspire, Transform, Elevate.
            </p>

            <p>
              My leadership journey began in the U.S. Army and evolved through decades of leading
              teams in high-stakes aerospace operations. What I discovered was that real leadership
              isn’t about position — it’s about purpose, consistency, and the courage to grow even
              when no one’s watching.
            </p>

            <p>
              Today, I use those lessons to equip other leaders and organizations to transform their
              culture from the inside out — one leader, one choice, one act of empowerment at a time.
            </p>

            <p className="about-cta">
              <a className="btn" href="/contact">Book a discovery call</a>
            </p>
          </div>

          <div className="about-photo photo-frame">
            <img
              src="/about-jesseana.jpg"
              alt='Portrait of Jesseana "Jesse" Fernandes'
              className="about-img soft-edges"
            />
          </div>
        </div>
      </section>

      {/* ABOUT THE BUSINESS */}
      <section className="section about-business">
        <div className="about-wrapper">
          <h2>About One Leader At A Time Leadership Group™</h2>
          <p>
            One Leader At A Time is a leadership development and consulting organization focused on
            empowering leaders to strengthen culture, build trust, and achieve sustainable
            performance. Grounded in military discipline, organizational strategy, and faith-based
            principles, the company provides coaching, workshops, and keynote speaking engagements
            that translate leadership theory into practical, measurable growth.
          </p>
          <p>
            Through the E.L.I.T.E.™ Framework, we help leaders and teams redefine excellence —
            aligning vision and values with everyday actions to create lasting transformation.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section about-vision">
        <div className="about-wrapper center">
          <h2>Our Vision</h2>
          <p className="vision">
            To build a world where leaders inspire transformation through empathy, accountability,
            and faith — one decision, one moment, and one leader at a time.
          </p>

          <h2>Our Mission</h2>
          <p className="mission">
            To empower individuals and organizations to lead with clarity, courage, and purpose
            through the E.L.I.T.E.™ Framework — cultivating teams that perform with excellence and
            serve with heart.
          </p>
        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="section about-philosophy">
        <div className="about-wrapper narrow">
          <h2>Founder’s Leadership Philosophy</h2>
          <p>
            I believe leadership is a calling to serve with purpose, lead with integrity, and
            empower others to reach their full potential. True transformation happens when leaders
            model accountability, communicate with clarity, and elevate those they serve. Through
            the E.L.I.T.E.™ Framework, I help leaders cultivate trust, resilience, and performance —
            one leader at a time.
          </p>
          <p className="bible-quote">
            “Whoever wants to become great among you must be your servant.” — Matthew 20:26
          </p>
        </div>
      </section>

      {/* VALUES WE LIVE BY */}
      <section className="section about-values">
        <div className="about-wrapper center">
          <h2>Values We Live By</h2>
          <div className="values-grid">
            <article>
              <h3>Empowerment</h3>
              <p>We equip others with the tools, trust, and courage to lead boldly.</p>
            </article>
            <article>
              <h3>Accountability</h3>
              <p>We hold ourselves and our teams to the highest standards of integrity.</p>
            </article>
            <article>
              <h3>Courage</h3>
              <p>We embrace challenges as opportunities to grow, not barriers to fear.</p>
            </article>
            <article>
              <h3>Faith</h3>
              <p>We lead with conviction, humility, and confidence in purpose-driven work.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="about-wrapper center">
          <h2>Let’s Grow Together</h2>
          <p>
            Whether you’re developing emerging leaders, strengthening a team, or shaping a new
            culture — we’re here to help.
          </p>
          <p><a className="btn" href="/contact">Connect with Jesse</a></p>
        </div>
      </section>
    </main>
  );
}
function Services() {
  return (
    <main className="container services">
      {/* HERO */}
      <section className="section">
        <h1 className="section-title">Services</h1>
        <p className="lede">
          Outcome-focused keynotes, workshops, and coaching that turn the E.L.I.T.E.™ Framework
          into daily leadership behaviors—without adding busywork.
        </p>
      </section>

      {/* PACKAGES */}
      <section className="section">
        <h2>Choose the right format</h2>
        <div className="cards-grid">
          <article className="card">
            <h3>Keynote Talks</h3>
            <p>High-energy sessions that align your audience and spark action.</p>
            <ul className="bullets">
              <li>30–60 minutes + Q&A</li>
              <li>In-person or virtual</li>
              <li>Audience handout</li>
            </ul>
            <div className="meta">
              <span className="tag">Starter</span>
              <span className="range">Typical range: $1,000–$2,500</span>
            </div>
          </article>

          <article className="card">
            <h3>Workshops</h3>
            <p>Hands-on practice applying E.L.I.T.E.™ to your real challenges.</p>
            <ul className="bullets">
              <li>Half-day or full-day</li>
              <li>Templates & playbooks</li>
              <li>Action plans & scorecards</li>
            </ul>
            <div className="meta">
              <span className="tag">Most Popular</span>
              <span className="range">Typical range: $2,500–$5,000+</span>
            </div>
          </article>

          <article className="card">
            <h3>Team Coaching</h3>
            <p>Short, focused sprints to lock in behavior change and results.</p>
            <ul className="bullets">
              <li>Bi-weekly sessions (8–16 weeks)</li>
              <li>Leader scorecards</li>
              <li>Progress reviews</li>
            </ul>
            <div className="meta">
              <span className="tag">Sustain</span>
              <span className="range">Custom proposal</span>
            </div>
          </article>

          <article className="card">
            <h3>Veteran Transition</h3>
            <p>Translate military excellence into civilian leadership impact.</p>
            <ul className="bullets">
              <li>Resume & LinkedIn translation</li>
              <li>Interview coaching</li>
              <li>First-90-days ramp plan</li>
            </ul>
            <div className="meta">
              <span className="tag">Veterans</span>
              <span className="range">Program bundles</span>
            </div>
          </article>
        </div>
      </section>

      {/* TOPICS */}
      <section className="section">
        <h2>Popular topics</h2>
        <div className="topics-grid">
          <article className="topic">
            <h4>ELITE Behaviors that Elevate Team Performance</h4>
            <p>Translate values into daily habits that reduce friction and raise ownership.</p>
          </article>
          <article className="topic">
            <h4>From Constraint to Catalyst</h4>
            <p>Turn bottlenecks into momentum using simple improvement cycles.</p>
          </article>
          <article className="topic">
            <h4>Building Trust at Speed</h4>
            <p>Psychological safety without complacency—coaching micro-skills that stick.</p>
          </article>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section">
        <h2>What’s included</h2>
        <ul className="checklist two-col">
          <li>Discovery call to align on goals & audience</li>
          <li>Customization to your language & scenarios</li>
          <li>Practical tools (scorecards, prompts, templates)</li>
          <li>Clear next-step plan and optional follow-ups</li>
        </ul>
      </section>

      {/* FAQ (lightweight, not duplicating other pages) */}
      <section className="section">
        <h2>Quick answers</h2>
        <div className="faq">
          <details>
            <summary>Do you customize sessions?</summary>
            <p>Yes—content, examples, and tools are tailored to your context and outcomes.</p>
          </details>
          <details>
            <summary>Do you travel?</summary>
            <p>Yes—US travel and virtual delivery options are available.</p>
          </details>
          <details>
            <summary>Non-profit/education pricing?</summary>
            <p>Available on request. Share your event details and we’ll advise.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <h2>Ready to plan your session?</h2>
        <p>Tell me about your audience and goals—I’ll recommend the best format.</p>
        <div className="buttons">
          <Link to="/contact" className="btn">Book a discovery call</Link>
          <Link to="/speaking" className="btn btn-ghost">See speaking details</Link>
        </div>
      </section>
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
