import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

/* ----------------------------------------
   Brand palette (kept subtle & consistent)
----------------------------------------- */
const COLORS = {
  navy: "#1f3352",
  text: "#34495e",
  gold: "#E0B349",
  goldSoft: "rgba(216,179,93,0.24)",
  blueSoft: "rgba(153,182,212,0.24)",
  white90: "rgba(255,255,255,0.90)",
};

function GradientTopBar() {
  return (
    <div
      style={{
        height: 12,
        width: "100%",
        background:
          "linear-gradient(90deg, rgba(216,179,93,0.18) 0%, rgba(255,255,255,0.88) 50%, rgba(153,182,212,0.18) 100%)",
      }}
    />
  );
}

function GradientBottomBar() {
  return (
    <div
      style={{
        height: 44,
        width: "100%",
        borderRadius: 12,
        marginTop: 22,
        border: "1px solid rgba(20,40,60,0.08)",
        background:
          "linear-gradient(90deg, rgba(216,179,93,0.24) 0%, rgba(255,255,255,0.88) 48%, rgba(153,182,212,0.24) 100%)",
      }}
    />
  );
}

/* ----------------------------------------
   Responsive Header with Mobile Menu
----------------------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/elite", label: "ELITE" },
    { to: "/speaking", label: "Speaking" },
    { to: "/veterans", label: "Veterans" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <GradientTopBar />
      {/* Banner */}
      <div className="banner-wrap">
        <img
          src="/one-leader-banner.png"
          alt="One Leader at a Time – Leadership Group"
          className="banner-img"
        />
      </div>

      {/* Nav bar */}
      <nav className="nav">
        <div className="container nav-inner">
          <button
            className="burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-list ${open ? "nav-list--open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link--active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

/* ----------------------------------------
   Footer
----------------------------------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <Link to="/elite" className="footer-a">ELITE</Link>
          <Link to="/services" className="footer-a">Services</Link>
          <Link to="/speaking" className="footer-a">Speaking</Link>
          <Link to="/veterans" className="footer-a">Veterans</Link>
          <Link to="/contact" className="footer-a">Contact</Link>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} One Leader at a Time – Leadership Group, LLC. All rights reserved.
        </div>
      </div>
      <div className="footer-gradient" />
    </footer>
  );
}

/* ----------------------------------------
   Buttons
----------------------------------------- */
function Btn({ to = "#", children }) {
  return (
    <Link className="btn" to={to}>
      {children}
    </Link>
  );
}
function BtnOutline({ href = "#", children }) {
  return (
    <a className="btn-outline" href={href}>
      {children}
    </a>
  );
}

