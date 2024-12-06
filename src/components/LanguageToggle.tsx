import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-[#040457] dark:bg-[#04040c] text-[#0424f6] dark:text-[#0424f6] font-medium"
    >
      {language.toUpperCase()}
    </motion.button>
  );
}