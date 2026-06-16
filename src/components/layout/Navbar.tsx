import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-8 mix-blend-difference text-white"
    >
      <div className="text-2xl font-display font-bold tracking-tighter uppercase">
        Dhaagaa
      </div>
    </motion.nav>
  );
}