/* ----------------------------------------
   Pages (mobile-stacking layouts)
----------------------------------------- */
function HomePage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Lead Today. Transform Tomorrow.</h1>
        <p className="lead">
          Empowering leaders and organizations through the E.L.I.T.E.™ Framework —
          Empower, Lead, Inspire, Transform, Elevate.
        </p>
        <div className="cta-row">
          <Btn to="/contact">Book a discovery call</Btn>
          <Btn to="/elite">Explore the E.L.I.T.E.™ Framework</Btn>
        </div>
        <GradientBottomBar />
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        {/* LEFT */}
        <div>
          <h1>About Jesseana Fernandes</h1>
          <p>
            Jesseana Fernandes is a transformational senior leader and <strong>Chief Warrant Officer
            Three (CW3)</strong> with over two decades of experience leading in complex, high-stakes
            environments. As a <strong>Senior Manager in aerospace operations</strong>, she blends
            disciplined execution with people-first leadership to build resilient, high-performing teams.
          </p>
          <p>
            Trained to serve as a technical advisor to officers at every level — including
            <strong> senior commissioned officers</strong> — Jesseana has a proven record of mentoring
            leaders, elevating standards, and driving cultural momentum. Her leadership is grounded in
            purpose, accountability, clarity, and dignity — principles that create clarity in complexity
            and performance under pressure.
          </p>
          <p>
            Faith and service inform Jesseana’s approach: <em>great organizations are built one leader at a time.</em>{" "}
            That conviction inspired <strong>One Leader at a Time – Leadership Group™</strong> and its proprietary{" "}
            <strong>E.L.I.T.E.™ Framework</strong> — Empower, Lead, Inspire, Transform, Elevate — translating values
            into daily behaviors, decision frameworks, and measurable outcomes.
          </p>

          <h2>Signature Strengths</h2>
          <ul>
            <li><strong>Leader Development:</strong> coaching, standards, and rituals that raise performance</li>
            <li><strong>Organizational Resilience:</strong> change navigation, risk playbooks, continuity planning</li>
            <li><strong>Operational Excellence:</strong> cadence systems, ownership, disciplined follow-through</li>
            <li><strong>Culture Building:</strong> trust, accountability, and feedback loops that stick</li>
          </ul>

          <h2>About One Leader at a Time – Leadership Group™</h2>
          <p>
            <strong>One Leader at a Time – Leadership Group™</strong> was founded with a simple purpose:
            to transform ordinary leadership moments into legendary impact. Rooted in integrity, resilience, and service,
            Jesseana’s team equips executives, emerging leaders, and transitioning veterans to lead with courage and clarity.
            The organization’s approach—anchored in the <strong>E.L.I.T.E.™ Framework</strong>—helps clients turn values
            into action and vision into results.
          </p>
          <p>
            Through leadership development, strategic alignment, and operational excellence, the firm partners with
            organizations to elevate culture, improve decision-making, and sustain performance in the most demanding
            environments. Every engagement reflects the belief that leadership is not a title—it’s a responsibility to
            empower others.
          </p>
          <p>
            Veteran-owned, women-led, and purpose-driven, <strong>One Leader at a Time – Leadership Group™</strong> brings
            faith, strategy, and experience together to build stronger teams, resilient leaders, and enduring organizations.
          </p>
        </div>

        {/* RIGHT (soft-fade portrait) */}
        <div className="portrait-col">
          <figure className="portrait-wrap">
            <img src="/about-jesseana.jpg" alt="Jesseana Fernandes" />
          </figure>
          <p className="portrait-caption">
            Jesseana Fernandes, CW3 — Founder of One Leader at a Time – Leadership Group™
          </p>
        </div>
      </div>
      <div className="container">
        <GradientBottomBar />
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Services</h1>
        <p className="lead">
          Transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework — Empower, Lead, Inspire, Transform, Elevate.
        </p>
        <div className="cards-grid">
          <div className="card">
            <h3>Leadership &amp; Team Development</h3>
            <p className="muted">High-impact workshops to strengthen trust, communication, and decision-making across all levels of leadership.</p>
          </div>
          <div className="card">
            <h3>Executive &amp; Strategic Coaching</h3>
            <p className="muted">Customized one-on-one or small-group coaching for senior leaders navigating transformation and performance excellence.</p>
          </div>
          <div className="card">
            <h3>Veteran Transition Leadership</h3>
            <p className="muted">
              Comprehensive support for transitioning service members and veterans: leadership translation, resume &amp; LinkedIn,
              interview prep, job search coaching, career counseling, mentor matching, and 30-60-90 onboarding plans — all aligned to E.L.I.T.E.™.
            </p>
          </div>
          <div className="card">
            <h3>Organizational Resilience Consulting</h3>
            <p className="muted">Build adaptability and continuity strategies for long-term success in complex environments.</p>
          </div>
          <div className="card">
            <h3>Speaking &amp; Keynotes</h3>
            <p className="muted">Dynamic keynotes and presentations rooted in leadership, resilience, and transformation across high-stakes environments.</p>
          </div>
        </div>
        <div className="cta-row">
          <Btn to="/contact">Schedule a consultation</Btn>
        </div>
        <GradientBottomBar />
      </div>
    </section>
  );
}

