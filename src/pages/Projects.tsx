import { motion } from "motion/react";
import { Brain, Eye, Library, Network, Route, Zap } from "lucide-react";

const projects = [
  {
    title: "Semantic and Spatial Memory Research",
    description:
      "Investigating how people organize conceptual knowledge and navigate spatial information through memory-based representations.",
    type: "Current Research",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "What Happens in the Brain When Conscious Awareness Begins?",
    description:
      "An independent reflection on Railo et al. (2011), exploring how VAN and LP brain signals may mark the early emergence and later amplification of conscious visual experience.",
    type: "Personal Research · 6 May 2026",
    icon: <Network className="h-6 w-6" />,
  },
  {
    title: "Why Does Human Vision Outperform Deep Learning?",
    description:
      "A critical analysis of Understanding Human Object Vision, comparing human object recognition with deep convolutional networks and highlighting how action goals, multimodal experience, temporal feedback, and developmental learning make biological vision more adaptive than static image classification.",
    type: "Personal Research · 13 July 2025",
    icon: <Eye className="h-6 w-6" />,
  },
  {
    title: "How Personal and Semantic Memories Share Neural Networks",
    description:
      "A personal research reflection on neuroimaging evidence that semantic knowledge and autobiographical memories rely on overlapping brain networks, differing less by separate storage regions than by activation strength, self-reference, imagery, and emotional context.",
    type: "Personal Research · 19 April 2026",
    icon: <Library className="h-6 w-6" />,
  },
  {
    title: "An Analysis of Early Visual Pathway Research",
    description:
      "A review of Hubel and Wiesel's foundational work on orientation columns, ocular dominance columns, and simple and complex cells in V1, examining how neural structure supports visual coding while noting later concerns about functional-column morphology, simplified cell classification, and reproducibility limits.",
    type: "Personal Research · 26 March 2026",
    icon: <Route className="h-6 w-6" />,
  },
  {
    title: "How Does the Brain Generate Consciousness?",
    description:
      "A comparative reflection on Global Workspace Theory and Reverse Hierarchy Theory, examining whether conscious experience arises through frontoparietal integration and broadcast or through recurrent feedback from higher visual areas back to sensory cortex.",
    type: "Personal Research · 13 April 2026",
    icon: <Zap className="h-6 w-6" />,
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="bg-natural-100 p-8 md:p-12 lg:p-16 rounded-[32px] border border-natural-300">
        <div className="mb-12 border-b border-natural-300 pb-8">
          <h1 className="text-5xl md:text-6xl font-serif text-natural-800 tracking-tight">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[24px] border border-natural-200 p-8 min-h-[320px] flex flex-col hover:shadow-xl hover:shadow-natural-500/5 hover:border-natural-500 transition-all group"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="h-14 w-14 rounded-2xl bg-natural-500 text-white flex items-center justify-center shadow-lg shadow-natural-500/20 group-hover:scale-105 transition-transform">
                  {project.icon}
                </div>
                <span className="rounded-full bg-natural-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-natural-500 border border-natural-200 text-center">
                  {project.type}
                </span>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-serif text-natural-800 leading-tight mb-5 group-hover:text-natural-500 transition-colors">
                  {project.title}
                </h2>
                <p className="text-base md:text-lg text-natural-600 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
