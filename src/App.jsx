<header className="relative z-40 border-b">
  {/* Banner image — shows full image without cropping */}
  <div className="relative w-full" style={{ backgroundColor: "#ffffff" }}>
    <img
      src="/logo01.png"
      alt="One Leader at a Time – Leadership Group™"
      className="w-full h-[140px] object-contain"
      loading="eager"
    />
  </div>

  {/* Navigation bar over the banner, right aligned */}
  <nav className="absolute inset-0 max-w-7xl mx-auto px-6 flex items-center justify-end">
    <div
      className="hidden md:flex items-center gap-6 text-sm px-4 py-2 rounded-full shadow-sm"
      style={{
        backgroundColor: "rgba(76, 124, 193, 0.88)", // BRAND headerBlue @ ~88% opacity
        backdropFilter: "saturate(120%) blur(2px)",
      }}
    >
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
            `text-white ${isActive ? "font-semibold underline underline-offset-4" : "opacity-95 hover:opacity-100"}`
          }
          style={{ textShadow: "0 1px 1px rgba(0,0,0,.35)" }}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  </nav>
</header>