function ElitePage() {
  return (
    <section className="section">
      <div className="container">
        <h1>E.L.I.T.E.™ Framework</h1>
        <p className="lead">
          Empower, Lead, Inspire, Transform, Elevate — a practical system to simplify decisions and drive change with clarity and care.
        </p>

        <div className="cards-grid">
          <div className="card">
            <h3>Empower</h3>
            <p className="muted">Build confidence, autonomy, and accountability at every level.</p>
            <ul>
              <li>Role clarity &amp; decision rights</li>
              <li>Cadence systems for ownership</li>
              <li>Coaching standards &amp; rituals</li>
            </ul>
            <div className="tagline">Outcome: Teams move faster with less friction.</div>
          </div>
          <div className="card">
            <h3>Lead</h3>
            <p className="muted">Model values, align decisions, and communicate with precision.</p>
            <ul>
              <li>Leader standards &amp; daily behaviors</li>
              <li>Decision frameworks under pressure</li>
              <li>Run-of-show discipline &amp; brief/debrief</li>
            </ul>
            <div className="tagline">Outcome: Clear priorities. Consistent execution.</div>
          </div>
          <div className="card">
            <h3>Inspire</h3>
            <p className="muted">Craft vision and messaging that mobilize action — not just agreement.</p>
            <ul>
              <li>Vision-to-action communication</li>
              <li>Leader narrative &amp; symbols</li>
              <li>Recognition loops that stick</li>
            </ul>
            <div className="tagline">Outcome: Momentum you can feel and measure.</div>
          </div>
          <div className="card">
            <h3>Transform</h3>
            <p className="muted">Navigate change with resilience and systems thinking.</p>
            <ul>
              <li>Change navigation playbooks</li>
              <li>Risk, response &amp; continuity planning</li>
              <li>After-action learning (close the loop)</li>
            </ul>
            <div className="tagline">Outcome: Adaptability without chaos.</div>
          </div>
          <div className="card">
            <h3>Elevate</h3>
            <p className="muted">Sustain excellence through coaching, mentoring, and measurement.</p>
            <ul>
              <li>Leader pipelines &amp; transition plans</li>
              <li>Pulse metrics that matter</li>
              <li>Promotion readiness &amp; 30-60-90s</li>
            </ul>
            <div className="tagline">Outcome: A culture that compounds.</div>
          </div>
        </div>

        <div className="cta-row">
          <Btn to="/contact">Request ELITE program details</Btn>
          <BtnOutline href="/OneLeaderAtATime_Speaker-OneSheet.pdf">
            Download one-sheet
          </BtnOutline>
        </div>

        <GradientBottomBar />
      </div>
    </section>
  );
}

function SpeakingPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Speaking &amp; Keynotes</h1>
        <p className="lead">
          High-energy, high-credibility talks that turn leadership principles into action.
          Jesseana brings two decades of military and aerospace leadership to the stage,
          equipping audiences to lead with clarity, courage, and the E.L.I.T.E.™ mindset.
        </p>

        {/* Snapshot cards */}
        <div className="cards-grid">
          <div className="card">
            <h3>Formats</h3>
            <ul>
              <li>Keynote (20–45 min)</li>
              <li>Fireside chat / Panelist</li>
              <li>Workshop / Masterclass (60–120 min)</li>
            </ul>
          </div>
          <div className="card">
            <h3>Audiences</h3>
            <ul>
              <li>Executives &amp; senior leaders</li>
              <li>Emerging leaders &amp; ERGs</li>
              <li>Technical / operations teams</li>
              <li>Veteran &amp; transition groups</li>
            </ul>
          </div>
          <div className="card">
            <h3>Outcomes</h3>
            <ul>
              <li>Clarity &amp; accountability</li>
              <li>Decision speed under pressure</li>
              <li>Culture momentum &amp; ownership</li>
            </ul>
          </div>
          <div className="card">
            <h3>Travel &amp; Delivery</h3>
            <ul>
              <li>Domestic &amp; international</li>
              <li>Based in Oklahoma City, OK</li>
              <li>In-person or virtual</li>
            </ul>
          </div>
        </div>

        <h2>Signature Topics</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Building High-Performance Teams in High-Stakes Environments</h3>
            <p className="muted">
              Align roles, run disciplined stand-ups, and execute with urgency—without burning people out.
            </p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Team trust &amp; cadence systems</li>
              <li>Clarity of priorities &amp; ownership</li>
              <li>Faster, cleaner handoffs</li>
            </ul>
          </div>
          <div className="card">
            <h3>Culture as a Competitive Advantage</h3>
            <p className="muted">
              Turn values into behaviors, feedback loops, and visible leadership standards that lift performance.
            </p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Leadership standards &amp; rituals</li>
              <li>Constructive feedback culture</li>
              <li>Retention &amp; engagement gains</li>
            </ul>
          </div>
          <div className="card">
            <h3>The E.L.I.T.E.™ Framework: Practical Leadership for Real Results</h3>
            <p className="muted">
              A field-tested system to simplify decisions and drive change with discipline and care.
            </p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Decision frameworks</li>
              <li>Change navigation</li>
              <li>Post-event action plans</li>
            </ul>
          </div>
          <div className="card">
            <h3>Leading Through Change—Without Burning People Out</h3>
            <p className="muted">
              Practical playbooks for risk, response, and communication that protect people and performance.
            </p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Change brief / debrief cadence</li>
              <li>Continuity &amp; risk buffers</li>
              <li>Leader message map</li>
            </ul>
          </div>
          <div className="card">
            <h3>Veteran-to-Leader Transition Playbook</h3>
            <p className="muted">
              Translate military excellence into civilian leadership and career success.
            </p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Resume &amp; LinkedIn positioning</li>
              <li>Interview preparation</li>
              <li>30-60-90 leadership plans</li>
            </ul>
          </div>
          <div className="card">
            <h3>Women Leading in High-Stakes Environments</h3>
            <p className="muted">
              Standards, systems, and presence—without compromise.
            </p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Confidence &amp; communication under pressure</li>
              <li>Sponsor versus mentor map</li>
              <li>Strategic network design</li>
            </ul>
          </div>
        </div>

        <div className="cta-row">
          <Btn to="/contact#speaking">Check availability</Btn>
          <BtnOutline href="/OneLeaderAtATime_Speaker-OneSheet.pdf">
            Download speaker one-sheet
          </BtnOutline>
        </div>

        <GradientBottomBar />
      </div>
    </section>
  );
}

function VeteransPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Veteran Transition Leadership</h1>
        <p className="lead">
          End-to-end support to translate military excellence into civilian leadership and career success.
        </p>

        <div className="cards-grid">
          <div className="card">
            <h3>Positioning &amp; Branding</h3>
            <ul>
              <li>Resume &amp; LinkedIn redesign (impact-first, metrics-forward)</li>
              <li>Translate MOS to business competencies</li>
              <li>Leadership value narrative &amp; career pitch</li>
            </ul>
          </div>
          <div className="card">
            <h3>Interview &amp; Offers</h3>
            <ul>
              <li>Behavioral interview practice (STAR+Impact)</li>
              <li>Portfolio &amp; story bank (ops, risk, turnarounds)</li>
              <li>Offer review &amp; salary negotiation planning</li>
            </ul>
          </div>
          <div className="card">
            <h3>On-Ramp Plans</h3>
            <ul>
              <li>30-60-90 leadership plan templates</li>
              <li>Stakeholder mapping &amp; cadence design</li>
              <li>KPIs that build early credibility</li>
            </ul>
          </div>
          <div className="card">
            <h3>Mentors &amp; Network</h3>
            <ul>
              <li>Mentorship matching (industry &amp; function)</li>
              <li>Informational interview scripts</li>
              <li>Target company shortlists &amp; warm paths</li>
            </ul>
          </div>
        </div>

        <h2>What You’ll Walk Away With</h2>
        <ul>
          <li>Industry-ready resume &amp; LinkedIn that showcase leadership impact</li>
          <li>Confident interview stories that translate military outcomes to business value</li>
          <li>A practical 30-60-90 plan for your first 90 days in role</li>
          <li>A network plan and outreach system that actually moves the needle</li>
        </ul>

        <div className="cta-row">
          <Btn to="/contact#veterans">Start your transition</Btn>
          <BtnOutline href="https://www.linkedin.com/in/jesseanafernandes-enerprisearchitect-busops/" >
            Connect on LinkedIn
          </BtnOutline>
        </div>

        <GradientBottomBar />
      </div>
    </section>
  );
}

function ContactPage() {
  // Netlify Forms: name="contact" method="POST" data-netlify="true" + hidden input form-name
  return (
    <section className="section">
      <div className="container">
        <h1>Contact</h1>
        <p className="lead">Prefer email? jesse@oneleaderatatimegroup.com</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form"
          action="/thank-you"
          id="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div className="form-row">
            <label>
              Name
              <input name="name" placeholder="Your name" required />
            </label>
          </div>

          <div className="form-row grid-2">
            <label>
              Email
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>
            <label>
              Phone
              <input name="phone" placeholder="(###) ###-####" />
            </label>
          </div>

          <div className="form-row">
            <label>
              What are you looking for?
              <select name="interest" defaultValue="Keynote / Speaking">
                <option>Keynote / Speaking</option>
                <option>Leadership Workshop</option>
                <option>Executive Coaching</option>
                <option>Veteran Transition Program</option>
                <option>Custom Engagement</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              Message
              <textarea name="message" rows={6} placeholder="Tell us about your goals, dates, and audience size…" />
            </label>
          </div>

          <button className="btn" type="submit">Send inquiry</button>
        </form>

        <GradientBottomBar />
      </div>
    </section>
  );
}

/* ----------------------------------------
   App Shell
----------------------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/elite" element={<ElitePage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/veterans" element={<VeteransPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={
            <section className="section">
              <div className="container">
                <h1>Thank you!</h1>
                <p className="lead">Your message has been submitted. We’ll be in touch shortly.</p>
              </div>
            </section>
          } />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
