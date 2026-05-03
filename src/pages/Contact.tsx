import { motion } from "motion/react";
import { Globe } from "lucide-react";

export default function Contact() {
  const contacts = [
    { name: "LinkedIn", value: "linkedin.com/elena-v-psych", href: "#" },
    {
      name: "Email",
      value: "elena.vance@academia.edu",
      href: "mailto:elena.vance@academia.edu",
    },
    { name: "Curriculum Vitae", value: "Download PDF (2026)", href: "#" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch min-h-[60vh]">
        {/* Contact info card */}
        <section className="md:col-span-8 bg-white p-10 md:p-16 rounded-[32px] border border-natural-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-natural-400 mb-8 font-bold">
              Inquiries & Collaboration
            </h3>
            <h2 className="text-5xl md:text-7xl font-serif text-natural-800 tracking-tight leading-[0.9] mb-12">
              Let's speak about the <span className="italic">Unseen.</span>
            </h2>

            <div className="space-y-8">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <a
                    href={contact.href}
                    className="inline-block border-b border-natural-300 pb-1 group-hover:border-natural-500 transition-colors"
                  >
                    <p className="text-[10px] text-natural-400 font-bold uppercase tracking-widest mb-1">
                      {contact.name}
                    </p>
                    <p className="text-xl text-natural-700 font-medium group-hover:text-natural-500 transition-colors">
                      {contact.value}
                    </p>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pt-12 flex justify-between items-end border-t border-natural-300 mt-12">
            <div>
              <p className="text-xs text-natural-400 font-bold uppercase tracking-widest mb-1">
                Location
              </p>
              <p className="text-sm font-medium text-natural-700">
                Cambridge, Massachusetts
              </p>
            </div>
            <div className="w-12 h-12 rounded-full border border-natural-300 flex items-center justify-center hover:bg-natural-50 transition-colors cursor-pointer group">
              <span className="text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </section>

        {/* Small decorative/context card */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <section className="flex-1 bg-natural-500 rounded-[24px] p-8 text-white flex flex-col justify-end">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-light leading-relaxed opacity-80 italic font-serif text-lg">
              "The brain is the most complex object in the known universe, and
              uncovering its secrets is a journey worth sharing."
            </p>
          </section>

          <section className="bg-natural-100 border border-natural-200 rounded-[24px] p-8">
            <h3 className="text-xs uppercase tracking-[0.3em] text-natural-400 mb-4 font-bold">
              Office Hours
            </h3>
            <p className="text-sm text-natural-600 font-medium">
              Mon — Thu / 10:00 — 16:00 EST
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
