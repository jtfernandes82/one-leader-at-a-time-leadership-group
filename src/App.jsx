// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

/**
 * One Leader at a Time – Website (stabilized v2)
 * - Unified top/bottom gradient
 * - Consistent page background wrapper (no bottom white gap)
 * - Responsive button rows (no overlap)
 * - Services & Contact now match background styling
 * - Email: jesse@oneleaderatatimegroup.com
 */

// ----------------- BRAND -----------------
const BRAND = {
  name: "One Leader at a Time – Leadership Group™",
  legal: "One Leader at a Time Leadership Group, LLC",
  bannerUrl: "/One Leader at a Time001.png", // full-width banner you uploaded
  colors: {
    // brand hues
    navy: "#2F4E86",
    gold: "#F0C460",
    goldSoft: "rgba(240,196,96,0.45)",
    skySoft: "rgba(201,219,239,0.55)",
    sky: "#EAF2F9",
    ink: "#21324F",
    body: "#334155",
    white: "#FFFFFF",
  },
  fonts: {
    heading: "'Merriweather', Georgia, 'Times New Roman', serif",
    body: "'Open Sans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
};

// helpers
const color = (k, fb="#000") => (BRAND.colors[k] ?? fb);
const font  = (k, fb="system-ui, sans-serif") => (BRAND.fonts[k] ?? fb);

// gradient makers
const topNavGradient = `linear-gradient(90deg, ${color("goldSoft")} 0%, ${color("skySoft")} 100%)`;
const footerGradient = `linear-gradient(90deg, ${color("goldSoft")} 0%, ${color("skySoft")} 100%)`;
const pageBgGradient = `linear-gradient(180deg, ${color("sky")} 0%, ${color("white")} 100%)`;

// Shared button
const GoldButton = ({ to = "#", text = "Learn more" }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold no-underline transition-colors duration-200"
    style={{ backgroundColor: color("gold"), color: "#0f172a" }}
    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#D4A32C"; e.currentTarget.style.color = "#FFFFFF"; }}
    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = color("gold"); e.currentTarget.style.color = "#0f172a"; }}
  >
    {text}
  </Link>
);

// Page wrapper (applies unified background + ensures no white gap)
const Page = ({ children }) => (
  <div
    style={{
      background: pageBgGradient,
      minHeight: "calc(100vh - 220px)", // room for header+footer
    }}
  >
    <div className="max-w-7xl mx-auto px-6 py-12">{children}</div>
  </div>
);

