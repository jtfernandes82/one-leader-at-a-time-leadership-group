import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

/* ------- Brand config ------- */
const BRAND = {
  name: "One Leader at a Time – Leadership Group™",
  legal: "One Leader at a Time Leadership Group, LLC",
  bannerUrl: "/logo01.png", // in /public
  colors: {
    headerBlue: "#4C7CC1",
    gold: "#F5C24B",
    goldDark: "#D4A32C",
    sky: "#E6EEF7",
    text: "#334155",
  }
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

/* ------- App Shell with banner header ------- */
const AppShell = ({ children }) => (
  <div className="min-h-screen bg-white">
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundImage: `url(${BRAND.bannerUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "170px",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[170px] flex items-center justify-between">
        <Link to="/" className="no-underline">
          <span className="h-heading text-white drop-shadow font-black text-lg">
            {BRAND.name}
          </span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm">
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
                `text-white drop-shadow hover:opacity-90 ${isActive ? "font-semibold" : ""}`
              }
            >
              {i.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>

    <main>{children}</main>

    <footer className="mt-10" style={{ backgroundColor: BRAND.colors.headerBlue }}>
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

/* ------- Simple pages (you can paste your full copy later) ------- */
const Home = () => (
  <AppShell>
    <section
      className="text-center py-20"
      style={{
        background: `linear-gradient(180deg, ${BRAND.colors.sky} 0%, #ffffff 100%)`,
      }}
    >
      <h1 className="h-heading text-4xl md:text-5xl font-bold" style={{ color: BRAND.colors.headerBlue }}>
        Lead Today. Transform Tomorrow.
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-700">
        Empowering leaders and organizations through the E.L.I.T.E.™ Framework —
        Empower, Lead, Inspire, Transform, Elevate.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <GoldButton to="/contact">Book a discovery call</GoldButton>
        <GoldButton to="/elite">Explore the E.L.I.T.E.™ Framework</GoldButton>
      </div>
    </section>
  </AppShell>
);

const About = () => <AppShell><div className="max-w-7xl mx-auto px-6 py-16">About page</div></AppShell>;
const Services = () => <AppShell><div className="max-w-7xl mx-auto px-6 py-16">Services page</div></AppShell>;
const Elite = () => <AppShell><div className="max-w-7xl mx-auto px-6 py-16">ELITE page</div></AppShell>;
const Speaking = () => <AppShell><div className="max-w-7xl mx-auto px-6 py-16">Speaking page</div></AppShell>;
const Veterans = () => <AppShell><div className="max-w-7xl mx-auto px-6 py-16">Veterans page</div></AppShell>;
const Contact = () => <AppShell><div className="max-w-7xl mx-auto px-6 py-16">Contact page</div></AppShell>;

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
