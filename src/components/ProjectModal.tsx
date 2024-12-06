import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import type { Project } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'preview'>('details');
  const { t } = useLanguage();

  const tabs = [
    { id: 'details', label: t('projects.modal.details') },
    { id: 'preview', label: t('projects.modal.preview') }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90vw] max-w-4xl h-[80vh] bg-[#040457] dark:bg-[#04040c] rounded-xl shadow-2xl z-50 overflow-hidden m-4 text-white"
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#0424f6]/20">
                  <h3 className="text-3xl font-bold text-white">
                    {t(project.title)}
                  </h3>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-[#0424f6]/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 p-6 border-b border-[#0424f6]/20">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'details' | 'preview')}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-[#0424f6]'
                          : 'text-gray-400'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0424f6]"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <AnimatePresence mode="wait">
                    {activeTab === 'details' ? (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-6"
                      >
                        <div>
                          <h4 className="text-lg font-semibold mb-2 dark:text-white">
                            {t('projects.modal.overview')}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {t(project.details.overview)}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 dark:text-white">{t('projects.modal.features')}</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {project.details.features.map((feature, index) => (
                              <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 dark:text-white">{t('projects.modal.technologies')}</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.details.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 dark:text-white">
                            {t('projects.modal.challenges')}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {t(project.details.challenges)}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 dark:text-white">
                            {t('projects.modal.outcome')}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {t(project.details.outcome)}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="h-full"
                      >
                        {project.preview.type === 'video' ? (
                          <div className="relative pb-[56.25%] h-0">
                            <iframe
                              src={project.preview.url}
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <img
                            src={project.preview.url}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-4 p-6 border-t border-[#0424f6]/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#0424f6] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>{t('projects.viewCode')}</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0424f6] text-white rounded-lg hover:bg-[#040dc4] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>{t('projects.liveSite')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}