// Layout shell
const AppShell = ({ children }) => {
  useEffect(() => {
    document.title = "One Leader at a Time – Leadership Group™ | E.L.I.T.E.™";
  }, []);
  return (
    <div style={{ fontFamily: font("body"), color: color("body") }}>
      {/* Banner */}
      <div className="w-full">
        <img
          src={BRAND.bannerUrl}
          alt="One Leader at a Time banner"
          className="w-full h-auto object-cover"
          style={{ display: "block" }}
        />
      </div>

      {/* Nav with gradient to match footer */}
      <header
        className="w-full border-b"
        style={{
          background: topNavGradient,
          borderColor: "rgba(47,78,134,0.18)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
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
                `no-underline px-2 py-1 rounded ${isActive ? "font-bold" : ""}`
              }
              style={{ color: color("ink") }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      {/* Footer with same gradient and dark text for nav links */}
      <footer
        className="w-full mt-0"
        style={{
          background: footerGradient,
          borderTop: "1px solid rgba(47,78,134,0.18)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div style={{ color: color("ink") }}>
            © {new Date().getFullYear()} {BRAND.legal}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4" style={{ color: color("ink") }}>
            <Link to="/elite" className="no-underline" style={{ color: color("ink") }}>ELITE</Link>
            <Link to="/services" className="no-underline" style={{ color: color("ink") }}>Services</Link>
            <Link to="/speaking" className="no-underline" style={{ color: color("ink") }}>Speaking</Link>
            <Link to="/veterans" className="no-underline" style={{ color: color("ink") }}>Veterans</Link>
            <Link to="/contact" className="no-underline" style={{ color: color("ink") }}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ----------------- Pages -----------------

const HomePage = () => (
  <AppShell>
    <Page>
      <section className="text-center">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: font("heading"), color: color("navy") }}
        >
          Lead Today. Transform Tomorrow.
        </h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
          Empowering leaders and organizations through the E.L.I.T.E.™ Framework — Empower, Lead,
          Inspire, Transform, Elevate.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <GoldButton to="/contact" text="Book a discovery call" />
          <GoldButton to="/elite" text="Explore the E.L.I.T.E.™ Framework" />
        </div>
      </section>
    </Page>
  </AppShell>
);

const AboutPage = () => (
  <AppShell>
    <Page>
      <section className="space-y-8">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: font("heading"), color: color("navy") }}
          >
            About Jesseana Fernandes
          </h2>
          <div className="mt-4 space-y-5 text-slate-700 max-w-3xl">
            <p>
              Jesseana Fernandes is a transformational senior leader and <strong>CW3 (Chief Warrant Officer Three)</strong> with 20+ years of
              leadership, logistics, and organizational strategy experience. As a <strong>Senior Manager in aerospace</strong>, she blends military discipline
              with corporate execution to deliver clarity, accountability, and results under pressure.
            </p>
            <p>
              She has mentored leaders from <strong>junior enlisted to senior commissioned officers</strong>, serving as a trusted technical advisor
              to decision-makers across formations. Her field-tested approach centers on purpose, ownership, and service—building high-performing
              teams and resilient cultures.
            </p>
            <p>
              That conviction inspired the creation of <strong>One Leader at a Time – Leadership Group™</strong> and its proprietary
              <strong> E.L.I.T.E.™ Framework</strong>—Empower, Lead, Inspire, Transform, Elevate.
            </p>
          </div>

          {/* responsive CTA row — no overlap */}
          <div className="mt-6 flex flex-wrap gap-3">
            <GoldButton to="/elite" text="Explore the E.L.I.T.E.™ Framework" />
            <GoldButton to="/services" text="See our services" />
          </div>
        </div>

        <div>
          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: font("heading"), color: color("navy") }}
          >
            About One Leader at a Time – Leadership Group™
          </h3>
          <div className="mt-4 space-y-5 text-slate-700 max-w-4xl">
            <p>
              <strong>One Leader at a Time – Leadership Group™</strong> equips executives, teams, and transitioning veterans to lead with
              integrity, resilience, and purpose. We deliver executive coaching, organizational transformation programs, and veteran transition
              leadership—bridging the gap between technical mastery and human-centered leadership.
            </p>
            <p>
              Every engagement is grounded in the <strong>E.L.I.T.E.™ Framework</strong>, translating values into daily behaviors, decision frameworks, and
              measurable outcomes that build <strong>high-performance teams</strong> and <strong>resilient cultures</strong>.
            </p>
            <div className="text-sm font-medium tracking-wide" style={{ color: color("navy") }}>
              VETERAN-OWNED • WOMEN-OWNED • PURPOSE-DRIVEN • LEADERSHIP-FOCUSED
            </div>
          </div>
        </div>
      </section>
    </Page>
  </AppShell>
);

