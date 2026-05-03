import { motion } from "motion/react";

const profileImagePath = "/chloe.jpg";

export default function IntroductionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
      <section className="md:col-span-12 bg-white p-8 md:p-12 lg:p-16 rounded-[32px] shadow-sm border border-natural-200 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] gap-10 lg:gap-16 items-center"
        >
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-natural-400 font-bold mb-5">
              Student of Psychology & Neural Science
            </p>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-natural-800 tracking-tight leading-tight">
              Meet <span className="italic">Chloe</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-natural-600 font-light max-w-2xl">
              My bachelor's studies brought together education and psychology,
              shaping my interest in how people learn, remember, and make sense
              of experience. I am now exploring semantic and spatial memory,
              with a focus on how knowledge and place are represented in the
              brain.
            </p>
            <div className="flex flex-wrap gap-4 pt-8">
              <span className="px-5 py-2.5 bg-natural-100 rounded-full text-xs font-bold uppercase tracking-wider text-natural-500">
                Semantic Memory
              </span>
              <span className="px-5 py-2.5 bg-natural-100 rounded-full text-xs font-bold uppercase tracking-wider text-natural-500">
                Spatial Memory
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto lg:ml-auto rounded-[28px] overflow-hidden bg-natural-100 border border-natural-200 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-7xl font-serif italic text-natural-300">
              Chloe
            </div>
            <img
              src={profileImagePath}
              alt="Chloe portrait"
              className="relative z-10 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
