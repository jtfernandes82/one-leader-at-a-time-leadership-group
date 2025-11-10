import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

/* ===== Brand ===== */
const BRAND = {
  legal: "One Leader at a Time Leadership Group, LLC",
  bannerUrl: "/One%20Leader%20at%20a%20Time001.png",
  colors: {
    navy: "#2F4E86",
    ink: "#21324F",
    gold: "#F0C460",
    goldDark: "#D4A32C",
  },
  fonts: {
    heading: "'Merriweather', Georgia, 'Times New Roman', serif",
    body: "'Open Sans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
};

/* Softer, more translucent fades (like the version you loved) */
const topNavGradient =
  "linear-gradient(90deg, rgba(240,196,96,0.12) 0%, rgba(255,255,255,0.45) 46%, rgba(201,219,239,0.12) 100%)";
const footerGradient =
  "linear-gradient(90deg, rgba(240,196,96,0.10) 0%, rgba(255,255,255,0.40) 46%, rgba(201,219,239,0.10) 100%)";
const pageBgGradient =
  "linear-gradient(180deg, #EAF2F9 0%, #FFFFFF 100%)";

/* ===== Reusable Button ===== */
function GoldButton({ to = "#", text = "Learn more" }) {
  return (
    <Link className="btn btn--gold" to={to}>
      {text}
    </Link>
  );
}

/* ===== Layout Shell ===== */
function Shell({ children, title }) {
  useEffect(() => {
    document.title = title
      ? `${title} | One Leader at a Time – Leadership Group™`
      : "One Leader at a Time – Leadership Group™ | E.L.I.T.E.™";
  }, [title]);

  return (
    <div className="site" style={{ fontFamily: BRAND.fonts.body }}>
      {/* Banner */}
      <img src={BRAND.bannerUrl} alt="One Leader at a Time banner" className="banner" />

      {/* Nav (thinner + lighter) */}
      <header className="nav" style={{ background: topNavGradient }}>
        <div className="container nav__inner">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/elite", label: "ELITE" },
            { to: "/speaking", label: "Speaking" },
            { to: "/veterans", label: "Veterans" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "nav__link" + (isActive ? " nav__link--active" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </header>

      {/* Main */}
      <main className="main" style={{ background: pageBgGradient }}>
        <div className="container">{children}</div>
      </main>

      {/* Footer (same soft fade) */}
      <footer className="footer" style={{ background: footerGradient }}>
        <div className="container footer__inner">
          <div className="footer__copy">
            © {new Date().getFullYear()} {BRAND.legal}. All rights reserved.
          </div>
          <div className="footer__links">
            <Link to="/elite">ELITE</Link>
            <Link to="/services">Services</Link>
            <Link to="/speaking">Speaking</Link>
            <Link to="/veterans">Veterans</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ========== Pages ========== */

function Home() {
  return (
    <Shell title="Home">
      <section className="stack-lg center">
        <h1 className="h1" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
          Lead Today. Transform Tomorrow.
        </h1>
        <p className="lead">
          Empowering leaders and organizations through the E.L.I.T.E.™ Framework — Empower, Lead,
          Inspire, Transform, Elevate.
        </p>
        <div className="row">
          <GoldButton to="/contact" text="Book a discovery call" />
          <GoldButton to="/elite" text="Explore the E.L.I.T.E.™ Framework" />
        </div>
      </section>
    </Shell>
  );
}

function About() {
  return (
    <Shell title="About">
      <section className="stack-lg">
        {/* Jesseana */}
        <div className="stack-md">
          <h2 className="h2" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
            About Jesseana Fernandes
          </h2>
          <div className="copy maxw-860">
            <p>
              Jesseana Fernandes is a transformational senior leader and
              <strong> Chief Warrant Officer Three (CW3)</strong> with over two decades of experience
              spanning military operations and aerospace production. She is known for turning complex,
              high-pressure environments into disciplined systems that deliver results without burning
              people out.
            </p>
            <p>
              Throughout her career, she has coached and developed leaders from
              <strong> junior enlisted to senior commissioned officers</strong>, and advised executive
              decision-makers across functions including materials, logistics, operations, and quality.
              Her leadership style blends <em>clarity</em>, <em>ownership</em>, and <em>service</em>—with a
              steady bias for action.
            </p>
            <p>
              The field-tested methods behind her work inspired
              <strong> One Leader at a Time – Leadership Group™</strong> and the proprietary
              <strong> E.L.I.T.E.™ Framework</strong>—Empower, Lead, Inspire, Transform, Elevate—
              a practical system to align values with daily behaviors, decisions, and measurable outcomes.
            </p>

            <ul className="dash-list">
              <li>
                <span className="bold">Expertise:</span> leadership development, decision frameworks,
                organizational resilience, supply chain & logistics, coaching
              </li>
              <li>
                <span className="bold">Leadership Reach:</span> from frontline supervisors to
                <strong> senior commissioned officers</strong> and enterprise executives
              </li>
              <li>
                <span className="bold">Commitment:</span> integrity, dignity, people-first standards,
                mission-aligned results
              </li>
            </ul>
          </div>
        </div>

        {/* Company */}
        <div className="stack-md">
          <h3 className="h3" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
            About One Leader at a Time – Leadership Group™
          </h3>
          <div className="copy maxw-860">
            <p>
              <strong>One Leader at a Time – Leadership Group™</strong> equips executives, teams, and
              transitioning veterans to lead with integrity, resilience, and purpose. We deliver
              executive coaching, organizational transformation, and veteran transition leadership—
              bridging the gap between technical mastery and human-centered leadership.
            </p>
            <p>
              Every engagement is anchored in the <strong>E.L.I.T.E.™ Framework</strong>, translating
              values into daily behaviors, decision cadence, feedback loops, and standards of execution.
              The outcome is simple and repeatable:
              <strong> high-performance teams</strong> and
              <strong> resilient cultures</strong> that sustain momentum under real-world pressure.
            </p>
            <div className="tagline">
              VETERAN-OWNED • WOMEN-OWNED • PURPOSE-DRIVEN • LEADERSHIP-FOCUSED
            </div>
          </div>

          <div className="row">
            <GoldButton to="/elite" text="Explore the E.L.I.T.E.™ Framework" />
            <GoldButton to="/services" text="See our services" />
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Services() {
  const cards = [
    { t: "Leadership & Team Development", b: ["Team operating rhythm", "Leader standards & rituals", "After-action learning"] },
    { t: "Executive & Strategic Coaching", b: ["Decision frameworks", "Executive presence", "Accountability systems"] },
    { t: "Organizational Resilience", b: ["Change navigation", "Risk & response playbooks", "Metrics that matter"] },
    { t: "Speaking & Keynotes", b: ["Keynotes", "Panels & firesides", "Workshops"] },
    { t: "Veteran Transition Leadership", b: ["Resume & LinkedIn", "Interview prep", "30-60-90 plans"] },
  ];

  return (
    <Shell title="Services">
      <section className="stack-lg">
        <h2 className="h2" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
          Services
        </h2>
        <p className="copy maxw-760">
          We transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework —
          Empower, Lead, Inspire, Transform, Elevate. Programs can be delivered onsite or virtually
          and tailored by audience level.
        </p>

        <div className="grid">
          {cards.map((c) => (
            <div key={c.t} className="card">
              <h3 className="card__title">{c.t}</h3>
              <ul className="card__list">
                {c.b.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <GoldButton to="/contact" text="Schedule a consultation" />
      </section>
    </Shell>
  );
}

function ELITE() {
  const blocks = [
    { k: "E", t: "Empower", d: "Build confidence, autonomy, and accountability." },
    { k: "L", t: "Lead", d: "Model values, align decisions, and execute with clarity." },
    { k: "I", t: "Inspire", d: "Craft vision and communicate to mobilize action." },
    { k: "T", t: "Transform", d: "Navigate change with resilience and systems thinking." },
    { k: "E", t: "Elevate", d: "Sustain excellence through coaching and continuous learning." },
  ];
  return (
    <Shell title="ELITE">
      <section className="stack-lg">
        <h2 className="h2" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
          E.L.I.T.E.™ Framework
        </h2>
        <div className="grid grid--five">
          {blocks.map((m) => (
            <div key={m.t} className="card">
              <div className="card__k">{m.k} — {m.t}</div>
              <p className="card__desc">{m.d}</p>
            </div>
          ))}
        </div>
        <GoldButton to="/contact" text="Request ELITE program details" />
      </section>
    </Shell>
  );
}

function Speaking() {
  const topics = [
    {
      t: "Building High-Performance Teams in High-Stakes Environments",
      b: "Align roles, run disciplined stand-ups, and execute with urgency—without burning people out.",
      o: ["Team trust & cadence systems", "Clarity of priorities & ownership", "Faster, cleaner handoffs"],
    },
    {
      t: "Culture as a Competitive Advantage",
      b: "Turn values into behaviors, feedback loops, and visible leadership standards that lift performance.",
      o: ["Leadership standards & rituals", "Constructive feedback culture", "Retention & engagement gains"],
    },
    {
      t: "The E.L.I.T.E.™ Framework: Practical Leadership for Real Results",
      b: "A field-tested system to simplify decisions and drive change with discipline and care.",
      o: ["Decision frameworks", "Change navigation", "Post-event action plans"],
    },
  ];

  return (
    <Shell title="Speaking">
      <section className="stack-lg">
        <div className="stack-md">
          <h2 className="h2" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
            Speaking & Keynotes
          </h2>
          <p className="copy maxw-860">
            High-energy, high-credibility talks that turn leadership principles into action. Jesseana brings two decades of
            military and aerospace leadership to the stage, equipping audiences to lead with clarity, courage, and the
            E.L.I.T.E.™ mindset.
          </p>

          <div className="cta">
            <div className="cta__text">Ready to lock dates or request rates?</div>
            <GoldButton to="/contact" text="Request speaking availability" />
          </div>

          <div className="facts">
            <div><span className="bold">Formats:</span> Keynote (20–45 min), Fireside chat, Panelist, Workshop (90–120 min)</div>
            <div><span className="bold">Audiences:</span> Executives, emerging leaders, technical teams, veteran ERGs</div>
            <div><span className="bold">Outcomes:</span> Clarity, accountability, decision speed, cultural momentum</div>
            <div><span className="bold">Travel:</span> Domestic & international • Based in Oklahoma City, OK</div>
          </div>
        </div>

        <div className="stack-md">
          <h3 className="h3" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
            Signature Topics
          </h3>
          <div className="grid">
            {topics.map((card) => (
              <div key={card.t} className="card">
                <h4 className="card__title">{card.t}</h4>
                <p className="card__desc">{card.b}</p>
                <div className="card__sub">Audience takeaways</div>
                <ul className="card__list">
                  {card.o.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Veterans() {
  return (
    <Shell title="Veterans">
      <section className="stack-lg">
        <h2 className="h2" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
          Veteran Transition Leadership
        </h2>
        <div className="copy maxw-860">
          <p><strong>From junior enlisted to senior commissioned officers — stepping into what’s next.</strong></p>
          <p>
            We equip veterans to convert military discipline, technical mastery, and operational experience into high-impact
            civilian leadership. Our programs focus on leadership readiness, advancement, and career success—not just job placement.
          </p>
          <p><strong>What’s included:</strong></p>
          <ul className="list">
            <li>Leadership & skills translation into executive-ready language</li>
            <li>Resume & LinkedIn development tailored to leadership and technical roles</li>
            <li>Interview preparation focused on confidence, communication, and executive presence</li>
            <li>Job search coaching and market navigation strategies</li>
            <li>Career counseling to align experience, purpose, and advancement goals</li>
            <li>Senior mentor matching and executive networking strategies</li>
            <li>Target-role 30-60-90 day onboarding plan aligned to E.L.I.T.E.™</li>
            <li>Ongoing progression and promotion planning support</li>
          </ul>
        </div>
        <GoldButton to="/contact" text="Start your transition" />
      </section>
    </Shell>
  );
}

function Contact() {
  return (
    <Shell title="Contact">
      <section className="grid-2 gap-xl">
        <div className="panel">
          <h2 className="h3" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>
            Contact
          </h2>
          <p className="copy">
            Tell us about your goals, audience, and dates—we’ll follow up quickly with options.
          </p>
          <form className="form stack-md">
            <div className="form__group">
              <label>Name</label>
              <input placeholder="Your name" />
            </div>
            <div className="form__row">
              <div className="form__group">
                <label>Email</label>
                <input type="email" placeholder="you@company.com" />
              </div>
              <div className="form__group">
                <label>Phone</label>
                <input placeholder="(###) ###-####" />
              </div>
            </div>
            <div className="form__group">
              <label>What are you looking for?</label>
              <select>
                <option>Keynote / Speaking</option>
                <option>Leadership Workshop</option>
                <option>Executive Coaching</option>
                <option>Veteran Transition Program</option>
                <option>Custom Engagement</option>
              </select>
            </div>
            <div className="form__group">
              <label>Message</label>
              <textarea rows={5} placeholder="Share your goals, audience size, and target dates…" />
            </div>
            <GoldButton to="/contact" text="Send inquiry" />
          </form>
        </div>

        <div className="panel">
          <div className="copy">
            <div><span className="bold">Email</span> — jesse@oneleaderatatimegroup.com</div>
            <div className="mt-8"><span className="bold">Location</span> — Oklahoma City, OK</div>
          </div>
        </div>
      </section>
    </Shell>
  );
}

/* ===== Router ===== */
export default function Website() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/elite" element={<ELITE />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/veterans" element={<Veterans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
