import { Coffee, Dumbbell, Gamepad2, Utensils } from "lucide-react";
import { motion } from "motion/react";

const interestCategories = [
  {
    title: "Gaming",
    icon: <Gamepad2 className="w-8 h-8" />,
    examples: [
      {
        title: "BattleBlock Theater",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/238460/header.jpg",
      },
      {
        title: "Civilization VI",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg",
      },
      {
        title: "Terraria",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
      },
      {
        title: "No Man's Sky",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg",
      },
    ],
  },
  {
    title: "Exercise",
    icon: <Dumbbell className="w-8 h-8" />,
    examples: [
      {
        title: "Bouldering",
        image:
          "https://images.unsplash.com/photo-1659666287295-7da26c3f80d4?auto=format&fit=crop&w=480&q=80",
      },
      {
        title: "Gym",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=480&q=80",
      },
    ],
  },
  {
    title: "Food",
    icon: <Utensils className="w-8 h-8" />,
    examples: [
      {
        title: "Home Cooking",
        image:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=480&q=80",
      },
      {
        title: "Cafe",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=480&q=80",
        badge: "Practicing Barista",
      },
    ],
  },
];

export default function InterestsSection() {
  return (
    <section className="bg-natural-100 p-6 sm:p-8 md:p-16 rounded-[24px] md:rounded-[32px] border border-natural-300">
      <div className="mb-8 md:mb-12 border-b border-natural-300 pb-6 md:pb-8 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-serif text-natural-800 italic">
          Interests & Hobbies
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {interestCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-[20px] md:rounded-[24px] border border-natural-200 hover:shadow-xl hover:shadow-natural-500/5 hover:border-natural-500 transition-all group"
          >
            <div className="flex flex-row items-center justify-center md:justify-start gap-4 md:gap-6 text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-natural-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-natural-500/20 shrink-0">
                {category.icon}
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-serif text-natural-800 group-hover:text-natural-500 transition-colors mb-1">
                  {category.title}
                </h4>
              </div>
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {category.examples.map((example) => (
                <div
                  key={example.title}
                  className={`relative grid grid-cols-[5rem_minmax(0,1fr)] sm:grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 sm:gap-4 rounded-2xl bg-natural-50 p-3 border border-natural-200/70 ${
                    example.badge
                      ? "ring-2 ring-natural-500/25 shadow-lg shadow-natural-500/10"
                      : ""
                  }`}
                >
                  {example.badge && (
                    <span className="absolute -top-3 right-3 sm:right-4 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-natural-500 border border-natural-300 shadow-sm">
                      <Coffee className="h-3.5 w-3.5" />
                      {example.badge}
                    </span>
                  )}
                  <div className="h-16 w-20 sm:h-20 sm:w-24 rounded-xl overflow-hidden bg-natural-200 shrink-0">
                    <img
                      src={example.image}
                      alt={example.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h5 className="text-lg sm:text-xl md:text-2xl font-serif font-medium text-natural-800 leading-tight text-center">
                    {example.title}
                  </h5>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
