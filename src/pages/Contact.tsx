import { Download, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const contactActions = [
  {
    title: "Download CV",
    description:
      "View Chloe's academic background, research experience, and selected work.",
    href: "/ResumeChloeCai.pdf",
    label: "Download PDF",
    icon: <Download className="h-6 w-6" />,
    download: true,
  },
  {
    title: "LinkedIn Profile",
    description:
      "Connect with Chloe and follow updates on research, study, and professional work.",
    href: "https://www.linkedin.com/in/chloe-cai-091491376/",
    label: "Open LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    download: false,
  },
];

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <section className="bg-natural-100 p-6 sm:p-8 md:p-12 lg:p-16 rounded-[24px] md:rounded-[32px] border border-natural-300">
        <div className="mb-8 md:mb-12 border-b border-natural-300 pb-6 md:pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-natural-800 tracking-tight">
            Contact
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactActions.map((action, index) => (
            <motion.a
              key={action.title}
              href={action.href}
              download={action.download || undefined}
              target={action.download ? undefined : "_blank"}
              rel={action.download ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[20px] md:rounded-[24px] border border-natural-200 p-6 sm:p-8 md:p-10 min-h-[240px] md:min-h-[280px] flex flex-col justify-between hover:shadow-xl hover:shadow-natural-500/5 hover:border-natural-500 transition-all"
            >
              <div>
                <div className="mb-6 md:mb-8 h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-natural-500 text-white flex items-center justify-center shadow-lg shadow-natural-500/20 group-hover:scale-105 transition-transform">
                  {action.icon}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-natural-800 leading-tight mb-4 md:mb-5 group-hover:text-natural-500 transition-colors">
                  {action.title}
                </h2>
                <p className="text-base md:text-lg text-natural-600 font-light leading-relaxed max-w-xl">
                  {action.description}
                </p>
              </div>

              <div className="mt-8 md:mt-10 inline-flex items-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-natural-500">
                {action.label}
                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
