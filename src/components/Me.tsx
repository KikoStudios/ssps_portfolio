import { motion } from 'framer-motion';
import { Code, Brain, Trophy, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Me() {
  const { t } = useLanguage();

  const stats = [
    { icon: <Code size={24} />, label: '5+ Years Coding' },
    { icon: <Brain size={24} />, label: '20+ Projects' },
    { icon: <Trophy size={24} />, label: '10+ Awards' },
    { icon: <Rocket size={24} />, label: '3+ Startups' }
  ];

  const experiences = [
    {
      year: '2020 - Present',
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      description: 'Leading development of enterprise applications'
    },
    {
      year: '2018 - 2020',
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      description: 'Built scalable web applications'
    }
  ];

  return (
    <section id="me" className="py-20 px-4 bg-[#040457] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#0424f6]"
        >
          {t('me.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 p-4 bg-[#040dc4]/20 rounded-lg border border-[#0424f6]/20"
                >
                  <span className="text-[#0424f6]">{item.icon}</span>
                  <span className="text-sm font-medium text-white">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xl font-semibold text-[#0424f6]">
                {t('me.subtitle')}
              </p>
              <p className="text-gray-300">
                {t('me.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-[#0424f6]">
              {t('me.experience')}
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-[#0424f6]"
                >
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0424f6]" />
                  <div className="space-y-2">
                    <span className="text-sm text-[#0424f6]">{exp.year}</span>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}