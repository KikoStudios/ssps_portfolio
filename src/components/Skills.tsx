import { motion } from 'framer-motion';
import { Code2, Palette, Database, Globe } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 size={24} />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Design',
    icon: <Palette size={24} />,
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design']
  },
  {
    category: 'Backend',
    icon: <Database size={24} />,
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Other',
    icon: <Globe size={24} />,
    items: ['Git', 'Docker', 'AWS', 'CI/CD']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0424f6] to-[#040dc4]"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow dark:bg-[#040457]/50"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#0424f6] dark:text-[#a5a5ff]">{skill.icon}</span>
        <h3 className="text-xl font-semibold text-[#0424f6] dark:text-white">{skill.category}</h3>
      </div>

      <ul className="space-y-2">
        {skill.items.map((item: string) => (
          <motion.li
            key={item}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="w-1.5 h-1.5 bg-[#0424f6] dark:bg-[#a5a5ff] rounded-full" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}