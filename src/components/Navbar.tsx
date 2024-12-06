import { motion } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  const navVariants = {
    collapsed: { height: "5rem" },
    expanded: { height: "6rem" }
  };

  return (
    <motion.nav
      className="fixed w-full z-50 px-4 bg-[#f8f8ff]/90 dark:bg-[#1a1a4f]/90 backdrop-blur-lg"
      initial="collapsed"
      animate={isHovered ? "expanded" : "collapsed"}
      variants={navVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageToggle />
              <a 
                href="https://github.com/KikoStudios" 
                className="text-[#0424f6] hover:text-[#040dc4] transition-all transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0424f6] dark:text-[#8e8ef9] hover:text-[#040dc4] dark:hover:text-[#b8b8ff] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#f8f8ff]/90 dark:bg-[#1a1a4f]/90 backdrop-blur-lg"
        >
          <div className="p-4 space-y-4">
            <NavLinks mobile />
            <div className="flex justify-center pt-4">
              <a 
                href="https://github.com" 
                className="text-[#0424f6] hover:text-[#040dc4] dark:text-[#8e8ef9] dark:hover:text-[#b8b8ff] transition-all transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const { t } = useLanguage();
  const links = [
    { key: 'nav.home', href: 'home' },
    { key: 'nav.me', href: 'me' },
    { key: 'nav.projects', href: 'projects' },
    { key: 'nav.competitions', href: 'competitions' }
  ];
  
  const baseClasses = "relative text-[#0424f6] dark:text-[#8e8ef9] hover:text-[#040dc4] dark:hover:text-[#b8b8ff] transition-all duration-300 ease-in-out";
  const mobileClasses = mobile ? "block text-center py-2" : "";

  return (
    <>
      {links.map((link) => (
        <motion.a
          key={link.key}
          href={`#${link.href}`}
          className={`${baseClasses} ${mobileClasses} group`}
          whileHover={{ scale: 1.05 }}
        >
          {t(link.key)}
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0424f6] dark:bg-[#8e8ef9] group-hover:w-full transition-all duration-300"
            layoutId="underline"
          />
        </motion.a>
      ))}
    </>
  );
}