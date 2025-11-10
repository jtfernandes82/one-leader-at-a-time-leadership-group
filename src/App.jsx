import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

/* ---------------------------------
   Brand + helpers
---------------------------------- */
const BRAND = {
  name: "One Leader at a Time – Leadership Group™",
  legal: "One Leader at a Time Leadership Group, LLC",
  bannerUrl: "/One Leader at a Time001.png",  // your wide banner
  linkedin: "https://www.linkedin.com/in/jesseanafernandes-enerprisearchitect-busops/",
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? "active" : "")}
  >
    {label}
  </NavLink>
);

/* ---------------------------------
   Layout: Banner + Nav
---------------------------------- */
const SiteHeader = () => (
  <>
    <div className="banner">
      <div className="container" style={{ padding: "10px 24px" }}>
        <img
          src={BRAND.bannerUrl}
          alt="One Leader at a Time – Leadership Group"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
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
        <a
          className="social-link"
          href={BRAND.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          style={{ marginLeft: "auto" }}
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </header>
  </>
);

/* ---------------------------------
   Footer
---------------------------------- */
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
        <a
          className="social-link"
          href={BRAND.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </footer>
);

/* ---------------------------------
   Pages
---------------------------------- */
const HomePage = () => (
  <section className="section home-hero">
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "42px", lineHeight: 1.2, marginTop: 8 }}>
        Lead Today. Transform Tomorrow.
      </h1>
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

/* Keep your richer About content as you wish; a concise version here */
const AboutPage = () => (
  <section className="section">
    <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "28px" }}>
      <div>
        <h1>About Jesseana Fernandes</h1>
        <p>
          Jesseana Fernandes is a transformational senior leader and <strong>Chief Warrant Officer Three (CW3)</strong>
          with over two decades of experience leading in complex, high-stakes environments. As a
          <strong> Senior Manager in aerospace operations</strong>, she blends disciplined execution with people-first
          leadership to build resilient, high-performing teams.
        </p>
        <p>
          Trained to advise leaders from <strong>junior enlisted to senior commissioned officers</strong>, Jesseana’s
          approach is grounded in purpose, accountability, clarity, and performance under pressure. Her faith-driven
          leadership inspired <strong>One Leader at a Time – Leadership Group™</strong> and the proprietary
          <strong> E.L.I.T.E.™ Framework</strong> — Empower, Lead, Inspire, Transform, Elevate.
        </p>

        <h2 style={{ marginTop: 22 }}>About One Leader at a Time – Leadership Group™</h2>
        <p>
          We equip executives, teams, and transitioning veterans to lead with integrity, resilience, and purpose.
          Every engagement turns values into daily behaviors, decision frameworks, and measurable outcomes.
        </p>
      </div>

      <figure style={{ margin: 0 }}>
        <img
          src="/about-jesseana.jpg.jng"
          alt="Jesseana Fernandes portrait"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "14px",
            display: "block",
            boxShadow: "0 10px 24px rgba(0,0,0,.12)"
          }}
        />
        <figcaption style={{ textAlign: "center", fontSize: 13, marginTop: 8, color: "#5a6b84" }}>
          Jesseana Fernandes, CW3 — Founder of One Leader at a Time – Leadership Group™
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
        We transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework — Empower, Lead, Inspire,
        Transform, Elevate. Programs can be delivered onsite or virtually and tailored by audience level.
      </p>
      {/* Cards removed for brevity; leave your existing ones if you had them */}
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
      <p>Empower • Lead • Inspire • Transform • Elevate</p>
      {/* Place your detailed ELITE content here; leaving minimal for brevity */}
    </div>
  </section>
);

const SpeakingPage = () => (
  <section className="section">
    <div className="container">
      <h1>Speaking & Keynotes</h1>
      <p>
        High-energy, high-credibility talks that turn leadership principles into action—rooted in two decades of
        military and aerospace leadership.
      </p>
      <div style={{ marginTop: 16 }}>
        <Link className="btn btn-gold" to="/contact">Request speaking availability</Link>
      </div>
      {/* Keep your signature topics section if you had it previously */}
    </div>
  </section>
);

const VeteransPage = () => (
  <section className="section">
    <div className="container">
      <h1>Veteran Transition Leadership</h1>
      <ul>
        <li>Leadership & skills translation into executive-ready language</li>
        <li>Resume & LinkedIn development</li>
        <li>Interview preparation & executive presence</li>
        <li>Job search coaching & market navigation</li>
        <li>Mentor matching & networking strategies</li>
        <li>Target-role 30-60-90 plan aligned to E.L.I.T.E.™</li>
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
        <p style={{ marginTop: 12 }}>
          Prefer a form? Fill it out and we’ll reply shortly.
        </p>
      </div>
      {/* Netlify form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/contact"
        style={{ background: "#fff", padding: 16, borderRadius: 12, border: "1px solid #e7edf5" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <div style={{ display: "grid", gap: 10 }}>
          <label>
            Name
            <input name="name" required style={inputStyle} />
          </label>
          <label>
            Email
            <input type="email" name="email" required style={inputStyle} />
          </label>
          <label>
            Phone
            <input name="phone" style={inputStyle} />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required style={inputStyle} />
          </label>
          <button className="btn btn-gold" type="submit">Send inquiry</button>
        </div>
      </form>
    </div>
  </section>
);

const inputStyle = {
  width: "100%",
  marginTop: 6,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #cfe0f0",
  outline: "none",
  fontSize: 15
};

/* ---------------------------------
   App (router)
---------------------------------- */
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
