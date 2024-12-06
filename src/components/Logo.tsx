import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-4xl font-bold flex items-center gap-4"
    >
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="h-16 w-auto"
      />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8e8ef9] to-[#0424f6]">
        Portfolio
      </span>
    </motion.div>
  );
} 