const ServicesPage = () => (
  <AppShell>
    <Page>
      <section>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: font("heading"), color: color("navy") }}
        >
          Services
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          We transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework — Empower,
          Lead, Inspire, Transform, Elevate. Programs can be delivered onsite or virtually and
          tailored by audience level.
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              t: "Leadership & Team Development",
              b: [
                "Team operating rhythm",
                "Leader standards & rituals",
                "After-action learning",
              ],
            },
            {
              t: "Executive & Strategic Coaching",
              b: ["Decision frameworks", "Executive presence", "Accountability systems"],
            },
            {
              t: "Organizational Resilience",
              b: ["Change navigation", "Risk & response playbooks", "Metrics that matter"],
            },
            {
              t: "Speaking & Keynotes",
              b: ["Keynotes", "Panels & firesides", "Workshops"],
            },
            {
              t: "Veteran Transition Leadership",
              b: ["Resume & LinkedIn", "Interview prep", "30-60-90 plans"],
            },
          ].map((card) => (
            <div key={card.t} className="rounded-xl border border-slate-200 p-6 bg-white/85">
              <h3 className="font-semibold" style={{ fontFamily: font("heading"), color: color("ink") }}>
                {card.t}
              </h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                {card.b.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <GoldButton to="/contact" text="Schedule a consultation" />
        </div>
      </section>
    </Page>
  </AppShell>
);

const ElitePage = () => (
  <AppShell>
    <Page>
      <section>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: font("heading"), color: color("navy") }}
        >
          E.L.I.T.E.™ Framework
        </h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-slate-700">
          {[
            { k: "E", t: "Empower", d: "Build confidence, autonomy, and accountability." },
            { k: "L", t: "Lead", d: "Model values, align decisions, and execute with clarity." },
            { k: "I", t: "Inspire", d: "Craft vision and communicate to mobilize action." },
            { k: "T", t: "Transform", d: "Navigate change with resilience and systems thinking." },
            { k: "E", t: "Elevate", d: "Sustain excellence through coaching and continuous learning." },
          ].map((m) => (
            <div key={m.t} className="rounded-xl border border-slate-200 p-5 bg-white/85">
              <div className="text-sm font-semibold" style={{ color: color("navy") }}>
                {m.k} — {m.t}
              </div>
              <p className="mt-2 text-slate-600 text-sm">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <GoldButton to="/contact" text="Request ELITE program details" />
        </div>
      </section>
    </Page>
  </AppShell>
);

const SpeakingPage = () => (
  <AppShell>
    <Page>
      <section className="space-y-8">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: font("heading"), color: color("navy") }}
          >
            Speaking & Keynotes
          </h2>
          <p className="mt-4 text-slate-700 max-w-4xl">
            High-energy, high-credibility talks that turn leadership principles into action. Jesseana
            brings two decades of military and aerospace leadership to the stage, equipping audiences
            to lead with clarity, courage, and the E.L.I.T.E.™ mindset.
          </p>

          {/* NON-overlapping CTA box */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-white/85 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-slate-700">
                Ready to lock dates or request rates?
              </div>
              <GoldButton to="/contact" text="Request speaking availability" />
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4 text-slate-700">
            <div><span className="font-semibold">Formats:</span> Keynote (20–45 min), Fireside chat, Panelist, Workshop (90–120 min)</div>
            <div><span className="font-semibold">Audiences:</span> Executives, emerging leaders, technical teams, veteran ERGs</div>
            <div><span className="font-semibold">Outcomes:</span> Clarity, accountability, decision speed, cultural momentum</div>
            <div><span className="font-semibold">Travel:</span> Domestic & international • Based in Oklahoma City, OK</div>
          </div>
        </div>

        <div>
          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: font("heading"), color: color("navy") }}
          >
            Signature Topics
          </h3>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((card) => (
              <div key={card.t} className="rounded-xl border border-slate-200 p-6 bg-white/85">
                <h4 className="font-semibold" style={{ fontFamily: font("heading"), color: color("ink") }}>
                  {card.t}
                </h4>
                <p className="mt-2 text-slate-600 text-sm">{card.b}</p>
                <div className="mt-3">
                  <div className="text-xs font-medium" style={{ color: color("navy") }}>
                    Audience takeaways
                  </div>
                  <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
                    {card.o.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Page>
  </AppShell>
);

const VeteransPage = () => (
  <AppShell>
    <Page>
      <section>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: font("heading"), color: color("navy") }}
        >
          Veteran Transition Leadership
        </h2>
        <div className="mt-4 text-slate-700 space-y-4 max-w-4xl">
          <p>
            <strong>From junior enlisted to senior commissioned officers — stepping into what’s next.</strong>
          </p>
          <p>
            We equip veterans to convert military discipline, technical mastery, and operational experience into high-impact civilian leadership.
            Our programs focus on leadership readiness, advancement, and career success—not just job placement.
          </p>
          <p><strong>What’s included:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
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
        <div className="mt-8">
          <GoldButton to="/contact" text="Start your transition" />
        </div>
      </section>
    </Page>
  </AppShell>
);

const ContactPage = () => (
  <AppShell>
    <Page>
      <section className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-xl border border-slate-200 p-6 bg-white/90">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: font("heading"), color: color("navy") }}
          >
            Contact
          </h2>
          <p className="mt-3 text-slate-700">
            Tell us about your goals, audience, and dates—we’ll follow up quickly with options.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Your name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Phone</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="(###) ###-####" />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-600">What are you looking for?</label>
              <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
                <option>Keynote / Speaking</option>
                <option>Leadership Workshop</option>
                <option>Executive Coaching</option>
                <option>Veteran Transition Program</option>
                <option>Custom Engagement</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-600">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Share your goals, audience size, and target dates…" />
            </div>
            <GoldButton to="/contact" text="Send inquiry" />
          </form>
        </div>

        <div className="rounded-xl border border-slate-200 p-6 bg-white/90">
          <div className="text-slate-700">
            <div><span className="font-medium">Email</span> — jesse@oneleaderatatimegroup.com</div>
            <div className="mt-2"><span className="font-medium">Location</span> — Oklahoma City, OK</div>
          </div>
        </div>
      </section>
    </Page>
  </AppShell>
);

// ----------------- Router -----------------
export default function Website() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/elite" element={<ElitePage />} />
        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/veterans" element={<VeteransPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
