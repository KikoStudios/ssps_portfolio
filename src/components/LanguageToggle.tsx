import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-[#0424f6] dark:bg-[#a5a5ff] text-white dark:text-[#040457] font-medium border border-[#0424f6] dark:border-[#a5a5ff] hover:bg-[#041c94] dark:hover:bg-white transition-colors"
    >
      {language.toUpperCase()}
    </motion.button>
  );
}