import { motion } from 'motion/react';
import { ExternalLink, Milestone, Microscope, Users } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      date: '2023 / 01',
      title: 'Neural Correlates of Empathy',
      desc: 'A study on fMRI responses to social distress and environmental signaling.',
      type: 'Cognitive Science'
    },
    {
      date: '2023 / 04',
      title: 'Stress & Urban Environments',
      desc: 'Mapping cortisol levels in dense city centers using saliva-based biosensors.',
      type: 'Behavioral Mapping'
    },
    {
      date: '2024 / 02',
      title: 'The Dopamine Loop in Social Media',
      desc: 'Behavioral analysis of notification patterns and reward processing in the adolescent brain.',
      type: 'Neurobiology'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="bg-natural-100 p-10 md:p-16 rounded-[32px] border border-natural-300">
        <div className="flex justify-between items-end mb-12 border-b border-natural-300 pb-6">
          <h2 className="text-xs uppercase tracking-[0.3em] text-natural-400 font-bold">Selected Research Projects</h2>
          <span className="text-[10px] text-natural-500 font-bold underline cursor-pointer hover:text-natural-800 transition-colors">ARCHIVE / 2026</span>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer max-w-4xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                <p className="text-[10px] font-bold text-natural-500 mb-2 md:mb-0 md:w-20 pt-2 tracking-widest">{project.date}</p>
                <div className="flex-1">
                  <h4 className="font-serif text-3xl md:text-4xl text-natural-800 group-hover:italic group-hover:translate-x-2 transition-all duration-500">
                    {project.title}
                  </h4>
                  <p className="text-sm text-natural-600 mt-3 font-light leading-relaxed max-w-2xl">
                    {project.desc}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-natural-400 px-2 py-1 bg-natural-50 border border-natural-300 rounded">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
