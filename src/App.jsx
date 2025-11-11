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
    <header>
      {/* Full-width banner with graceful fallback */}
      <div className="fullbleed banner" role="img" aria-label="One Leader at a Time – Leadership Group"></div>

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
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <Link to="/elite">ELITE</Link>
          <Link to="/services">Services</Link>
          <Link to="/speaking">Speaking</Link>
          <Link to="/veterans">Veterans</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} One Leader at a Time – Leadership Group, LLC. All rights reserved.
        </div>
      </div>
      <SectionBand tight />
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
            <img src="/about-jesseana.jpg" alt="Jesseana Fernandes portrait" />
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

function Services() {
  return (
    <section className="section">
      <div className="container">
        <h1>Services</h1>
        <p className="lead">
          Transforming leaders, teams, and organizations through the E.L.I.T.E.™ Framework.
        </p>
        <div className="cards-grid">
          <div className="card">
            <h3>Leadership & Team Development</h3>
            <p>Workshops to strengthen trust, communication, and decision-making across all levels.</p>
          </div>
          <div className="card">
            <h3>Executive & Strategic Coaching</h3>
            <p>Customized coaching for senior leaders navigating transformation and performance excellence.</p>
          </div>
          <div className="card">
            <h3>Veteran Transition Leadership</h3>
            <p>Leadership translation, resume & LinkedIn, interview prep, job search coaching, career counseling, mentor matching, 30-60-90 plans.</p>
          </div>
          <div className="card">
            <h3>Organizational Resilience</h3>
            <p>Change navigation, continuity strategies, and systems that sustain results.</p>
          </div>
          <div className="card">
            <h3>Speaking & Keynotes</h3>
            <p>Dynamic keynotes rooted in leadership, resilience, and transformation.</p>
          </div>
        </div>
      </div>
      <SectionBand />
    </section>
  );
}

function Elite() {
  const items = [
    { k: "E", t: "Empower", d: "Build confidence, autonomy, and accountability." },
    { k: "L", t: "Lead", d: "Model values, align decisions, and execute with clarity." },
    { k: "I", t: "Inspire", d: "Craft vision, communicate clearly, mobilize action." },
    { k: "T", t: "Transform", d: "Navigate change with resilience and systems thinking." },
    { k: "E", t: "Elevate", d: "Sustain excellence through coaching and continuous learning." }
  ];
  return (
    <section className="section">
      <div className="container">
        <h1>E.L.I.T.E.™ Framework</h1>
        <div className="cards-grid">
          {items.map((m) => (
            <div key={m.t} className="card">
              <div className="mini-title">{m.k} — {m.t}</div>
              <p>{m.d}</p>
            </div>
          ))}
        </div>
      </div>
      <SectionBand />
    </section>
  );
}

function Speaking() {
  const topics = [
    {
      t: "Building High-Performance Teams in High-Stakes Environments",
      b: "Align roles, set cadence, execute with urgency without burnout.",
      o: ["Team trust & cadence systems", "Clarity of priorities & ownership", "Faster, cleaner handoffs"]
    },
    {
      t: "Culture as a Competitive Advantage",
      b: "Turn values into behaviors, feedback loops, and visible standards.",
      o: ["Leadership standards & rituals", "Constructive feedback culture", "Retention & engagement gains"]
    },
    {
      t: "The E.L.I.T.E.™ Framework: Practical Leadership for Real Results",
      b: "A field-tested system to simplify decisions and drive change.",
      o: ["Decision frameworks", "Change navigation", "Post-event action plans"]
    },
    {
      t: "Veteran Lessons for Modern Leaders",
      b: "Translate mission planning and AARs into business execution.",
      o: ["Leadership under pressure", "Accountability systems", "After-action learning"]
    }
  ];
  return (
    <section className="section">
      <div className="container">
        <h1>Speaking & Keynotes</h1>
        <p className="lead">
          High-energy, high-credibility talks that turn leadership principles into action.
        </p>

        <div className="cards-grid">
          {topics.map((card) => (
            <div key={card.t} className="card">
              <h3>{card.t}</h3>
              <p>{card.b}</p>
              <div className="mini-title">Audience takeaways</div>
              <ul className="bullets">
                {card.o.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <Button to="/contact">Request speaking availability</Button>
        </div>
      </div>
      <SectionBand />
    </section>
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
