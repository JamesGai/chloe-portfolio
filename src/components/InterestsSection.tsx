import { Gamepad2, Mountain, Utensils } from "lucide-react";
import { motion } from "motion/react";

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

export default function InterestsSection() {
  return (
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
  );
}
