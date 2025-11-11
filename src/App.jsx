import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

/* ============ Full-bleed gradient bars ============ */
function TopGradientBar() {
  return (
    <div
      className="fullbleed-bar"
      style={{
        height: 10,
        background:
          "linear-gradient(90deg, rgba(216,179,93,0.18) 0%, rgba(255,255,255,0.92) 50%, rgba(153,182,212,0.18) 100%)",
      }}
    />
  );
}
function FullBleedBottomBand({ height = 46, mt = 22, mb = 8 }) {
  return (
    <div
      className="fullbleed-bar"
      style={{
        height,
        marginTop: mt,
        marginBottom: mb,
        borderTop: "1px solid rgba(20,40,60,0.08)",
        borderBottom: "1px solid rgba(20,40,60,0.08)",
        background:
          "linear-gradient(90deg, rgba(216,179,93,0.24) 0%, rgba(255,255,255,0.88) 48%, rgba(153,182,212,0.24) 100%)",
      }}
    />
  );
}

/* ========================= Header (with banner) ========================= */
function Header() {
  const items = [
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
      <TopGradientBar />

      {/* Banner as background so it scales nicely even if image is tall/short */}
      <div
        className="banner-hero fullbleed-bar"
        aria-label="One Leader at a Time – Leadership Group"
      >
        {/* If the image is missing, user still sees a soft gradient */}
      </div>

      {/* Wrap nav in subtle gradient and allow wrapping on mobile */}
      <nav className="nav">
        <div className="container">
          <ul className="nav-list">
            {items.map((it) => (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link--active" : ""}`
                  }
                >
                  {it.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

/* =============================== Footer ================================ */
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
      <FullBleedBottomBand height={12} mt={6} mb={0} />
    </footer>
  );
}

/* ============================= UI helpers ============================== */
function Btn({ to = "#", children }) {
  return (
    <Link className="btn" to={to}>
      {children}
    </Link>
  );
}
function BtnOutline({ href = "#", children }) {
  return (
    <a className="btn-outline" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

/* ================================ Pages ================================ */
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
      </div>
      {/* Full-width soft band below content */}
      <FullBleedBottomBand />
    </section>
  );
}

function AboutPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h1>About Jesseana Fernandes</h1>
          <p>
            Jesseana Fernandes is a transformational senior leader and <strong>Chief Warrant Officer
            Three (CW3)</strong> with over two decades of expertise in leadership, logistics, and
            organizational strategy. As a <strong>Senior Manager in aerospace operations</strong>, she brings a rare
            dual perspective—combining the precision of military discipline with the innovation of
            corporate excellence.
          </p>
          <p>
            Throughout her career, Jesseana has mentored leaders from <strong>senior commissioned officers</strong> to
            rising talent, serving as a trusted advisor and technical expert to decision-makers at every level.
            Her leadership approach is rooted in purpose, accountability, and service—principles that consistently
            deliver clarity in complex operations and performance under pressure.
          </p>
          <p>
            Her philosophy is simple and proven: <em>great organizations are built one leader at a time</em>. That
            conviction inspired the creation of <strong>One Leader at a Time – Leadership Group™</strong> and its proprietary{" "}
            <strong>E.L.I.T.E.™ Framework</strong>—Empower, Lead, Inspire, Transform, Elevate.
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
            <strong>One Leader at a Time – Leadership Group™</strong> equips executives, teams, and transitioning
            veterans to lead with integrity, resilience, and purpose. We deliver executive coaching, organizational
            transformation programs, and veteran transition leadership—bridging the gap between technical mastery
            and human-centered leadership.
          </p>
          <p>
            Every engagement is grounded in the <strong>E.L.I.T.E.™ Framework</strong>, translating values into daily
            behaviors, decision frameworks, and measurable outcomes. Our mission is to build <strong>high-performing
            teams</strong> and <strong>resilient cultures</strong> that thrive in high-stakes environments.
          </p>
          <p>Veteran-owned • Women-owned • Purpose-driven • Leadership-focused</p>
        </div>

        <div className="portrait-col">
          <figure className="portrait-wrap">
            <img src="/about-jesseana.jpg" alt="Jesseana Fernandes" />
          </figure>
          <p className="portrait-caption">
            Jesseana Fernandes, CW3 — Founder of One Leader at a Time – Leadership Group™
          </p>
        </div>
      </div>

      <FullBleedBottomBand />
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
              Comprehensive support for transitioning service members and veterans: leadership translation, resume &amp; LinkedIn, interview prep, job search coaching, career counseling, mentor matching, and 30-60-90 onboarding plans — all aligned to E.L.I.T.E.™.
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
      </div>
      <FullBleedBottomBand />
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
            <p className="muted">Craft vision and messaging that mobilize action— not just agreement.</p>
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
          <BtnOutline href="/OneLeaderAtATime_Speaker-OneSheet.pdf">Download one-sheet</BtnOutline>
        </div>
      </div>
      <FullBleedBottomBand />
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
            <p className="muted">Align roles, run disciplined stand-ups, and execute with urgency—without burning people out.</p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Team trust &amp; cadence systems</li>
              <li>Clarity of priorities &amp; ownership</li>
              <li>Faster, cleaner handoffs</li>
            </ul>
          </div>
          <div className="card">
            <h3>Culture as a Competitive Advantage</h3>
            <p className="muted">Turn values into behaviors, feedback loops, and visible leadership standards that lift performance.</p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Leadership standards &amp; rituals</li>
              <li>Constructive feedback culture</li>
              <li>Retention &amp; engagement gains</li>
            </ul>
          </div>
          <div className="card">
            <h3>The E.L.I.T.E.™ Framework: Practical Leadership for Real Results</h3>
            <p className="muted">A field-tested system to simplify decisions and drive change with discipline and care.</p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Decision frameworks</li>
              <li>Change navigation</li>
              <li>Post-event action plans</li>
            </ul>
          </div>
          <div className="card">
            <h3>Leading Through Change—Without Burning People Out</h3>
            <p className="muted">Practical playbooks for risk, response, and communication that protect people and performance.</p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Change brief / debrief cadence</li>
              <li>Continuity &amp; risk buffers</li>
              <li>Leader message map</li>
            </ul>
          </div>
          <div className="card">
            <h3>Veteran-to-Leader Transition Playbook</h3>
            <p className="muted">Translate military excellence into civilian leadership and career success.</p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Resume &amp; LinkedIn positioning</li>
              <li>Interview preparation</li>
              <li>30-60-90 leadership plans</li>
            </ul>
          </div>
          <div className="card">
            <h3>Women Leading in High-Stakes Environments</h3>
            <p className="muted">Standards, systems, and presence—without compromise.</p>
            <strong>Audience takeaways</strong>
            <ul>
              <li>Confidence &amp; communication under pressure</li>
              <li>Sponsor vs mentor map</li>
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
      </div>
      <FullBleedBottomBand />
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
          <BtnOutline href="https://www.linkedin.com/in/jesseanafernandes-enerprisearchitect-busops/">
            Connect on LinkedIn
          </BtnOutline>
        </div>
      </div>
      <FullBleedBottomBand />
    </section>
  );
}

function ContactPage() {
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
      </div>
      <FullBleedBottomBand />
    </section>
  );
}

/* ================================ App ================================ */
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
          <Route
            path="/thank-you"
            element={
              <section className="section">
                <div className="container">
                  <h1>Thank you!</h1>
                  <p className="lead">Your message has been submitted. We’ll be in touch shortly.</p>
                </div>
                <FullBleedBottomBand />
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
