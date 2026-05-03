import { motion } from "motion/react";
import { Gamepad2, Mountain, Utensils } from "lucide-react";

export default function Home() {
  const profileImagePath = "/chloe.jpg";

  const interestCategories = [
    {
      title: "Gaming",
      icon: <Gamepad2 className="w-8 h-8" />,
    },
    {
      title: "Bouldering",
      icon: <Mountain className="w-8 h-8" />,
    },
    {
      title: "Gastronomy",
      icon: <Utensils className="w-8 h-8" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12 py-12">
      {/* Introduction Section */}
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
                shaping my interest in how people learn, remember, and make
                sense of experience. I am now exploring semantic and spatial
                memory, with a focus on how knowledge and place are represented
                in the brain.
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

      {/* Interests & Hobbies Universal Section */}
      <section className="bg-natural-100 p-10 md:p-16 rounded-[32px] border border-natural-300">
        <div className="mb-12 border-b border-natural-300 pb-8 text-center md:text-left">
          <h3 className="text-xs uppercase tracking-[0.3em] text-natural-400 font-bold mb-2">
            Life Beyond Academia
          </h3>
          <h2 className="text-4xl font-serif text-natural-800 italic">
            Interests & Hobbies
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {interestCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[24px] border border-natural-200 flex flex-col items-center text-center gap-6 hover:shadow-xl hover:shadow-natural-500/5 hover:border-natural-500 transition-all group flex-1"
            >
              <div className="w-16 h-16 bg-natural-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-natural-500/20 shrink-0">
                {category.icon}
              </div>
              <div>
                <h4 className="text-2xl font-serif text-natural-800 group-hover:text-natural-500 transition-colors mb-1">
                  {category.title}
                </h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-natural-400 font-bold">
                  Personal Pursuit
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
