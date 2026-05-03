import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "About me", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-[60] bg-natural-800/25 backdrop-blur-sm md:hidden"
        />
      )}
      <nav className="fixed top-0 left-0 right-0 z-[70] bg-natural-50/80 backdrop-blur-md border-b border-natural-300">
      <div className="relative z-[70] max-w-7xl mx-auto px-4 sm:px-6 py-3 md:h-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-natural-500 rounded-full flex items-center justify-center text-white font-serif italic text-xl transform group-hover:rotate-12 transition-transform duration-300 shrink-0">
              C
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-natural-800">
                Chloe Cai
              </h1>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.16em] md:tracking-[0.2em] text-natural-400 font-sans font-semibold">
                Student of Psychology & Neural Science
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="md:hidden h-11 w-11 rounded-full border border-natural-300 bg-white text-natural-700 flex items-center justify-center shadow-sm"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden md:flex w-full md:w-auto items-center justify-between md:justify-start md:space-x-10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-xs font-semibold uppercase tracking-widest transition-colors ${
                location.pathname === link.path
                  ? "text-natural-800"
                  : "text-natural-600 hover:text-natural-500"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-natural-500"
                  initial={false}
                />
              )}
            </Link>
          ))}
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden grid grid-cols-1 gap-2 rounded-[20px] border border-natural-300 bg-white p-3 shadow-lg shadow-natural-500/10"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-colors ${
                  location.pathname === link.path
                    ? "bg-natural-500 text-white"
                    : "bg-natural-50 text-natural-700 hover:bg-natural-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
      </nav>
    </>
  );
}
