<header className="relative z-40">
  {/* Full-width banner */}
  <div className="w-full bg-white">
    <img
      src="/One%20Leader%20at%20a%20Time001.png"
      alt="One Leader at a Time – Leadership Group™"
      className="w-full h-[140px] object-cover object-center md:h-[150px] lg:h-[160px]"
      loading="eager"
    />
  </div>

  {/* Navigation bar below the banner */}
  <div style={{ backgroundColor: "#4C7CC1" }}>
    <nav className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-end">
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
</header>
