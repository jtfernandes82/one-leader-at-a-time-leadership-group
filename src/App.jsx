import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

/** SIMPLE ICON */
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="#0a66c2"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.82-2.2 3.74-2.2 4 0 4.74 2.6 4.74 6V24h-4v-7c0-1.67-.03-3.82-2.33-3.82-2.34 0-2.7 1.83-2.7 3.7V24h-4V8z"/>
    </svg>
  );
}

/** HEADER (uses your banner from /public) */
function Header() {
  const items = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/elite", label: "ELITE" },
    { to: "/speaking", label: "Speaking" },
    { to: "/veterans", label: "Veterans" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="site-header">
      <div className="header-blend" aria-hidden="true"></div>

      <div className="banner-bar">
        <img
          className="banner-image"
          src="/One%20Leader%20at%20a%20Time001.png"
          alt="One Leader at a Time – Leadership Group"
        />
      </div>

      <nav className="nav">
        <div className="container nav-inner" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <ul className="nav-list" style={{display:"flex",gap:"18px",listStyle:"none",margin:0,padding:0}}>
            {items.map(i => (
              <li key={i.to}>
                <NavLink
                  to={i.to}
                  className={({isActive}) => `nav-link ${isActive ? "is-active" : ""}`}
                >
                  {i.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="https://www.linkedin.com/in/jesseanafernandes-enerprisearchitect-busops/"
            target="_blank"
            rel="noopener"
            className="nav-social"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon/>
          </a>
        </div>
      </nav>

      <div className="header-blend bottom" aria-hidden="true"></div>
    </header>
  );
}

/** FOOTER */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-blend" aria-hidden="true"></div>
      <div className="container" style={{display:"flex",flexWrap:"wrap",gap:"14px",justifyContent:"space-between",alignItems:"center",padding:"18px 0"}}>
        <nav style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
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

/** PAGES (minimal to get content back on screen) */
function Home() {
  return (
    <main className="container">
      <h1 className="section-title">Lead Today. Transform Tomorrow.</h1>
      <p>
        Empowering leaders and organizations through the E.L.I.T.E.™ Framework —
        Empower, Lead, Inspire, Transform, Elevate.
      </p>
      <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"10px"}}>
        <Link to="/contact" className="btn">Book a discovery call</Link>
        <Link to="/elite" className="btn">Explore the E.L.I.T.E.™ Framework</Link>
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="container">
      <h1 className="section-title">About Jesseana Fernandes</h1>
      <p>
        Jesseana Fernandes is a transformational senior leader and Chief Warrant Officer Three (CW3) with
        over two decades of experience leading in high-stakes environments…
      </p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",alignItems:"start"}}>
        <div>
          <p>
            Trained to serve as a technical advisor to officers at every level — including senior
            commissioned officers — Jesseana has a proven record of mentoring leaders, elevating standards,
            and driving cultural momentum…
          </p>
        </div>
        <div>
          <img
            src="/about-jesseana.jpg.jpg"  /* use your actual file name if different */
            alt="Jesseana Fernandes"
            className="about-portrait"
          />
          <small style={{display:"block",textAlign:"center",marginTop:"6px"}}>
            Jesseana Fernandes, CW3 — Founder of One Leader at a Time – Leadership Group™
          </small>
        </div>
      </div>
    </main>
  );
}

function Services() {
  return (
    <main className="container">
      <h1 className="section-title">Services</h1>
      <p>We transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework.</p>
      <div className="card"><strong>Leadership & Team Development</strong> — standards, cadence, after-action learning.</div>
      <div className="card" style={{marginTop:"12px"}}><strong>Executive & Strategic Coaching</strong> — decision frameworks, presence, accountability.</div>
      <div className="card" style={{marginTop:"12px"}}><strong>Organizational Resilience</strong> — change navigation, risk playbooks, metrics that matter.</div>
    </main>
  );
}

function Elite() {
  return (
    <main className="container">
      <h1 className="section-title">The E.L.I.T.E.™ Framework</h1>
      <div className="card"><strong>Empower</strong> — equip ownership.</div>
      <div className="card" style={{marginTop:"10px"}}><strong>Lead</strong> — model calm and accountability.</div>
      <div className="card" style={{marginTop:"10px"}}><strong>Inspire</strong> — connect purpose to work.</div>
      <div className="card" style={{marginTop:"10px"}}><strong>Transform</strong> — mechanisms for change.</div>
      <div className="card" style={{marginTop:"10px"}}><strong>Elevate</strong> — measure, learn, scale.</div>
    </main>
  );
}

function Speaking() {
  return (
    <main className="container">
      <h1 className="section-title">Speaking & Keynotes</h1>
      <div className="card">
        Formats: Keynote (20–45), Fireside, Panel, Workshop (90–120) •
        Outcomes: clarity, accountability, decision speed •
        Audiences: executives, emerging leaders, technical teams, veteran ERGs
      </div>
    </main>
  );
}

function Veterans() {
  return (
    <main className="container">
      <h1 className="section-title">Veteran Transition Leadership</h1>
      <div className="card">
        End-to-end support to translate military excellence into civilian leadership:
        résumé & LinkedIn, interview prep, 30-60-90 plans.
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="container">
      <h1 className="section-title">Contact</h1>
      <p>Email: <a href="mailto:jesse@oneleaderatatimegroup.com">jesse@oneleaderatatimegroup.com</a></p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="card"
        style={{maxWidth:"560px"}}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>Name<input name="name" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Message<textarea name="message" rows="5" required /></label>
        <button className="btn" type="submit">Send</button>
      </form>
    </main>
  );
}

export default function App(){
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/elite" element={<Elite/>}/>
        <Route path="/speaking" element={<Speaking/>}/>
        <Route path="/veterans" element={<Veterans/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
