import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[#0424f6] dark:bg-[#a5a5ff] text-white dark:text-[#040457] hover:bg-[#041c94] dark:hover:bg-white transition-colors"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 360 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
}