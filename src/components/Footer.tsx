import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 text-center text-[#0424f6] dark:text-gray-400 bg-white dark:bg-[#040457]">
      <p>© 2024 Kryštof Hrdý. {t('footer.rights')}</p>
    </footer>
  );
} 