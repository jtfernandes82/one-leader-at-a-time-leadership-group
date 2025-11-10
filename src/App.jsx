import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

/** =========================
 * Brand
 * ======================= */
const BRAND = {
  banner: "/One Leader at a Time001.png", // keep this image in /public
  email: "jesse@oneleaderatatimegroup.com",
};

/* Internal button that routes without reloading */
const Button = ({ to, children }) => (
  <NavLink className="btn" to={to}>
    {children}
  </NavLink>
);

/** =========================
 * Layout (shared shell)
 * ======================= */
const Layout = ({ children }) => (
  <div className="site">
    {/* Banner */}
    <header className="banner">
      <img
        src={BRAND.banner}
        alt="One Leader at a Time – Leadership Group"
        className="banner-img"
      />
    </header>

    {/* Nav with soft gold → white → subtle blue */}
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

    {/* Footer with matching soft gradient; no hard line */}
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

/** =========================
 * Pages
 * ======================= */
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
          ["Speaking & Keynotes", ["Keynotes", "Panels & firesides", "Workshops"]],
          ["Veteran Transition Leadership", ["Resume & LinkedIn", "Interview prep", "30-60-90 plans"]],
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

      {/* Planner-friendly CTA */}
      <div className="info-callout">
        <div><strong>Ready to lock dates or request rates?</strong></div>
        <Button to="/contact">Request speaking availability</Button>
      </div>

      {/* Formats / Audiences / Outcomes */}
      <div className="cards three mt-md">
        <article className="card">
          <h4>Formats</h4>
          <ul className="bullets">
            <li>Keynote (20–45 minutes)</li>
            <li>Workshop (90–120 minutes)</li>
            <li>Fireside chat</li>
            <li>Panelist / Moderator</li>
          </ul>
        </article>
        <article className="card">
          <h4>Audiences</h4>
          <ul className="bullets">
            <li>Executives & senior leaders</li>
            <li>Emerging leaders & high-potential talent</li>
            <li>Technical & operations teams</li>
            <li>Veteran ERGs & service-member cohorts</li>
          </ul>
        </article>
        <article className="card">
          <h4>Outcomes</h4>
          <ul className="bullets">
            <li>Higher clarity & decision speed</li>
            <li>Visible standards & accountability</li>
            <li>Stronger team rhythm & trust</li>
            <li>Momentum for real, sustained change</li>
          </ul>
        </article>
      </div>

      {/* Signature Topics with Takeaways */}
      <h3 className="mt-lg">Signature Topics</h3>
      <div className="cards three mt-md">
        <article className="card">
          <h4>Building High-Performance Teams in High-Stakes Environments</h4>
          <p>Align roles, run disciplined stand-ups, and execute with urgency—without burning people out.</p>
          <strong>Audience takeaways</strong>
          <ul className="bullets">
            <li>Team trust & cadence systems</li>
            <li>Clarity of priorities & ownership</li>
            <li>Faster, cleaner handoffs</li>
          </ul>
        </article>

        <article className="card">
          <h4>Culture as a Competitive Advantage</h4>
          <p>Turn values into visible standards, feedback loops, and leadership rituals that lift performance.</p>
          <strong>Audience takeaways</strong>
          <ul className="bullets">
            <li>Leadership standards & rituals</li>
            <li>Constructive feedback culture</li>
            <li>Retention & engagement gains</li>
          </ul>
        </article>

        <article className="card">
          <h4>The E.L.I.T.E.™ Framework: Practical Leadership for Real Results</h4>
          <p>A system to simplify decisions, navigate change, and convert insight into action.</p>
          <strong>Audience takeaways</strong>
          <ul className="bullets">
            <li>Decision frameworks that travel</li>
            <li>Change navigation under pressure</li>
            <li>Post-event action plans</li>
          </ul>
        </article>
      </div>

      {/* Demo Reel + One-sheet */}
      <h3 className="mt-lg">See Jesseana in Action</h3>
      <div className="cards">
        <article className="card">
          <h4>Demo Reel</h4>
          <div style={{ aspectRatio: "16/9", width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid #e6edf6" }}>
            <iframe
              title="Speaker Demo Reel"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </article>
        <article className="card">
          <h4>One-Sheet & Booking</h4>
          <p>Quick reference for planners: topics, outcomes, formats, and AV setup.</p>
          <p>
            <a className="btn" href="/OneLeaderAtATime_Speaker-OneSheet.pdf">Download one-sheet</a>
          </p>
          <p><strong>Travel:</strong> Domestic & international • Based in Oklahoma City, OK</p>
        </article>
      </div>

      {/* Planner Requirements / AV */}
      <h3 className="mt-lg">Planner Essentials</h3>
      <div className="cards three mt-md">
        <article className="card">
          <h4>Pre-Event</h4>
          <ul className="bullets">
            <li>15–20 min alignment call on goals & outcomes</li>
            <li>Run-of-show coordination with your team</li>
            <li>Content tailoring to audience & mission</li>
          </ul>
        </article>
        <article className="card">
          <h4>AV & Stage</h4>
          <ul className="bullets">
            <li>Handheld or lav mic</li>
            <li>HDMI to projector/LED</li>
            <li>Confidence monitor (preferred)</li>
            <li>Wireless slide advancer</li>
          </ul>
        </article>
        <article className="card">
          <h4>Deliverables</h4>
          <ul className="bullets">
            <li>Slide deck 48–72 hours prior</li>
            <li>Q&A optional</li>
            <li>Book signing / meet-and-greet on request</li>
          </ul>
        </article>
      </div>

      {/* Final CTA */}
      <div className="cta-row mt-lg">
        <Button to="/contact">Check dates & rates</Button>
        <Button to="/services">Explore workshops</Button>
      </div>
    </section>
  </Layout>
);

const Veterans = () => (
  <Layout>
    <section className="section">
      <h2>Veteran Transition Leadership</h2>
      <p className="lead">
        From junior enlisted to senior commissioned officers — stepping into what’s next with confidence.
      </p>
      <ul className="bullets">
        <li>Leadership & skills translation into executive-ready language</li>
        <li>Resume & LinkedIn tailored to leadership/technical roles</li>
        <li>Interview preparation & executive presence</li>
        <li>Job search coaching & market navigation strategies</li>
        <li>Career counseling aligned to purpose & advancement goals</li>
        <li>Senior mentor matching & executive networking</li>
        <li>Target-role 30-60-90 onboarding plan aligned to E.L.I.T.E.™</li>
      </ul>
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
      <p className="lead">Tell us about your goals, dates, and audience. We’ll follow up quickly.</p>

      {/* Netlify form (works on static deploy) */}
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Honeypot */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>

        <label>
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@company.com" required />
        </label>
        <label>
          Phone
          <input name="phone" type="text" placeholder="(###) ###-####" />
        </label>
        <label>
          What are you looking for?
          <select name="topic">
            <option>Keynote / Speaking</option>
            <option>Leadership Workshop</option>
            <option>Executive Coaching</option>
            <option>Veteran Transition Program</option>
            <option>Custom Engagement</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" rows="6" placeholder="Share goals, dates, audience size…"></textarea>
        </label>
        <button className="btn" type="submit">Send inquiry</button>
      </form>

      <div className="contact-side">
        <div><strong>Email:</strong> <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
        <div><strong>Location:</strong> Oklahoma City, OK</div>
      </div>
    </section>
  </Layout>
);

/** =========================
 * Router
 * ======================= */
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
