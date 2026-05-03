import { motion, AnimatePresence } from "motion/react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-natural-50 text-natural-700">
      <Navbar />
      <main className="pt-24 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-natural-300 pt-8 space-y-6 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-natural-400 font-bold">
          <span>Based in The University of Auckland</span>
          <span>© 2026 Chloe Cai — Academic v1.0</span>
        </div>
      </footer>
    </div>
  );
}
