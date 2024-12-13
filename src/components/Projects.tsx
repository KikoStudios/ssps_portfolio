import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-[#040457]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#0424f6] dark:text-white"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white dark:bg-[#1a1a4f] rounded-xl shadow-lg overflow-hidden group border border-[#0424f6]/20 dark:border-[#8e8ef9]/20"
          >
            <div className="aspect-video overflow-hidden relative">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 font-medium flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  {t('projects.learnMore')}
                </motion.button>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-[#0424f6] dark:text-white">
                {t(projects[currentIndex].title)}
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                {t(projects[currentIndex].description)}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[currentIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#0424f6] dark:bg-[#8e8ef9] text-white dark:text-[#040457] rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[currentIndex].github}
                  className="flex items-center gap-2 text-[#0424f6] dark:text-white hover:text-[#041c94] dark:hover:text-[#8e8ef9] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} className="stroke-2" />
                  <span>{t('projects.viewCode')}</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 text-[#0424f6] dark:text-white hover:text-[#041c94] dark:hover:text-[#8e8ef9] transition-colors"
                >
                  <Plus size={20} className="stroke-2" />
                  <span>{t('projects.learnMore')}</span>
                </button>
              </div>
            </div>
          </motion.div>

          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-[#0424f6] dark:bg-[#8e8ef9] rounded-full shadow-lg text-white dark:text-[#040457] hover:bg-[#041c94] dark:hover:bg-white transition-colors"
          >
            <ChevronLeft size={24} className="stroke-2" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-[#0424f6] dark:bg-[#8e8ef9] rounded-full shadow-lg text-white dark:text-[#040457] hover:bg-[#041c94] dark:hover:bg-white transition-colors"
          >
            <ChevronRight size={24} className="stroke-2" />
          </button>
        </div>

        <ProjectModal
          project={projects[currentIndex]}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}