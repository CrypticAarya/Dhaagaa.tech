import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-5 md:py-6"
      style={{
        background: 'linear-gradient(to bottom, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0) 100%)',
      }}
    >
      {/* Logo */}
      <div className="text-xl md:text-2xl font-display font-bold tracking-tighter uppercase text-white select-none">
        Dhaagaa
      </div>

      {/* Single CTA */}
      <a
        href="https://wa.me/918237556659?text=Hi%20Dhaagaa,%20I%20want%20to%20build%20my%20brand."
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs md:text-sm font-sans font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/60 px-4 md:px-6 py-2 md:py-2.5 rounded-full"
      >
        Chat on WhatsApp
      </a>
    </motion.nav>
  );
}
