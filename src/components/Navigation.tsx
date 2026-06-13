import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/articles", label: "Achievements" },
  { to: "/coding", label: "Coding" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <NavLink to="/" className="font-display font-bold text-xl tracking-tight">
            <span className="text-gradient-primary">MYPORTFOLIO</span>
            <span className="text-foreground"></span>
          </NavLink>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    <span className={active ? "text-primary" : "text-muted-foreground"}>
                      {l.label}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile */}
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-3 space-y-1"
          >
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
