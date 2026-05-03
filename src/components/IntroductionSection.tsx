import { Coffee } from "lucide-react";
import { motion } from "motion/react";

const profileImagePath = "/chloe.jpg";

export default function IntroductionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
      <section className="md:col-span-12 bg-white p-5 sm:p-8 md:p-12 lg:p-16 rounded-[24px] md:rounded-[32px] shadow-sm border border-natural-200 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flow-root"
        >
          <div className="float-right ml-4 sm:ml-6 md:ml-10 lg:ml-14 sm:mb-6 md:mb-8 relative aspect-[4/5] w-[200px] sm:w-[200px] md:w-[300px] lg:w-[380px] xl:w-[420px] rounded-[18px] sm:rounded-[22px] md:rounded-[28px] overflow-hidden bg-natural-100 border border-natural-200 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-7xl font-serif italic text-natural-300">
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

          <div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-5 md:mb-8 text-natural-800 tracking-tight leading-tight">
              Meet <span className="italic">Chloe</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-natural-600 font-light">
              My bachelor's studies brought together education and psychology,
              shaping my interest in how people learn, remember, and make sense
              of experience. I am now exploring semantic and spatial memory,
              with a focus on how knowledge and place are represented in the
              brain.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-5 md:pt-8">
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-natural-100 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-natural-500">
                Semantic Memory
              </span>
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-natural-100 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-natural-500">
                Spatial Memory
              </span>
              <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-natural-500 border border-natural-300 shadow-sm shadow-natural-500/10 ring-1 ring-natural-500/15">
                <Coffee className="h-4 w-4" />
                Practicing Barista
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
