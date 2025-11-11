import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

/* ---------- Shared UI ---------- */

function LinkedInIcon() {
  return (
    <svg
      className="icon-linkedin"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.79 53.79 0 1 1 53.79-53.8 53.8 53.8 0 0 1-53.8 53.8zM447.9 448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6V448h-92.5V148.9h88.8v40.8h1.3c12.4-23.5 42.6-48.3 87.7-48.3 93.8 0 111.2 61.8 111.2 142.3V448z" />
    </svg>
  );
}

function Button({ to = "#", children }) {
  return (
    <Link className="btn" to={to}>
      {children}
    </Link>
  );
}

function SectionBand({ tight = false }) {
  return (
    <div
      className="fullbleed blend-band"
      style={{
        height: tight ? 12 : 44,
        marginTop: tight ? 8 : 22,
        marginBottom: tight ? 0 : 10,
      }}
      aria-hidden="true"
    />
  );
}

/* ---------- Layout: Header / Footer ---------- */

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
        <div className="container nav-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <ul className="nav-list" style={{display:'flex',alignItems:'center',margin:0,padding:0,listStyle:'none'}}>
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

function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-blend" aria-hidden="true"></div>
      <div className="container" style={{padding:'18px 0', display:'flex', flexWrap:'wrap', gap:'14px', justifyContent:'space-between', alignItems:'center'}}>
        <nav style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
          <Link to="/elite">ELITE</Link>
          <Link to="/services">Services</Link>
          <Link to="/speaking">Speaking</Link>
          <Link to="/veterans">Veterans</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div style={{opacity:.9}}>
          © 2025 One Leader at a Time Leadership Group, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


/* ---------- Pages ---------- */

function Home() {
  return (
    <section className="section home">
      <div className="container">
        <h1>Lead Today. Transform Tomorrow.</h1>
        <p className="lead">
          Empowering leaders and organizations through the E.L.I.T.E.™ Framework — Empower, Lead, Inspire, Transform, Elevate.
        </p>
        <div className="cta-row">
          <Button to="/contact">Book a discovery call</Button>
          <Button to="/elite">Explore the E.L.I.T.E.™ Framework</Button>
        </div>
      </div>
      <SectionBand />
    </section>
  );
}

function About() {
  return (
    <section className="section about">
      <div className="container grid-2">
        <div>
          <h1>About Jesseana Fernandes</h1>
          <p>
            Jesseana Fernandes is a transformational senior leader and <strong>Chief Warrant Officer Three (CW3)</strong>
            with over two decades of expertise in leadership, logistics, and organizational strategy. As a <strong>Senior Manager in aerospace operations</strong>,
            she brings a dual perspective—combining military precision with corporate excellence—to develop leaders, build resilient cultures, and drive execution under pressure.
          </p>
          <p>
            Having advised leaders from <strong>junior enlisted to senior commissioned officers</strong>, Jesseana serves as a trusted technical and leadership
            advisor to decision-makers at all levels. Her approach blends clarity, accountability, and service—translating into practical systems that improve cadence,
            decision speed, and team performance.
          </p>
          <p>
            Her philosophy is simple and proven: <em>great organizations are built one leader at a time</em>. That conviction inspired the creation of
            <strong> One Leader at a Time – Leadership Group™</strong> and its proprietary <strong>E.L.I.T.E.™ Framework</strong>—Empower, Lead, Inspire, Transform, Elevate.
          </p>

          <h2>About One Leader at a Time – Leadership Group™</h2>
          <p>
            We equip executives, teams, and transitioning veterans to lead with integrity, resilience, and purpose. Every engagement is grounded in the
            E.L.I.T.E.™ Framework—translating values into repeatable behaviors, decision frameworks, and measurable outcomes. We specialize in
            <strong> high-performing teams</strong> and <strong>resilient cultures</strong> that thrive in high-stakes environments.
          </p>
          <ul className="bullets">
            <li>Leader development & coaching systems</li>
            <li>Culture standards, feedback loops, and AARs</li>
            <li>Operational cadence & ownership models</li>
            <li>Change navigation & organizational resilience</li>
          </ul>
        </div>

        <div className="portrait-col">
          <figure className="portrait-wrap">
            <img src="/about-jesseana.jpg" alt="Jesseana Fernandes portrait"className="about-portrait"
/>
          </figure>
          <p className="portrait-caption">
            Jesseana Fernandes, CW3 — Founder of One Leader at a Time – Leadership Group™
          </p>
        </div>
      </div>
      <div className="container">
        <div className="pills">Veteran-Owned • Women-Owned • Purpose-Driven • Leadership-Focused</div>
      </div>
      <SectionBand />
    </section>
  );
}

