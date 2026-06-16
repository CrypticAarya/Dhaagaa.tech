import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918237556659?text=Hi%20Dhaagaa,%20I%20want%20to%20build%20my%20brand."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-foreground text-background p-4 rounded-full shadow-2xl hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
      <span className="absolute right-full mr-4 bg-foreground text-background px-4 py-2 rounded-full text-xs font-sans font-medium uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
