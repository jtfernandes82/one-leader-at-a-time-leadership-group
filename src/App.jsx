 import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

/** =========================================================
 * Brand
 * ======================================================= */
const BRAND = {
  banner: "/One Leader at a Time001.png",
  email: "jesse@oneleaderatatimegroup.com",
};

/* Internal site button */
const Button = ({ to, children }) => (
  <NavLink className="btn" to={to}>
    {children}
  </NavLink>
);

/** =========================================================
 * Layout wrapper
 * ======================================================= */
const Layout = ({ children }) => (
  <div className="site">
    <header className="banner">
      <img src={BRAND.banner} alt="One Leader at a Time – Leadership Group" className="banner-img" />
    </header>

    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" end className="navlink">Home</NavLink>
        <NavLink to="/about" className="navlink">About</NavLink>
        <NavLink to="/services" className="navlink">Services</NavLink>
        <NavLink to="/elite" className="navlink">ELITE</NavLink>
        <NavLink to="/speaking" className="navlink">Speaking</NavLink>
        <NavLink to="/veterans" className="navlink">Veterans</NavLink>
        <NavLink to="/contact" className="navlink">Contact</NavLink>
      </div>
    </nav>

    <main className="main">{children}</main>

    <footer className="footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} One Leader at a Time Leadership Group, LLC. All rights reserved.</div>
        <div className="footer-links">
          <NavLink to="/elite" className="footlink">ELITE</NavLink>
          <NavLink to="/services" className="footlink">Services</NavLink>
          <NavLink to="/speaking" className="footlink">Speaking</NavLink>
          <NavLink to="/veterans" className="footlink">Veterans</NavLink>
          <NavLink to="/contact" className="footlink">Contact</NavLink>
        </div>
      </div>
    </footer>
  </div>
);

/** =========================================================
 * Pages
 * ======================================================= */
const Home = () => (
  <Layout>
    <section className="section home-hero">
      <h1 className="hero-title">Lead Today. Transform Tomorrow.</h1>
      <p className="lead">
        Empowering leaders and organizations through the E.L.I.T.E.™ Framework — Empower, Lead, Inspire, Transform, Elevate.
      </p>
      <div className="cta-row">
        <Button to="/contact">Book a discovery call</Button>
        <Button to="/elite">Explore the E.L.I.T.E.™ Framework</Button>
      </div>
    </section>
  </Layout>
);

const About = () => (
  <Layout>
    <section className="section">
      <h2>About Jesseana Fernandes</h2>
      <p>
        Jesseana Fernandes is a transformational senior leader and <strong>Chief Warrant Officer Three (CW3)</strong> with
        over two decades of leadership across military logistics and aerospace operations. She combines disciplined execution
        with people-centered leadership to create resilient, high-performing teams.
      </p>
      <ul className="bullets">
        <li><strong>Expertise:</strong> leadership development, organizational resilience, logistics, coaching</li>
        <li><strong>Leadership Reach:</strong> from frontline supervisors to senior commissioned officers</li>
        <li><strong>Commitment:</strong> integrity, dignity, and purpose — always people-first</li>
      </ul>

      <h3 className="mt-lg">About One Leader at a Time – Leadership Group™</h3>
      <p>
        <strong>One Leader at a Time – Leadership Group™</strong> equips executives, teams, and transitioning veterans to lead with integrity, resilience, and purpose. Every engagement is grounded in the <strong>E.L.I.T.E.™ Framework</strong> — Empower, Lead, Inspire, Transform, Elevate.
      </p>
      <p className="tagline">
        VETERAN-OWNED • WOMEN-OWNED • PURPOSE-DRIVEN • LEADERSHIP-FOCUSED
      </p>
      <div className="cta-row mt-md">
        <Button to="/elite">Explore the E.L.I.T.E.™ Framework</Button>
        <Button to="/services">See our services</Button>
      </div>
    </section>
  </Layout>
);

const Services = () => (
  <Layout>
    <section className="section">
      <h2>Services</h2>
      <p className="lead">
        Programs can be delivered onsite or virtually and tailored by audience level.
      </p>
      <div className="cards">
        {[
          ["Leadership & Team Development", ["Team rhythm", "Leader rituals", "After-action learning"]],
          ["Executive & Strategic Coaching", ["Decision frameworks", "Executive presence", "Accountability systems"]],
          ["Organizational Resilience", ["Change navigation", "Risk playbooks", "Metrics that matter"]],
        ].map(([title, list]) => (
          <article key={title} className="card">
            <h4>{title}</h4>
            <ul>{list.map((i) => <li key={i}>{i}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="cta-row mt-md">
        <Button to="/contact">Schedule a consultation</Button>
      </div>
    </section>
  </Layout>
);

const Elite = () => (
  <Layout>
    <section className="section">
      <h2>E.L.I.T.E.™ Framework</h2>
      <div className="cards five">
        {[
          ["Empower", "Build confidence, autonomy, and accountability."],
          ["Lead", "Model values and execute with clarity."],
          ["Inspire", "Craft vision and mobilize action."],
          ["Transform", "Navigate change with resilience."],
          ["Elevate", "Sustain excellence through learning."],
        ].map(([title, desc]) => (
          <article key={title} className="card">
            <h4>{title}</h4>
            <p>{desc}</p>
          </article>
        ))}
      </div>
      <div className="cta-row mt-md">
        <Button to="/contact">Request ELITE details</Button>
      </div>
    </section>
  </Layout>
);

const Speaking = () => (
  <Layout>
    <section className="section">
      <h2>Speaking & Keynotes</h2>
      <div className="info-callout">
        <div>Ready to lock dates or request rates?</div>
        <Button to="/contact">Request speaking availability</Button>
      </div>
    </section>
  </Layout>
);

const Veterans = () => (
  <Layout>
    <section className="section">
      <h2>Veteran Transition Leadership</h2>
      <p>
        Support to translate military excellence into civilian leadership and career success.
      </p>
      <div className="cta-row mt-md">
        <Button to="/contact">Start your transition</Button>
      </div>
    </section>
  </Layout>
);

const Contact = () => (
  <Layout>
    <section className="section">
      <h2>Contact</h2>
      <p>
        Tell us about your goals, dates, and audience. We’ll follow up quickly.
      </p>
      <div className="contact-side">
        <div><strong>Email:</strong> <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
        <div><strong>Location:</strong> Oklahoma City, OK</div>
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
