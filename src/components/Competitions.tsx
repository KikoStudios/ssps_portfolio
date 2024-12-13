import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Calculator, Lightbulb, Atom, Globe } from 'lucide-react';

export default function Competitions() {
  const { t } = useLanguage();

  const competitions = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'International Mathematical Olympiad',
      medal: 'Gold Medal',
      description: 'Solved complex mathematical problems in algebra and geometry',
      date: 'July 2023',
      location: 'Tokyo, Japan',
      color: 'from-[#f0f0ff]/50 to-[#e6e6ff]/50 dark:from-[#8e8ef9]/20 dark:to-[#0424f6]/20'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Global Hackathon 2023',
      medal: '1st Place',
      description: 'Developed an AI solution for sustainable energy management',
      date: 'September 2023',
      location: 'Berlin, Germany',
      color: 'from-[#f0f0ff]/50 to-[#e6e6ff]/50 dark:from-[#8e8ef9]/20 dark:to-[#0424f6]/20'
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'European Physics Olympiad',
      medal: 'Silver Medal',
      description: 'Competed in theoretical and experimental physics challenges',
      date: 'May 2023',
      location: 'Prague, Czech Republic',
      color: 'from-[#f0f0ff]/50 to-[#e6e6ff]/50 dark:from-[#8e8ef9]/20 dark:to-[#0424f6]/20'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'International Geography Championship',
      medal: 'Bronze Medal',
      description: 'Demonstrated expertise in physical and human geography',
      date: 'March 2023',
      location: 'Stockholm, Sweden',
      color: 'from-[#f0f0ff]/50 to-[#e6e6ff]/50 dark:from-[#8e8ef9]/20 dark:to-[#0424f6]/20'
    }
  ];

  return (
    <section id="competitions" className="py-20 px-4 bg-[#fafafa] dark:bg-[#040457]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#0424f6] dark:text-[#a5a5ff]"
        >
          {t('competitions.title')}
        </motion.h2>

        <div className="grid gap-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${competition.color} p-8 rounded-[2rem] border border-[#e6e6ff] dark:border-[#a5a5ff]/20 
                hover:shadow-lg transition-all duration-300 group relative overflow-hidden
                bg-white/80 dark:bg-[#040457]/50 backdrop-blur-sm`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0f0ff]/10 to-[#e6e6ff]/10 
                dark:from-[#8e8ef9]/5 dark:to-[#0424f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-start gap-8 relative z-10">
                <div className="p-4 bg-[#f0f0ff] dark:bg-[#040dc4] rounded-2xl text-[#0424f6] dark:text-white">
                  {competition.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-[#0424f6] dark:text-white">
                      {competition.title}
                    </h3>
                    <span className="px-4 py-1.5 bg-[#f0f0ff] dark:bg-[#040dc4] rounded-full 
                      text-sm font-medium text-[#0424f6] dark:text-white">
                      {competition.medal}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {competition.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{competition.date}</span>
                    <span>•</span>
                    <span>{competition.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}