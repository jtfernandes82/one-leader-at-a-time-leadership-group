import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

/* ------- Brand config ------- */
const BRAND = {
  name: "One Leader at a Time – Leadership Group™",
  legal: "One Leader at a Time Leadership Group, LLC",
  bannerUrl: "/One%20Leader%20at%20a%20Time001.png",
  colors: {
    navy: "#1E2A4A",          // same as logo text color
    gold: "#E8C068",
    goldFade: "#F9E7B5",
    paleBlue: "#C9D8EE",
    goldDark: "#D4A32C",
    sky: "#E6EEF7",
    text: "#2B3244",
  },
  fonts: {
    heading: "'Merriweather', Georgia, 'Times New Roman', serif",
    body: "'Open Sans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
};

/* ------- Reusable button ------- */
const GoldButton = ({ to = "#", children }) => (
  <Link
    to={to}
    className="px-5 py-3 rounded-lg transition-colors"
    style={{ backgroundColor: BRAND.colors.gold, color: "#0f172a" }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.colors.goldDark)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND.colors.gold)}
  >
    {children}
  </Link>
);

/* ------- App Shell ------- */
const AppShell = ({ children }) => (
  <div className="min-h-screen bg-white" style={{ color: BRAND.colors.text, fontFamily: BRAND.fonts.body }}>
    {/* HEADER */}
    <header className="relative z-40">
      <div className="relative w-full">
        <img
          src={BRAND.bannerUrl}
          alt="One Leader at a Time – Leadership Group™"
          className="w-full h-[170px] object-cover object-center md:h-[184px] lg:h-[196px]"
          loading="eager"
        />
        {/* Gradual fade under banner */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.75) 80%, rgba(255,255,255,1) 100%)",
          }}
        />
        {/* Gradient nav bar (matches footer) */}
        <div
          className="absolute left-0 right-0 rounded-t-md backdrop-blur-[3px]"
          style={{
            bottom: "-18px",
            height: "38px",
            background:
              "linear-gradient(to right, rgba(249,231,181,0.25) 0%, rgba(201,216,238,0.3) 100%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-end">
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/elite", label: "ELITE" },
                { to: "/speaking", label: "Speaking" },
                { to: "/veterans", label: "Veterans" },
                { to: "/contact", label: "Contact" },
              ].map((i) => (
                <NavLink
                  key={i.to}
                  to={i.to}
                  className={({ isActive }) =>
                    `${isActive ? "font-bold underline underline-offset-4" : "opacity-90 hover:opacity-100"}`
                  }
                  style={{ color: BRAND.colors.navy }}
                >
                  {i.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>

    {/* MAIN */}
    <main>{children}</main>

    {/* FOOTER (matches header gradient) */}
    <footer
      className="mt-12"
      style={{
        background:
          "linear-gradient(to right, rgba(249,231,181,0.25) 0%, rgba(201,216,238,0.3) 100%)",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 py-8 text-sm flex flex-col md:flex-row gap-3 items-center justify-between"
        style={{ color: BRAND.colors.navy }}
      >
        <div>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</div>
        <div className="flex gap-4 font-semibold">
          <Link to="/elite" className="hover:opacity-70">ELITE</Link>
          <Link to="/services" className="hover:opacity-70">Services</Link>
          <Link to="/speaking" className="hover:opacity-70">Speaking</Link>
          <Link to="/veterans" className="hover:opacity-70">Veterans</Link>
          <Link to="/contact" className="hover:opacity-70">Contact</Link>
        </div>
      </div>
    </footer>
  </div>
);

/* ------- Home ------- */
const Home = () => (
  <AppShell>
    <section
      className="text-center py-20"
      style={{ background: `linear-gradient(180deg, ${BRAND.colors.sky} 0%, #ffffff 100%)` }}
    >
      <h1
        className="text-4xl md:text-5xl font-bold"
        style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}
      >
        Lead Today. Transform Tomorrow.
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-700">
        Empowering leaders and organizations through the E.L.I.T.E.™ Framework — Empower, Lead, Inspire, Transform, Elevate.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <GoldButton to="/contact">Book a discovery call</GoldButton>
        <GoldButton to="/elite">Explore the E.L.I.T.E.™ Framework</GoldButton>
      </div>
    </section>
  </AppShell>
);

/* ------- About (detailed) ------- */
const About = () => (
  <AppShell>
    <section className="w-full" style={{ background: `linear-gradient(180deg, #ffffff 0%, ${BRAND.colors.sky} 100%)` }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}>
          About Jesseana Fernandes
        </h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 leading-relaxed text-slate-700">
            <p>
              <strong>Jesseana Fernandes</strong> is a transformational senior leader and <strong>Chief Warrant Officer Three (CW3)</strong>
              with more than two decades of experience leading operations, logistics, and high-performance teams in complex,
              mission-critical environments. In her civilian career, she serves as a <strong>Senior Manager in aerospace operations</strong>,
              bringing the precision of military discipline together with modern organizational excellence.
            </p>
            <p>
              As a senior warrant officer, Jesseana has mentored leaders from <strong>junior enlisted to senior commissioned officers</strong>,
              serving as a trusted technical advisor to commanders and staff across the enterprise. She is recognized for calm execution under pressure,
              decisive problem-solving, and building cultures where accountability and care coexist.
            </p>
            <p>
              Her leadership philosophy is simple and proven: <em>great organizations are built one leader at a time</em>. That conviction inspired
              the creation of <strong>One Leader at a Time – Leadership Group™</strong> and its proprietary <strong>E.L.I.T.E.™ Framework</strong> —
              Empower, Lead, Inspire, Transform, Elevate — a field-tested approach that translates values into daily behaviors, decision frameworks,
              and measurable outcomes.
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Expertise:</strong> leadership development, decision frameworks, organizational resilience, supply chain & logistics, coaching</li>
              <li><strong>Leadership Reach:</strong> from frontline supervisors to <strong>senior commissioned officers</strong> and enterprise executives</li>
              <li><strong>Commitment:</strong> results with integrity, dignity, and purpose — always people-first, mission-aligned</li>
            </ul>
          </div>
          <aside className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-5 bg-white/60">
              <div className="text-sm font-semibold" style={{ color: BRAND.colors.navy }}>Credentials & Highlights</div>
              <ul className="mt-2 text-sm space-y-2 text-slate-700">
                <li>Chief Warrant Officer Three (CW3), senior technical leader</li>
                <li>Senior Manager, aerospace operations (private sector)</li>
                <li>Builder of high-performance, values-driven cultures</li>
                <li>Women-Owned • Veteran-Owned</li>
              </ul>
            </div>
            <GoldButton to="/contact">Invite Jesseana to speak</GoldButton>
          </aside>
        </div>

        <h3 className="mt-14 text-2xl md:text-3xl font-bold" style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}>
          About One Leader at a Time – Leadership Group™
        </h3>
        <div className="mt-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 leading-relaxed text-slate-700">
            <p>
              <strong>One Leader at a Time – Leadership Group™</strong> equips executives, teams, and transitioning veterans to lead with integrity,
              resilience, and purpose. We deliver executive coaching, organizational transformation programs, and veteran transition leadership —
              bridging the gap between technical mastery and human-centered leadership.
            </p>
            <p>
              Every engagement is grounded in the <strong>E.L.I.T.E.™ Framework</strong>, aligning Empower, Lead, Inspire, Transform, and Elevate into
              practical systems: decision cadence, feedback loops, standards of behavior, and measurable outcomes that lift culture and performance.
            </p>
            <p className="text-sm uppercase tracking-wide" style={{ color: BRAND.colors.navy }}>
              Veteran-Owned • Women-Owned • Purpose-Driven • Leadership-Focused
            </p>
          </div>
          <aside className="space-y-3">
            <GoldButton to="/elite">Explore the E.L.I.T.E.™ Framework</GoldButton>
            <GoldButton to="/services">See our services</GoldButton>
          </aside>
        </div>
      </div>
    </section>
  </AppShell>
);

/* ------- Services ------- */
const Services = () => (
  <AppShell>
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}>
          Services
        </h2>
        <p className="mt-4 text-slate-700 max-w-3xl">
          We transform leaders, teams, and organizations through the E.L.I.T.E.™ Framework — Empower, Lead, Inspire, Transform, Elevate.
          Programs can be delivered onsite or virtually and tailored by audience level.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              t: "Leadership & Team Development",
              d: "High-impact workshops that strengthen trust, communication, decision-making, and execution across all levels.",
              bullets: ["Team operating rhythm", "Leader standards & rituals", "After-action learning"],
            },
            {
              t: "Executive & Strategic Coaching",
              d: "Confidential coaching for senior leaders navigating growth, transformation, and cultural momentum.",
              bullets: ["Decision frameworks", "Executive presence", "Accountability systems"],
            },
            {
              t: "Organizational Resilience",
              d: "Build adaptability and continuity strategies that keep your mission on track in complex environments.",
              bullets: ["Change navigation", "Risk & response playbooks", "Metrics that matter"],
            },
            {
              t: "Speaking & Keynotes",
              d: "Dynamic talks that turn leadership principles into action, tailored to your audience and outcomes.",
              bullets: ["Keynotes", "Panels & firesides", "Workshops"],
            },
            {
              t: "Veteran Transition Leadership",
              d: "End-to-end support to translate military excellence into civilian leadership and career success.",
              bullets: ["Resume & LinkedIn", "Interview prep", "30-60-90 plans"],
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-slate-200 p-6 bg-white/80">
              <h3 className="font-semibold" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>{c.t}</h3>
              <p className="mt-2 text-slate-600 text-sm">{c.d}</p>
              {c.bullets && (
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  {c.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8"><GoldButton to="/contact">Schedule a consultation</GoldButton></div>
      </div>
    </section>
  </AppShell>
);

/* ------- E.L.I.T.E.™ Framework ------- */
const Elite = () => (
  <AppShell>
    <section className="w-full" style={{ background: `linear-gradient(180deg, #ffffff 0%, ${BRAND.colors.sky} 100%)` }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}>
          E.L.I.T.E.™ Framework
        </h2>
        <p className="mt-4 text-slate-700 max-w-3xl">
          A field-tested system that turns leadership values into day-to-day behaviors, clear decisions, and measurable results.
          Each pillar includes practical tools, cadences, and checkpoints.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { k: "E", t: "Empower", d: "Build confidence, autonomy, and ownership with clear standards and support." },
            { k: "L", t: "Lead", d: "Model values, align decisions, and execute with clarity and integrity." },
            { k: "I", t: "Inspire", d: "Craft vision and communicate in ways that mobilize action and belief." },
            { k: "T", t: "Transform", d: "Navigate change with resilience, systems thinking, and disciplined follow-through." },
            { k: "E", t: "Elevate", d: "Sustain excellence through coaching, feedback loops, and continuous learning." },
          ].map((m) => (
            <div key={m.t} className="rounded-xl border border-slate-200 p-5 bg-white/80">
              <div className="text-sm font-semibold" style={{ color: BRAND.colors.navy }}>{m.k} — {m.t}</div>
              <p className="mt-2 text-slate-600 text-sm">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><GoldButton to="/contact">Request ELITE program details</GoldButton></div>
      </div>
    </section>
  </AppShell>
);

/* ------- Speaking ------- */
const Speaking = () => (
  <AppShell>
    <section className="w-full" style={{ background: `linear-gradient(180deg, #ffffff 0%, ${BRAND.colors.sky} 100%)` }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}>
          Speaking & Keynotes
        </h1>
        <p className="mt-4 text-slate-700 max-w-3xl">
          High-energy, high-credibility talks that turn leadership principles into action. Jesseana brings two decades of military and aerospace leadership to the stage,
          equipping audiences to lead with clarity, courage, and the E.L.I.T.E.™ mindset.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3 text-slate-700">
            <div><span className="font-semibold">Formats:</span> Keynote (20–45 min), Fireside chat, Panelist, Workshop (90–120 min)</div>
            <div><span className="font-semibold">Audiences:</span> Executives, emerging leaders, technical teams, veteran ERGs</div>
            <div><span className="font-semibold">Outcomes:</span> Clarity, accountability, decision speed, cultural momentum</div>
            <div><span className="font-semibold">Travel:</span> Domestic & international • Based in Oklahoma City, OK</div>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white/80 space-y-3">
            <div className="text-slate-700">Ready to lock dates or request rates?</div>
            <GoldButton to="/contact">Request speaking availability</GoldButton>
          </div>
        </div>

        <h2 className="mt-10 text-2xl md:text-3xl font-bold" style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}>
          Signature Topics
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              t: "Building High-Performance Teams in High-Stakes Environments",
              b: "Align roles, run disciplined stand-ups, and execute with urgency—without burning people out.",
              o: ["Team trust & cadence systems","Clarity of priorities & ownership","Faster, cleaner handoffs"],
            },
            {
              t: "Culture as a Competitive Advantage",
              b: "Turn values into behaviors, feedback loops, and visible leadership standards that lift performance.",
              o: ["Leadership standards & rituals","Constructive feedback culture","Retention & engagement gains"],
            },
            {
              t: "The E.L.I.T.E.™ Framework: Practical Leadership for Real Results",
              b: "A field-tested system to simplify decisions and drive change with discipline and care.",
              o: ["Decision frameworks","Change navigation","Post-event action plans"],
            },
          ].map((card) => (
            <div key={card.t} className="rounded-xl border border-slate-200 p-6 bg-white/80">
              <h3 className="font-semibold" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.navy }}>{card.t}</h3>
              <p className="mt-2 text-slate-600 text-sm">{card.b}</p>
              <div className="mt-3">
                <div className="text-xs font-medium" style={{ color: BRAND.colors.navy }}>Audience takeaways</div>
                <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
                  {card.o.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </AppShell>
);

/* ------- Veterans ------- */
const Veterans = () => (
  <AppShell>
    <section className="w-full" style={{ background: `linear-gradient(180deg, #ffffff 0%, ${BRAND.colors.sky} 100%)` }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}>
          Veteran Transition Leadership
        </h2>
        <div className="mt-4 text-slate-700 space-y-4 leading-relaxed max-w-3xl">
          <p><strong>From junior enlisted to senior commissioned officers — stepping into what’s next.</strong></p>
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
        <div className="mt-8"><GoldButton to="/contact">Start your transition</GoldButton></div>
      </div>
    </section>
  </AppShell>
);

/* ------- Contact ------- */
const Contact = () => (
  <AppShell>
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.colors.navy, fontFamily: BRAND.fonts.heading }}>
          Contact
        </h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
          <form className="rounded-xl border border-slate-200 p-6 space-y-4 bg-white">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Your name"/>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="you@company.com"/>
              </div>
              <div>
                <label className="text-sm text-slate-600">Phone</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="(###) ###-####"/>
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
              <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Tell us about your goals, dates, and audience size…"/>
            </div>
            <GoldButton to="/contact">Send inquiry</GoldButton>
          </form>
          <div className="rounded-xl border border-slate-200 p-6 space-y-3 bg-white">
            <div className="text-slate-700"><span className="font-medium">Email</span> — info@OneLeaderAtATimeGroup.com</div>
            <div className="text-slate-700"><span className="font-medium">Location</span> — Oklahoma City, OK</div>
          </div>
        </div>
      </div>
    </section>
  </AppShell>
);

/* ------- Router ------- */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/elite" element={<Elite />} />
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/veterans" element={<Veterans />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
