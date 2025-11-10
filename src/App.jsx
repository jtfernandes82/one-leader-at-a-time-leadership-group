import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

/* ------- Brand config ------- */
const BRAND = {
  name: "One Leader at a Time – Leadership Group™",
  legal: "One Leader at a Time Leadership Group, LLC",
  bannerUrl: "/One%20Leader%20at%20a%20Time001.png",
  colors: {
    headerBlue: "#2F4A7F",   // deep navy anchor
    gold: "#F5C24B",
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

        {/* Longer, more gradual fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "36px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.7) 80%, rgba(255,255,255,1) 100%)",
          }}
        />

        {/* Lighter, more transparent nav; slightly thinner and nudged down */}
        <div
          className="absolute left-0 right-0 backdrop-blur-[2px] rounded-t-md"
          style={{
            bottom: "-18px",
            backgroundColor: "rgba(47, 74, 127, 0.35)", // ~35% opacity
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <nav className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-end">
            <div className="hidden md:flex items-center gap-6 text-sm">
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
                    `text-white ${
                      isActive
                        ? "font-semibold underline underline-offset-4"
                        : "opacity-95 hover:opacity-100"
                    }`
                  }
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

    {/* FOOTER */}
    <footer className="mt-12" style={{ backgroundColor: BRAND.colors.headerBlue }}>
      <div className="max-w-7xl mx-auto px-6 py-8 text-slate-100 text-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</div>
        <div className="flex gap-4">
          <Link to="/elite" className="hover:text-slate-300">ELITE</Link>
          <Link to="/services" className="hover:text-slate-300">Services</Link>
          <Link to="/speaking" className="hover:text-slate-300">Speaking</Link>
          <Link to="/veterans" className="hover:text-slate-300">Veterans</Link>
          <Link to="/contact" className="hover:text-slate-300">Contact</Link>
        </div>
      </div>
    </footer>
  </div>
);

/* ------- Pages (placeholder copy) ------- */
const Home = () => (
  <AppShell>
    <section
      className="text-center py-20"
      style={{ background: `linear-gradient(180deg, ${BRAND.colors.sky} 0%, #ffffff 100%)` }}
    >
      <h1 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.colors.headerBlue, fontFamily: BRAND.fonts.heading }}>
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

const About = () => (<AppShell><div className="max-w-7xl mx-auto px-6 py-16">About page</div></AppShell>);
const Services = () => (<AppShell><div className="max-w-7xl mx-auto px-6 py-16">Services page</div></AppShell>);
const Elite = () => (<AppShell><div className="max-w-7xl mx-auto px-6 py-16">ELITE page</div></AppShell>);
const Speaking = () => (<AppShell><div className="max-w-7xl mx-auto px-6 py-16">Speaking page</div></AppShell>);
const Veterans = () => (<AppShell><div className="max-w-7xl mx-auto px-6 py-16">Veterans page</div></AppShell>);
const Contact = () => (<AppShell><div className="max-w-7xl mx-auto px-6 py-16">Contact page</div></AppShell>);

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