function ServicesPage(){
  return (
    <main className="container">
      <h1 className="section-title">Services</h1>
      <p>
        We transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework —
        Empower, Lead, Inspire, Transform, Elevate. Programs can be delivered onsite or virtually
        and tailored by audience level.
      </p>

      <div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'16px',marginTop:'14px'}}>
        <div className="card">
          <h3>Leadership & Team Development</h3>
          <p>High-impact workshops to strengthen trust, communication, decision-making, and execution across all levels.</p>
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
          <p>Dynamic talks that translate leadership principles into action, tailored to your audience and outcomes.</p>
          <ul>
            <li>Keynotes</li>
            <li>Panels & firesides</li>
            <li>Workshops</li>
          </ul>
        </div>

        <div className="card">
          <h3>Veteran Transition Leadership</h3>
          <p>End-to-end support to translate military excellence into civilian leadership and career success.</p>
          <ul>
            <li>Résumé & LinkedIn</li>
            <li>Interview prep</li>
            <li>30-60-90 plans</li>
          </ul>
        </div>
      </div>

      <Link to="/contact" className="btn" style={{display:'inline-block',marginTop:'18px'}}>Schedule a consultation</Link>
    </main>
  );
}

function ElitePage(){
  return (
    <main className="container">
      <h1 className="section-title">The E.L.I.T.E.™ Framework</h1>
      <p>
        A practical, repeatable way to lead in high-stakes environments. E.L.I.T.E.™ turns values
        into visible behaviors and measurable outcomes—so teams move with clarity, speed, and trust.
      </p>

      <div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'14px',marginTop:'12px'}}>
        <div className="card"><h3>Empower</h3><p>Set standards, remove friction, and equip people to own the mission.</p></div>
        <div className="card"><h3>Lead</h3><p>Model calm, courage, and accountability—especially under pressure.</p></div>
        <div className="card"><h3>Inspire</h3><p>Tell the story of “why” and keep purpose visible in the work.</p></div>
        <div className="card"><h3>Transform</h3><p>Build mechanisms for change—cadence, playbooks, and feedback loops.</p></div>
        <div className="card"><h3>Elevate</h3><p>Measure, learn, and scale what works to sustain performance.</p></div>
      </div>

      <Link to="/services" className="btn" style={{display:'inline-block',marginTop:'18px'}}>See our services</Link>
    </main>
  );
}

function SpeakingPage(){
  return (
    <main className="container">
      <h1 className="section-title">Speaking & Keynotes</h1>
      <p>
        High-energy, high-credibility talks that turn leadership principles into action. Jesseana brings two decades of
        military and aerospace leadership to the stage, equipping audiences to lead with clarity, courage, and the
        E.L.I.T.E.™ mindset.
      </p>

      <div className="card" style={{margin:'14px 0'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'12px'}}>
          <div><strong>Formats:</strong><br/>Keynote (20–45 min), Fireside chat, Panelist, Workshop (90–120 min)</div>
          <div><strong>Audiences:</strong><br/>Executives, emerging leaders, technical teams, veteran ERGs</div>
          <div><strong>Outcomes:</strong><br/>Clarity, accountability, decision speed, cultural momentum</div>
          <div><strong>Travel:</strong><br/>Domestic & international • Based in Oklahoma City, OK</div>
        </div>
      </div>

      <h2 className="section-title" style={{marginTop:'6px'}}>Signature Topics</h2>
      <div className="grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'14px'}}>
        <div className="card">
          <h3>Building High-Performance Teams in High-Stakes Environments</h3>
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
          <h3>The E.L.I.T.E.™ Framework: Practical Leadership for Real Results</h3>
          <ul>
            <li>Decision frameworks</li>
            <li>Change navigation</li>
            <li>Post-event action plans</li>
          </ul>
        </div>
      </div>

      <Link to="/contact" className="btn" style={{display:'inline-block',marginTop:'18px'}}>
        Request speaking availability
      </Link>
    </main>
  );
}

function Veterans() {
  return (
    <section className="section">
      <div className="container">
        <h1>Veteran Transition Leadership</h1>
        <p className="lead">
          From junior enlisted to senior commissioned officers—translate military excellence into civilian leadership.
        </p>
        <ul className="bullets">
          <li>Leadership & skills translation into executive-ready language</li>
          <li>Resume & LinkedIn development tailored to leadership and technical roles</li>
          <li>Interview preparation focused on confidence, communication, and executive presence</li>
          <li>Job search coaching and market navigation strategies</li>
          <li>Career counseling aligning experience, purpose, advancement</li>
          <li>Senior mentor matching and executive networking strategies</li>
          <li>Target-role 30-60-90 day onboarding plan aligned to E.L.I.T.E.™</li>
          <li>Ongoing progression and promotion planning support</li>
        </ul>
        <div className="cta-row">
          <Button to="/contact">Start your transition</Button>
        </div>
      </div>
      <SectionBand />
    </section>
  );
}

function Contact() {
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
          action="/thank-you"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>
          <div className="grid-2 form-row">
            <label>Name<input name="name" required /></label>
            <label>Email<input type="email" name="email" required /></label>
          </div>
          <div className="form-row">
            <label>Message<textarea name="message" rows="6"></textarea></label>
          </div>
          <button className="btn" type="submit">Send inquiry</button>
        </form>
      </div>
      <SectionBand />
    </section>
  );
}

function ThankYou() {
  return (
    <section className="section">
      <div className="container">
        <h1>Thank you!</h1>
        <p className="lead">We’ll be in touch shortly.</p>
      </div>
      <SectionBand />
    </section>
  );
}

/* ---------- App ---------- */

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/elite" element={<Elite />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/veterans" element={<Veterans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
