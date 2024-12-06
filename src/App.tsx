import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Me from './components/Me';
import Projects from './components/Projects';
import Competitions from './components/Competitions';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AnimatePresence>
          <div className="min-h-screen bg-[#f8f8ff] dark:bg-[#1a1a4f] transition-colors duration-300">
            <Navbar />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-20"
            >
              <Hero />
              <Me />
              <Projects />
              <Competitions />
            </motion.main>
            <Footer />
          </div>
        </AnimatePresence>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;