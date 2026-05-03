import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "About me", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-natural-50/80 backdrop-blur-md border-b border-natural-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-natural-500 rounded-full flex items-center justify-center text-white font-serif italic text-xl transform group-hover:rotate-12 transition-transform duration-300">
            C
          </div>
          <div>
            <h1 className="font-serif text-2xl font-medium tracking-tight text-natural-800">
              Chloe Cai
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-natural-400 font-sans font-semibold">
              Student of Psychology & Neural Science
            </p>
          </div>
        </Link>
        <div className="flex items-center space-x-10">
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
      </div>
    </nav>
  );
}
